$(() => {
  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.control).appendTo('#controlBlocksContainer');

  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.pins).appendTo('#pinsBlocksContainer');

  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.mathoperators).appendTo('#mathoperatorsBlocksContainer');

  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.generichardware).appendTo('#generichardwareBlocksContainer');
})
