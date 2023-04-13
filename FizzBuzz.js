function fizzBuzz(phoneNumber){
    let remainder,sum = 0;
    while(phoneNumber){
        remainder = phoneNumber%10;
        sum = sum + remainder;
        phoneNumber = Math.floor(phoneNumber/10);
    }

    for(let i = 1 ; i <= sum ; i++){
        if(i % 4 == 0 && i % 5 == 0){
            console.log("FizzBuzz ");
        }else if(i % 4 == 0){
            console.log("Fizz ");
        }else if(i % 5 == 0){
            console.log("Buzz ");
        }else{
            console.log(i+" ");
        }
    }
}

fizzBuzz(7060680396);