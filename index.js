    console.log("1a.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. Programmatically subtract the value of the first element in the array from the value in the last element of the array.(Do not use numbers to reference the last element, find it programmatically. ages[7] - ages[0] is not allowed!)");

let ages = [3, 9, 23, 64, 2, 8, 28, 93];  //!declares the array
console.log("Ages: ", ages);
let minusAge = ages[ages.length - 1] - ages[0]  //!to find the last element in the array - find the length and subtract 1. Sqaure brackets identify the elements index
console.log("minusAge: ", minusAge);

//-----------------------------------------------------------------------------------------------------------

    console.log("1b.Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");

ages.push(77);  //! adds a new element to the end of the ages array
console.log("array with pushed age: :", ages);
let pushedMinusAge = ages[ages.length - 1] - ages[0];  //! same process as above
console.log("minusAge: ", pushedMinusAge);

//-----------------------------------------------------------------------------------------------------------

    console.log("1c.Use a loop to iterate through the array and calculate the average age.")

let sumOfAges = 0;  //! holds the rolling total of adding the elements together

for (let i = 0; i < ages.length; i++) {   //! this will iterate through all the elements of the array
    sumOfAges += ages[i];                 //! [i] represents the index position as the loop runs
}
console.log("Total Sum: ", sumOfAges);
average = sumOfAges / ages.length;         //! the math to find the average 
console.log("Ages Average: ", average);

//-----------------------------------------------------------------------------------------------------------

    console.log("2a.Create an array called names that contains the following values: ('Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob') Use a loop to iterate through the array and calculate the average number of letters per name");

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];  //! declare array
let letterSum = 0;       //! using the same process of finding the averaage in queston 1c

for (let i = 0; i < names.length; i++) {
    letterSum += names[i].length;
}
namesAverage = letterSum / names.length;
console.log("Average of Names: ", namesAverage);

//-----------------------------------------------------------------------------------------------------------

    console.log("2b.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.")

let concatenatedNames = ''; //!holding container for new string to concat

for (let i = 0; i < names.length; i++) {    //! for loop to iterate through each element
    concatenatedNames = concatenatedNames.concat(names[i])   //! uses the .concat method here to concate the elements together
    console.log(i, "Names concatented", concatenatedNames)
}

//-----------------------------------------------------------------------------------------------------------

    console.log("3. How do you access the last element of any array?");
console.log("use: array.length-1");   //! printing the answer to the console

//-----------------------------------------------------------------------------------------------------------

    console.log("4.How do you access the first element of any array?");
console.log("use: array[0]");          //! printing the answer to the console

//-----------------------------------------------------------------------------------------------------------

    console.log("5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");

let namesLengths = [];  //! creates an empty array that the loop will add elements to

for (let i = 0; i < names.length; i++) {    //! for loop to iterate through each element
    namesLengths.push(names[i].length);     //! uses the .push method to push the length of each name into the empty array that was previously declared
    console.log("Name lengths array: ", namesLengths);
}

//-----------------------------------------------------------------------------------------------------------

    console.log("6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");

let charTotal = 0;   //! same process from above about adding the elements together 

for (let i = 0; i < namesLengths.length; i++) {
    charTotal += namesLengths[i];
    console.log("CharTotal:", charTotal);
}

//-----------------------------------------------------------------------------------------------------------

    console.log("7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");

function multiplyWord(word, n) {   //! declares the function that takes 2 params "word" and "n"
    let concat = word.repeat(n);  //! uses the .repeat method that repeats "word" n number of times
    console.log(concat)
}
multiplyWord('Hello', 3);  //! calls the funcation and passes values in for the params

//-----------------------------------------------------------------------------------------------------------

    console.log("8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");

function fullName(firstName, lastName) {    //! declares a function that takes 2 params
    return `${firstName} ${lastName}`;       //! uses a template literal to combine the params;
}
let concatedName = fullName('Kari', 'Alcoset');    //! calls the function and passes in values for the params
console.log(concatedName);

//-----------------------------------------------------------------------------------------------------------

    console.log("9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");

let numbers1 = [100, 300, 500, 200];  //! new arrays to use for the function
let numbers2 = [1, 2, 3, 45];        //! new arrays to use for the function

function sumNumbersArray(array) {      //! declares a function that takes 1 param
    let total = 0;          //! holds the rolling total of adding the elements together

    for (let i = 0; i < array.length; i++) {     //! same loop as previously used for adding the elements together
        total += array[i];
        console.log("Total: ", total);
    }

    if (total > 100) {             //! conditional statement that outputs true if total is > 100
        console.log("Total: ", total, true);
        return true;
    } else {               //! and outputs false for any other total 
        console.log("Total: ", total, false);
        return false;
    }
}
sumNumbersArray(numbers2);   //! calls the function and passes in a param

//-----------------------------------------------------------------------------------------------------------

    console.log("10.Write a function that takes an array of numbers and returns the average of all the elements in the array.");

function calculateNumberAverage(array) {         //!declares a function with 1 param
    let total = 0;         //! same process of fiunding the avarage of an array 

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        console.log("calculate function running total: ", total);
    }

    let average = total / array.length;
    console.log("Average of numbers: ", average);
    return average;
}
calculateNumberAverage(numbers1);  //! calls the function and passes in a param

//-----------------------------------------------------------------------------------------------------------

    console.log("11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

let numbers3 = [100, 200, 100];  //! creates new arrays to pass through the function
let numbers4 = [200, 100, 99];  //! creates new arrays to pass through the function

function twoAverages(array1, array2) {    //! declares a function with 2 array params 
    console.log("Params: ", array1, array2);
    let total1 = 0;   //! holds the rolling total of adding the array1 elements together
    let total2 = 0;   //! holds the rolling total of adding the array2 elements together

    for (const number of array1) {    //! creates a for of loop that declares a variable "number" and each element of array 1 will be referred to as number
        total1 += number;       //! adds a specific element to the total1
        console.log("Current number loop1: ", number, "Total1: ", total1);
    }

    for (const number of array2) {  //! sames for of loop process as above
        total2 += number;
        console.log("Current number loop2: ", number, "Total2: ", total2);
    }
    let average1 = total1 / array1.length;     //! finds the avaerage of array1
    let average2 = total2 / array2.length;     //! finds the avaerage of array2

    console.log("Averages: ", average1, average2);

    if (average1 > average2) {         //! conditional statement that is true is array1 average is > array2 average 
        console.log(true);
        return true;
    } else if (average1 < average2) {   //! it returns false if array1 average is < array2 average
        console.log(false);
        return false;
    } else {              //! and prints a string if the averages are equal 
        console.log("Numbers are equal");
    }
}
twoAverages(numbers3, numbers4);   //! calls the function and passes 2 array params in

//-----------------------------------------------------------------------------------------------------------

    console.log("12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

function willBuyDrink(isHotOutside, moneyInPocket) {        //! declares a function with 2 params
    console.log("Params: ", isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;  //! creates a varaible that uses conditionals for the value / one has to be strictly true AND has to be more then a specific amount of money for the function to return true 
    console.log("Buy a drink?", buyDrink);
    return buyDrink;
}
willBuyDrink(true, 15.00);  //! calls the function and passes in 2 params 
