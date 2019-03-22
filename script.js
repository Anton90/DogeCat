window.onload = function doggo() 
{
	document.getElementById('doge').innerHTML = 'Woof!';
}

document.getElementById("doge").onmouseover = function() {over()};
document.getElementById("doge").onmouseout = function() {out()};


function over() 
{
    document.getElementById('doge').innerHTML = '<img src="dogicon.png" />';
}

function out()
{
	document.getElementById('doge').innerHTML = 'Woof!';
}

