// object creation in Js

// let rectangle ={
//     length:1,
//     breadth:2,
//     hieght:3
// };
// console.log(rectangle);


// ham object me key value paires ya koi function bhi provide kra skte haki

//object ke ander jo function likhte hai use ham method khte hai

// let rectangle =
// {
//     length:1,
//     breadth:2,
//     hieght:3,

//     draw:function()
//     {
//         console.log('drawing');
//     }
// };




// // object creation function yadi multiple object create krne hai the  we use these method
// // .factorym fn
// // .constructer fn

// // 1.factory fn yha object bnte hai
// function createrectangle(len ,br , h)
// {
        
//     return rectangle =
//     {
//         length:len,
//         breadth:br,
//         hieght:h,

//         draw:function()
//         {
//             console.log('d');
//         }
// };
// }

// // i am created multiple object at a time

// let a=createrectangle(1,2,3);
// let b=createrectangle(1,2,3);
// let c=createrectangle(1,2,3);

// o/p
// rec.draw
// ƒ ()
//     {
//         console.log('d');
//     }
// rec.draw()
// d





// 2.constructer function

// function rectangle(len,br)
// {
//     // ye apke current object ko show krta hai
//     this.length=len,
//     this.breadth=br,
//     this.draw=function()
//             {
//                 console.log('d');
//             }
//  }

// //  new keyword apko ak empty object return krta hai
//  let rec= new rectangle(3,4);



//  iski help se ham kisi bhi object ka constructer pta krr skte hai
//  rec.constructor;
// ƒ rectangle(len,br)
// {
//     // ye apke current object ko show krta hai
//     this.length=len,
//     this.breadth=br,
//     this.draw=function()
//             {
            //    console.log('d');}


            


// Dynamic nature of object

// function rectangle(len,br)
// {
//     // ye apke current object ko show krta hai
//     this.length=len,
//     this.breadth=br,
//     this.draw=function()
//             {
//                 console.log('d');
//             }
//  }

// //  new keyword apko ak empty object return krta hai
//  let rec= new rectangle(3,4);

// //  ap bad me bhi object ke ander ak nyi key value add krr skte hai
//  rec.color="red";

// //  ap randomally kiosi bhi object ko delete krr skte hai
//  delete rec.color;

//  console.log(rec);



// primitive type -  num,str, Null etc
// pritive type me copy create hoti hai
// let a=10;
// let b=a;

// a++;
// console.log(a);
// console.log(b);
// o/p
// 11
//  10


// reference type- array,any fn, object etc
// refrence type or object ke case me isme address pass hota hai
// jab ham koi object pass krte hai then uska address pass hoga hai
// let a={
//     val:10
// };
// let b=a;

// a.val++;
// console.log(a.val);
// console.log(b.val);

// o/p
// 11
// 11




// 1.for of loop
// 2.for in loop

// 1.for in loop

// kisi object ke key value ko access krne ke liye ham for in loop ka use krte hai
// let rectangle ={

//     length:2,
//     breadth:4
// }

// for(let key in rectangle)
// {

//     // key ke throuh ham key variable ka use krte Hai
//     // and key ki value ko access krne ke liye ia am use rectangle[key]

//     console.log(key,rectangle[key]);

//     // o/p
//     // length 2
//     // breadth 4
// }
 



// 2.for of loop 
// ye kewal iterable ke liye use hote hai ex map, array etc ye normally object ke uper nhi lga skte hai

// let rectangle ={

//     length:2,
//     breadth:4
// }

// object ak array kitrah treat krne lga

// for(let key of Object.keys(rectangle)) //use keys or entries- all key value a jaiga
// {
//     console.log(key);
// }





// kaise pta kre ki koi perticuler key uss object me present hai ya nhi
// let rectangle ={

//     length:2,
//     breadth:4
// }

// if('color' in rectangle)
// console.log('present');
// else 
// console.log('absent');




// object clonning - 
// 1.iteration
// 2.assign
// 3.spread

// 1.iteration
// let src={val:10};
// let des={};

// for(let key in src)
// {
//     des[key]=src[key];
    
//     console.log(key ,des[key]);
// }



// 2.assign
// assign fn ke thru ap clonning krr skte hai

// let src={
//     val:10
// };

// // empty object ,src
// let des= Object.assign({},src);

// console.log(des);




// 3.spread

// let src={
//     val:10
// };
// let des={...src};
// console.log(des);


// ham mutiple object ko kisi ak single object me clone krr skte hai using above method

// let a={val:10};

// let rectangle =
// {
//     length:1,
//     breadth:2,
//     hieght:3,

//     draw:function()
//     {
//         console.log('drawing');
//     }
// };

// let ans={...a,...rectangle};

// console.log(ans);



