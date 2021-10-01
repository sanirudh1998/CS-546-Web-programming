const sortString=function sortString (string){
    if(typeof string !=="string"){
        throw "Enter a new string";
    }
    if(string===undefined){
        throw "Enter a new string";
    }
    if(string.length<=0){
        throw "Enter a new string";
    }
    
    if(string=== null){
        throw "Enter a new string";
    }
    let index=0;
    let k="";
    let r="";
    let m="";
    let t="";
    let p="";
    let z="";
    for(let i=0;i<string.length;i++){
        let a=string.charAt(i);
        let j=a.charCodeAt(index);
         if(j>64 && j<91){
             k=k+a;
             }
        else if(j>96 && j<123){
            r=r+a; }
        else if(j>47&&j<58){
            p=p+a;

        }
        else if((j>32 && j<48)||(j>57 && j<65)||(j>90 && j<97)||(j>122 && j<126)){
            m=m+a;}
        else if(j==32){
            t=t+a;

        }
        //else{
          //  throw"Enter a different value";
        //}
 }
let q=k.split('').sort().join('');
let w=r.split('').sort().join('');
let v=p.split('').sort().join('');

z=q+w+m+v+t;
return z;
}

const replaceChar=function replaceChar(string, idx){
    if(typeof string!=="string"){
        throw "Enter a new string";
    }
    if(string===undefined){
        throw "Enter a new string";
    }
    if(string ===null){
        throw "Enter a new string";
    }
    if(string ===" "){
        throw "Enter a new string";
    }
    if(string.length<=0){
        throw "Enter a new string ";
    }
    if(idx===undefined){
        throw "Enter a number";
    }
    if(idx===null){
        throw "Enter a number";
    }
    if(typeof idx!=="number")
{
    throw "Enter a number";
}
   
    if(idx>string.length){
        throw "number too big;"
    }
    
        if((idx<=0)||(idx>string.length-2)){
            throw "Enter a new number;"
        }
       let k="";
    let a=string.charAt(idx);
    let b=string.charAt(idx-1);
    let c=string.charAt(idx+1);
    let flag=true;
    for(let i=0;i<string.length;i++)
    {
     let e=string.charAt(i)
        if((i!=idx)&&(a==e)){
            if(flag==true)
            {
                k=k+b;
                flag=false;
            }
            else if(flag==false){
                k=k+c;
                flag=true;}
             }
    else{
        k=k+e;
    }
     
 }
 return k;
}
const mashUp=function mashUp(string1, string2, char){
    if(string1===undefined){
        throw "Enter a new string ";
    }
    if(string2===undefined){
        throw "Enter a new string ";
    }
    if(char===undefined){
        throw "Enter a new character";
    }
    if(typeof string1!=="string")
{
    throw "Enter a new string 1";
}
if(typeof string2!=="string"){
    throw "Enter new string 2";
}  
if(typeof char!=="string")
{
    throw "Enter new char";
}
if(string1===''){
    throw "Enter a new string1";
}
if(string2===''){
    throw "Enter new string 2";
}
if(char===''){
    throw "Enter new char";
}
if(string1===null){
    throw "Enter new string1";
}
if(string2===null){
    throw "Enter new string 2";
}
if(char==null){
    throw "Enter new char";
}
if((string1.length<=0)||(string2.length<=0))
{
    throw "Enter new string";
}
if((char.length<=0)||(char.length>1)){
    throw "enter new char";
}
console.log(month,date);

  let temp="";
    let final="";
    let num=0;
    let a=string1.length;
    let b=string2.length;
    if(a>b){
for(let i=b;i<a;i++){
    temp=temp+char;

}
string2=string2+temp;

    }
    else if(a<b){
        for(let i=a;i<b;i++){
            temp=temp+char;
        }
        string1=string1+temp;
    }
    else{
        num=0;
    }

        for(let j=0;j<string1.length;j++)
            {
                    final=final+string1[j];
                    final=final+string2[j];
                }
                    return final;
}


module.exports = {
    sortString,
    replaceChar,
    mashUp
   
  }