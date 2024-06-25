// async - await

const a = new Promise(() => {}); // <-얘를 함수화 시켜주는게 async - await임

//async는 항상 promise를 return함
//async를 사용하면 promise로 돌려줌
const getPizza = async () => {
  return { name: '하와이안', price: 15000 };
};
// getPizza().then((v)=>console.log(v.price))

// await는 async 내부 함수에서만 사용가능,
// promise 가 처리될 때 까지 중지
// promise의 결과값을 반환
const getAPI = async () => {
  const data = await fetch('https://fakerapi.it/api/v1/books?_quantity=10');
  const jsonData = data.json();
  return jsonData;
};

getAPI().then((v) => console.log(v));
