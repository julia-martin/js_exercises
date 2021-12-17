// input: a sorted array
// returns index of searchItem if found, or -1 otherwise.
// function binarySearch(array, searchItem) {
//   if (array === undefined || array.length === 0) return -1;
//   let mid = Math.floor(array.length / 2);
//   if (array[mid] < searchItem) {
//     return binarySearch(array.slice(mid + 1), searchItem);
//   } else if (array[mid] > searchItem) {
//     return binarySearch(array.slice(0, mid), searchItem);
//   } else {
//     return mid;
//   }
// }
function binarySearch(array, searchItem) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] < searchItem) {
      low = mid + 1;
    } else if (array[mid] > searchItem) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
