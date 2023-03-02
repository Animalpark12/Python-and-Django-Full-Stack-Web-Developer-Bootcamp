var ham = 5;
var cheese = 10;

var report = "blank"

if(ham >= 10 && cheese >= 10){
    report = "Strong sales on both cheese and ham"
}else if (ham === 0 && cheese === 0){
    report = "Nothing sold!"
}else{
    report = "We had some sales of items"
}

console.log(report);