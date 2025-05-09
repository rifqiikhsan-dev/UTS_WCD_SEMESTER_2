function circleProperties(radius) {
    var diameter = 2 * radius;
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * radius * radius;
    console.log("Diameter = " + diameter);
    console.log("Circumference = " + circumference.toFixed(4));
    console.log("Area = " + area.toFixed(3));
}
circleProperties(5);
