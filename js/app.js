{//1
    function doubleInteger(i) {
        // i will be an integer. Double it and return it.
        return i * 2;
      }
      console.log(doubleInteger(2), 4);
      
}
{//2
    function removeChar(str){
        //You got this!
         let result = "";
       for(let i = 1; i < str.length -1; i++){
         result += str[i]
       }
         return result
       };
       console.log(removeChar('faxriddin'));
       
}
{//3
    function hero(bullets, dragons){
        //Get Coding!
          return bullets >= dragons * 2
        }
        console.log(hero(10, 5));
        
}
{//4
    function squareSum(numbers){
        let som = 0
        for (let i = 0 ; i < numbers.length; i++ ){
          som += numbers[i] * numbers[i]
        }
          return som
        }
        console.log(squareSum([1,2,3]));
        
}
{//5
    function repeatStr (n, s) {
        let result = ""
        for (let i = 0; i < n; i++){
          result += s
        }
        return result;
        
      }
      console.log(repeatStr(3, "faxriddin"));
      
}
{//6
    function numberToString(num) {
        // Return a string of the number here!
        return "" + num 
      }
      console.log(numberToString(67));
      
}
{//7
    function opposite(number) {
        //your code here
        return -number
      }
      console.log(opposite(1));

      
}
{//8
    function makeNegative(num) {
        // Code?
       return num > 0 ? -num : num;
      }
      console.log(makeNegative(42));
      
}
{//9
    function multiply(a, b){
        return a * b
      }
      console.log(multiply(1,1));
      
}
{//10 
    function evenOrOdd(number) {
        if(number%2===0){
          return "Even"
        }else{
          return "Odd"
        }
      }
      console.log(evenOrOdd(10));
      
}