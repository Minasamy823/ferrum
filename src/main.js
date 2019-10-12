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

$(document).ready(function(){
  $('.home_mobile-bar_mobile-icon').click(function (){
    $('.home_mobile-bar_mobile-icon').toggleClass('focus');
    $('.menu').toggleClass('menu-active');
  })
})
$(document).on('touchmove', function () {
  $('.home_mobile-bar_mobile-icon').click(function (){
    $('.home_mobile-bar_mobile-icon').toggleClass('focus');
    $('.menu').toggleClass('menu-active');
  })
  })
