import FormInput from './fromInput/FormInput';
import PillButton from './fromInput/PillButton';
import { MESSAGE } from './fromInput/message';
import Input from './fromInput/Input';
import { ChangeEvent, useState } from 'react';

function App() {
  type StudentType = {
    name: string;
    age: string;
    address: string;
  };
  const [studentData, setStudentData] = useState<StudentType>({
    name: '',
    age: '',
    address: '',
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentData((prev) => ({ ...prev, age: e.target.value }));
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentData((prev) => ({ ...prev, address: e.target.value }));
  };

  const handleClick = () => {
    // const nameLength = strudentData.name.length !== 0;
    // const ageLength = strudentData.age.length !== 0;
    // const AddressLength = strudentData.address.length !== 0;
    const { name } = studentData;
    fetch('http://localhost:3001/api/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
  };

  return (
    <div>
      <Input handleChange={handleNameChange} />
      <Input handleChange={handleAgeChange} />
      <Input handleChange={handleAddressChange} />
      <PillButton content="등록하기" handleClick={handleClick} />
    </div>
  );
}

//세 칸이 빈 문자 열이 있으면, 빈 문자열이 있다고 alert,

export default App;
