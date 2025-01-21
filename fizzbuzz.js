
let message = "";

function append(number) {   

        if(number%3 == 0)
            message += "Fizz";

        if(number%5 == 0)
            message += "Buzz";
        
}

// Here, we create our main function.
function fizzbuzz() {    
    console.log('Welcome to FizzBuzz!');
    
    // Print numbers 1 - 100
    for(let i = 1; i<=195; i++) {
        let appended = false;
        message = "";

        if(i%11 == 0) {
            message+="Bong";
            appended = true;
        }

        if(i%7 == 0) {
            message += "Bang";
            append(i);
            appended = true;
        }

        if(i%13 ==0) {
            message = "Fezz" + message;
            append(i);
            appended = true;
        }

        if(!appended)
            append(i);
        
       
        if(message != "")
            console.log(message);
        else
            console.log(i);
    }    
}

// Now we run the main function...
fizzbuzz();
