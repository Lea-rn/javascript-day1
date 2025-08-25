/// variables : (mutable) :

// let firstName = "ali"   ;   //// assign  //// data types : string , number , boolean
// firstName = "mohamed"    ///// reassign

// console.log( firstName)

/////// constant : (immutable) ;
// const age = 20 ;

// console.log( typeof age , age) ;

/////// dry : d'ont repeat yourself  ...
// let now = 2026 ;

// const peterAge = now - 1992 ;
// const stevenAge = now - 1998 ;

// console.log(peterAge) ;

let x = 5 + 3; /// 8

// x = x + 10
/// x = x + 3
// x+=3

// console.log(x)

// let y = 10 ;

// y = y - 5 ;
// y-=5

// console.log(y)

// let z = 10 ;
// z = z * 2
// z*=2
// console.log(z)

/////// increment :

// let a = 1 ;
// a = a + 1
// a+=1
// a++
// a++
// a++
// a++
// console.log(a)

//// decrement :
// let b = 10
//  b--
//  b--
//  b--
// console.log(b)

///// operators : > ; < ; >= ; <= :

// let now = 2025 ;
// const maxYearOfBearth = 1993 ;
// const PeterYearOfBearth = 1992 ;
// const age1 = now - maxYearOfBearth ; /// 32
// const age2 = now - PeterYearOfBearth ;  // 33

// console.log( "max:"  ,   age1 , "peter :" , age2 )

// const result = age2 > age1

// console.log(typeof result)

////// concatination :::
// let firstName = "jhon";
// let lastName = "breed";
// let now = 2025;
// let bearthYear = 1995;
// let job = "full stack web developper";

// let inforamtion = "i'm"+" " + firstName +" "+ lastName+" " + "i'm"+" " + (now - bearthYear)+" " + "years old"+" " + "i work as a"+" "+job
// console.log(inforamtion)

// let inforamtion = `i'm ${firstName} ${lastName} i'm ${
//   now - bearthYear
// } years old i work as ${job} `;

// console.log(inforamtion)

///// multiple lines (before es6) :: 

// let sentence = "ay haja \n second word \n third word" 
// console.log(sentence)

///// multiple lines (after es6) :: 

// let sentence = `ay haja 
//  second word 
//   third word`  
// console.log(sentence)



/////// desecions ::: (if and else statement) :: 

// const age = 10  ; 

// if (age > 24) {
//         console.log("age over 24 ")
// }

// else if (age > 19 ){
//         console.log("age over 19 ")
// }


// else if (age > 16 ) {
//     console.log("age over 16 ")
// }
// else {
//     console.log("age under 16 ..... ")
// }

/////// conversion ::: 

let year =  "2000" ; 

// let yearAfterConversion = Number(year)
// console.log(typeof yearAfterConversion)
const result = Number(year) + 10 ; 
console.log(result)

//// play guess the number ; 

let n = "10"+(2+6)-"3"  /// 108-3 = 105
console.log(n)