function addNumber(num1,num2)
{
    if(num2 == undefined)
    {
        num2 =0;
    }
    return num1+num2;
}
const res = addNumber(15,2);
console.log(res);