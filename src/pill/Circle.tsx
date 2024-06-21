import { CSSProperties } from 'react';
import { MdCancel } from 'react-icons/md';

export type Color = 'red' | 'orange' | 'blue' | '#DBDBDB';



type CircleProps = {
  backgroundColor?: Color;
  hasCancel?: boolean;
};

const Circle = ({ backgroundColor = '#DBDBDB', hasCancel = false }: CircleProps) => {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    backgroundColor,
    borderRadius: '50%',
    width: '16px',
    height: '16px',

  };
  const iconStyle:CSSProperties = {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    backgroundColor,
    borderRadius: '50%',
    
  }
  return (
    <div style={style}>
      <span style={iconStyle}>{hasCancel? <MdCancel /> : null}</span>
    </div>
  );
};

export default Circle;
