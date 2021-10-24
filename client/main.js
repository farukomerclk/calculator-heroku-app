
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var num1 = document.querySelector('#num1');
  var num2 = document.querySelector('#num2');
  var result = document.querySelector('#result');


  result.value = +num1.value + +num2.value;
  
  num1.value = '';
  num2.value = '';
});