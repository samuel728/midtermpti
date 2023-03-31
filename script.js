var sumberGambar = ["asset/logo.png", "asset/header.png", "asset/background1.jpg"];
var indeksGambar = 0;
var elemenGambar = document.getElementById("character");

function gantiGambar(jumlah) {
indeksGambar = (indeksGambar + jumlah + sumberGambar.length) % sumberGambar.length;
elemenGambar.src = sumberGambar[indeksGambar];}

const myImage = document.getElementById('clogo.bglogo');

myImage.addEventListener('load', function() {
  if (myImage.height <= 1000) {
    myImage.src = 'https://file.notion.so/f/s/efcc11aa-efe3-41a9-a5e5-1ee7e8e2c87d/header-no-border.png?id=2761c896-5964-4421-96cb-842b092dd620&table=block&spaceId=a87e2f9d-141a-403a-ab4f-5c8145dcc9fa&expirationTimestamp=1680367623034&signature=UelgJZU6s8m0uJ-AfGDM2N5cvifWvLHaXdt-WZhrUlc&downloadName=header-no-border.png'; // change the image source
  }
});