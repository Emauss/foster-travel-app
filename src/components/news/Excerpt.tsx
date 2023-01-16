export const Excerpt = ({ description, maxLength = 60 }: { description: string; maxLength?: number }) => {
  let text = description;

  if (description.length > maxLength) {
    text = text.slice(0, maxLength);
    text = text.slice(0, Math.min(text.length, text.lastIndexOf(" "))) + "...";
  }

  return <p className="article-desc">{text}</p>;
};
