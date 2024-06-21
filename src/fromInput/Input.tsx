import { CSSProperties, ChangeEvent, useState } from 'react';

export type InputProps = {
  placeholoder?: string;
  inputType?: 'text' | 'password';
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholoder = '',
  inputType = 'text',
  handleChange,
}: InputProps) => {
  const style: CSSProperties = {
    border: '1px solid black',
    outline: 'none',
    backgroundColor: '#f5f5f5',
    color: '#242424',
    padding: '16px',
    fontSize: '20px',
    width: '80%',
  };
  // input에 글을 쓰면 콘솔에 나오도록 ex) hi
  // onChange={} <= 이 함수가 addeventlistener와 같음

  // const [input, setInput] = useState<String>('');
  // const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
  //   return setInput((prev) => e.target.value == '' ? window.alert("문자를 입력하세요") : );
  // };

  // const test = (e:ChangeEvent<HTMLInputElement>)=>{
  //   e.target.value == "" ? window.alert() : test
  // }

  //세 칸이 빈 문자 열이 있으면, 빈 문자열이 있다고 alert,

  return (
    <input
      onChange={handleChange}
      placeholder={placeholoder}
      style={style}
      type={inputType}
    />
  );
};
export default Input;
