// Filter es inmuntable
// filtra los elementos de un array de acuerdo con una condicion

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
  {
    customerName: "Nicol",
    total: 145,
    delivered: false,
  },
]

const filtro = orders.filter(item => item.delivered && item.total >= 100);
console.log('filtro', filtro);

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  })
}
console.log('search', search('Nicol'));