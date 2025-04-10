// {//1
//     function doubleInteger(i) {
//         // i will be an integer. Double it and return it.
//         return i * 2;
//       }
//       console.log(doubleInteger(2), 4);
      
// }
// {//2
//     function removeChar(str){
//         //You got this!
//          let result = "";
//        for(let i = 1; i < str.length -1; i++){
//          result += str[i]
//        }
//          return result
//        };
//        console.log(removeChar('faxriddin'));
       
// }
// {//3
//     function hero(bullets, dragons){
//         //Get Coding!
//           return bullets >= dragons * 2
//         }
//         console.log(hero(10, 5));
        
// }
// {//4
//     function squareSum(numbers){
//         let som = 0
//         for (let i = 0 ; i < numbers.length; i++ ){
//           som += numbers[i] * numbers[i]
//         }
//           return som
//         }
//         console.log(squareSum([1,2,3]));
        
// }
// {//5
//     function repeatStr (n, s) {
//         let result = ""
//         for (let i = 0; i < n; i++){
//           result += s
//         }
//         return result;
        
//       }
//       console.log(repeatStr(3, "faxriddin"));
      
// }
// {//6
//     function numberToString(num) {
//         // Return a string of the number here!
//         return "" + num 
//       }
//       console.log(numberToString(67));
      
// }
// {//7
//     function opposite(number) {
//         //your code here
//         return -number
//       }
//       console.log(opposite(1));

      
// }
// {//8
//     function makeNegative(num) {
//         // Code?
//        return num > 0 ? -num : num;
//       }
//       console.log(makeNegative(42));
      
// }
// {//9
//     function multiply(a, b){
//         return a * b
//       }
//       console.log(multiply(1,1));
      
// }
// {//10 
//     function evenOrOdd(number) {
//         if(number%2===0){
//           return "Even"
//         }else{
//           return "Odd"
//         }
//       }
//       console.log(evenOrOdd(10));
      
// }



// try{
//   let fullname = "laylo " 
  
//   for (i = 0; fullname.length; i++){
//     throw new Error ("Enter full name")
//   }
//   console.log("welcome");
  

// }catch(err){
// console.error(err);

// }

// const DATA = [
//   {
//       name: "John",
//       username: "john32",
//       password: "12345678j"
//   },
//   {
//       name: "Laylo",
//       username: "laylo19",
//       password: "123456"
//   },
//   {
//       name: "Nurbek",
//       username: "nurbek-sila",
//       password: "123456-sila"
//   },
// ]


// // "Welcome, Laylo"
// // "username or passowrd is incorrect"

// // try...catch


// try{
//   let username = "laylo"
//   let password = "123456"
//   let obeyt = (password,username)
  
//   if ( DATA === obeyt){
    
//     throw new Error ("username or passowrd is incorrect")
//   }
//   console.log("welcome "+ username);

// }catch(err){
// console.error(err);

// }
{// masala 1
    try {
        let son = 20;
        let number = son;
    
        if (isNaN(number)) {
            throw new Error("notogri raqam kiritildi");
        }
    
        console.log("kiritilgan raqam:", number);
    } catch (error) {
        console.error("hatolik yuz berdi");
        
    }
}
{// masala 2
    try {
        let a = 10;
        let b = 20;
    
        if (b === 0) {
            throw new Error("0 ga bolish mumkin emas");
        }
    
        let result = a / b;
        console.log("javob:", result);
    } catch (error) {
        alert(error.message);
    }
    
}
{// masala 3
    try {
        console.log(hoto);
    } catch (error) {
        console.log("xato:", "hatolik yuz berdi");
    }
    
}
{//masala 4
    try {
        let array = [10, 20, 30, 40];
        let index = 2;
    
        if (index >= array.length) {
            throw new Error("bu index hech qanaqa son tipilmadi");
        }
    
        console.log("son:", array[index]);
    } catch (error) {
        console.log("xato:", "hatolik");
    }
    
}
{// masala 5
    try {
        // let son = prompt("Son kiriting:");
        let a = Number(son);
    
        if (isNaN(a)) {
            throw new Error("Son kiriting!");
        }
    
        console.log("Raqam:", a);
    } catch (error) {
      console.error("hatalik yuz berdi");
      ;
    }
    
}
{// masala 6
    try {
        let x = null;
        x();
    } catch (error) {
        console.log("xato:", "xatolik yuz berdi");
    }
    
}
{// masala 7
    function checkNumber(value) {
        if (typeof value !== "number") {
            throw new Error("Faqat raqam qabul qilinadi!");
        }
        console.log("Qabul qilindi:", value);
    }
    
    try {
        checkNumber("hello");
    } catch (error) {
        console.log("Xato:", error.message);
    }
    
}
{ // masala 8
    try {
        let age = 20;
    
        if (age < 0) {
            throw new Error("bunaqa yosh yoq");
        }
    
        console.log("yosh:", age);
    } catch (error) {
        console.error("aka ahmoq qilayapszmi");
        
    }
    
}

   

