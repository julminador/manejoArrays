// Sort es un metodo para hacer ordenamiento
// es mutable

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); // ordena a traves del valor ASCII
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b); // ordena a comparando entre dos elementos
console.log(numbers);

const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort();
words.sort((a, b) => a.localeCompare(b)); // en versiones pasadas es necesario comparar la configuracion de idioma
console.log(words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date (2021, 3, 8, 4),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date (2021, 9, 12, 3),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date (2021, 8, 2, 2),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 9, 30),
  },
];
orders.sort((a,b) => b.date - a.date);
console.log(orders);