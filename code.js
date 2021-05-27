function myFunction(){
	alert("I look amazing on PC!");
}

function menubtn()
{
	let dropdownBtn = document.querySelector('.menu');
	let menuContent = document.querySelector('.dropdown-menu');
	let navcolor = document.querySelector('nav').style.backgroundColor;
	if(menuContent.style.display===""){
	   menuContent.style.display="block";
	   menuContent.style.backgroundColor = navcolor;
	} else {
	   menuContent.style.display="";
	}
}
