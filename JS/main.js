"use strict"

import {a,b,ind} from "./module.js";
let arr=[];
let IDarrin=[];
console.log(a.replace(/[^a-zA-Z ]/g, "").toLowerCase());// нормируем текст
function cezar(a,n=0){
    let amount=0
    if(n==0){
    amount=  Math.random() * (25 - 1) + 1;
    }else{
        amount=n;
    }
    var output = "";
    for (var i = 0; i < a.length; i++) {
        var c = a[i];
        if (c.match(/[a-z]/i)) {
            var code = a.charCodeAt(i);
             if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += c;
    }
    // All done!
    return output;
};
function  alphabet(z){
    let sum=0;
    let  b= {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0};
    for (var i = 0; i < z.length; i++) {
        var cc = z[i];
        if (cc.match(/[a-z]/i)) {
            sum++;
           b[cc]++;
        }
    }
    for (var key in b) {
        b[key]= b[key]/sum;
    }
    console.log(b);
    return b;
};
function desif(f_arr, s_arr=0, Text=0){
    var output = "";
    let max=0;
    let max1=0;
    let max_id=0;
    let max_id1=0;
    for (var i in f_arr) {//перебераем массив в поиске максимального значения первого  массива
        if(max<f_arr[i]){
            max=f_arr[i];
            max_id=i;
        }
    }
    for (var j in s_arr) {//перебераем массив в поиске максимального значения первого  массива
        if(max1<s_arr[j]){
            max1=s_arr[j];
            max_id1=j;
        }
    }
    let secondDocText=document.querySelector('.cesar');
    let cesarKey=max_id.charCodeAt(0)-max_id1.charCodeAt(0);
    secondDocText.innerHTML="<b>Ключ кода цезаря:</b>"+Math.abs(cesarKey);

    console.log(max,max_id.charCodeAt(0))
    console.log(max1,max_id1.charCodeAt(0))// заменяем буквы

    return cesarKey;
}
// имеем две пары чисел


let z = cezar(a.replace(/[^a-zA-Z ]/g, "").toLowerCase());
let first_arr,second_arr;
let docText=document.querySelector('.text_first');
docText.innerHTML="<H3>Исходный текст</H3><p>"+z+"</p>";
console.log( a);
second_arr=alphabet(z);
// Проверяем длинну слова
first_arr=alphabet(a.replace(/[^a-zA-Z ]/g, "").toLowerCase());
// функция дешифрации
console.log(ind);
console.log(z);
let cessarKey;
cessarKey=desif(ind,second_arr);
let zz = cezar(z,cessarKey+26);
console.log(zz)
let fin=document.querySelector('.finsih');
fin.innerHTML="<b>Результат:</b><span>"+zz+"</span>"

