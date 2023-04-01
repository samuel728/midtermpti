window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });

var sumberGambar = ["asset/baby_patrick.png", "asset/baby_squidward.png", "asset/baby_spongebob.png"];
var indeksGambar = 0;
var elemenGambar = document.getElementById("character");

function gantiGambar(jumlah) {
indeksGambar = (indeksGambar + jumlah + sumberGambar.length) % sumberGambar.length;
elemenGambar.src = sumberGambar[indeksGambar];}

const audio = new Audio('asset/theme.mp3');
audio.loop = true;

const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', function() {
  audio.play();
});

if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i.test(navigator.userAgent)) {
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, orientation=portrait">');
  }

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    // Memeriksa apakah browser merupakan perangkat mobile
    if (window.innerWidth <= 768) {
      alert('Gunakan desktop untuk pengalaman lebih baik.');
      return;
    }
});

closeBtn.addEventListener('click', () => {
  const element = document.documentElement;

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
  window.scrollTo(0, 0);
});


function showPopup() {
    document.getElementById("welcome-popup").style.display = "flex";
    }
  
  function closePopup() {
    document.getElementById("welcome-popup").style.display = "none";
}

const form = document.querySelector('#formname');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const petName = document.querySelector('#petnameid').value;
  console.log(`Pet name: ${petName}`);
  window.location.href = `main.html?petName=${encodeURIComponent(petName)}`;
});

// Mendapatkan elemen body
const body = document.querySelector('body');

// Mendapatkan waktu saat ini
// Mendapatkan elemen HTML dengan id "clock"
const clock = document.querySelector('#clock');

// Mendapatkan waktu dari elemen HTML tersebut
const currentTime = parseInt(clock.textContent);

// Menentukan gambar latar belakang berdasarkan waktu
let backgroundImage;
if (currentTime >= 5 && currentTime < 12) {
  backgroundImage = "asset/background1.jpg";
} else if (currentTime >= 12 && currentTime < 18) {
  backgroundImage = "asset/background2.jpg";
} else {
  backgroundImage = "asset/background3.jpg";
}

// Mengubah background-image pada body
body.style.backgroundImage = `url(${backgroundImage})`;

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    

    function updateTime() {
        // Menambahkan 1 menit setelah 1 detik berganti
        if (new Date().getSeconds() % 1 === 0) {
            minutes++;
        }
        
        // Menambahkan 1 jam setelah 59 menit berganti
        if (minutes % 60 === 0 && new Date().getSeconds() % 1 === 0) {
            hours++;
        }
        
        // Menampilkan waktu pada halaman
        var timeString = padNumber(hours % 24) + ":" + padNumber(minutes % 60);
        document.getElementById("clock").innerHTML = timeString;
    }
    
    function padNumber(number) {
        return ("0" + number).slice(-2);
    }
    
    setInterval(updateTime, 1000); // Mengulang fungsi updateTime setiap 1 detik