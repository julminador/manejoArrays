// Map es inmutable ya que no modifica el array original
// crea uno nuevo con el resultado de la transformacion de los elementos

const letters = ['a', 'b', 'c', 'd'];

const newLetters = letters.map(letter => letter + '++');
console.log(newLetters);

// Map reloader
// Si modificamos la referencia en memoria modificamos el objeto original
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]

const rta = orders.map(item => {
  return {
    ...item,
    tax: .19
  };
  // Esto modificaria el array original
  item.tax = .19;
  return item;
});
console.log('original', orders);
console.log('reloader', rta);