//arrow functions =>Print odd numbers in an array 

let arr=[1,2,3,4,5,6,7,8,9,10],ans=[];
let x=(arr)=>{
    for(let k of arr)
    {
        if((k%2)!==0)
        {
         ans.push(k);
        }
    }
    return ans;
}
console.log(x(arr));

//arrow functions =>Convert all the strings to title caps in a string array

arr=["hello","hi","how","why"],k1=[],arrans=[];
x=(arr)=>{ for(let k of arr)
{
k1=k.split("");
for(let j=0;j<k1.length;j++)
{
    if(j===0)
    arrans.push(k1[j].toUpperCase());
    else
    arrans.push(k1[j].toLowerCase());
}
arrans.push(" ");
}
return arrans.join("");
}
console.log(x(arr));

//arrow functions =>Sum of all numbers in an array

arr=[1,2,3,4,5,6,7,8,9,10]
let tem=0;
let x1=(arr)=>
{
    for(i=0;i<arr.length;i++)
{
    tem=parseInt(arr[i])+parseInt(tem);
}
return tem;
}
console.log(x1(arr));

//arrow functions =>Return all the prime numbers in an array

arr=[1,2,3,4,5,6,7,8,9,10];
let arr1=[];
let x2=(arr)=>{
    if(arr.length===0)
    return 0
    for(let i=0;i<arr.length;i++)
    {
       tem=0;
        for(let j=1;j<=arr[i];j++)
        {
            if((arr[i]%j)===0)
            {
                tem=tem+1;
                if(tem===3)
                break;
            }
        } 
        if(tem<=2)
        {
        arr1.push(arr[i]);
        }
    }
    return arr1.join(" ");
}
console.log(x2(arr));

//arrow functions =>Return all the palindromes in an array

arr=["hello","hi","wow","eye"],arrans=[],k1=[];
x=(arr)=>
{ 
for(let k of arr)
{
if(arr.length===0)
return 0;
k1=k.split("").reverse().join("");
if(k1===k)
{
arrans.push(k);
}
}
return arrans.join(" ");
};
console.log(x(arr));