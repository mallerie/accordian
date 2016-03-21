// Javascript Entry Point
import $ from 'jquery';

$('.section-wrapper').on('click', '.button', function (event) {
  $('.section-wrapper').addClass('hidden');
});


$('.section-wrapper').on('click', '.button', function (event) {
  $(event.currentTarget).parent().removeClass('hidden');
});



// var button1  = document.querySelector('.button1')
// var button2  = document.querySelector('.button2')
// var button3  = document.querySelector('.button3')

// var box1  = document.querySelector('.para1')
// var box2  = document.querySelector('.para2')
// var box3  = document.querySelector('.para3')

// var box  = document.querySelector('.para')

// document.querySelector('.button1').addEventListener('click', function () {
  
  // document.querySelector('.para1').className = '';
  // document.querySelector('.para2').className = '';
  // document.querySelector('.para3').className = '';

// });

// document.querySelector('.button2').addEventListener('click', function () {
  
  // document.querySelector('.para1').className = '';
  // document.querySelector('.para2').className = '';
//   document.querySelector('.para3').className = '';
// });

// document.querySelector('.button3').addEventListener('click', function () {
  
//   // document.querySelector('.para1').className = '';
//   // document.querySelector('.para2').className = '';
  // document.querySelector('.para3').className = '';
// });




// $('.button1').on('click', 'button', function () {
//  
//
//   $(this).removeClass('.hidden'); 
// });



