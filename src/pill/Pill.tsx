import { CSSProperties } from "react";
import Circle, { Color } from "./Circle";
import Text, { TextProps } from "./Text";

type PillProps = {
  CircleColor: Color;
  TextContent: TextProps;
};

const Pill = ({ CircleColor, TextContent }: PillProps) => {
  const style: CSSProperties = {
    border: "1px solid #E0E0E0",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    gap: "3px",
  };

  return (
    <div style={style}>
      <Circle backgroundColor={CircleColor} />
      <Text text={TextContent.text} />
      <Circle hasCancel={true} />
    </div>
  );
};
export default Pill;

