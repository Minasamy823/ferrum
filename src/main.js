const $ = window.$;
$(function() {
  $('.instructure-cont-paragraphs p:nth-child(1)').hover(function() {
    $('.instructure-cont-photo img:nth-child(2)').css('opacity', '1');
  }, function reset()
{
  $('.instructure-cont-photo img:nth-child(2)').removeAttr('style');
}
)}
)
$(function() {
  $('.instructure-cont-paragraphs p:nth-child(2)').hover(function() {
    $('.instructure-cont-photo img:nth-child(3)').css('opacity', '1');
  }, function reset()
{
  $('.instructure-cont-photo img:nth-child(3)').removeAttr('style');
}
)}
)
$(function() {
  $('.instructure-cont-paragraphs p:nth-child(3)').hover(function() {
    $('.instructure-cont-photo img:nth-child(4)').css('opacity', '1');
  }, function reset()
{
  $('.instructure-cont-photo img:nth-child(4)').removeAttr('style');
}
)}
)
$(function() {
  $('.instructure-cont-paragraphs p:nth-child(4)').hover(function() {
    $('.instructure-cont-photo img:nth-child(5)').css('opacity', '1');
  }, function reset()
{
  $('.instructure-cont-photo img:nth-child(5)').removeAttr('style');
}
)}
)
$(function() {
  $('.instructure-cont-photo img:nth-child(5)').hover(function() {
    $('.instructure-cont-paragraphs p:nth-child(4)').css('color', '#ffd200');
  }, function reset()
{
  $('.instructure-cont-paragraphs p:nth-child(4)').removeAttr('style');
}
)}
)
$(function() {
  $('.instructure-cont-photo img:nth-child(4)').hover(function() {
    $('.instructure-cont-paragraphs p:nth-child(3)').css('color', '#ffd200');
  }, function reset()
{
  $('.instructure-cont-paragraphs p:nth-child(3)').removeAttr('style');
}
)}
)
$(function() {
  $('.instructure-cont-photo img:nth-child(3)').hover(function() {
    $('.instructure-cont-paragraphs p:nth-child(2)').css('color', '#ffd200');
  }, function reset()
{
  $('.instructure-cont-paragraphs p:nth-child(2)').removeAttr('style');
}
)}
)
$(function() {
  $('.instructure-cont-photo img:nth-child(2)').hover(function() {
    $('.instructure-cont-paragraphs p:nth-child(1)').css('color', '#ffd200');
  }, function reset()
{
  $('.instructure-cont-paragraphs p:nth-child(1)').removeAttr('style');
}
)}
)
// function  checkInView(elem,partial)
// {
//     var container = $("#root");
//     var contHeight = container.height();
//     var contTop = container.scrollTop();
//     var contBottom = contTop + contHeight ;
//
//     var elemTop = $(elem).offset().top - container.offset().top;
//     var elemBottom = elemTop + $(elem).height();
//
//     var isTotal = (elemTop >= 0 && elemBottom <=contHeight);
//     var isPart = ((elemTop < 0 && elemBottom > 0 ) || (elemTop > 0 && elemTop <= container.height())) && partial ;
//
//     return  isTotal  || isPart ;
// }
// $(document).ready(function(){
//   var lis = "" , lis2 = "";
//   $.each($('.buildings-title'),function(i,e){
//     if (checkInView($(e),false)) {
//       $(this).addClass('animation-work');
//         }
//         else {
//           $(this).removeClass('animation-work');
//         }
//         lis += "" + checkInView($(e),false);
//         lis2 += " " + checkInView($(e),true);
//   });
//   $('.building-title').text(lis);
//   $('.building-title').text(lis2);
// })
$(document).ready(function(){
  $('.home_mobile-bar_mobile-icon').click(function (){
    $('.home_mobile-bar_mobile-icon').toggleClass('focus');
    $('.menu').toggleClass('menu-active');
  })
})
//wait

// $('.buildings').onChecked(function(){
//   $('.buildings-title').toggleClass('animation-work');
// })
