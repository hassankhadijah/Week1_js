let score = 50;
if (score > 90) {
    console.log("A+");
}
else if(score > 80 && score <= 90) {
    console.log("A");
}
else if (score > 70 && score <= 80) {
    console.log("B");
}
else if (score > 60 && score <= 70) {
    console.log("C");
}
else if (score > 50 && score <= 60) {
    console.log("D");
}
else if (score > 40 && score <= 50) {
    console.log("D");
}
else if (score > 30 && score <= 40) {
    console.log("E");
}
else if (score > 20 && score <=30) {
    console.log("F");
}
else {
    console.log("Fail, retake the class");
}