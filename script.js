let audio = document.querySelector(".audio1");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let next = document.querySelector(".next");
let title = document.querySelector(".title");
let prev = document.querySelector(".prev");
let mainImg = document.querySelector(".mainImg");
let songs = [
  {
    name: "Aaj_Phir_Tumpe.mp3",
    audio: "./Music/Aaj_Phir_Tumpe.mp3",
  },
  {
    name: "Aankhon_Ki_Gustakhiyan_Maaf_Ho.mp3",
    audio: "./Music/Aankhon_Ki_Gustakhiyan_Maaf_Ho.mp3",
  },
  {
    name: "Ae_Ajnabi.mp3",
    audio: "./Music/Ae_Ajnabi.mp3",
  },
  {
    name: "Ae_Mere_Humsafar.mp3",
    audio: "./Music/Ae_Mere_Humsafar.mp3",
  },
  {
    name: "Bahut_Pyar_Karte_Hai-Male.mp3",
    audio: "./Music/Bahut_Pyar_Karte_Hai-Male.mp3",
  },
];
start.addEventListener("click", () => {
  audio.play();
  mainImg.style.animationPlayState = "running";
});
pause.addEventListener("click", () => {
  audio.pause();
  mainImg.style.animationPlayState = "paused";
});
let songIndex = 0;
next.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  nextSong(songs[songIndex]);
});
function nextSong(songs) {
  title.textContent = songs.name;
  audio.src = songs.audio;
  audio.play();
  mainImg.style.animationPlayState = "running";
}
prev.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  nextSong(songs[songIndex]);
  mainImg.style.animationPlayState = "runnig";
});
