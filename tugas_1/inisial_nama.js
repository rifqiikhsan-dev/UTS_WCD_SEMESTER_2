function initials(name) {
    var result = "";
    var takeNext = true;
    for (var i = 0; i < name.length; i++) {
        var currentChar = name[i];
        if (takeNext && currentChar !== " ") {
            result += currentChar.toUpperCase();
            takeNext = false;
        }
        if (currentChar === " ") {
            takeNext = true;
        }
    }
    return result;
}
console.log(initials("John Doe")); // Output: JD
