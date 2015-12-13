var currentQuestion = 0;
var numberOfRightAnswers = 0;
var test = [
	{
		question: "Общим для деятельности первых древнерусских князей являлось (являлась)",
		choise: ["Проведение переписи населения", "Введение десятины", "Введение пятины", "Полюдье"],
		type: "radio",
		answer: 4
	},
	{
		question: "Выберите из списка основные итоги экономического развития России в первой четверти XVIII в. (3 ответа)",
		choise: ["Развитие наемного труда", "Рост торгово-экономических связей с Европой", "Рост числа мануфактур", "Внедрение новых орудий труда в сельском хозяйстве", "Развитие крестьянских кустарных промыслов"], 
		type: "checkbox",
		answer: [true, true, true, false, false]
	},
	{
		question: "Расположите названия событий в хронологическом порядке. Запишите цифры, которыми обозначены события, в правильной последовательности без пробелов и запятых. </br><b>Пример:</b> 12345.</br></br>1. Утверждение «Положения о мерах к охранению государственной безопасности и общественного спокойствия»</br>2. Учреждение Синода</br>3. Открытие государственного Дворянского банка</br>4. Открытие Академии наук</br>5. Отмена рекрутской системы комплектования армии и введение всеобщей воинской повинности.",
		type: "",
		answer: "24351"
	},
	{
		question: "Политическое течение, выступающее за уничтожение государства как принудительной формы власти и замену его свободным, добровольным объединением граждан называется ___________ . </br>В ответ запишите одно слово с маленькой буквы.",
		type: "",
		answer: "анархизм"
	},
	{
		question: "Авария на Чернобыльской АЭС. </br>В ответ запишите год. <b>Пример: </b>1234.",
		type: "number",
		answer: 1986
	},
	{
		question: "Прочтите отрывок из книги руководителя СССР и укажите название политики, которую он проводил.</br>«…Много сейчас непривычного в нашей стране: скажем, многомандатные округа по выборам в Советы; совместные с иностранными фирмами предприятия; самофинансирование заводов и фабрик, совхозов, колхозов; снятие ограничений с подсобных хозяйств, …расширение кооперативной деятельности; поощрение индивидуальной трудовой деятельности в мелком производстве и торговле…» </br>В ответ запишите одно слово с маленькой буквы.",
		type: "",
		answer: "перестройка"
	},
	{
		question: "Что было одной из причин отступления французской армии из Москвы осенью 1812 г.?",
		choise: ["Массовые восстания в странах Европы против власти Наполеона", "Совместные действия союзных армий Пруссии, Австрии и России", "Решение Наполеона отправить часть своих войск из России в Испанию", "Невозможность для Наполеона обеспечить армию боеприпасами, фуражом"],
		type: "radio",
		answer: 4
	},
	{
		question: "Люблинская уния. Образование Речи Посполитой. </br>В ответ запишите год. <b>Пример: </b>1234.",
		type: "number",
		answer: 1569
	},
	{
		question: "Как назывался высший сословно-представительный орган в России XVI–XVII вв.?",
		choise: ["Вече", "Дума", "Земский собор", "Государственный Совет"],
		type: "radio",
		answer: 3
	},
	{
		question: "Образование Золотой Орды. </br>В ответ запишите год. <b>Пример: </b>1234.",
		type: "number",
		answer: 1243
	},
	{
		question: "<img src='https://ege.yandex.ru/media/ege/history/101/B8/task_1_b8.png'><br/>Напишите имя русского полководца XIII в., одержавшего победы над неприятелем в сражениях, отмеченных на карте цифрами «3» и «4». </br>В ответ запишите имя и фамилию с больших букв.",
		type: "",
		answer: "Александр Невский"
	}
];
function writeQuestion() {
	var current = test[currentQuestion];
	document.querySelector("#question h1").innerHTML = "Задание " + (currentQuestion + 1);
	document.querySelector("#question p").innerHTML = current.question;
	if (current.type == "checkbox" || current.type == "radio") {
		var div = "";
		for (var i = 0; i < current.choise.length; i++)
			div += '<div class="form-group"><input class="form-control" name="inpt" type="'+current.type+'"/><label class="control-label">'+current.choise[i]+'</label></div>';
		document.querySelector("#question form div").innerHTML = div;
	} 
	else document.querySelector("#question form div").innerHTML = '<div class="form-group"><input class="form-control" name="inpt" type="'+current.type+'"/></div>';
}
function check() {
	var current = test[currentQuestion];
	var ans = true;
	if (current.type == "checkbox") {
		var mas = document.querySelectorAll("input[name='inpt']");
		for (i = 0; i < current.choise.length; i++) {	
			if (mas[i].checked != current.answer[i]) {
				ans = false;
				mas[i].parentElement.className+=" has-error";
			}
			if (mas[i].checked && current.answer[i]) mas[i].parentElement.className+=" has-success";
			mas[i].disabled = "disabled";
		} 
	}
	else if (current.type == "radio"){
		ans = document.querySelectorAll("input[name='inpt']")[current.answer-1].checked;
		var mas = document.querySelectorAll("input[name='inpt']");
		for (i = 0; i < mas.length; i++) {
			if ((mas[i].checked && current.answer != i+1) || (current.answer == i+1 && !mas[i].checked)) mas[i].parentElement.className+=" has-error";
			if (mas[i].checked && current.answer == i+1) mas[i].parentElement.className+=" has-success";
			mas[i].disabled = "disabled";
		}
	}
	else {
		ans = document.querySelector("input[name='inpt']").value == current.answer;
		if (ans) document.querySelector("input[name='inpt']").parentElement.className+=" has-success";
		else {
			document.querySelector("input[name='inpt']").parentElement.className+=" has-error";
			var p = document.createElement('p');
			p.innerHTML = "</br><b>Правильный ответ:</b> " + current.answer;
			document.querySelector("input[name='inpt']").parentElement.appendChild(p);
		} 

	}
		
	if (ans) numberOfRightAnswers++;
	document.querySelector('input[type="submit"]').value = "Далее";
	document.querySelector('form').onsubmit = function(){
		send();
		return false;
	}
}
function send() {
	document.querySelector('input[type="submit"]').value = "Проверить";
	document.querySelector('form').onsubmit = function(){ 
		check(); 
		return false;
	}

	if (currentQuestion < test.length - 1) {
		currentQuestion++;
		writeQuestion();
	} 
	else {
		document.querySelector("#result").style.display = "block";
		document.querySelector("#question").style.display = "none";
		var result = parseInt(numberOfRightAnswers / test.length * 100);
		document.querySelector("#res").innerHTML = result + "%";
	    $('#containerForGraph').highcharts({
	        chart: {
	            type: 'pie',
	            options3d: {
	                enabled: true,
	                alpha: 45,
	                beta: 0
	            }
	        },
	        title: {
	            text: 'График правильных и неправильных ответов'
	        },
	        tooltip: {
	            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                depth: 35,
	                dataLabels: {
	                    enabled: true,
	                    format: '{point.name}'
	                }
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: 'Результат',
	            data: [
	                ['Правильные', result],
	                ['Не правильные', 100 - result]
	            ]
	        }]
	    });
	}
}

(function(){
	writeQuestion();
	document.querySelector("#result").style.display="none";
})();
