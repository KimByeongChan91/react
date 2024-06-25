import { useEffect, useState } from 'react';
import { skeletonStyle } from './util/Skeleton';

function App() {
  const [data, setData] = useState<any[] | null>(null);

  const getAddress = async()=>{
    const data = await fetch('https://fakerapi.it/api/v1/books?_quantity=10');
 
     const jsonData = await data.json()
    const getData = await [...jsonData.data]
    setData((prev)=>[...getData.map((v)=>v.name)])
  }

  // useEffect 앞은 함수, 뒤는 배열을 받는다
  useEffect(() => {
    getAddress()
  }, []);

  return (
    <div></div>
  )

}

export default App;
