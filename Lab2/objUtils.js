const computeObjects = function computeObjects(arr,func){
    if(!Array.isArray(arr)){
        throw "error in array";
    }
    if (typeof(func)!= 'function')
    {
      throw "not function";
    }
    if (!(func && {}.toString.call(func) === '[object Function]')){
        throw "Please enter a function;"
    }
    for(let j=0;j<arr.length;j++){
        if(typeof arr[j]!='object'){
            throw "error";
        }
        for(let k=0;k<arr.length;k++){
            let size=Object.keys(arr[k]).length;
            if(size<1){
                throw "Enter more elements";}
                for(keys in arr[k]){
                    if(typeof(arr[k][keys])!='number'){
                        throw "Error";
                    
                }
            }

        }
        
    }


    obj={};
    for(let i=0;i<arr.length;i++){
        for(key in arr[i]){
            let x = func(arr[i][key]);
            if(obj.hasOwnProperty(key)){
                obj[key]=obj[key]+x;
            }
            else{
                obj[key]=x;
            }
        }
    }
    return obj;}

    const commonKeys=function commonKeys(obj1, obj2){
        if(Array.isArray(obj1)||Array.isArray(obj2)){
            throw "Enter a object";
        }
        if(typeof obj1!='object'){
            throw "Please enter a object";
        }
        if(typeof obj2!='object'){
            throw "please enter a object";
        }
        let obj = {};
        for(key in obj1){
            if(obj2.hasOwnProperty(key)){
                       if(typeof(obj1[key])==='object'){
                           obj[key] = commonKeys(obj1[key], obj2[key]);
                           
                        }     
                    else{
                        if(obj1[key]==obj2[key])
                            obj[key]=obj1[key];
                    }     
            }
        }
        return obj;
    }
    
    
    
    

const flipObject=function flipObject(object)
 {
    if(Array.isArray(object)){
        throw "Enter a object";
    }
     if(typeof object!=="object"){
         throw "Enter object";
     }
     if(object===undefined){
         throw "Enter object";
     }
     if(Object.keys(object).length<1){
         throw "Enter value";
     }
   

     if(object===null){
         throw "Enter a object";
     }
   let new_obj = {};
   
   for(var key in object){
     
    if (Array.isArray(object[key]))
     {  // go through each element of array and add
       for (var x=0; x<object[key].length; x++)
       {
         new_obj[object[key][x]] = key;
         
       }
       
     }
    else if (typeof object[key] == 'object')
        {
           // it is object so now check inside
          new_obj[key] = {}
          for (var k in object[key])
            {
               new_obj[key][object[key][k]] = k;
            }
          
        }
    else{
      // for int, strings
       new_obj[object[key]] = key;
    }
    
    
  }
  
return new_obj
   
}

module.exports = {
    computeObjects,
    commonKeys,
    flipObject
  }