let html = document.querySelector('.html');
html.innerHTML = 'my name is rayhan this my programming hero project';
let html2 = document.querySelector('.html');
html2.innerHTML = 'ami varite jete cai';

let num1 = 20;
let num2 = 21;

let result = num1*num2;
console.log(result);

let mobile = new mobile1('sumsung','4gb','128gb','red');
function mobile1(model,ram,storage,color){
    this.model = model;
    this.ram =ram;
    this.storage = storage;
    this.color = color;
    this.mobile2 = function(){
        console.log(this.model);
        console.log(this.ram);
        console.log(this.storage);
        console.log(this.color);
    }
}
mobile.mobile2();
// two deffent way to array declire
let name = new Array(5);
name[0] = 'imran';
name[1]='rakib';
name[2] = 'sabbir';
name[3] = 'shanto';
console.log(name[0]);

let name1 = ['sakib','siyam','rafsan'];
console.log(name1[2])

