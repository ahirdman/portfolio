const nestArray = (arr: any): any[][] => {
  const newArray = [];
  for (let i = 1; i <= arr.length; i++) {
    if (i % 2 && i !== arr.length) {
      newArray.push([arr[i - 1], arr[i]]);
    }
    if (i % 2 !== 0 && i === arr.length) {
      newArray.push([arr[i - 1]]);
    }
  }
  return newArray;
};

export { nestArray };
