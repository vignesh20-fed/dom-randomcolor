let colors=['red','green','blue','black','yellow','orange'];
let body=document.querySelector('body');
let color=document.querySelector('#colorbutton');

color.addEventListener('click',function(){
	let change=(parseInt(Math.random()*colors.length));
	body.style.background=colors[change];

});