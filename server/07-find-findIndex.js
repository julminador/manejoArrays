// Find retorna UN elemento que cumpla con la condicional
// Find retorna el index de UN elemento que cumpla con la condicional
const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta = products.find(item => item.id === '🍔')
console.log('find', rta);
const rta1 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', rta1);