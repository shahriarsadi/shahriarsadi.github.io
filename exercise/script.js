function numElements() {
    var paragraphs = document.getElementsByTagName('p')
    var num = paragraphs.length;
    alert("There are " + num + " paragraph tags on this page")
}

function numId1() {
    var meaty = document.getElementById('meaty')
    var paras1 = meaty.getElementsByTagName('p')
    var num1 = paras1.length
    alert("There are " + num1 + " element(s) in the first ID")
}

function numId2() {
    var drinks = document.getElementById('drinks')
    var paras2 = drinks.getElementsByTagName('p')
    var num2 = paras2.length
    alert("There are " + num2 + " element(s) in the second ID")
}