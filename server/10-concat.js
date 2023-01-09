// Concat fusiona arrays en uno solo
// es inmutable
const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const rta = elements.concat(othersElements);
console.log('concat', rta);

// Split operation permite copiar los elementos de un array
const rta2 = [...elements, ...othersElements];
console.log('...', rta2);

// Split operation en strigs separa cada letra como un elemento
const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

elements.push(...othersElements);
console.log('elements', elements);