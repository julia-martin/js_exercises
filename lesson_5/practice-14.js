let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = Object.values(obj).map(item => {
  if (item.type === 'fruit') {
    let colors = item.colors;
    return colors.map(e => e[0].toUpperCase() + e.slice(1));
  } else if (item.type === 'vegetable') {
    return item.size.toUpperCase();
  }
});
console.log(result);
