function transactionsFor(idNum, list) {
  return list.filter(obj => obj.id === idNum);
}

// output: boolean
function isItemAvailable(idNum, list) {
  let txns = transactionsFor(idNum, list);
  let inQty = txns.filter(item => item.movement === 'in').reduce((acc, elem) => acc + elem.quantity, 0);
  let outQty = txns.filter(item => item.movement === 'out').reduce((acc, elem) => acc + elem.quantity, 0);
  return inQty > outQty;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true