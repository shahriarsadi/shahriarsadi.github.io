var solutionDiv = document.getElementById("solution")
function squareNumber() {
    var num_squared = document.getElementById('square-input').value;
    result_squared = (num_squared**2)
    
    solutionDiv.innerHTML = "number squared " + num_squared + " is " + result_squared
}

function halfNumber() {
    var num_halved = document.getElementById('half-input').value;
    result_halved = (num_halved/2)
    
    solutionDiv.innerHTML = "Half of " + num_halved + " is " + result_halved
}

function percentOf() {
    var num1 = document.getElementById('percent1-input').value;
    var num2 = document.getElementById('percent2-input').value;
    result_percent = (num1/num2)*100
    
    solutionDiv.innerHTML = num1 + " is " + result_percent + "% of " + num2
}

function areaOfCircle() {
    var radius = document.getElementById('area-input').value;
    result_circle = Math.PI*(radius**2)
    
    solutionDiv.innerHTML = "The area for a circle with radius " + radius + " is " + result_circle
}

var squareButton = document.getElementById('square-button')
squareButton.addEventListener('click', squareNumber)

var halfButton = document.getElementById('half-button')
halfButton.addEventListener('click', halfNumber)

var percentButton = document.getElementById('percent-button')
percentButton.addEventListener('click', percentOf)

var areaButton = document.getElementById('area-button')
areaButton.addEventListener('click', areaOfCircle)