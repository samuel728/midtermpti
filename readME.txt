

code penting

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <p>Hello World!</p>
    </head>
    <body>
        <div id="textContent"></div>
        <div id="clock"></div>
    </body>
    <script>
window.onload = function() {
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
}

    </script>
</html>