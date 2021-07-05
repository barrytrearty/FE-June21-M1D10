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

const generateArray = function () {
  let newArray = [];
  for (i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    newArray.push(randomNumber);
  }
  return newArray;
};

console.log(generateArray());

const createArrayOfArrays = function () {
  let arrayOfArrays = [];
  for (j = 0; j < 10; j++) {
    let newArray = generateArray();
    arrayOfArrays.push(newArray);
  }
  return arrayOfArrays;
};

// const newArrays = createArrayOfArrays();

console.log(createArrayOfArrays());
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
  for (j = 0; j < array2.length; j++) {
    arraySum2 += array2[j];
  }
  if (arraySum2 > arraySum1) {
    return array2;
  } else {
    return array1;
  }
};

console.log(whichArrayIsLongest([1, 2, 3, 4, 5, 1], [3, 4, 5, 6, 7]));
console.log(whichArraySumIsLargest([1, 2, 3, 4, 5, 1], [3, 4, 5, 6, 7]));

const container = document.getElementById("container");
const tableCells = document.getElementsByTagName("td");
const tableRows = document.getElementsByTagName("tr");
const heading = document.getElementsByTagName("h1")[0];
const table = document.getElementsByTagName("table")[0];
const links = document.getElementsByTagName("a");

const printTableCells = function (array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i].innerText);
  }
};

printTableCells(tableCells);

const changeHeading = function (string) {
  heading.innerText(string);
};

const createExtraRow = function () {
  let extraRow;
  extraRow.innerHTML = `<tr>
  <td>1</td>
  <td>
    <a href=""><img src="" alt="" /></a>2
  </td>
  <td>3</td>
  <td>4</td>
  <td>5</td>
</tr>`;
  table.appendChild(extraRow);
};

const addClassToRows = function () {
  for (row of tableRows) {
    row.classList.add("test");
  }
};

const changeLinkBackground = function () {
  for (link of links) {
    link.style.backgroundColor = "red";
  }
};

const notifyWhenPageLoaded = function () {
  console.log("Page loaded");
};

window.onload = notifyWhenPageLoaded();

const addNewItems = function (list, listItem) {};

const emptyList = function (list) {
  list.innerHTML = "";
};
