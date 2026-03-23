const comparingArrays = (arrUser, arrGenerated) => {
  const newSet = new Set();
  const sharedArr = [...arrUser, ...arrGenerated];
  sharedArr.forEach((num) => newSet.add(num));

  return newSet;
};

const randomlyGeneratedNum = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  const number = arr[index];
  return number;
};

const randomlyGeneratedArr = (arr) => {
  const result = [];

  if (arr.length === 2) result.push(randomlyGeneratedNum(arr));
  if (arr.length === 19) {
    for (let i = 0; i < 8; i++) {
      let number = randomlyGeneratedNum(arr);
      const repeatNumber = result.some((item) => item === number);
      if (repeatNumber) {
        i--;
        continue;
      }
      result.push(number);
    }
  }

  return result;
};

export { comparingArrays, randomlyGeneratedArr };
