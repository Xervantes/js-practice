/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 * Forced to use .split, .reverse, .join.
 * For practice with try, catch.
 */
function reverseString(s) {
    try {
        let arr = s.split("");
        arr.reverse();
        s = arr.join("");
        console.log(s);
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}
