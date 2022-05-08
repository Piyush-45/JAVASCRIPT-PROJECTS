
// const sum = ()=> `the sum of two number is  ${(a=5)+(b=6)}`;

// console.log(sum());

// // function sum(){
    
// //     return sum =`the sum of two number is ${(a=4)+ (b=9)}` ;

// // };
// // console.log(sum());

// const myBioData = ['piyush', 'tyagi', '28', 'gzb'];

// let myFname = myBioData[0];
// let  = myBioData[1];
// let myge = myBioData[2];
// let myAdress = myBioData[3];

// let [myFName,myLName, myge, myAdress, myDegree = 'mcs']= myBioData;
// console.log(myDegree);

// for(let elements in myBioData) {
//     console.log(elements);
// }
// for(let elements of myBioData) {
//     console.log(elements);
// }

// myBioData.forEach(function(element, index, array){
//     console.log(element + " index: " + index )
// });

// console.log(myBioData.indexOf("tyagis" ));

// const prices = [200,200, 400,300, 484, 3923,23232];

// const newPriceTag = prices.filter((elem, index)=>{
//     return elem>123400;

// })
// console.log(newPriceTag);

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// // console.log(months.sort());

// // const array1 = [1, 30, 4, 21, 100000, 99];
// // console.log(array1.sort());\
// console.log(months);
// console.log(months.shift());
// console.log(months)

// const months =  ['Jan', 'march', 'April', 'June', 'July'];
// // const newMonth = months.splice(months.length,0, "dec");
// const newMonths = months.splice(1,2,"april")
// console.log(months);


// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// let removes = myFish.splice(3,1);
// console.log(myFish)

// let myFish = ['angel', 'clown', 'drum', 'sturgeon'];
// let removed = myFish.splice(2,1,"trumpet");
// console.log(myFish);

// let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// let removed = myFish.splice(0,2,"parrot", "blue")
// console.log(myFish)

// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

// let remove = myFish.splice(2);
// console.log(myFish)

//  const months = ['Jan', 'march', 'April', 'June', 'July'];
// //  const indexOfMarch = months.indexOf("june");
// //  console.log(indexOfMarch)
//  const updated = months.splice(-2,2, "hi","hi2");
//  console.log(months)

// const arr = [2,3,4,5,6];

// let output = arr.filter((x)=> x<3);
// console.log(output);

// const arr = [25,625, 36, 49];
// const newArr = arr.map((x)=> Math.sqrt(x));
// console.log(newArr)

// const arr = [2,3,4,5,6];
// const arrMax = arr.reduce((acc, curr)=>{
//     if(curr>acc)return curr;
//     return acc;


// });
// console.log(arrMax)

// const movies = [
//     {title : 'a', year : 2018, rating : 4.7},
//     {title : 'b', year : 2018, rating : 3},
//     {title : 'c', year : 2017, rating : 3.7},
//     {title : 'd', year : 2018, rating : 4.7},
// ];
// const moviesOut = movies.filter(m => m.year === 2018 && m.rating>=4).sort((a,b) => {
//     a<b=: -1
// })

// let myBiodata = 'i am vinod bhadur thapa'

// // let replaceBiodata = myBiodata.replace('vinod', 'piyush');

// // console.log(myBiodata.charCodeAt(5));\

// console.log(myBiodata.split(","));
// console.log(myBiodata.split(" "));
// console.log(myBiodata.split("|"));\

// console.log(new Date().toLocaleString());
// console.log(new Time)
// console.log(currDate);
// const currDate = new Date();
const currTime = new Date();

console.log(currTime.getTime());
console.log(currTime.setHours(11));
console.log(currTime.setMinutes(28));
console.log(currTime.setSeconds(23));

