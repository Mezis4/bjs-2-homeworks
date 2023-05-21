"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);
  countMonths = parseInt(countMonths);

  let monthPercent = percent / 12 / 100;
  let mainMortgage = amount - contribution;
  // расчет ежемесячной оплаты
  let monthPayment = mainMortgage * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), countMonths) - 1)));
  // расчет общей суммы кредита
  let totalMortgage = (monthPayment * countMonths).toFixed(2);
  return parseFloat(totalMortgage);
}