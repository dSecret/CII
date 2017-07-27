var svg = document.getElementById('clear'),
		items = svg.querySelectorAll('.item'),
    trigger = document.getElementById('trigger'),
    open = true,
    angle =36.111;

//set up event handler
trigger.addEventListener('click', toggleMenu, false);
// svg.style.pointerEvents = "none";

//toggle menu when trigger is clicked
function toggleMenu(event) {
   if (!event) var event = window.event;
    event.stopPropagation();
  open = !open;
		if (open) {
			if(window.innerWidth >1000){
					document.getElementById('svgcon').style.width='50%';
					document.getElementById("svgcon").style.left = "25%";
				}
			else{
				document.getElementById("svgcon").style.width = "100vw";
				document.getElementById("svgcon").style.left = "0";
			}
			document.getElementById("clear").style.display='inline';
			document.getElementById("menuuu").style.width = "500px";
			document.getElementById("menuuu").style.height = "300px";
			document.getElementById("cir").setAttribute("r", 45);
			document.getElementById("cir").setAttribute("cy", 250);
				var tl = new TimelineLite();
				tl.to(items, 0.0, {scale:1, ease:Back.easeOut.config(4)}, 0.05);
					for(var i=0; i<items.length; i++){
						tl.to(items[i], 1, {rotation:-i*(angle+0.7) + "deg", ease:Bounce.easeOut}, 0.35);
					}

			svg.style.pointerEvents = "auto";
		} else {
			var tl = new TimelineLite();
			for(var i=0; i<items.length; i++){
			tl.to(items[i],0.1, {rotation: 0, ease:Circ.easeOut}, 0.2);
			}

				tl.to(items, 0.25, {scale:0, ease:Back.easeIn}, 0.3);


					svg.style.pointerEvents = "none";
					if(window.innerWidth >1000){
						document.getElementById("svgcon").style.width = "7%";
						document.getElementById("svgcon").style.left = "46.5%";
						}
					else{
						document.getElementById("svgcon").style.width = "20vw";
						document.getElementById("svgcon").style.left = "40vw";

					}

					document.getElementById("clear").style.display='none';
					document.getElementById("menuuu").style.width = "65px";
					document.getElementById("menuuu").style.height = "65px";
					document.getElementById("cir").setAttribute("r", 245);
					document.getElementById("cir").setAttribute("cy", 10);

		}

}

svg.onclick = function (e) {
    e.stopPropagation();
}
//close the nav when document is clicked
document.onclick = function () {

    open = false;
    var tl = new TimelineLite();
    for(var i=0; i<items.length; i++){
      tl.to(items[i], 0.3, {rotation: 0, ease:Circ.easeOut}, 0.10);
			if(window.innerWidth >1000){
				document.getElementById("svgcon").style.width = "7%";
				document.getElementById("svgcon").style.left = "46.5%";
				}
			else{
				document.getElementById("svgcon").style.width = "20vw";
				document.getElementById("svgcon").style.left = "40vw";

			}
			document.getElementById("clear").style.display='none';
			document.getElementById("menuuu").style.width = "65px";
			document.getElementById("menuuu").style.height = "65px";
			document.getElementById("cir").setAttribute("r", 245);
			document.getElementById("cir").setAttribute("cy", 10);}
    tl.to(items, .3, {scale:0, ease:Back.easeIn}, 0.3);

    svg.style.pointerEvents = "none";

	};
