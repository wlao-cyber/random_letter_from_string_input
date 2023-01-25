export function generate_letter()
{
    let name_input = document.getElementById("name_input").value;
    // console.log(Math.random())
    // console.log(name_input.length)


    // To get the letter within a string, set to its index.
    // a string has the maximum index of its length minus 1
    // multiply by Math.random to get probability from 0 to 100% of getting the maximum number 
    // Then chain with Math.floor to round down.

    // Can also use .charAt() instead of calling an index of the variable.
    // There are two ways to access an individual character in a string. 
    // The first is the charAt method, part of ECMAScript 3. 
    // And the second way, standardizeed in ECMAScript 5, is treating a string as an array-like object, in which each individual character corresponds to a numerical index.
    document.getElementById("console").value = name_input[Math.floor((name_input.length - 1)*Math.random())]
}