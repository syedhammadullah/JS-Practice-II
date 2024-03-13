let a = "15.89";
// conversion of string into number

a = Number(a);
a = parseInt(a);
a = parseFloat(a);
a = +a;
console.log("type-->", typeof a, a);

// string

let b = 1.5;
b = String(b);
console.log(b);

// boolean

console.log(2 === 2);
console.log(typeof (2 === 2));

let myName = "Hammad";
console.log("hammad" === "Hammad");
console.log(typeof ("hammad" === "Hammad"));

// If/Else

let weather = Number(prompt("Enter your Temperature"));

if (String(weather) === "NaN") {
  alert("Enter Number PLease");
}

if (weather <= 20) {
  console.log("Sardi Hai ❄️");
} else {
  console.log("Garmi Hai ☀️");
}

// Array Methods

let cities = ["Karachi","Lahore","Islamabad","Quetta"]
console.log(cities);

// length

let length = cities.length
console.log("cities length-->" + length);

// index

let index = cities[3]
console.log("index 3-->" + index);

// last index

console.log("last-->" ,cities[cities.length - 1]);

// first index

console.log("first-->", cities[0]);

// second last index

console.log("second last-->", cities[cities.length - 2]);

// updated value in array

cities[cities.length] = 'Hyderabad'
console.log('names after-->',cities);

let diseases = ["Malaria","Heart Attack","Cancer","Diabetes","Aids"]
console.log('Diseases-->',diseases);

// Add value at end of an array(Push Method)

diseases.push("Covid-19")
console.log('After Push-->',diseases);

// Remove Value from endof an Array (Pop Method)

diseases.pop()
console.log('After Pop-->',diseases);

// Add Value at start of an Array (Unshift Method)

diseases.unshift("Dengue")
console.log('After Unshift-->',diseases);

// Remove Value from end of an Array (Shift Method)

diseases.shift()
console.log('After Shift',diseases);

let userDisease = prompt("Enter your Disease")
console.log(userDisease);
diseases.push(userDisease)
console.log(diseases);