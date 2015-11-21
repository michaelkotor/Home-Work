function task1 () {
	var n = document.querySelector("#n").value;
	if (n == "") {
		document.querySelector("#t1").className += " has-error";
		document.querySelector("#ans1").innerHTML = "";
		return;
	}
	document.querySelector("#t1").className = "form-inline has-success";
	n = Math.abs(n);
	if (n > 9 && n < 100) document.querySelector("#ans1").innerHTML = "Двузначное";
	else if (n > 999 && n < 10000) document.querySelector("#ans1").innerHTML = "Четырёхзначное";
	else if (n > 9999 && n < 100000) document.querySelector("#ans1").innerHTML = "Пятизначное";
	else document.querySelector("#ans1").innerHTML = "Число не двузначное или четырехзначное или пятизначное.";
}
function task2 () {
	var a = 1, b = 1,  result = "1 1";
	for (var i = 3; i <= 8; i++) {
		var c = a;
		a = b;
		b = b + c;
		result = result + " " + b; 
	};
	document.querySelector("#ans2").innerHTML = result;
}
function task3 () {
	var a = document.querySelector("#a").value;
	var b = document.querySelector("#b").value;
	var result = 0;
	if (a >= b || a == "" || b == "") {
		document.querySelector("#t3").className += " has-error";
		document.querySelector("#ans3").innerHTML = "";
		return;
	}
	a = parseInt(a);
	b = parseInt(b);
	document.querySelector("#t3").className = "form-inline has-success";
	for (var i = a; i <= b; i++) 
		result = result + i;
	document.querySelector("#ans3").innerHTML = (b - a + 1)*(a + b) / 2 + " " + result;
}