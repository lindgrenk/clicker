"use strict";

var counter = 0; //keeps track of points
var cost = 0; //upgrade cost
var pps = 0; //points per second


var upg1 = { amount: 0, cost: 10, multi: 2 };
var upg2 = { amount: 0, cost: 100, multi: 4 };
var upg3 = { amount: 0, cost: 1000, multi: 6 };
var upg4 = { amount: 0, cost: 10000, multi: 8 };
var upg5 = { amount: 0, cost: 100000, multi: 10 };

var mouseclicker = document.getElementById('clicker').addEventListener("click", clicker);

function clicker() {
	counter += 1;
	document.getElementById("points").innerHTML = counter;
}

// Gets all the upgrade buttons and adds event listener
document.getElementById('upg1').addEventListener("click", upgrade1);
document.getElementById('upg2').addEventListener("click", upgrade2);
document.getElementById('upg3').addEventListener("click", upgrade3);
document.getElementById('upg4').addEventListener("click", upgrade4);
document.getElementById('upg5').addEventListener("click", upgrade5);

function buttontic() {

	if (upg1.cost * (upg1.amount + 1) <= counter) {
		document.getElementById('upg1').disabled = false;
	} else {
		document.getElementById('upg1').disabled = true;
	}

	if (upg2.cost * (upg2.amount + 1) <= counter) {
		document.getElementById('upg2').disabled = false;
	} else {
		document.getElementById('upg2').disabled = true;
	}

	if (upg3.cost * (upg3.amount + 1) <= counter) {
		document.getElementById('upg3').disabled = false;
	} else {
		document.getElementById('upg3').disabled = true;
	}

	if (upg4.cost * (upg4.amount + 1) <= counter) {
		document.getElementById('upg4').disabled = false;
	} else {
		document.getElementById('upg4').disabled = true;
	}

	if (upg5.cost * (upg5.amount + 1) <= counter) {
		document.getElementById('upg5').disabled = false;
	} else {
		document.getElementById('upg5').disabled = true;
	}
}
setInterval(buttontic, 100);

function gametic() {

	if (upg1.amount > 0) {
		counter += upg1.amount * upg1.multi;
	}

	if (upg2.amount > 0) {
		counter += upg2.amount * upg2.multi;
	}

	if (upg3.amount > 0) {
		counter += upg3.amount * upg3.multi;
	}

	if (upg4.amount > 0) {
		counter += upg4.amount * upg4.multi;
	}

	if (upg5.amount > 0) {
		counter += upg5.amount * upg5.multi;
	}

	pps = upg1.multi * upg1.amount;
	pps += upg2.multi * upg2.amount;
	pps += upg3.multi * upg3.amount;
	pps += upg4.multi * upg4.amount;
	pps += upg5.multi * upg5.amount;

	document.getElementById('pps').innerHTML = pps + " points per second";
	document.getElementById('points').innerHTML = counter;
}
setInterval(gametic, 1000);

function upgrade1() {

	cost = upg1.cost * (upg1.amount + 1);

	if (counter < cost) {
		console.log("need " + (cost - counter) + " more candy");
	} else {
		counter -= cost;
		upg1.amount += 1;
		document.getElementById('upg1cost').innerHTML = "Costs " + upg1.cost * (upg1.amount + 1);
		document.getElementById('upg1count').innerHTML = "Have " + upg1.amount;
	}
}

function upgrade2() {

	cost = upg2.cost;

	if (counter < cost) {
		console.log("need " + (cost - counter) + " more candy");
	} else {
		counter -= cost;
		upg2.amount += 1;
		document.getElementById('upg2cost').innerHTML = "Costs " + upg2.cost * (upg2.amount + 1);
		document.getElementById('upg2count').innerHTML = "Have " + upg2.amount;
	}
}

function upgrade3() {

	cost = upg3.cost;

	if (counter < cost) {
		console.log("need " + (cost - counter) + " more candy");
	} else {
		counter -= cost;
		upg3.amount += 1;
		document.getElementById('upg3cost').innerHTML = "Costs " + upg3.cost * (upg3.amount + 1);
		document.getElementById('upg3count').innerHTML = "Have " + upg3.amount;
	}
}

function upgrade4() {

	cost = upg4.cost;

	if (counter < cost) {
		console.log("need " + (cost - counter) + " more candy");
	} else {
		counter -= cost;
		upg4.amount += 1;
		document.getElementById('upg4cost').innerHTML = "Costs " + upg4.cost * (upg4.amount + 1);
		document.getElementById('upg4count').innerHTML = "Have " + upg4.amount;
	}
}

function upgrade5() {

	cost = upg5.cost;

	if (counter < cost) {
		console.log("need " + (cost - counter) + " more candy");
	} else {
		counter -= cost;
		upg5.amount += 1;
		document.getElementById('upg5cost').innerHTML = "Costs " + upg5.cost * (upg5.amount + 1);
		document.getElementById('upg5count').innerHTML = "Have " + upg5.amount;
	}
}