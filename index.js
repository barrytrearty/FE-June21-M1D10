"strict mode";

let x = "John";
let y = "Doe";

console.log(`${x} <> ${y}`);

const object = { name: "John", surname: "Doe", email: "jd@email.com" };

delete object.email;
console.log(object);

const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

arrayRandom = [];
for (i = 0; i < 100; i++) {
  let randomNumber = Math.floor(Math.random() * 100);
  arrayRandom.push(randomNumber);
}

console.log(arrayRandom);

const minAndMax = function (array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  return `Minimum: ${min} Maximum ${max}`;
};

console.log(minAndMax(arrayRandom));

//28 incomplete
let arrayOfArrays = [];
for (i = 0; i < 10; i++) {
  for (i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    arrayOfArrays.push(randomNumber);
  }
}
console.log(arrayOfArrays);
//28 incomplete

const whichArrayIsLongest = function (array1, array2) {
  if (array2.length > array1.length) {
    return array2;
  } else {
    return array1;
  }
};

const whichArraySumIsLargest = function (array1, array2) {
  let arraySum1 = 0;
  let arraySum2 = 0;
  for (i = 0; i < array1.length; i++) {
    arraySum1 += array1[i];
  }
  for (i = 0; i < array2.length; i++) {
    arraySum2 += array2[i];
  }
  if (arraySum2 > arraySum1) {
    return array2;
  } else {
    return array1;
  }
};

const container = document.getElementById("container");
const tableCells = document.querySelectorAll("td");
