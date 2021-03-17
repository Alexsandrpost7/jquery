
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


$("div > div").on('click', function(){
    // alert("Нажал на картинку: " + $(this).css('background-image')); // +ok
    // alert("Нажал на картинку: " + $(this).attr('class')); + ok
    
    // let cl = $(this).attr('class'); // +ok   получают два класса свой и родительский пока не div > div!
    // let cl = this.className; // +ok получают два класса свой и родительский пока не div > div!
    let path = $(this).css("background-image");
    
    
    $(this).css('border', '4px solid red');

   
    $(".wrapper").css('background-image', path);
});




$("div > div").on('click', function() {

});


});

 