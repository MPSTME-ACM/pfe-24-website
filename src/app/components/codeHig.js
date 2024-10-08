import { codeToHtml } from "shiki";

async function highlight(code, lang) {
  return codeToHtml(code, {
    lang,
    theme: "vitesse-dark",
    decorations: {
      wrap: true,
    },
  });
}

export default async function CodeBlock({ code, language }) {
  console.log(language);
  const highlightedCode = await highlight(code, language || "text");
  return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
}
