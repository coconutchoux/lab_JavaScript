"use strict";
// JavaScript Type

// Number
// String
// Boolean
// Object
// - Function (type === Object)
// - Array
// - regExp
// Null
// Undefined
// Prototype
console.log(fooE); // undefined
console.log(fooD); 
// in not defined?
// Function === Object
function fooD() {
	// do Something
} 
// 함수 선언식 (Function Declaration)

var fooE = function() {
	// do Something
}
// 함수 표현식 (Function Expression)
// Hoisting(호이스팅)

var test = function() {
	var x = 0;
}
// hositing 설명

console.log(x); // undefined
// Valiable name is not defined
// undefined;
var x = 10; 
console.log(x); // 10
x = 20;
console.log(x); // 20

// Function === Object;
// Functional Programming Language; (함수형 프로그래밍 언어)
// 일급객체 (First Citizen, First Object);
// var f = function() { };
// function(function() { }) { }
// function x() {return function() { }}

var fruit = function(name, price) {
	this.name = name;
	this.price = price;
	this.getName = function() {
		return this.name;
	}
	return this;
};
// 생성자 함수

var orange = new fruit("Orange", 3000);
orange.color = "yellow";
var grape = new fruit("grape", 5000);
var banana = new fruit("banana", 9000);

// 인수 배열 (arguments);
var typeChecker = function(x) {
	if(arguments.length >= 1) {
		for(var i=0;i<arguments.length;i++) {
			console.log(typeof(arguments[i]));
		}
	}
	return typeof(x);
}

typeChecker(10, "10", banana,grape,orange);

// 재귀호출
var y = function() {
	y();
}

// scope , closure
// 변수, 함수 유효범위;
// JavaScript {key : value}
// { name : "Orange"}

var p;
// window = { p : undefined }
var o, b, x, z, w;
/* window = {
	o : undefined,
	b : undefined,
	x : undefined,
	z : undefined,
	w : undefined
} */
var korea = function() {
	console.log(japan);
	window.japan = null;
	// 개발하는 어떤 곳에서든 japan을 쓰겠다.
	// 미리 japan을 초기화 시켜 두겠다.
	var japan;
}
korea();

// closure
// 일급객체의 특징
// return function() { };
var x = function() {
	var z = 30;
	var x = 10;
	var sum = z + x;
	return function() {
		var y = z + x + sum;
		console.log(z);
		console.log(x);
		console.log(sum);
		console.log(y);	
	}
}

var yy = x();

var calc = function(num1) {
	var num1 = Number(num1);
	console.log("1st number: " + num1);
	return function(num2) {
		var num2 = Number(num2);
		console.log("2nd number : " + num2);
		return function(num3) {
			var num3 = Number(num3);
			return num1 + num2 + num3;
		}
	}
}

// callback 함수
// 불렀다가 돌아온다.
// a라는 활동을 해요.
// 그러고 나서, b를 해요.
var carousel = function() {
	var index = 0;
	return function() {
	}
}

// Module
var x = function() {
	var y = 10;
	return {
		init : function() { },
		local : function() { },
		apply : function() { }
	}
}
// 모듈화

// 나중에 도움이 될만한 서적
// Lisp 언어와 관련된 책
// 자바스크립트 함수형 프로그래밍

// 자바스크립트 상속
// 1. 의사클래스 상속
var phone = function(name,price) {
	this.name = name;
	if(price){this.price = price;}
	this.getName = function() { return this.name; }
	this.getPrice = function() {return this.price; }
	return this;
} // 기본생성자함수
var iphone = new phone("iphone 5s", 898000);
var iphone4s = new phone("iphone 4s", 459000);
var galegy = new phone("galegy");

// 객체를 기술하는 객체
var yz = {
	init : function() { },
	select : function() { },
	price : 899000
};
phone.prototype = yz;

// 프로토타입상속
phone.prototype.color = "gold";

// 이거는... 확인을 해보고 다시 말씀 드릴게요. 
// 함수를 이용한 상속
var xyz = function(z) {
	var statusValue = 10;
	return function() {
		console.log(statusValue);
	}
}
/*
var xx = xyz(function() {
	console.log(statusValue);
});
var yy = xyz(function() {
	console.log(20 + y);
});
var zz = xyz(function() {
	y = 90;
	console.log(y);
});
*/
