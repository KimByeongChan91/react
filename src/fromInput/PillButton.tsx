import { CSSProperties, MouseEvent } from 'react';
import Input from './Input';

export type Color = '#71717A';

export type PillButtonProps = {
  content?: string;
  backgroundColor?: Color;
  handleClick: () => void;
};
const PillButton = ({
  content = 'Not Content',
  backgroundColor = '#71717A',
  handleClick,
}: PillButtonProps) => {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: 'white',
    backgroundColor,
    borderRadius: '50px',
    padding: '16px',
    width: '100px',
  };

  // const handleOnchange = (Input) => {
  //   return Input.target.value == ''
  //     ? window.alert('문자를 입력하세요')
  //     : Input.target.value;
  // };

  return (
    <div onClick={handleClick} style={style}>
      <button>{content}</button>
    </div>
  );
};
export default PillButton;
