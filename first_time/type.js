"use strict";
// ECMA-262 5 Edition에서 추가된 모드입니다.
// 자바스크립트의 문법을 엄격하게 검수하도록 브라우저가 작동합니다.
// 이 코드를 넣는다고 하여 IE 구버전에서 에러가 나는게 아니니 그냥 씁시다.

// var {variable_name}
// !"use strict";
// {variable_name}
// 변수를 정의합니다.
// 변수의 이름 첫번째로 숫자가 올 수 없습니다.
// 자바스크립트에서 하이픈 기호(-)는 사용이 불가합니다.
// var server-name = value;
// var serverName  = value;
// getElementById()
// Example

var x; // 변수를 선언합니다.
x = 10; // 변수 x에 10을 넣습니다.

var y = 10; // 변수 y를 선언함과 동시에 10이라는 숫자를 넣습니다.

var xx, yy, zz;
// 변수를 동시에 정의합니다.

var xxx = 10,
    yyy = 20,
    zzz = 30;
// 변수를 동시에 선언함과 동시에 숫자를 넣습니다.

// Number
var num = 1;
// 자료형은 숫자입니다.
// C
// int num;
// string num;

// Number
// String
// Boolean
// Undefined
// Null
// Object
var num  = 1;
var str  = "string";
var str2 = 'string';
var bool = true; // false
var und;
var n    = null;
function fncc() {};
var fnc  = function(name) {
	this.name = name;
	return this;
};
var fc   = function fc() {};
//(function(w,d) { })(window,document);
var choeun = new fnc("choeun");
// var iu     = new fnc(function() { }()) {}
var obj = { };
// var nObj = new object();
var obj2 = {
	name : "choeun",
	country : "korea",
	age  : 22,
	log  : function() { },
	family : [
		{},{},{},{}
	]
};
// var obj2 = new object();
// obj2.name = "choeun";
// obj2.family = new array();
// obj2.family.push({});
var choeun = new fnc({});
var obj = {}; // var obj = new object()
var arr = []; // var arr = new array()

var calc = function(num1, num2) {
	var num1 = Number(num1),
	    num2 = Number(num2);
	return {
		sum : (function() { return num1 + num2 })(),
		minus : (function() { return num1 - num2 })(),
		multiply : (function() { return num1 * num2 })(),
		division : (function() { return num1 / num2 })()
	}
}

var korea = document.getElementById("korea");
// console.log(korea);

HTMLDivElement.prototype.isText = function() {
	return this.innerHTML;
}

korea.isText = function() {
	return this.id;
}

var kr = korea.isText();
// console.log(kr);

var jp = document.getElementById("japan").isText();
// console.log(jp);

// console.log(document);

console.log(korea);
var $ = function(selector) {
	return $.pbn.init(selector);
}

$.prototype = $.pbn = {
	init : function(selector) {
		this.tag = document.querySelector(selector);
		return this;
	},
	on : function(eventName, func, bubble) {
		var tag = this.tag;
		tag.addEventListener(eventName, func, bubble);
		return this;
	}
}

$("#korea").on("click", function() {
	console.log(this);
	console.log(this.isText());
}, false);

var xx = function(keyword) {
	console.log(keyword);
}

xx("china is fuck");

var p = 10;
// window.p = 10;

window.p = 10;

var obj = {
	init : function() {
		return this;	
	}
}

var p = obj.init();
console.log(p);
