function task1 () {
	var n = document.querySelector("#n").value;
	n = Math.abs(n);
	if (n>9 && n<100) document.querySelector("#ans").innerHTML = "Двузначное";
	else if (n>999 && n<10000) document.querySelector("#ans").innerHTML = "Четырёхзначное";
	else if (n>9999 && n<100000) document.querySelector("#ans").innerHTML = "Пятизначное";
	else document.querySelector("#ans").innerHTML = "Число не двузначное или четырехзначное или пятизначное.";
}	