function showText() {
  const textBlock = document.getElementById('text-block1');
  textBlock.classList.add("my-class");

  console.log(textBlock.classList);
}

function hideText() {
  const textBlock = document.getElementById('text-block1');
  textBlock.classList.remove("my-class");
}
