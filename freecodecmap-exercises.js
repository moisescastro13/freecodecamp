function largestOfFour(arr) {
  return arr.map((ele) => ele.reduce((acc,ele) => ele > acc ? ele: acc))
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function confirmEnding(str, target) {
  let result = str.substring(str.length-target.length);
  console.log(result);
  if (result == target) return true;
  return false;
}

confirmEnding("Bastian", "n");
confirmEnding("Connor", "n");
confirmEnding("Congratulation", "on");

function repeatStringNumTimes(str, num) {
  let output = '';
  for(let n = 0; n < num; n++) output += str;
  return output;
}

repeatStringNumTimes("abc", 3);


function truncateString(str, num) {
  return str.length > num ? str.slice(0,num)+'...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


function titleCase(str) {
  return str.split(' ')
    .map(ele => ele.charAt(0).toUpperCase()+ele.slice(1).toLowerCase())
    .join(' ');
}

titleCase("I'm a little tea pot");


function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice(0,n).concat(arr1).concat(arr2.slice(n)); 
  return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1);



function bouncer(arr) {
  return arr.filter((ele) => ele);
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""])





function getIndexToIns(arr, num) {
  arr.sort((x,z) => x - z);
    for (let index in arr) {
    if(arr[index] >= num){
      return parseInt(index);
    }
  }
  return arr.length;
}

//getIndexToIns([40, 60], 50);
//getIndexToIns([3, 10, 5], 3);
getIndexToIns([10, 20, 30, 40, 50], 35);




function mutation(arr) {
  return arr[1].toLowerCase().split('').every(ele => arr[0].toLowerCase().indexOf(ele) != -1);
}

mutation(["hello", "hey"]);



function chunkArrayInGroups(arr, size) {
  const newArr = [];
  let aux = [];
  for (let index = 0; index < arr.length; index++){
    if(aux.length == size) {
      newArr.push(aux);
      aux = [];
      aux.push(arr[index]);
    }else {
      aux.push(arr[index]);
    }
  }
  newArr.push(aux);
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Cambia solo el código debajo de esta línea
  const failureItems = arr.map(ele => `<li class="text-warning">${ele}</li>`);
  // Cambia solo el código encima de esta línea

  return failureItems;
}

console.log(makeList(result.failure));




function palindrome(str) {
  const str1 = str.toLowerCase().replace(/ /g, "")
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  const data = str.toLowerCase()
  .replace(/ /g,'')
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  .split('').reverse().join('');
  return data == str1 ? true : false;
}



console.log(palindrome("A man, a plan, a canal. Panama"));




let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

function convertToRoman(num) {
let roma = '';
for (let index in decimalValue){
  while(num >= decimalValue[index]){
    num -= decimalValue[index];
    roma += romanNumeral[index];
  }
}
 return roma;
}

convertToRoman(36);

function rot13(str) {

var codeA = "A".charCodeAt(0);
var codeN = "N".charCodeAt(0);
var codeZ = "Z".charCodeAt(0);
var newArr = [];
console.log(String.fromCharCode(codeZ+13));
for(var i =0; i<str.length; i++){
    var code = str.charCodeAt(i);
    if(code>=codeA && code<=codeZ){
        if(code>=codeN)
            newArr.push(String.fromCharCode(code-13));
        else
            newArr.push(String.fromCharCode(code+13));
    }else{
        newArr.push(str[i]);}
    }
     return newArr.join("");
}
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT")




// La variable global
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  this.forEach(e => {
    if (callback(e)) newArray.push(e);
  });
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

function nonMutatingSplice(cities) {
  // Cambia solo el código debajo de esta línea
  return cities.slice(0,3);

  // Cambia solo el código encima de esta línea
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);




// La variable global
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

let getRating = (watchList) => {
  counter = 0;
  return [...watchList]
    .reduce((acc,ele) => {
    if(ele.Director == 'Christopher Nolan'){
      counter += 1;
      return acc + Number(ele.imdbRating);
    }
    return acc;
  },0)/counter;
};

console.log(getRating(watchList));


function urlSlug(title) {
 return title.toLowerCase().trim().split('  ').join(' ').split(/[.,\s\/#!$%\^&\*;:{}=\-_`~()]/g).join('-')
}
urlSlug("Winter Is Coming") 
urlSlug(" Winter Is  Coming")

Array.prototype.range = function(){
  return Array.from({ length: this[1] - this[0] + 1 }, (_, i) =>  this[0] + (i));
}

function sumAll(arr) {
  return arr.sort((a,b)=> a-b).range().reduce((acc,ele) => acc + ele,0);
}

sumAll([1, 4]);
sumAll([10, 5]);

function diffArray(arr1, arr2) {
  var newArr = []
  arr1.forEach((x,i) => {
    if(!arr2.includes(x)) newArr.push(arr1[i]);
  });
  arr2.forEach((x,i) => {
    if(!arr1.includes(x)) newArr.push(arr2[i]);
  });
  return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


function destroyer(arr) {
  let args = Object.values(arguments).splice(1);
  return arr.filter(x => !args.includes(x));
}
function destroyer2(arr, ...args) {
  return arr.filter(x => !args.includes(x));
}

destroyer2([1, 2, 3, 1, 2, 3], 2, 3);


function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  return collection.filter(x => keys.every(e => x.hasOwnProperty(e) && x[e] === source[e]))
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

function spinalCase(str) {
  return str.split(/(?=[A-Z])/).map(e => e.trim().toLowerCase()).join(' ').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,' ').replace(/  /g, '-').replace(/ /g, '-');
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("AllThe-small Things")




function zeroArray(m, n) {
  // Crea un arreglo de 2 dimensiones con m filas y n columnas de ceros
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);



function myReplace(str, before, after) {
  if(before[0] != before[0].toUpperCase()) return str.replace(before,after[0].toLowerCase() + after.slice(1));
  return str.replace(before,after[0].toUpperCase() + after.slice(1));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 


let functionWithArgs = (a, b) => a+b;
functionWithArgs(1,2);
functionWithArgs(7,9);



function nextInLine(arr, item) {
  arr.push(item)
  return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log(nextInLine(testArr, 6));

var count = 0;

function cc(card) {
  if(card==2 || card==3 || card==4 || card==5 || card==6) count++;
  if(card==10 || card=='J'|| card=='Q'|| card=='K'|| card=='A') count--;
  if(count <= 0) return `${count} Hold`;
  return `${count} Bet`;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');






function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }
  return "Not found";
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")
checkObj({city: "Seattle"}, "district")




var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

myStorage.car.inside['glove box'];


function pairElement(str) {
  return str.split('').map((ele) => {
    switch(ele){
      case 'G':
        return ['G','C'];
      case 'C':
        return ['C','G'];
      case 'A':
        return ['A','T'];
      case 'T':
        return ['T','A'];
    }
  });
}

function pairElement2(str) {
    let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  return str.split('').map((ele) => [ele,pairs[ele]]);
}

pairElement2("GCGT");


function fearNotLetter(str) {
  let firts = str.charCodeAt(0);
  let second = str.charCodeAt(str.length-1);
  let counter = firts;
  while(counter < second){
    counter++;
  }
}

fearNotLetter("abce");
//fearNotLetter("abcdefghjklmno");
//fearNotLetter("bcdf")