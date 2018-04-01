// получаем элементы из html в переменнные var//

var btn = document.querySelector(".interested-btn");
var form = document.querySelector(".interested-form");
console.log(btn);
console.log(form);
btn.addEventListener("click", function() {
   form.classList.toggle("interested-form-show")
})