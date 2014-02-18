"use strict";

(function(d) {
	// node setup
	// HTML Element(div, button, p)
	// w === window, n === navigator, d === document
	var np = function(tag, properties) {
		var tag = d.createElement(tag);
		for(var key in properties) {
			if(String(key) === "text") {
				tag.innerHTML = properties[key];
			} else {
				tag.setAttribute(key, properties[key]);
			}
		}
		return tag;
	};
	// Progressive Enhancement
	// ARIA (Accessible Rich Internet Application)
	// $("#div").text("");
	// <div class="hello" style="">000</div>
	// Number Input
	// [] length
	// var arr = [1,2,3,4]
	// arr.length = 4
	// for(var i=0; i<arr.length;i++) { }
	var paragraph = np("p", {"class":"node-text",text:0});
	var inputNumber = function() {
		var tmpNumber = Number(paragraph.innerHTML);
		if(tmpNumber === 0 && this.value === 0) {return false;}
		if(tmpNumber === 0 && this.value !== 0)	{paragraph.innerHTML = "";}
		paragraph.innerHTML += this.value;
	}
	d.body.appendChild(paragraph);
	// set btns
	var btnArr = [];
	for(var i=0;i<10;i++){
		btnArr.push(np("button", {
			type : "button",
			"class" : "btn_number",
			text : i,
			value: Number(i)
		}));
		btnArr[i].addEventListener("click", inputNumber, false);
		d.body.appendChild(btnArr[i]);
	};
	// operator btn add
	var operator = {
		plus   : np("button", {type:"button", text:"+", value:"+"}),
		minus  : np("button", {type:"button", text:"-", value:"-"}),
		muiti  : np("button", {type:"button", text:"*", value:"*"}),
		divis  : np("button", {type:"button", text:"/", value:"/"}),
		resBtn : np("button", {type:"button", text:"=", value:"="})
	};
	// real logic
	var result = 0;
	var num1, num2, tmpCalc;
	var calc = function(state) {
		num1 = Number(paragraph.innerHTML);
		if(result === undefined) {
			paragraph = np("p", {"class":"node-text",text:0});
			d.body.appendChild(paragraph);
		}
		if(result !== undefined) {paragraph.innerHTML = result;}
		return function() {
			num2 = Number(paragraph.innerHTML);
			switch(state) {
				case "+" : return num1 + num2;
				case "-" : return num1 - num2;
				case "*" : return num1 * num2;
				case "/" : return num1 / num2;
			}
		}
	}
	
	for(var key in operator) {
		operator[key].addEventListener("click", function() {
			if(tmpCalc !== undefined) {
				result = tmpCalc();
				paragraph = np("p", {"class":"node-text",text:result});
				d.body.appendChild(paragraph);
				tmpCalc = calc(this.value);
			} else {
				tmpCalc = calc(this.value);
			}
		}, false);
		d.body.appendChild(operator[key]);
	}
})(document)

// Step
// 1. 첫번째 숫자를 입력한다.
// 2. 사칙연산 버튼을 클릭한다. (+,-,*,/)
// 3. 케이스 3가지
// 3.1. 두번째 숫자를 입력하지 않고 = 를 클릭한다. (사칙연산은 기존버튼을 활용하도록 한다. 즉 state scope가 엎어지지 않는한 calc안에 state는 항상 First)
// 3.2. 두번째 숫자를 입력하지 않고 사칙연산버튼(+,-,*,/)을 클릭한다. 이럴 경우 state만 엎어지도록 한다.
// 3.3. 두번째 숫자를 입력하고, =를 클릭한다.
// 3.4. 두번째 숫자를 입력하고, 사칙연산버튼을 클릭한다. 새로운 값을 받음과 동시에 state를 변경해야한다.
