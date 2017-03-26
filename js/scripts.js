var list = document.getElementById('list');
	add = document.getElementById('addElem');
	ulElem = document.getElementsByTagName('li');
	ulElemCount = ulElem.length;

console.log(ulElemCount);

add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + ulElemCount++ + '</li>';
});
