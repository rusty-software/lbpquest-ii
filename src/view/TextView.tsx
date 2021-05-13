interface TextViewProps {
  text: string;
}

export const TextView = (props: TextViewProps) => {
  const { text } = props;

  if (text.startsWith("http")) {
    return <a href={text}>{text}</a>;
  }

  const lines = text
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);
  return <>{lines}</>;
};
