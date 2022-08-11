function toggleButton() {
  const textBlock = document.getElementById('text-block1');
  textBlock.classList.toggle("my-class");
}

function callPhone(phone) {
  alert(phone + ' двері відчиняйте');
}

function giveTextLength(text, num, arr) {
  console.log('asfasfas');
  return text.length + num + arr.length;
}

giveTextLength('vhvhh', 5, [1,4,4])

function showbox() {
  const textBlock = document.getElementById('text-block2');
  textBlock.classList.add("my-class");

  console.log(textBlock.classList);
}

function hidebox() {
  const textBlock = document.getElementById('text-block2');
  textBlock.classList.remove("my-class");
}

function action() {
  console.log('набрать чайник')
  console.log('закипятить')
  console.log('налить воду')
}

let want = 'tea';

if(want === 'tea' || want === 'растворімий чай') {
  action();
  if (want === 'растворімий чай') {
    console.log('взять растворімий чай')
  } else {
    console.log('взять чайний пакет')
  }
} else {
  action();
  console.log('взять банку кофе')
  console.log('взять слівки')
}
console.log('насипать сахар')
console.log('пить')


let i = 0;
while (i < 10) {
  console.log('Ітерація №', i);
  i++;
}

console.log('Ітерація №', i, '(ми вийшли)');

const arr = ['pic1', 'pic2', 'pic3'];
for (let b = 0; b < arr.length; b++) {
  let imgElement = document.createElement('img');
  imgElement.src = "image/our-works/" + arr[b] + ".jpg";
  imgElement.alt = "image/our-works/" + arr[b] + ".jpg";
  let className = "img";
  if (b === 1) {
    className += " active";
  } else if (b === 2) {
    className += " not-active";
  }
  imgElement.className = className;
  console.log(imgElement);
}

const teet = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequuntur expedita explicabo in itaque libero nobis porro ratione voluptate!';
for(let i = 0; i < teet.length; i++) {
  console.log(teet[i]);
}