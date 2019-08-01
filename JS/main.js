function factorial(){
    num = parseInt(document.getElementById("num").value)
    message = ""
    res = 1;

    if(num){
    for(let i=2;i<=num;i++){
        res *= i;
    }
    message = "Factorial of "+num+ "is" +res;

document.getElementById("res").innerHTML=message;
    }
}


function digitsum(){
    num = parseInt(document.getElementById("num").value)
    message1=""
    s = 0;
    if(num){
        while(num!=0){
            s += parseInt(num % 10);
            num = parseInt(num / 10);
        }
        message1 = "Sum of digits of : "+num+" is " +s;
document.getElementById("s").innerHTML=message1;
    }

}