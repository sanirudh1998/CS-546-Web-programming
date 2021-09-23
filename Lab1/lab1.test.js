const lab1 = require("./lab1");

console.log(lab1.questionOne([5,3,10])); 
// returns and outputs: { '2': true, '249': false, '393': false }
console.log(lab1.questionOne([7, 3, 12]));
//returns and outputs: { '2': true, '42': false, '137': true }
console.log(lab1.questionOne([8,13,50]));
//returns and outputs:{ '57': false, '162': false, '2493': false }
console.log(lab1.questionOne([2,10,18])); 
//returns and outputs:{ '3': true, '93': false, '317': true }
console.log(lab1.questionOne([-7,-2,-66]));
//returns and outputs:{ '3': true, '42': false, '4349': true }
console.log(lab1.questionOne([-22,-32,-42]));
//returns and outputs:{ '477': false, '1017': false, '1757': false }
console.log(lab1.questionOne());
//returns and outputs:{}
console.log(lab1.questionOne([2])); 
// should return and output: {'3': true} 
console.log(lab1.questionOne([22,18,36]));

console.log(lab1.questionTwo([1, 2, 3, 2, 1])); 
//returns and outputs:[ 1, 2, 3 ]
console.log(lab1.questionTwo([2,'a','b',8,'a','b']));
//returns and outputs:[ 2, 'a', 'b', 8 ]
console.log(lab1.questionTwo([11,'11',8,'11',2,8,'a','z','a']));
//returns and outputs:[ 11, '11', 8, 2, 'a', 'z' ]
console.log(lab1.questionTwo([]));
//returns and outputs:[]
console.log(lab1.questionTwo([66,'A','b',33,33,'A']));
//returns and outputs:[ 66, 'A', 'b', 33 ]
console.log(lab1.questionTwo([22,'14','66','22','22','14','A','B']));
//returns and outputs:[ 22, '14', '66', '22', 'A', 'B' ]
console.log(lab1.questionTwo([33,'A','a',22,'b','B','A']));
//returns and outputs:[ 33, 'A', 'a', 22, 'b', 'B' ]
console.log(lab1.questionTwo([18,'22',22,'a','22',16,72,16,'b','a']));
//returns and outputs:[18,  '22', 22,'a', 16,   72,'b']


console.log(lab1.questionThree(["bar", "car", "car", "arc"])); 
//  return and output: { acr: ["car", "arc"] }
console.log(lab1.questionThree(["milo","rupert","limo","terpur","rate","ater"])); 
// return and output:{ilmo: [ 'milo', 'limo' ], eprrtu: [ 'rupert', 'terpur' ],aert: [ 'rate', 'ater' ]}
console.log(lab1.questionThree(["tea","eat","ammo","mmoa","super","erupt"]));
// return and output:{ aet: [ 'tea', 'eat' ], ammo: [ 'ammo', 'mmoa' ] }
console.log(lab1.questionThree(["reap","eapr","mist","istm","yoyo","yoyo"]));
// return and output:{ aepr: [ 'reap', 'eapr' ], imst: [ 'mist', 'istm' ] }
console.log(lab1.questionThree(["chip","pihc","pic","cip","pot","top","mat","tam"]));
// return and output:{chip: [ 'chip', 'pihc' ], cip: [ 'pic', 'cip' ],opt: [ 'pot', 'top' ],amt: [ 'mat', 'tam' ]}
console.log(lab1.questionThree(["ram","mar","call","mint","tinm"]));
// return and output:{ amr: [ 'ram', 'mar' ], imnt: [ 'mint', 'tinm' ] }
console.log(lab1.questionThree(["joke","slim","lsim","swap","wasp","awsp","kit","tik","itk"])); 
// return and output:{ilms: [ 'slim', 'lsim' ], apsw: [ 'swap', 'wasp', 'awsp' ],ikt: [ 'kit', 'tik', 'itk' ]}

console.log(lab1.questionFour(1, 3, 2)); 
//returns and outputs:4
console.log(lab1.questionFour(2, 5, 6)); 
//returns and outputs:194
console.log(lab1.questionFour(7,8,9));
//returns and outputs:51030
console.log(lab1.questionFour(6,4,8));
//returns and outputs:6844
console.log(lab1.questionFour(10, 2, 6));
//returns and outputs:604920
console.log(lab1.questionFour(11, 13, 12)); 
//returns and outputs:562161600
console.log(lab1.questionFour(6, 1, 3));
//returns and outputs:218     
console.log(lab1.questionFour(7, 1, 6)); 
//returns and outputs:1234
console.log(lab1.questionFour(3, 7, 8)); 
//returns and outputs:7561

