// const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
// veggies.forEach(function(element) {console.log('No ' + element + ' please. I will have pizza with extra cheese.')
// });

// // Arrow function expressions
// const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
// veggies.forEach(element => console.log('No ' + element + ' please. I will have pizza with extra cheese.'));

// const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
// veggies.forEach(result);
// function result(element) {
//     console.log('No ' + element + ' please. I will have pizza with extra cheese.');
// };





const companies =[
    {name: "company one", category:"finance", start:1990, end:2003 },
    {name: "company two", category:"retail", start:1980, end:2010 },
    {name: "company three", category:"technology", start:1982, end:1990 },
    {name: "company four", category:"auto", start:1982, end:1904 },
    {name: "company five", category:"finance", start:1974, end:2013 },
    {name: "company six", category:"technology", start:1920, end:1978 },
];
const ages = [32, 33, 16, 40,62,32,46,53,89,74,98,20,43,59,78];

companies.forEach(company=>console.log(company.name));

// filter method

const result = companies.filter(company => company.category === "finance");
console.log(result);

// const listAge = ages.filter(function(age) {
//     if (age > 50) {
//         return age;
//     }
// });

const listAge = ages.filter(age => age > 50);

console.log(listAge) ;
// map
const mapAge = ages.map(age => age + 50);
 console.log(mapAge) ;

const testMap = companies.map(function(company){
    return company.name[company.start - company.end];
});
console.log(testMap);
//sort

const sortedAges = ages.sort((a,b) => a-b)
console.log(sortedAges);
//reduce


const handleSubmit = () => {
  addFunction()
    .then(() => history.push("/nextpage"))
}
