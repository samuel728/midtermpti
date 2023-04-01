var sumberGambar = ["asset/baby_patrick.png", "asset/baby_squidward.png", "asset/baby_spongebob.png"];
var indeksGambar = 0;
var elemenGambar = document.getElementById("character");

function gantiGambar(jumlah) {
indeksGambar = (indeksGambar + jumlah + sumberGambar.length) % sumberGambar.length;
elemenGambar.src = sumberGambar[indeksGambar];}

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

const myInput = document.getElementById("petName");
const urlParams = new URLSearchParams(window.location.search);
const petName = urlParams.get('petName');
myInput.textContent = petName;
