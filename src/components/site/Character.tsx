import { useEffect, useRef, type RefObject } from "react";

/**
 * Cursor-following character drawn from a WebP sprite atlas
 * (16 columns, 128 frames: idle, right, up, left).
 */
const COLS = 16;
const RESPONSE = 12;
const RETURN_SPEED = 6.5;

type Props = {
  areaRef: RefObject<HTMLElement | null>;
  onStatus?: (s: string) => void;
  className?: string;
};

export function Character({ areaRef, onStatus, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const area = areaRef.current;
    if (!canvas || !area) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const small = matchMedia("(max-width:800px), (hover: none)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const T = small ? 320 : 544;
    canvas.width = canvas.height = T;

    const sheet = new Image();
    let ready = false;
    let active = false;
    const target = { x: 0, y: 0 };
    const pose = { x: 0, y: 0 };
    let last = 0;
    let raf = 0;
    let lastPaint = "";
    let touchTimer: ReturnType<typeof setTimeout> | undefined;

    const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
    const put = (i: number, a: number) => {
      ctx.globalAlpha = a;
      ctx.drawImage(sheet, (i % COLS) * T, Math.floor(i / COLS) * T, T, T, 0, 0, T, T);
      ctx.globalAlpha = 1;
    };
    const drawAt = (base: number, k: number, max: number, alpha: number) => {
      k = clamp(k, 0, max);
      const low = Math.floor(k);
      const mix = k - low;
      put(base + low, alpha);
      if (mix > 0.001) put(base + Math.min(low + 1, max), alpha * mix);
    };

    const render = () => {
      const x = pose.x;
      const up = Math.max(0, -pose.y);
      const key = x.toFixed(4) + "," + up.toFixed(4);
      if (key === lastPaint) return;
      lastPaint = key;
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, T, T);
      put(0, 1);
      const strength = clamp(Math.abs(x) / 0.15, 0, 1);
      if (x < 0) drawAt(89, 38 * Math.abs(x), 38, strength);
      else if (x > 0) drawAt(1, 48 * x, 49, strength);
      if (up > 0) drawAt(51, 36 * up, 37, clamp(up / 0.18, 0, 1));
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000 || 1 / 60, 0.05);
      last = now;
      const ease = reduced.matches ? 1 : 1 - Math.exp(-(active ? RESPONSE : RETURN_SPEED) * dt);
      pose.x += (target.x - pose.x) * ease;
      pose.y += (target.y - pose.y) * ease;
      if (Math.abs(target.x - pose.x) < 0.0005) pose.x = target.x;
      if (Math.abs(target.y - pose.y) < 0.0005) pose.y = target.y;
      render();
      if (pose.x !== target.x || pose.y !== target.y) raf = requestAnimationFrame(tick);
      else {
        raf = 0;
        last = 0;
      }
    };
    const wake = () => {
      if (ready && !raf) raf = requestAnimationFrame(tick);
    };
    const reset = () => {
      active = false;
      target.x = target.y = 0;
      onStatus?.("At ease");
      wake();
    };
    const point = (e: PointerEvent) => {
      const touch = e.pointerType === "touch";
      if (touch && e.type !== "pointerdown") return;
      const r = canvas.getBoundingClientRect();
      active = true;
      target.x = clamp((e.clientX - (r.left + r.width / 2)) / Math.max(r.width * 0.65, 250), -1, 1);
      target.y = clamp((e.clientY - (r.top + r.height * 0.38)) / (r.height * 0.65), -1, 1);
      onStatus?.("Following your lead");
      wake();
      if (touch) {
        clearTimeout(touchTimer);
        touchTimer = setTimeout(reset, 1800);
      }
    };
    const leave = (e: PointerEvent) => {
      if (e.pointerType !== "touch") reset();
    };
    const onVis = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
        last = 0;
        reset();
      }
    };

    area.addEventListener("pointermove", point, { passive: true });
    canvas.addEventListener("pointerdown", point, { passive: true });
    area.addEventListener("pointerleave", leave);
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", onVis);

    sheet.onload = () => {
      ready = true;
      canvas.dataset["ready"] = "true";
      render();
      wake();
    };
    sheet.src = `/sprites/hero-${T}.webp`;

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(touchTimer);
      area.removeEventListener("pointermove", point);
      canvas.removeEventListener("pointerdown", point);
      area.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [areaRef, onStatus]);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Illustrated Kumkum with headphones at her laptop, she looks toward your cursor"
      role="img"
      className={
        "mask-fade aspect-square w-full opacity-0 mix-blend-multiply transition-opacity duration-700 data-[ready=true]:opacity-100 " +
        (className ?? "")
      }
    />
  );
}
