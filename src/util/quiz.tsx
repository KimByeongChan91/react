import { useState } from 'react';

type UmmProps = {
  name: string;
};

const ChangeName = ({ name }: UmmProps) => {
  const [str, setStr] = useState(name);

  const handleClick = () => {
    setStr((prev) => '살아있다');
  };

  return <div onClick={handleClick}>{str}</div>;
};

export default ChangeName;
