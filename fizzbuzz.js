

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Print numbers 1 - 100
    for(let i = 1; i<=100; i++) {
        // Number divisible by 3
        if(i%3 == 0 && i%5==0)
            console.log("FizzBuzz");
        else if(i%3 == 0) 
            console.log("Fizz");
        //Number divisible by 5
        else if(i%5 == 0)
            console.log("Buzz");        
        else
            console.log(i);
    }    
}

// Now we run the main function...
fizzbuzz();
