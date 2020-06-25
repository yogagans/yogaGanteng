$(document).snowfall();

$(window).resize(() => {
  $(document).snowfall('clear');
  $(document).snowfall();
});