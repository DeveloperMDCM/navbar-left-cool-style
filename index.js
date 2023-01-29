// https://dribbble.com/shots/2060856-Ink-Drop-Menu

console.clear()

var $menu = $('.menu'),
    $menuControl = $menu.find('.menu__control'),
    menuStates = 'menu--facebook menu--whtatsapp menu--twitter menu--instagram menu--dribbble',
    menuClasses = '.'+ menuStates.split(' ').join(', .');

$menuControl.on('click',function(){
  if ( $menu.hasClass('menu--active') ) {
    $menu.removeClass(menuStates + ' menu--active menu--open');
  } else {
    $menu.toggleClass('menu--open');
  }
});


$('.action').on('click',function(){
  $menu
    .removeClass('menu--open ' + menuStates)
    .addClass('menu--active');

});

$('.menu').on('click',function(){
  $(".menu__control").click(() => {$(".text_menu").html("<h1'>Social</h1>");});
});

$('.action--facebook').on('click',$menu.addClass.bind($menu,'menu--facebook'));
$('.action--whtatsapp').on('click',$menu.addClass.bind($menu,'menu--whtatsapp'));
$('.action--twitter').on('click',$menu.addClass.bind($menu,'menu--twitter'));
$('.action--instagram').on('click',$menu.addClass.bind($menu,'menu--instagram'));
$('.action--dribbble').on('click',$menu.addClass.bind($menu,'menu--dribbble'));
$(".action--facebook").click(() => {$(".text_menu").html("<h1 style='font-size: 40px; position: relative;  top:-30px; text-aling: center;'>Facebook</h1>");});
$(".action--whtatsapp").click(() => {$(".text_menu").html("<h1 style='font-size: 40px; position: relative;  top:-45px; text-aling: center;'>Whtatsapp</h1>");});
$(".action--twitter").click(() => {$(".text_menu").html("<h1 style='font-size: 40px; position: relative;  top:-15px; text-aling: center;'>Twitter</h1>");});
$(".action--instagram").click(() => {$(".text_menu").html("<h1 style='font-size: 40px; position: relative;  top:-40px; text-aling: center;'>Instagram</h1>");});
$(".action--dribbble").click(() => {$(".text_menu").html("<h1 style='font-size: 40px; position: relative;  top:-30px; text-aling: center;'>Dribbble</h1>");});

// setTimeout($menuControl.click.bind($menuControl),300);
