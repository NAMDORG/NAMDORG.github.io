document.addEventListener('readystatechange', event => {
	if (event.target.readyState === "complete")
	{
		underline();
		moveHeader();
		revealLinks();
		changeLabel();
	}
});

function underline()
{
	var line = document.getElementById('underline');
	var label = document.getElementsByClassName('label');
	var labelWidth = label[0].offsetWidth + label[1].offsetWidth;
	line.style.width = labelWidth + "px";
}

function moveHeader()
{
	var siteHeader = document.getElementById('siteHeader');
	
	siteHeader.style.top = "25%";
}

function revealLinks()
{
	var links = document.getElementsByClassName('page-link');
	links[2].style.visibility = "visible";
	links[1].style.transitionDelay = "3.15s";
	links[1].style.visibility = "visible";
	links[0].style.transitionDelay = "3.25s";
	links[0].style.visibility = "visible";
}

function changeLabel()
{
	var label = document.getElementById("label");
	label.innerHTML = "Development";
}