
---
[Home](index.md "Go Home") | [W1D1](week1day1 "Week One Day One") | [W1D2](week1day2 "Week One Day Two")
---


# Week One Day Three

## Lecture One: Javascript Objects
- JS has only one type of number which is called Number
- A value might be empty but still be of different type. Think `'' === false`
- part of programming is knowing which data type / data structure is best for a problem
- string(ed) *keys* in *objects* are often used for key names with space in it e.g `'coolness factor'`

### Mutabilty

```javascript
// Ex. 1
var david = {
  name: 'David VanDusen',
  email: 'david@lighthouselabs.ca'
};

console.log(typeof david.whatever === undefined); // logs true since david object does not have a property with key whatever...yet;)

david.whatever = 'meh'; //mutating the object david

console.log(typeof david.whatever === undefined); // now this logs false; david has been mutated

// Ex. 2
var someNumber = 42;
var result = someNumber + 11;

var otherNumber = someNumber;

console.log(someNumber === otherNumber); // logs `true`

someNumber = someNumber + 13; //this is not mutating the number 42, rather reassigning the result 55 into the variable someNumber

console.log(someNumber === otherNumber); // logs `false` someNumber is now a different number


//Ex. 3
var peter = {
  superhuman: false;
}

var spidey = peter;

console.log(peter === spidey); // logs true as expected

spidey.superhuman = true; // mutating the object

console.log(peter === spidey); // still logs true since objects peter and spider are still the same object and has only been mutated

```


---
[Home](index.md "Go Home") | [W1D1](week1day1 "Week One Day One") | [W1D2](week1day2 "Week One Day Two")
---