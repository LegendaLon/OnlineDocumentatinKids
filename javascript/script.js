$(() => {
  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.program).appendTo('#programBlock');

  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.pins).appendTo('#pinsBlock');

  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.mathoperators).appendTo('#mathoperatorsBlock');
})