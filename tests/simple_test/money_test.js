import { centsToDollars } from '../../scripts/utilities/money_handling';

console.log('test suite: format currency');
console.log('converts cents to dollars');

if (centsToDollars(1095) === '10.95') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('working with 0');

if (centsToDollars(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('rounds up to the nearest cent');

if (centsToDollars(5000.5) === '50.01') {
  console.log('passed');
} else {
  console.log('failed');
}