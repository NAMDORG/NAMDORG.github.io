document.addEventListener('readystatechange', event => {
	if (event.target.readyState === "complete")
	{
		underline();
		moveHeader();
		revealLinks();
	}
});

function underline()
{
	var line = document.getElementById('underline');
	var label = document.getElementById('label');
	var labelWidth = label.offsetWidth;
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