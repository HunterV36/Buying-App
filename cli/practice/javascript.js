// const btn = document.querySelector('button')
// const h1 = document.querySelector('h1')
// btn.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'olive'
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     const newColor = `rgb(${r}, ${g}, ${b})`
//     document.body.style.backgroundColor = newColor
//     h1.innerText = newColor
// })


//? QUIZ

// 1. Give me the 4th element of the ducksPlayers array below
const ducksPlayers = ['Ryan Getzlaf', 'Ryan Kessler', 'Troy Terry', 'Jakob Silfverberg', 'John Gibson', 'Mason McTavish'];

//! ANSWER HERE
console.log(ducksPlayers[3])


// 2. Loop through the kingsPlayers array below and print (console.log) each player
const kingsPlayers = ['Drew Doughty', 'Anze Kopital', 'Jonathan Quick', 'Dustin Brown', 'Cam Talbot', 'Quinton Byfield'];
//! ANSWER HERE
for (const player of kingsPlayers) {
    console.log(player)
}

// 3. Give me Connor McDavid's jersey number (console.log) from the object below
const connorMcDavid = {
    age: 27,
    height: '63 incehs',
    weight: 210,
    jerseyNumber: 97,
    homeCountry: 'Canada'
}

//! ANSWER HERE
console.log(connorMcDavid.jerseyNumber)

// 4. Sort the below array full of strings in alphabetical order
const stringArraytoSort = ['girl', 'boy', 'female', 'male', 'animal', 'dog', 'cat'];

//! ANSWER HERE
console.log(`${stringArraytoSort[4]}, ${stringArraytoSort[1]}, ${stringArraytoSort[6]}, ${stringArraytoSort[5]}, ${stringArraytoSort[2]}, ${stringArraytoSort[0]}, ${stringArraytoSort[3]}`)

// 5. Sort the below array full of numbers in alphabetical order
const numbersArrayToSort = [10, 1, 7, 6, 15, 23, 32, 9, 3];

//! ANSWER HERE
console.log(`${numbersArrayToSort[1]}, ${numbersArrayToSort[8]}, ${numbersArrayToSort[3]}, ${numbersArrayToSort[2]}, ${numbersArrayToSort[7]}, ${numbersArrayToSort[0]}, ${numbersArrayToSort[4]}, ${numbersArrayToSort[5]}, ${numbersArrayToSort[6]}`)

// 6. Write a function that takes accepts an array and then removes the last element of the array and returns the new array with last element removed

//! ANSWER HERE
const arr = [10, 20, 30, 40]

const removeElement = (arr) => {
    arr.pop()
    console.log(arr)
}
// Array to remove last element
//functionName([10, 1, 7, 6, 15, 23, 32, 9, 3])


// 7. Take the 2 variables below and concatenate them into one string
const firstName = 'Hunter';
const lastName = 'Valentine';

//! ANSWER HERE
console.log(`${firstName} ${lastName}`)

// 8. Give me the index number of 'female' in this array below
const indexExample = ['girl', 'boy', 'female', 'male', 'animal', 'dog', 'cat'];

//! ANSWER HERE
console.log(indexExample[2])

// 9. Take this string and split it into an array with each word being an element in array
// Example = ['Lakers', 'are', 'going', 'to', 'win']
const stringToSplit = 'Lakers are going to win'

//! ANSWER HERE
const aboutLakers = ['Lakers', 'are', 'going', 'to', 'win']

// 10. Take the array below and put it into a string
const arrayToConvertToString = ['Lakers', 'are', 'going', 'to', 'win'];

//! ANSWER HERE
// Answer should be 'Lakers are going to win' in a string
const fullSentence = "Lakers are going to win"

// 11. Give the length of this string
const stringLengthTest = 'Hunter Valentine';

//! ANSWER HERE
console.log(stringLengthTest.length)

// 12. Write and complete function below in which it loops through the array supplied to function and if number is equal to 23 then multiply it by 2'

//! ANSWER HERE
function numberCheck(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 23) {
            arr[i] *= 2
        }
    }
    return arr;
}
console.log(numberCheck([10, 15, 78, 23, 90, 45, 43])); // Answer should be 23 * 2 = 46






