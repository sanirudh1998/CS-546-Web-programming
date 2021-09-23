const questionOne = function questionOne(arr) {
    const object={};// Creating a object
    // Implement question 1 here
    if(arr==null)  //Checking if null value is passed
    {
        return object;
    }
    for(let i=0;i<arr.length;i++) // accessing values in the array using the loop for accessing index
    {
        let result= Math.abs((arr[i]*arr[i])-7); //calculating the result with accessed value and taking absolute of the value 
        let bool=true;
        if(result>1)
        {
            for(let j=2;j<result;j++)
            {
                if(result%j==0) // Checking if the evaluated value is prime or composite
                {
                    bool=false;
                    break;

                }
            }
            if(bool)
            {
                object[result]=bool; // Entering the evaluated value as key and true/ false as value depending on prime or composite
            }
            else{
                object[result]=bool;
            }
        }

    }
    return object
}

const questionTwo = function questionTwo(arr) { 
    let set=new Set(); // Create a set
   for(let i=0;i<arr.length;i++) // looping through for accessing the value using index
   {

    set.add(arr[i]); // adding the value to the created set from array to remove duplicacy
   }
   let value=Array.from(set); //converting the value back form set to array without duplicates
   let original=[...value]; 
 
    return original;
}

const questionThree = function questionThree(arr) {
    const object={};// Create an object
    let new_Array=[];

    for(let i=0;i<arr.length;i++){ 
        let Flag=true;
        for(let j=0;j<new_Array.length;j++){  // looping through values and checking for the duplicacy
            if(arr[i]==arr[j]){
                Flag=false;
                break;
            }
        }
        if(Flag==true){
        new_Array.push(arr[i]); // storing non duplicate values in an new array
        }
    }
   
for(let k=0;k<new_Array.length;k++){
    let ordered=new_Array[k].split(''); // Splitting the value and sorting it in alphabatical order
    let sortered= ordered.sort();
    let joined=sortered.join('');
    if (object[joined] != null){
    object[joined].push(new_Array[k]); // Storing the anagrams in the object as items and sorted value as an array
    }
    else{
    object[joined] = [new_Array[k]];
    }
}

for (let obj in object) {
if (object[obj].length == 1) // returning the objects who have more than one value
{
delete object[obj];
}

}





return object;

}

const questionFour = function questionFour(num1, num2, num3) {
let temp=1;
for(let i=1;i<num1+1;i++) // finding factorial for the value in num1
{
    temp=temp*i;
}

let temp1=1;
for(let j=1;j<num2+1;j++)  // finding factorial for the value in num2
{
    temp1=temp1*j;
}
let temp2=1;
for(let k=1;k<num3+1;k++)  // finding factorial for the value in num3
{
    temp2=temp2*k;
}
let average=(num1+num2+num3)/3; //finding the average of the three n
let temps=temp+temp1+temp2; //totalling the factorials of three numbers
let final=Math.floor(temps/average); // rounding of the value using floor and dividing sum of factorials by avg of user given numbers
return final;


}

module.exports = {
    firstName: "ANIRUDH", 
    lastName: "SUNDARARAMAN", 
    studentId: "10459585",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};