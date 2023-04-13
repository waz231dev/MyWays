function fizzBuzz(phoneNumber){
    let remainder,sum = 0;
    while(phoneNumber){
        remainder = phoneNumber%10;
        sum = sum + remainder;
        phoneNumber = Math.floor(phoneNumber/10);
    }
    let ans = ""
    for(let i = 1 ; i <= sum ; i++){
        if(i % 4 == 0 && i % 5 == 0){
            ans+="FizzBuzz ";
        }else if(i % 4 == 0){
            ans+= "Fizz ";
        }else if(i % 5 == 0){
            ans +="Buzz ";
        }else{
            ans += i+" ";
        }
    }
    console.log(ans);
}

fizzBuzz(7060680396);
