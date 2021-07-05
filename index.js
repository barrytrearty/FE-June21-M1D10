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

const findMinAndMax = function (array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  return `Minimum: ${min} Maximum ${max}`;
};

console.log(findMinAndMax(arrayRandom));

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
const images = document.getElementsByTagName("img");
const footer = document.getElementsByTagName("footer")[0];

const printTableCells = function (array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i].innerText);
  }
};

// printTableCells(tableCells);

const changeHeading = function (string) {
  heading.innerText(string);
};

const createExtraRow = function (string) {
  let extraRow = document.createElement("tr");
  extraRow.innerText = string;
  table.appendChild(extraRow);
};

createExtraRow("New Row");

const addClassToRows = function () {
  for (row of tableRows) {
    row.classList.add("test");
  }
};

addClassToRows();

const changeLinkBackground = function () {
  for (link of links) {
    link.style.backgroundColor = "red";
  }
};

changeLinkBackground();

const notifyWhenPageLoaded = function () {
  console.log("Page loaded");
};

window.onload = notifyWhenPageLoaded();

const ulList = document.querySelector("#container ul");
const addNewItem = function (list, listItem) {
  let newListItem = document.createElement("li");
  newListItem.innerText = listItem;
  list.appendChild(newListItem);
};

addNewItem(ulList, "New List Item");

const emptyList = function (list) {
  list.innerHTML = "";
};

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL

let linkEvent = links[0];
linkEvent.addEventListener("mouseover", function () {
  alert(linkEvent.href);
});

// 42) Add a button to hide every image on the page

const hideImages = function () {
  for (image of images) {
    image.style.visibility = "hidden";
  }
};

let imgButton = document.createElement("button");
imgButton.innerText = "Hide Images";
footer.appendChild(imgButton);
imgButton.onclick = hideImages;

// 43) Add a button to hide and show the table from the page

const hideTable = function () {
  table.style.visibility = "hidden";
};

let tableButton = document.createElement("button");
tableButton.innerText = "Hide table";
footer.appendChild(tableButton);
tableButton.onclick = hideTable;

// 44) Write a function to sum every number inside the TD (if the content is numeric)

const sumTableCells = function () {
  let totalTableSum = 0;
  for (i = 0; i < tableCells.length; i++) {
    let cell = Number(tableCells[i].innerText);
    // console.log(cell);
    // if (cell % 1 == 0) {
    if (!isNaN(cell)) {
      totalTableSum += cell;
      console.log(totalTableSum);
    }
  }
  return totalTableSum;
};

console.log(sumTableCells());

// 45) Delete the last letter from the title each time the user clicks on it

heading.addEventListener("click", function () {
  heading.innerText = heading.innerText.slice(0, -1);
});

// 46) Change a single TD background color when the user clicks on it

// for (c = 0; c < tableCells.length; c++) {
tableCells[2].onclick = function () {
  tableCells[2].style.backgroundColor = "blue";
};
// };
// }

// 47) Add a button DELETE, on click it should delete a random TD from the page

let deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.onclick = function () {
  let randomNumber = Math.floor(Math.random() * tableCells.length);
  tableCells[randomNumber].innerHTML = "";
};
footer.appendChild(deleteButton);

// 48) Add a pink border to a cell when the mouse is over it

tableCells[15].addEventListener("mouseover", function () {
  tableCells[15].style.border = "3px solid pink";
});

// 49) Write a function to add a table with 4 rows and 3 columns programmatically

const addRowsAndCols = function () {
  for (r = 0; r < 4; r++) {
    let newRow = document.createElement("tr");
    table.appendChild(newRow);
    for (c = 0; c < 3; c++) {
      let newCol = document.createElement("td");
      newRow.appendChild(newCol);
    }
  }
};

addRowsAndCols();

// 50) Write a function to remove the table from the page

const removeTable = function () {
  table.remove();
};

// removeTable();
