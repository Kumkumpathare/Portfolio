export const LINKS = {
  email: "mailto:pawarkumkum3@gmail.com",
  emailLabel: "pawarkumkum3@gmail.com",
  github: "https://github.com/Kumkumpathare",
  linkedin: "https://www.linkedin.com/in/kumkum-pathare-8b482036b",
};

export type Project = {
  entry: string;
  title: string;
  status: string;
  summary: string;
  learned: string;
  note?: string;
  tags: string[];
  image: { crop: string; full: string; alt: string; caption: string };
  links: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    entry: "01",
    title: "MammoCare",
    status: "Research",
    summary:
      "Audits the BreaKHis breast histopathology dataset and compares a majority-class baseline, a CNN trained from scratch, and a frozen ImageNet-pretrained ResNet18. Related images stay in the same group so they never leak across train and test splits.",
    learned:
      "Keeping related images in the same split matters, otherwise test scores look better than they really are.",
    note: "Educational research prototype, not for clinical use.",
    tags: ["Python", "PyTorch", "Jupyter", "scikit-learn"],
    image: {
      crop: "/assets/mammocare-crop.webp",
      full: "/assets/mammocare.webp",
      alt: "MammoCare demo app: a histopathology slide uploaded on the left, a labelled prediction with confidence bars on the right",
      caption: "Demo interface. The result shown is simulated.",
    },
    links: [{ label: "GitHub", href: "https://github.com/Kumkumpathare/MammoCare" }],
  },
  {
    entry: "02",
    title: "PaperLens",
    status: "Live",
    summary:
      "Ask questions about research PDFs and get answers that cite the paper and page they came from. PDFs are split into chunks and searched locally, and an LLM answers only from the top matches, or says the answer isn’t in the papers.",
    learned:
      "Answers are more trustworthy when the model only sees retrieved chunks and has to cite the page.",
    tags: ["Python", "Streamlit", "Groq", "sentence-transformers", "RAG"],
    image: {
      crop: "/assets/paperlens-crop.webp",
      full: "/assets/paperlens.webp",
      alt: "PaperLens answering a question about an uploaded paper, with the source excerpt, page number and similarity score shown",
      caption: "The live app.",
    },
    links: [
      { label: "Live app", href: "https://paperlens97.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/Kumkumpathare/PaperLens" },
    ],
  },
];

export const SKILLS = [
  "Python",
  "C++",
  "NumPy",
  "Pandas",
  "PyTorch",
  "scikit-learn",
  "Streamlit",
  "Jupyter",
  "Git & GitHub",
  "Tkinter",
  "SMTP",
];

export const NOW = [
  { title: "PaperLens", sub: "Live app · RAG", href: "https://paperlens97.streamlit.app/" },
  { title: "MammoCare", sub: "Research · PyTorch", href: "https://github.com/Kumkumpathare/MammoCare" },
  { title: "Machine learning", sub: "Learning · In progress" },
];
