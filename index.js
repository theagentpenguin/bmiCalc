function bmiCalc(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let BMI = weight/(height/100)**2;
    document.getElementById("result").innerHTML = `Your BMI is ${BMI.toFixed(2)}`;
}