function anglesFunction() {
    var x = parseInt(prompt("Enter a value between and including 1 and 180: ", "90"), 10);
    if (x < 1 | x > 180) {
        alert("Value not within specified range");
    } else {
        var angle = x;
        if (angle < 90) {
            alert(angle + " degrees angle is an acute angle. ")
        } else if (angle == 90) {
            alert(angle + " degrees is a right angle.")
        } else if (angle > 90 && angle < 180) {
            alert(angle + " degrees is an obtuse angle.")
        } else if (angle == 180) {
            alert(angle + " degrees is a straight angle.")
        }
    }
}