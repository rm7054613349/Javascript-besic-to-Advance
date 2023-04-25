// Array - primitive type

// Array creation
// let arr= [1,2,3,4,5,6,7];
// console.log(arr);


// insertion in array

// let arr= [1,2,3,4,5,6,7];

// end me push krna hai
// arr.push(10);
// console.log(arr);

// begning me
// arr.unshift(11);
// console.log(arr);


// middle me - teen pairameter hai first kon sa index se push chahte ho second push krne per kitne elemeent delete krna chahte ho third sare element jo push krna hai
// arr.splice(2,0,'a','c','d');
// console.log(arr);



// let arr= [1,2,3,4,5,6,7];

// searching - element ka index print krega iske ander hmne element dala hai yadi element hua then uska index lake dega
// console.log(arr.indexOf(3));op = 2
// console.log(arr.indexOf(9)); op = -1

// console.log(arr.includes(7)); //ye true false return krega yadin hoga element to true vrna false dega






// IMP - Refrence type (object)

// let arr = [
//     {name:'hanu' , age:20},
//     {name:'man' ,age:30}
// ];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1].age);

// index of ki help se ham nhi pta krr skte hai ki koi elemenet present hai ya nhi kyuki dono ka address diffrent hoga

// console.log(arr.indexOf({name:'hanu' , age:20}))  o/p= -1

// previous primitive array wala koi bhi method work nhi krega searching me




// Ham object me serching krne ke lye find fn ka use krte hai and uske ander ham call back fn as a parameter pass krte hai

// let ans = arr.find(
//     //call back fn or predivate fn
//     function(arr)
//     {
//         // return arr.name=='hanu'; //means hmko ye vo object return krega jiska name hanu hai

//         return arr.name=='hardic';
//     }
// )
// console.log(ans);



// // or arrow fn => ye tab apply hoga jab predicate fn me single parameter ho and usme kewal line of code ho

// let ans = arr.find( arr=>arr.name=='hanu');
// console.log(ans);





// Removing element - primitive type
// let arr= [1,2,3,4,5,6,7];

// end
// console.log(arr.pop());
// console.log(arr);

// // begining
// console.log(arr.shift());
// console.log(arr);

// middle - first parameter is index and second element is how many no of element is remove
// arr.splice(3,1);
// console.log(arr);







// 3.Emptying an array
// let arr= [1,2,3,4,5,6,7];

// arr1 me arr ka reference gya hai
// let arr1=arr;

// ye main method hai jo use krte hai web d me
// arr.length=0;  or

// arr.splice(0,arr.length);

// console.log(arr);
// console.log(arr1);






// 4. combining and slicing of arrays;

// combining
// let a =[1,2,3,4];
// let b=[5,6,7,8];

// let ans = a.concat(b);
// console.log(ans);


// Slicing
// let arr = [1,2,3,4,5];

// // ham 2 parametert pass krte hai first starting index ye include hoga ending  index ye exclude hoga
// let ans = arr.slice(1,3);
// console.log(ans);







// 5.spread oprator
// let a =[1,2,3,4];
// let b=[5,6,7,8];

// // let ans=[...a,...b];
// // or  ham beech me koi bhi elemenet addon krr skte hai
// let ans=[...a,'a',...b,'h'];
// console.log(ans);


// //copy create
// let re=[...a];
// console.log(re);





// 6.iterating and array
// 1.for of loop
// 2.for each loop

// 1.for of loop
// let ans=[1,2,3,4,5];
// for(let key of ans)
// console.log(key);



// 2.for each loop
// let arr=[1,2,3,4,5];
// arr.forEach(

//     //call back fn
//     function(ans)
//         {
//            console.log(ans); 
//         }
// );





// 7.Joining of array
// let arr = [1,2,3,4,5];

// // join ke ander apko vo pairameter pass krna hai jiske according apko join krna hai
// let ans=arr.join('');
// console.log(ans);



// 8.split
// let str='hardic pandya';

// // jaha jha space hai uske besis per hmne split krr diya
// let ans=str.split(' ');
// console.log(ans);




// 9.sorting of Array
// let arr = [5,1,6,3];
// arr.sort();
// console.log(arr);




// 10.reverse
// let arr = [5,1,6,3];
// arr.reverse();
// console.log(arr);






// 11.Filtering array
// let arr = [1,-1,-2,3,4,5];

// let ans = arr.filter(
//     function(val)
//         {
//             ap apne hisab se condition de skte ho
//             return val>=0;
//         }
// )
// console.log(ans);

// let ans = arr.filter(val=>val>=0);
// console.log(ans);







// 12.Mapping of Array - primitive type
// let arr = [1,2,3,4,5];

// let ans = arr.map(
//     function(val)
//     {
//           return 'hanu'+val;
//     }
// )

// console.log(ans);

//or arrow fn

// let ans = arr.map( val=>'hanu'+val);

// console.log(ans);







// 13.Mapping with Object

// let arr = [1,2,-1];

// let ans = arr.filter(val=>val>=0);

// let r=ans.map(
//     function(num)
//     {
//         return {k:num};
//     }
// )

// console.log (r);




// 14.channing of array - app multiple fn ko alag alag use krne ke bjay ak sath hi use kr le

// let arr = [1,2,-1];

// let r=arr
//     .filter(val=>val>=0)
//     .map(
//         function(num)
//         {
//             return {k:num};
//         }
//     )

//     console.log (r);













