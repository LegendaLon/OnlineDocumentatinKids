$(() => {
  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.control).appendTo('#controlBlocksContainer');

  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.pins).appendTo('#pinsBlock');

  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.mathoperators).appendTo('#mathoperatorsBlock');

  // Отрисовка блоков
  $('#blockItemTemplate').tmpl(BlockData.generichardware).appendTo('#generichardwareBlock');
})