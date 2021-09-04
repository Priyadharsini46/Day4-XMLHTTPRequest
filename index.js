//Day-4 Task

//1. How to compare two JSON have the same properties without order?

var actual = { name: "Person 1", age: 5 };
var expected = { age: 5, name: "Person 1" };
var bool = true;

if (Object.keys(actual).length == Object.keys(expected).length) {
  for (key in actual) {
    if (actual[key] == expected[key]) {
      continue;
    } else {
      bool = false;
      break;
    }
  }
} else {
  bool = false;
}
console.log(bool);

//2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

const getcountries = () => {
   const country = new XMLHttpRequest();
   country.open('GET', 'https://restcountries.eu/rest/v2/all');
   country.responeType = 'json';
   country.send();
   country.onload = () => {
       const data = country.response;
       let obj = JSON.parse(data);

       let Country_flag=obj.map((value)=>value.flag);
       console.log(Country_flag);

//3.Use the same rest countries and print all countries name, region, sub region and population
obj.forEach(element => {
   console.log("Name: " + element.name, ", Region: " + element.region, ", Sub Region: " + element.subregion,"Population: " +element.population)
});
      }
   }
       getcountries();

