// Flat manipula arrays que contienen otros arrays dentro
// Lo que hace es dejar los elementos en un nivel especifico
const matriz = [
  [1,2,3],
  [4,5,6, [1,2, [1,2]]],
  [7,8,9]
];

const rta = matriz.flat();
console.log('flat', rta);
const rta2 = matriz.flat(3); // Como argumento debemos enviar el nivel
console.log('flat(3)', rta2);

//Flatmap alinea nuestro array y hacer un map para transformarlo
const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const rta3 = users.map(user => user.attributes).flat();
console.log('map-flat', rta3);

const rta4 = users.flatMap(user => user.attributes);
console.log('flatMap', rta4);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};
// const rta5 = Object.values(calendars);
const rta5 = Object.values(calendars).flatMap(item => item.map(date => date.startDate));
console.log('Objeto', rta5);

// cuenta cuantas palabaras hay
const input = ["Beautiful is better than ugly", "Explicit is better than implicit", "Simple is better than complex", "Complex is better than complicated"];
function countWords (array) {
  const lineas = array.flatMap(linea => linea.split(' '))
  return lineas.length;
}
console.log( countWords(input) );