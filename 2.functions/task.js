// Задание 1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, sum);
  let avg = parseFloat((sumWithInitial / arr.length).toFixed(2));
  return { min: Math.min(min, ...arr), max: Math.max(max, ...arr), avg: avg };
}

// Задание 2
function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length > 0) {
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  if (arr.length > 0) {
    let minValue = Math.min(min, ...arr);
    let maxValue = Math.max(max, ...arr);
    difference = maxValue - minValue;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;
  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    difference = sumEvenElement - sumOddElement;
  }
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let average = 0;
  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    average = Math.round(sumEvenElement / countEvenElement);
  }
  return average;
}

// Задание 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
