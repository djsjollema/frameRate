window.addEventListener("load",function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var frame_text = document.getElementById("frame_text");
	var frameRate_text = document.getElementById("frameRate_text");
	var dt_text = document.getElementById("dt_text");
	var frame = 0;
	var frameReal;

	var fps = 60;
	var dt = 1000/fps;
	dt_text.value = Math.floor(dt*10)/10;
	var now, then,duration;
	now = Date.now();
	then = now;

	var startTime = now;

	var r = new Vector(300,300);
	var v = new Vector(2,1);
	var bal = new Bal(r.dx,r.dy,30,"yellow");
	var rooster = new Rooster(800,800,20,20,100,100);
	!function animate(){
		window.requestAnimationFrame(animate);
		now = Date.now();
		duration = now-then;
		if(duration>dt){
			then = now-duration%dt;
			context.clearRect(0,0,800,800);
			rooster.teken(context);
			r = VectorOperaties.som(r,v);
			bal.x = r.dx; bal.y = r.dy;
			if(r.dx<bal.r || r.dx > 800-bal.r)v.dx = - v.dx;
			if(r.dy<bal.r || r.dy > 800-bal.r)v.dy = - v.dy;
			bal.teken(context);
			frame_text.value = frame;
			frameReal= 1000*frame/(now - startTime);
			frameRate_text.value = Math.floor(frameReal*10)/10;
			frame++;
		}
	}();
})
