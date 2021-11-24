// Lesson 1
document.getElementById('title').style.color = '#FA0';

var title = document.getElementById('title');

title.style.color = 'blue';

var paragraphs = [];
console.log(paragraphs);
paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

for (i = 0; i < document.querySelectorAll('p').length; i++) {

  document.querySelectorAll('p')[i].style.color = 'blueviolet';

}
//Start Lesson 2
var paragraph2Text;
console.log('\n' + paragraph2Text);
paragraph2Text = document.getElementsByClassName('body-p')[1].textContent;
console.log(paragraph2Text);

var ulInnerHTML = document.querySelector('ul').innerHTML;
console.log(ulInnerHTML);

function changeUl() {
  document.querySelector('ul').innerHTML = '<li>Boom</li> <li>Bop</li> <li>WOW</li>';
}

document.getElementById('pic').setAttribute('src', 'https://pbs.twimg.com/media/FDo0mohVQAAP5Td?format=jpg&name=large');

document.getElementById('pic').setAttribute('alt', 'Spiderman No Way Home Poster');

console.log(document.querySelector('body').innerHTML);

document.querySelector('button').style.cssText = "background:#1ECBE1; color:#E11ECB; border: 2px solid #CBE11E;";

var newDiv = document.createElement('div');
newDiv.innerHTML = "<h2>Hi I am a div</h2>";
newDiv.style.cssText = "border: 2px dashed #000;"
document.body.appendChild(newDiv);

console.log(document.querySelector('body').innerHTML);

function removeLi() {
  document.querySelector('ul').removeChild(document.querySelector('li'));
}

//Lesson 3
var imgRem = setTimeout(function () { document.body.removeChild(document.querySelector('img')) }, 5000);


function removeImg() {
  imgRem;
}

const stopBttn = document.getElementById('stop');

stopBttn.addEventListener('click',
  function () {
    clearInterval(imgRem);
  });

//Lesson 4

console.log(document.getElementById('list-item-1').parentNode.parentNode.id);

let childNde = document.body.childNodes;
for (i = 0; i < childNde.length; i++) {
  console.log(childNde[i]);
}
console.log('\n');
// let children = document.body.children;
let children = document.querySelector('main').children;
for (i = 0; i < children.length; i++) {
  console.log(children[i]);
}