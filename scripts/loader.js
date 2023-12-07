let loaded = false;
let mainTimeLine = gsap.timeline();
let allowAudio = true;


let correctAudio;
let wrongAudio;
let winAudio;
let loseAudio;
let rotateAudio;
let pullupAudio;
let hangAudio;

const handleLoadComplete = (id, item) => {
	let right = document.getElementsByClassName("hill-right")[0];
	let left = document.getElementsByClassName("hill-left")[0];
	let mid = document.getElementsByClassName("hill-middle")[0];
	let city = document.getElementsByClassName("city")[0];
	let mountains = document.getElementsByClassName("mountains")[0];
	let bgContainer = document.getElementsByClassName("bg-container")[0];
	switch (id) {
		case "right":
			right.append(item);
			break;
		case "left":
			left.append(item);
			break;
		case "mid":
			mid.append(item);
			break;
		case "city":
			city.append(item);
			break;
		case "mountains":
			mountains.append(item);
			break;
		case "sky":
			bgContainer.style.backgroundImage = `url(${item})`;
			break;
		case "correct":
			correctAudio = item;
			break;
		case "wrong":
			wrongAudio = item;
			break;
		case "win":
			winAudio = item;
			break;
		case "lose":
			loseAudio = item;
			break;
		case "rotate":
			rotateAudio = item;
			break;
		case "pullup":
			pullupAudio = item;
			break;
		case "hang":
			hangAudio = item;
			break;
	}
};
const loadData = () => {
	let queue = new createjs.LoadQueue(false);
	queue.loadFile({ id: "sky", src: "images/sky.png" });
	queue.loadFile({ id: "city", src: "images/city.png" });
	queue.loadFile({ id: "right", src: "images/right.png" });
	queue.loadFile({ id: "left", src: "images/left.png" });
	queue.loadFile({ id: "mid", src: "images/middle.png" });
	queue.loadFile({ id: "mountains", src: "images/mountains.png" });
	queue.loadFile({ id: "correct", src: "audios/correct.mp3" });
	queue.loadFile({ id: "wrong", src: "audios/wrong.mp3" });
	queue.loadFile({ id: "win", src: "audios/win.mp3" });
	queue.loadFile({ id: "lose", src: "audios/lose.mp3" });
	queue.loadFile({ id: "rotate", src: "audios/rotate.mp3" });
	queue.loadFile({ id: "pullup", src: "audios/pullup.mp3" });
	queue.loadFile({ id: "hang", src: "audios/hang.mp3" });
	queue.on("fileload", (event) => {
		if (event.item.id === "sky") {
			handleLoadComplete(event.item.id, queue.getResult("sky").src);
		} else {
			handleLoadComplete(event.item.id, event.result);
		}
	});
	queue.on("complete", () => {
		loaded = true;
	});
};
loadData();
