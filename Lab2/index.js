  
const arrayUtils = require('./arrayUtils');
const stringUtils = require('./stringUtils');
const objUtils = require('./objUtils');
//average
try {
    // Should Pass
    const averageofnumbers = arrayUtils.average([[1],[3],[5]]); 
    console.log('average passed', averageofnumbers);
 } catch (e) {
    console.error('average failed', e);
 }

 try {
   // Should fail
   const averageofnumbers = arrayUtils.average([[1,2],[]]); 
   console.log('average passed', averageofnumbers);
} catch (e) {
   console.error('average failed', e);
}


//mode
//should pass
try {
   const mode = arrayUtils.modeSquared([1,2,2,3,3]); 
   console.log('mode', mode);
} catch (e) {
   console.error('mode failed', e);
}

//should fail
try {
   const mode = arrayUtils.modeSquared([1,2," ",3]); 
   console.log('mode', mode);
} catch (e) {
   console.error('mode failed', e);}

   //should fail
try {
   const mode = arrayUtils.modeSquared([1,2,'a',3]); 
   console.log('mode', mode);
} catch (e) {
   console.error('mode failed', e);}


// median
// should pass
try {
   const median = arrayUtils.medianElement([6,7,1]); 
   console.log('median passed', median);
} catch (e) {
   console.error('median failed', e);}

try {
   // Should fail
   const median = arrayUtils.medianElement([1,2,"nope"]); 
   console.log('median passed', median);
} catch (e) {
   console.error('median failed', e);
}
// merge
try {
   // Should pass
   const merge1 = arrayUtils.merge(['A', 'B', 'b'], [1, 2, 'Z']); 
   console.log('merge passed', merge1);
} catch (e) {
   console.error('merge failed', e);
}

try {
   // Should fail
   const merge1 = arrayUtils.merge(['A', 1, 'b'], [1, "", 'Z']); 
   console.log('merge passed', merge1);
} catch (e) {
   console.error('merge failed', e);
}

//string
//sortstring
//pass
try{
const sorted_string = stringUtils.sortString('112 AOL CAT!');
console.log('sortstring', sorted_string);
} catch (e) {
console.error('sort string', e);
}

// fail
try{
   const sorted_string = stringUtils.sortString(123);
   console.log('sort string', sorted_string);
   } catch (e) {
   console.error('sort string', e);
   }
// replacechar
//pass
   try{
      output = stringUtils.replaceChar("Mdaddy", 3);
      console.log('replacechar passed successfully', output);
      } catch (e) {
      console.error('replacechar failed test case', e);
      }
//fail
try{
   output = stringUtils.replaceChar("Helloworld","n");
   console.log('replacechar passed successfully', output);
   } catch (e) {
   console.error('replacechar failed test case', e);
   }
   //mashup
   //pass
   try{
      output = stringUtils.mashUp("How", "There", "#");
      console.log('mashup passed successfully', output);
      } catch (e) {
      console.error('mashup failed test case', e);
      }
      //fail
      try{
         output = stringUtils.mashUp("h","e");
         console.log('mashup passed successfully', output);
         } catch (e) {
         console.error('mashup failed test case', e);
         }
        //fail
         try{
            output = stringUtils.mashUp("h",2);
            console.log('mashup passed successfully', output);
            } catch (e) {
            console.error('mashup failed test case', e);
            }

         //compute objects 
         try {
            const first = { x: 1, y: 2};
            const second = { a: 70, x: 2, z: 5 };
            const third = { x: 0, y: 9, q: 10 };
            // Should Pass
            const result = objUtils.computeObjects([first, second], x => x * 2);
            console.log('compute object', result);
         } catch (e) {
            console.error('compute object', e);
         }
         try {
            // Should fail
              const first = { x: 1, y: 2};
            const second = { a: 70, x: 2, z: 5 };
            const third = { x: 0, y: 9, q: 10 };
            // Should Pass
            const result = objUtils.computeObjects([second,third])
            console.log('computeobjects passed successfully', result);
         } catch (e) {
            console.error('computeobjects failed test case', e);
         }
         // common keys
         // should pass
         try {
            const first = {a: 1, b: 6};
            const second = {a: 5, b: 6};
            const third = {a: 1, b: {x: 6}};
            const fourth = {a: 3, b: {x: 6, y: 10}};
            const result = objUtils.commonKeys(third,fourth);
            console.log('common keys passed successfully', result);
         } catch (e) {
            console.error('common keys test case', e);}
          
            // should fail

            try {
               const first = {a: 2, b: 4};
               const second = [1,2,3];
               const third = {a: 2, b: {x: 7}};
               const fourth = {a: 3, b: {x: 7, y: 10}};
               const result = objUtils.commonKeys(first,third);
               console.log('common keys successfully', result);
            } catch (e) {
               console.error('common keys failed test case', e);}

//flipobject

               try {
                  
                  // Should pass
                  const result = objUtils.flipObject({a: 3, b: 7, c: { x: 1 }});
                  console.log('flipobjects successfully', result);
               } catch (e) {
                  console.error('flipobjects test case', e);}

                  try {
                  
                     // Should fail
                     const result = objUtils.flipObject(ass);
                     console.log('flipobjects passed successfully', result);
                  } catch (e) {
                     console.error('flipobjects failed test case', e);}




