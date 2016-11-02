var pets = ['cat', 'dog', 'rat'];

pets.forEach(function(element, index, array) {
  array[index] = element + 's';
});

console.log(pets);
