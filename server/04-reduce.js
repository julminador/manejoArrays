// Reduce reduce un array a un solo valor

const totals =  [1, 2, 3, 4];

const rta = totals.reduce((sum, element) => sum + element);
console.log('rta', rta);

// Reduce reloaded
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "medium",
  },
];

// Crea un array solo de los niveles y despues cuenta cuantos hay de cada uno
const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }
  return obj;
}, {})
console.log('rta1', rta1);

// Cuenta cuantos numeros hay entre cada rango
const array = [1, 1, 2, 5, 6, 7, 7, 8, 9, 9, 10, 10, 10];
const rta2 = array.reduce((obj, num) => {
  if (num < 5) obj["1-4"] += 1;
  else if (num < 9) obj["5-8"] += 1;
  else obj["9-10"] += 1;
  return obj;
}, {
  // Al crear el objeto ya con los rangos se evita preguntar si existen
  "1-4": 0,
  "5-8": 0,
  "9-10": 0,
})
console.log(rta2);