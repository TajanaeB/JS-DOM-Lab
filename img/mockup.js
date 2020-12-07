
let celsiusText = document.querySelector('#outputC')
let fahrenheitText = document.querySelector('#outputF')
let kelvinText = document.querySelector('#outputK')
let rankineText = document.querySelector('#outputR')
let scaleType = document.querySelector('#scale')


function findCelsius(){
	let fahrenheit = document.getElementById("textbox").value;
	let celsius; 
	if(fahrenheit != ''){
		console.log({fahrenheit});
		const parsedF = parseFloat(fahrenheit);
		console.log({parsedF})
		celsius = (parseFloat(fahrenheit) - 32) * 5/9;
		celsius = celsius.toFixed(2) + " C";
		console.log(typeof fahrenheit);
		document.getElementById("outputC").innerHTML = celsius;
	}
}

function findKelvin(){
	let fahrenheit = document.getElementById("textbox").value;
	let kelvin; 
	if(fahrenheit != ''){
		console.log({fahrenheit});
		const parsedF = parseFloat(fahrenheit);
		console.log({parsedF})
		kelvin = (parseFloat(fahrenheit) - 32) * 5/9 + 273.15;
		kelvin = kelvin.toFixed(2)+ " K";
		console.log(typeof fahrenheit);
		document.getElementById("outputK").innerHTML = kelvin;
	}
}

function findRankine(){
	let fahrenheit = document.getElementById("textbox").value;
	let rankine; 
	if(fahrenheit != ''){
		console.log({fahrenheit});
		const parsedF = parseFloat(fahrenheit);
		console.log({parsedF})
		rankine = (parseFloat(fahrenheit) + 459.67);
		rankine = rankine.toFixed(2)+ " R";
		console.log(typeof fahrenheit);
		document.getElementById("outputR").innerHTML = rankine;
	}
}


function findFahrenheit(){
    let fahrenheit = document.getElementById("textbox").value;
    document.getElementById("outputF").innerHTML = fahrenheit + " F";
}


function celsisusToCelsius () {
    let celsius = document.querySelector("textbox").value;
	document.getElementById("outputC").innerHTML = celsius + " C";
} 


function celsiusToFahrenheit () {
    let celsiusInput = document.querySelector("textbox").value
    let product = (parseInt(celsiusInput) * 9/5) + 32
    fahrenheitText.innerHTML = product.toFixed(2) + ' F'
}

function celsiusToKelvin () {
    let celsiusInput = document.querySelector("textbox").value
    let product = (parseInt(celsiusInput + 273.15))
    kelvinText.innerHTML = product.toFixed(2) + ' K'
}

function celsiusToRankine () {
    let celsiusInput = document.querySelector("textbox").value
    let product = (parseInt(celsiusInput) * 9/5 + 491.67)
    kelvinText.innerHTML = product.toFixed(2) + ' R'
}


function kelvinToKelvin () {
    let kelvin = document.querySelector("textbox").value;
	document.getElementById("outputK").innerHTML = kelvin + " K";
} 

function kelvinToFahrenheit () {
    let kelvinInput = document.querySelector("textbox").value
    let product = (parseInt(kelvinInput - 273) * 9/5 +32);
    fahrenheitText.innerHTML = product.toFixed(2) + ' F'
}

function kelvinToCelsius () {
    let kelvinInput = document.querySelector("textbox").value
    let product = (parseInt(kelvinInput - 273.15));
    celsiusText.innerHTML = product.toFixed(2) + ' C'
}

function kelvinToRankine () {
    let kelvinInput = document.querySelector("textbox").value
    let product = (parseInt(kelvinInput * 1.8))
	rankineText.innerHTML = product.toFixed(2) + ' R'
}


function rankineToRankine () {
    let rankine = document.querySelector("textbox").value;
	document.getElementById("outputR").innerHTML = rankine + " R";
} 

function rankineToFahrenheit () {
    let rankineInput = document.querySelector("textbox").value
    let product = (parseInt(rankineInput - 459.67));
    fahrenheitText.innerHTML = product.toFixed(2) + ' F'
}


function rankineToCelsius () {
    let kelvinInput = document.querySelector("textbox").value
    let product = (parseInt(kelvinInput - 491.67) * 5/9);
    fahrenheitText.innerHTML = product.toFixed(2) + ' C'
}

function rankineToKelvin () {
    let kelvinInput = document.querySelector("textbox").value
    let product = (parseInt(kelvinInput * 5/9));
    fahrenheitText.innerHTML = product.toFixed(2) + ' K'
}

function conversions () {

if (scaleType.value === 'faherenheit') {
	findFahrenheit()
	findCelsius()
	findKelvin()
	findRankine()
} else if (scaleType.value === 'celsius'){
	celsisusToCelsius()
	celsiusToFahrenheit()
	celsiusToRankine()
	celsiusToKelvin()
}
else if (scaleType.value === 'kelvin'){
	kelvinToKelvin()
	kelvinToCelsius()
	kelvinToRankine()
	kelvinToFahrenheit()
}
else if (scaleType.value === 'rankine') {
	rankineToRankine()
	rankineToFahrenheit()
	rankineToCelsius()
	rankineToKelvin()
}
}




function ClickCalculate(){
	findKelvin()
	findCelsius()
 	findRankine()
	findFahrenheit(	
	)
 }