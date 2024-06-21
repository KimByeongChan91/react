export type TextProps = {
  text: String;
};

const Text = ({ text }: TextProps) => {
  return <div>{text}</div>;
};

export default Text;
