// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // Call the .length method to log the length of the variable
    return string.length

    // YOUR CODE ABOVE HERE //
}
console.log(length('Elephant'))
/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // Call the .toLowerCase method to change the input value to lowercase.
    return string.toLowerCase()

    // YOUR CODE ABOVE HERE //
}
console.log(toLowerCase('Hello'))
/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // Call the .UpperCase method to change the input value to uppercase.
    return string.toUpperCase()

    // YOUR CODE ABOVE HERE //
}
console.log(toUpperCase('carol baskins'))
/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // Replace spaces with dashes and convert to lowercase
    return string.replaceAll(' ', '-').toLowerCase();

    // YOUR CODE ABOVE HERE //
}
var dashInputString = 'Spider Man'
console.log(toDashCase(dashInputString))
/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // Convert the first character of the string to lowercase to ensure that it is the correct letter.
    var firstChar = string.charAt(0).toLowerCase();
    char = char.toLowerCase(); // To make sure that the input character is lowercase
    return firstChar === char;
    }
    //Calling the function    
    console.log(beginsWith('Intro', "I"))
    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // Convert the last character of the string to lowercase to ensure that it is the correct letter.
    var lastChar = string.charAt(string.length - 1).toLowerCase();
    char = char.toLowerCase(); // To make sure that the input character is lowercase
    return lastChar === char;


    // YOUR CODE ABOVE HERE //
}
console.log(endsWith('NO, THIS IS PATRICK', 'K'))
/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Concatenate two strings together with the + operator
return stringOne + stringTwo

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // Use the join method to concatenate all the strings in the args array
    return args.join('');
    // YOUR CODE ABOVE HERE //
}
console.log(join("My", "friends", "call", "me", "AJ"))
/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Compare the lengths of the two strings
    if (stringOne.length > stringTwo.length) {
        return stringOne;
    } else {
     return stringTwo;
  }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringTwo, stringOne) {
    // YOUR CODE BELOW HERE //
    // Use the localeCompare method to compare the strings
  return stringOne.localeCompare(stringTwo);
  
  
    // YOUR CODE ABOVE HERE //
  }
console.log(sortAscending("x", "y"));
console.log(sortAscending("y", "y"));
console.log(sortAscending("y", "x"));

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Use the localeCompare method to compare the strings
    return stringOne.localeCompare(stringTwo);

    // YOUR CODE ABOVE HERE //
}
console.log(sortDescending("a", "b"))
console.log(sortDescending("b", "b"))
console.log(sortDescending("b", "a"))


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
