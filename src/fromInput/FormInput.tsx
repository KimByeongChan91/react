import { CSSProperties } from 'react';
import Input, { InputProps } from './Input';

type FormInputProps = {
  InputProps?: InputProps;
  Component?: React.ComponentType;
  ComponentProps?: any;
};

const FormInput = ({
  InputProps,
  Component,
  ComponentProps,
}: FormInputProps) => {
  const style: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    width: '750px',
  };

  return (
    <div style={style}>
      {/* <Input {...InputProps} /> */}
      {Component && <Component {...ComponentProps} />}
    </div>
  );
};
export default FormInput;
