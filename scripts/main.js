function testFunctions()
{
    document.getElementById("h1").innerHTML = getPizzaType(myPizzaOrder);
    document.getElementById("h2").innerHTML = addTax(myPizzaOrder);
    document.getElementById("h3").innerHTML = completeOrder(addTax(myPizzaOrder));
    document.getElementById("h4").innerHTML = allTheNumbers(5);
    document.getElementById("h5").innerHTML = getEvens(10);
    document.getElementById("h6").innerHTML = getLastElement(arrTestTwo);
    document.getElementById("h7").innerHTML = combineArrays(arrTestOne,arrTestTwo);
    document.getElementById("h8").innerHTML = isPalindrone(palTestTwo);
}

//Declarations
const arrTestOne=[1,2,3,4,5,6,7,8,9,10];
const arrTestTwo=["one","two","three","four","five","six","seven","eight","nine","ten"];
let palTestOne="Race car";
let palTestTwo="not Pali ndrone";

//#1
const myPizzaOrder=["Pepperoni", 12.99, false];
//#2
function getPizzaType(a)
{
    return a[0];
}
//#3
function addTax(a)
{
    a = [a[0],a[1],(Math.round(((a[1]*0.0925) + Number.EPSILON) * 100) / 100),a[2]];
    return a;   
}
//#4
function completeOrder(a)
{
    a[3]=true;
    return a;
}
//#5
function allTheNumbers(a)
{
    let arr = [" "];
    if(a>0)
    {
        arr[0]=1
        for(let i = 0;i<a-1;i++)
        {
            arr[i] = i+1;
        }
    }
return arr;
}
//#6
function getEvens(a)
{
    let arr = [" "];
    let j = 0;
    if(a>0)
    {
    for (let i = 0; i<a; i++)
    {
        if(i%2!=0)
        {
            arr[j]=i+1;
            j++;
        }
    }
    }
return arr;
}
//#7
function getLastElement(a)
{
    return a[a.length-1];
}
//#8
function combineArrays(a,b)
{
let newArr=[];
for(let i = 0;i<(a.length);i++)
{
    newArr[i]=a[i];
}
for(let i = 0;i<(b.length);i++)
{
    newArr[i+a.length]=b[i];
}
return newArr;
}
//#9
function isPalindrone(a)
{
    a=a.split(" ").join("");
    a=a.toLowerCase();
    const len = a.length;
    for (let i = 0; i < len / 2; i++) {
        if (a[i] !== a[len - 1 - i]) {
            return false;
        }
    }
    return true;
}