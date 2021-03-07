

    // Currying is a method of making functions more flexible.

    // With a curried function, you can pass all of the arguments that the function is expecting and get the result

    var myCurryFunction = function(word) {

         return function(user) {

                return [word , ", " , user].join("");

         };
    };


    var HelloUser = myCurryFunction("Hi");


    HelloUser("Ganesh"); // Output: "Hi, Ganesh"


    // can also call like this

    myFirstCurry("Hey, How Are You!")("Ganesh"); // Output: "Hey, How Are You! Ganesh"
