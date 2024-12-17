
"use client"
import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState<string[]>([]);

  // For loop task implementations
  useEffect(() => {
    // Task 1: Print all even numbers in an array
    const evenNumbers = [];
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] % 2 === 0) evenNumbers.push(arr1[i]);
    }
    console.log("Even Numbers:", evenNumbers);

    // Task 2: Sum of the first 10 numbers
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    console.log("Sum of the first 10 numbers:", sum);

    // Task 3: Multiplication table for 5
    const table5 = [];
    for (let i = 1; i <= 10; i++) {
      table5.push(`5 x ${i} = ${5 * i}`);
    }
    console.log("Multiplication Table for 5:", table5);

    // Task 4: Multiplication table for any number (provided by user)
    const number = 7; // Can be replaced with any number
    const userTable = [];
    for (let i = 1; i <= 10; i++) {
      userTable.push(`${number} x ${i} = ${number * i}`);
    }
    console.log(`Multiplication Table for ${number}:`, userTable);

    // Task 5: Multiplication table for any number with user input for the end of the table
    const end = 12; // Can take user input, hardcoded here for example
    const tableWithEnd = [];
    for (let i = 1; i <= end; i++) {
      tableWithEnd.push(`${number} x ${i} = ${number * i}`);
    }
    console.log(`Multiplication Table for ${number} up to ${end}:`, tableWithEnd);

    // Task 6: Print elements of an array in reverse
    const arr2 = [10, 20, 30, 40, 50];
    const reversedArr = [];
    for (let i = arr2.length - 1; i >= 0; i--) {
      reversedArr.push(arr2[i]);
    }
    console.log("Reversed Array:", reversedArr);

    // Task 7: Find the largest number in an array
    const arr3 = [3, 1, 7, 9, 2];
    let largest = arr3[0];
    for (let i = 1; i < arr3.length; i++) {
      if (arr3[i] > largest) largest = arr3[i];
    }
    console.log("Largest Number:", largest);

    // Task 8: Find the lowest number in an array
    const arr4 = [3, 1, 7, 9, 2];
    let lowest = arr4[0];
    for (let i = 1; i < arr4.length; i++) {
      if (arr4[i] < lowest) lowest = arr4[i];
    }
    console.log("Lowest Number:", lowest);

    // Task 9: Find a prime number in range 1 to 100
    const primeNumbers = [];
    for (let num = 2; num <= 100; num++) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primeNumbers.push(num);
    }
    console.log("Prime Numbers in Range 1 to 100:", primeNumbers);

    // To show data in the browser (via the state)
    setData([
      `Even Numbers: ${evenNumbers.join(', ')}`,
      `Sum of the first 10 numbers: ${sum}`,
      `Multiplication Table for 5: ${table5.join(', ')}`,
      `Multiplication Table for ${number}: ${userTable.join(', ')}`,
      `Multiplication Table for ${number} up to ${end}: ${tableWithEnd.join(', ')}`,
      `Reversed Array: ${reversedArr.join(', ')}`,
      `Largest Number: ${largest}`,
      `Lowest Number: ${lowest}`,
      `Prime Numbers in Range 1 to 100: ${primeNumbers.join(', ')}`
    ]);
  }, []);

  return (
    <div>
      <h1>For Loop Assignments</h1>
      <div>
        {data.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
