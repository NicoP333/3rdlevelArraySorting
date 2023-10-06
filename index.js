function bubbleSort(arr, key) {
let sorted = true;

do {
sorted = true;

for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr[i].length - 1; j++) {
const current = arr[i][j];
const next = arr[i][j + 1];

if (current[key] > next[key]) {
[arr[i][j], arr[i][j + 1]] = [next, current];
sorted = false;
}
}
}
} while (!sorted);

return arr;
}

// Пример трехуровневого массива данных
const data = [
[
[{ id: 3, name: 'Item 3' }, { id: 2, name: 'Item 2' }, { id: 1, name: 'Item 1' }],
[{ id: 6, name: 'Item 6' }, { id: 4, name: 'Item 4' }, { id: 5, name: 'Item 5' }],
],
[
[{ id: 9, name: 'Item 9' }, { id: 7, name: 'Item 7' }, { id: 8, name: 'Item 8' }],
[{ id: 11, name: 'Item 11' }, { id: 10, name: 'Item 10' }],
],
];

const sortedData = bubbleSort(data, 'id');