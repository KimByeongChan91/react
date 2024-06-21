export type SNSTextProps = {
  sns: "Facebook" | "Apple" | "Google";
};

const SNSText = ({ sns }: SNSTextProps) => {
  return <span>Start With {sns}</span>;
};

export default SNSText;

