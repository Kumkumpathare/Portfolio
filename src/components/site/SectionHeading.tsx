export function SectionHeading({
  eyebrow,
  bold,
  italic,
}: {
  eyebrow: string;
  bold: string;
  italic: string;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-5xl text-foreground sm:text-6xl">
        <span className="display">{bold}</span>{" "}
        <em className="font-serif font-normal text-muted-foreground">{italic}</em>
      </h2>
    </div>
  );
}
