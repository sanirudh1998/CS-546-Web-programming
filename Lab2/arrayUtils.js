const average=function average(arrays)
 {
if(!Array.isArray(arrays))
{
    throw "Not passed an array";
}
if(arrays===undefined){
    throw "error";
}
if(arrays.length<1)
{
    throw "Please enter value";
}
for(let k=0;k<arrays.length;k++){
    if (arrays[k]===null){
        throw "enter a new number;"

    }
    if (arrays[k].length==0){
        throw "enter a new number;"

    }
    for(let l=0;l<arrays[k].length;l++){
        if(typeof arrays[k][l]!=='number'){
            throw "enter a number";
        }
        if(arrays[k][l]===undefined){
            throw "please enter new number";
        }
        if (arrays[k][l]===null){
            throw "enter a new number;"
        }
    }
}

let temp=0;
let count=0;
for(let i=0;i<arrays.length;i++ )
{
    for(let j=0;j<arrays[i].length;j++){
        count=count+1;
        temp+=arrays[i][j];
       

    }

}
let avg=(temp/count);
avg=Math.round(avg);
return avg;
   
}



const modeSquared = function modeSquared(array){    
    if(!Array.isArray(array)){
        throw "Not an array";
    }
    if(array.length<1){
        throw "No value";
    }
    if(array===undefined){
        throw "Not an array";
    }
    if(array===null)
    {
        throw "not an array";
    }
    for(let m=0;m<array.length;m++){
        if(isNaN( array[m])){
            throw "not an number";
        }
        if(array[m]==null){
            throw "not an number";
        }
        if(array[m]==''){
            throw "not an number";
        }
        if(array[m]==undefined){
            throw "not an number";
        }
        if(typeof array[m]!="number"){
            throw "not valid";
        }
    }
    let obj={};
    for(let i=0;i<array.length;i++){
        if(obj.hasOwnProperty(array[i])){
            obj[array[i]]=obj[array[i]]+1;
        }
        else{
            obj[array[i]]=1;
        }
    }
    let m=0;
    for(key in obj){
        if(obj[key]>m){
            m=obj[key];
        }
    }
    if(m==1||m==0){
        return null;
    }
    let val=0;
    for(key in obj){
        if(obj[key]==m){
            val=val+key*key;
        }
    }
    return val;
}
const medianElement=function medianElement(array) {
    if(!Array.isArray(array))
{
    throw "Not passed an array";
}
if(array.length<1){
    throw "Not enter a value";
}
       
        if(typeof(array)==undefined){
            throw "Enter a value";
        }
        if(array==null){
            throw "Enter a value";
        }
        for(let m=0;m<array.length;m++ ){
            if(array[m]===undefined){
                throw "The value is not defined";
            }
            else if(isNaN(array[m])){
                throw "Not an number";
            }
        }

const object={};
const old_array = [];
for (var x in array){
  old_array.push(array[x])
}

array.sort();
let k=array.length;
if(k==1){
    object[array[0]]=0;
    return object;
}
let extra=0;
if (k>1){
    if(k>1){
        if(k%2==0){
             extra=0;}    
        else{
            extra=1;
        }
        if(extra==0){
            let a=k/2;
            let me=(array[a-1]+array[a])/2;
             object[me]= old_array.indexOf(array[a]);
             return object;
        }
        else{
            let z=k/2;
            z=Math.floor(z);
            object[array[z]]= old_array.indexOf(array[z]);
            return object;


        }

    }
}
   
}
const merge=function merge(arrayOne, arrayTwo){
    if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo))
      {
          throw "Not passed an array";
      }
    numbers_array=[];
    uppercase_array=[];
    lowercase_array=[];

    
   // read arrayOne & get push chars into arrays
   for(let j=0;j<arrayOne.length;j++){
       if(arrayOne[j]==""){
           throw "not an array";
       }
       if(typeof(arrayOne[j])=="number")
        {
          numbers_array.push(arrayOne[j]);
          
        }
       else if(typeof(arrayOne[j])=="string"){
           if(arrayOne[j].length > 1){
                 throw "should be one character";
           }
               if(arrayOne[j]>="A"&&arrayOne[j]<="Z"){
                   uppercase_array.push(arrayOne[j]);
               }
              else if(arrayOne[j]>="a"&&arrayOne[j]<="z"){
                  lowercase_array.push(arrayOne[j]);
              }
       
      else {
        throw "Not number or string";
      } 
      
      }

       }
   for(let j=0;j<arrayTwo.length;j++){
       if (arrayTwo[j]==""){
           throw "error";
       }
       if(typeof(arrayTwo[j])=="number")
        { 
          numbers_array.push(arrayTwo[j]);
          
        }
       else if(typeof(arrayTwo[j])=="string"){
               if (arrayTwo[j].length > 1){
                 throw "should be one character";
               }
               if(arrayTwo[j]>="A"&&arrayTwo[j]<="Z"){
                   uppercase_array.push(arrayTwo[j]);
               }
              else if(arrayTwo[j]>="a"&&arrayTwo[j]<="z"){
                  lowercase_array.push(arrayTwo[j]);
              }
       }
      else {
        
        throw "Not number or string";
      }  

       }
   numbers_array.sort();
   uppercase_array.sort();
   lowercase_array.sort();

   let arrayout = lowercase_array.concat(uppercase_array).concat(numbers_array);
  
   return arrayout;
  
}




module.exports = {
   average,
   modeSquared,
   medianElement,
   merge
   
  };




