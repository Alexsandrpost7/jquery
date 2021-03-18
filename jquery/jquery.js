
$(document).ready(function(){
    //Code here  g
    // alert("привет!"); // +ok

// Поменять цвет блока

    // $(".color_test").css("color", "green");

// Уведомление о свойстве
    // alert($(".color_test").css("color",));

// Изменени сво-ва при наведении
    // $( ".color_test" ).on( "mouseover", function() {
    //     $( this ).css( "color", "red" );
    // });
// При наведении меняет цвет, но один раз    
    // $( ".color_test" ).hover( function() {
    //     $( this ).css( "color", "red" );
    // });

// При клике менял цвет
    // $(".color_click").click(function() {
    //     $(this).css("color", "white");
    // });
    
// При клике по любым дивам, кроме .color_click - меняем цвет
    // $("div:not(.color_click)").click(function() {
    //     $(".color_click").css("color", "white");
    // });
    
// При клике по любым дивам, кроме .color_click - меняем цвет
    

// 02 Галлерея


// $("div > div").on('click', function(){
//     // alert("Нажал на картинку: " + $(this).css('background-image')); // +ok
//     // alert("Нажал на картинку: " + $(this).attr('class')); + ok
    
//     // let cl = $(this).attr('class'); // +ok   получают два класса свой и родительский пока не div > div!
//     // let cl = this.className; // +ok получают два класса свой и родительский пока не div > div!
//     let path = $(this).css("background-image");
    
    
//     $(this).css('border', '4px solid red');

   
//     $(".wrapper").css('background-image', path);
// });

// Функция значения
// var numbers = [-7, 4, 1, 9, -2];

// $.each(numbers, function(index, value) {
//   if (value < 0) {
//     // console.log(value);
//     console.log(index);
//   }
// });

// Посчитать выбранные элементы

    // let  count = $("div").length;

    // console.log(count);



// Что-то

    // let arr = ['img-1','img-2','img-3','img-4','img-5'];
    // let i = 0 ;


    // lep p = 'wrapper' + arr[i];

    // console.log(p);

// Протое выпадающие меню

        // let flag = false;
        // $('ul').click(function() {
        //     if(!flag) {
        //         $('.menu-down').slideDown();
        //     } else {
        //         $('.menu-down').slideUp();
        //     }
        //     flag = !flag;
        // });

// Сумма php

//         $('#btn-1').click(function() {
//             $.ajax({
//                 url:"/php/sum.php", 
//                 data:{a:5, b:5}, 
//                 success: function(result) {
//                     $('#div1').html(result);

//                     // console.log(result);
//                 } 
//             });
//         });


// // Сумма php + ввод данных



//         $('#btn__summa').click(function() {
            
//             let aa = $('#aa').val();
//             let bb = $('#bb').val();

//             $.ajax({
//                 url:"/php/sum.php", 
//                 data:{a:aa, b:bb}, 
//                 success: function(result) {
//                     $('#1_result').html(result);

//                     // console.log(aa);
//                     // console.log(bb);
//                     // console.log(result);
//                 } 
//             });

//         })





//Через jSon получить данные с базы

       

});

 