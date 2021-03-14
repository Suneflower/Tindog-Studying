// how does one make a countdown timer that goes into the range of months? since months dont have a constant number of days.
// for example, lets say that I want my bot to countdown till 3rd july 2021
// thats months into the future
// I want the product of the code to be like 4 months, 2 weeks, 1 day

<button class="btn btn-primary" onclick="timerCountDown()">Click me</button>



function timerCountDown(date){
    let setFuture = prompt("please tell me the date in the future?");
    let today = new Date();
    let value = setFuture - 
    // let x =
    // let y = 
    // let z =
    console.log ("it is going to take" + x + " months, " + y + " weeks, " + z + " day.")

}


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

let today = new Date().toLocaleDateString()

console.log(today);



// hello, im creating a drop down menu with the following data as the option value 
// const countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas, USA"]
// 
// the thing is, im working on a project  whree the data HAS to be in this form:
// { countryCode: 'ID', countryName: "USA"  }
// 
// how can i implement it? I'm thinking the countryCode as the element position of course, the countryName as the element.

// interface Country {
    countryCode: string
    countryName: string
  
  
  // const countries: Country[] = [...]
  
  function CountrySelector({ selected, countries, onChange }) {
    return (
      <select value={selected.countryCode} onChange={onChange}>
        {countries.map(({countryCode, countryName}) => (
          <option key={countryCode} value={countryCode}>{countryName}</option>
        ))}
      </select>
    );
  }
  
  
