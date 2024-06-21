import { IconType } from "react-icons";

export type SNSIconProps = {
  Icon: IconType;
};

const SNSIcon = ({ Icon }: SNSIconProps) => {
  return (
    <>
      <Icon></Icon>
    </>
  );
};
export default SNSIcon;
