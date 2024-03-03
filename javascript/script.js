$(() => {
  $('#blockItemTemplate').tmpl(BlockData.program).appendTo('#programBlock');

  $('#blockItemTemplate').tmpl(BlockData.pins).appendTo('#pinsBlock');
})