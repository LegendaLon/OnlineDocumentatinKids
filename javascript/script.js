let blocks = [
  {
    title: "DocumantationBlock",
    block: $('div.container#DocumantationBlock'),
  },

  {
    title: "DocumantationLeo",
    block: $("div.container#DocumantationLeo"),
  },

  {
    title: "Example",
    block: $('div.container#Example')
  }
]

function changeVisibleBlock (titleblock) {
  blocks.forEach((item, index) => {
    if (item.title == titleblock) {
      item.block.show();
    } else {
      item.block.hide();
    }
  });
}

$('button.link').on('click', function () {
  changeVisibleBlock($(this).attr('go-to'));
})