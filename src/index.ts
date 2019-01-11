const sum = [...Array(1000).keys()].reduce((accumulator, currentValue, idx) => {
  const isMultipleOf3Or5 = (numberToCheck: number) =>
    numberToCheck % 3 === 0 || numberToCheck % 5 === 0;
  accumulator += isMultipleOf3Or5(idx) ? idx : 0;
  return accumulator;
}, 0);

console.log(`Sum is... ${sum}`);
