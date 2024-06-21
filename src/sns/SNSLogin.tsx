import { CSSProperties } from "react";
import SNSIcon, { SNSIconProps } from "./SNSIcon";
import SNSText, { SNSTextProps } from "./SNSText";

type ColorStatus = {
  FaceBook: "#1877F2";
  Google: "#ffffff";
  Apple: "#000000";
};

type SNSLoginProps = {
  SNSIconP: SNSIconProps;
  SNSTextP: SNSTextProps;
  SNSColorP: keyof ColorStatus;
};

const SNSLogin = ({ SNSIconP, SNSTextP, SNSColorP }: SNSLoginProps) => {
  const colorObj: ColorStatus = {
    Apple: "#000000",
    FaceBook: "#1877F2",
    Google: "#ffffff",
  };

  const style: CSSProperties = {
    display: "flex",
    gap: "10px",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "15px",
    backgroundColor: colorObj[SNSColorP],
    width: "fit-content",
    color: "grey",
  };

  return (
    <div style={style}>
      <SNSIcon {...SNSIconP} />
      <SNSText {...SNSTextP} />
    </div>
  );
};
export default SNSLogin;
