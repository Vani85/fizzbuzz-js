

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Print numbers 1 - 100
    for(var i = 1; i<=100; i++) {
        // Number divisible by 3
        if(i%3 == 0) 
            console.log("Fizz");
        else
            console.log(i);
    }    
}

// Now we run the main function...
fizzbuzz();
