var sumberGambar = ["gambar1.jpeg", "gambar2.jpeg", "gambar3.jpeg"];
var indeksGambar = 0;
var elemenGambar = document.getElementById("character");

function gantiGambar(jumlah) {
indeksGambar = (indeksGambar + jumlah + sumberGambar.length) % sumberGambar.length;
elemenGambar.src = sumberGambar[indeksGambar];}

$(window).load(function() {
	$(".loader").fadeOut("slow");
})
