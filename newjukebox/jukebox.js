function Jukebox(){
	this.songs = [
	{name:"God's Plan",
	 photo: "https://i.ytimg.com/vi/IbVC2jLOSsc/maxresdefault.jpg",
	 played: false,
	 source:"godplan.mp3"},
	{name:"Cold Night",
	 photo: "https://m.media-amazon.com/images/I/71z9Bhb9AKL._SS500_.jpg",
	 played: false,
	 source:"coldnight.mp3"},
	{name:"A Fly in the Hand",
	 photo: "https://images-na.ssl-images-amazon.com/images/I/61RQPv9opHL._SS500.jpg",
	 played: false,
	 source:"aflyinthehand.mp3"},
	{name:"Grace",
	 photo: "https://f4.bcbits.com/img/0005940402_10.jpg",
	 played: false,
	 source:"grace.mp3"},
	{name:"Give us a little love",
	 photo: "https://img.discogs.com/ZpHwGhwg6uaIuO_8ramGesJY6Ts=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3325484-1325854963.jpeg.jpg",
	 played: false,
	 source:"giveusalittlelove.mp3"}]
	this.playingSong = document.createElement("Audio");
	this.playingSong.setAttribute("type", "audio/mp3");
	this.playingSong.setAttribute("src","music/"+this.songs[0].source);
	this.playingName = this.songs[0].name;
	this.picture = document.getElementById('image');

}

	

Jukebox.prototype.playS = function playSong(){
	console.log(this.playingSong.src);
	this.playingSong.play();
	// console.log(this.playingSong);
	// var promise = x.play();

	// if (promise !== undefined) {
 //     	promise.then(_ => {
 //     // Autoplay started!
 // 	}).catch(error => {
 //    // Autoplay was prevented.
 //    // Show a "Play" button so that user can start playback.
 //  		});
	// }
}

Jukebox.prototype.pauseS = function pauseSong(){
	console.log(this.playingSong);
	this.playingSong.pause();
}

Jukebox.prototype.chooseS = function choose(event){
	this.title = event.target.innerHTML;
	this.playingSong.pause();

	for (var i = 0; i < this.songs.length; i++) {
		if(this.songs[i].name == this.title){
			this.picture.setAttribute("src",this.songs[i].photo);
			this.playingSong.setAttribute("src","music/"+this.songs[i].source);
			this.playingName = this.songs[i].name;
			this.playingSong.load();
			this.playingSong.play();

		}
	}
}

Jukebox.prototype.next = function nextSong(){
	for (var i = 0; i < this.songs.length; i++) {
		if(this.songs[i].name == this.playingName){
			// console.log("yeah")
			var next =i;
			console.log(next);
		}
	}
	if(next == 4){
		next = 0;
	}else{
		next = next+1;
	}
	console.log(next);
	this.picture.setAttribute("src",this.songs[next].photo);
	this.playingSong.setAttribute("src","music/"+this.songs[next].source);
	this.playingName = this.songs[next].name;
	this.playingSong.load();
	this.playingSong.play();
}

Jukebox.prototype.back = function backSong(){
	for (var i = 0; i < this.songs.length; i++) {
		if(this.songs[i].name == this.playingName){
			// console.log("yeah")
			var next =i;
			console.log(next);
		}
	}
	if(next == 0){
		next = 4;
	}else{
		next = next-1;
	}
	console.log(next);
	this.picture.setAttribute("src",this.songs[next].photo);
	this.playingSong.setAttribute("src","music/"+this.songs[next].source);
	this.playingName = this.songs[next].name;
	this.playingSong.load();
	this.playingSong.play();
}



var j = new Jukebox();
