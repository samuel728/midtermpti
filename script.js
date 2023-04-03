window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });

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
  /*
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } */
    window.scrollTo(0, 0);
  });
  
  
  function showPopup() {
      document.getElementById("welcome-popup").style.display = "flex";
      }
    
    function closePopup() {
      document.getElementById("welcome-popup").style.display = "none";
  }
  
  function updateBg() {
  // Mendapatkan elemen body
  const body = document.querySelector('body');
  
  // Mendapatkan waktu saat ini
  // Mendapatkan elemen HTML dengan id "clock"
  const clock = document.querySelector('#clock');
  
  // Mendapatkan waktu dari elemen HTML tersebut
  const currentTime = parseInt(clock.textContent);
  
  // Menentukan gambar latar belakang berdasarkan waktu
  let backgroundImage;
  if (currentTime >= 6 && currentTime < 12) {
    backgroundImage = "asset/background1.jpg";
  } else if (currentTime >= 12 && currentTime < 18) {
    backgroundImage = "asset/background2.jpg";
  } else {
    backgroundImage = "asset/background3.jpg";
  }
  
  // Mengubah background-image pada body
  body.style.backgroundImage = `url(${backgroundImage})`;
  }
  setInterval(updateBg, 10);
  
      
      
      /*//--------------------------------------------------------------------------------------
      
      var hours = localStorage.getItem("hours") || new Date().getHours();
      var minutes = localStorage.getItem("minutes") || new Date().getMinutes();
      var level = 1;
      
      function updateTime() {
        if (new Date().getSeconds() % 1 === 0) {
            minutes++;
        }
      
        if (minutes % 60 === 0 && new Date().getSeconds() % 1 === 0) {
            hours++;
        }
      
        var timeString = padNumber(hours % 24) + ":" + padNumber(minutes % 60);
        document.getElementById("clock").innerHTML = timeString;
        var myInputValue = localStorage.getItem('myInputValue');

        document.getElementById("greetpopup").innerHTML = myInputValue + ', Selamat Datang, Jaga peliharaanmu agar tetap hidup untuk menang!';
      
        if(hours % 24 >=23){
          document.getElementById("greeting").innerHTML = 'Waktunya Tidur, ' + myInputValue;
        }else if(hours % 24>=18){
          document.getElementById("greeting").innerHTML = 'Selamat Malam, ' + myInputValue;
        }else if(hours % 24>=15){
          document.getElementById("greeting").innerHTML = 'Selamat Sore, ' + myInputValue;
        }else if(hours % 24>=11){
          document.getElementById("greeting").innerHTML ='Selamat Siang, ' + myInputValue;
        }else if(hours % 24>=6){
          document.getElementById("greeting").innerHTML = 'Selamat Pagi, ' + myInputValue;
        }else{
          document.getElementById("greeting").innerHTML ='Waktunya Tidur, ' + myInputValue;
        }
      
        if(hours > 24){
          var level = 3;
        }else if(hours > 16){
          var level = 2;
        }else{
          var level = 1;
        }
      
        localStorage.setItem("level", level);
        localStorage.setItem("hours", hours);
        localStorage.setItem("minutes", minutes);
      }
      
      function padNumber(number) {
        return ("0" + number).slice(-2);
      }
      
      setInterval(updateTime, 1000);
      */


var sumberGambar = ["asset/baby_spongebob.png", "asset/baby_patrick.png", "asset/baby_squidward.png"];
var indeksGambar = 0;
var elemenGambar = document.getElementById("character");

function gantiGambar(jumlah) {
indeksGambar = (indeksGambar + jumlah + sumberGambar.length) % sumberGambar.length;
elemenGambar.src = sumberGambar[indeksGambar];}

    function moveInput() {
        const input = document.getElementById('petnameid');
        localStorage.setItem('myInputValue', input.value);
        localStorage.setItem("chartype", indeksGambar);
        window.location.href = './main.html';
    }
     // Check if we are on file2.html
    if (window.location.href.includes('file2.html')) {
    // Get the input value from localStorage
    const inputValue = localStorage.getItem('myInputValue');
    localStorage.removeItem("hours");
    localStorage.removeItem("minutes");
    localStorage.removeItem("hoursplayed");
    localStorage.removeItem("gamemins");
    
    // Set the text content of the container to the saved input value
    const inputContainer = document.getElementById('myInputContainer');
    inputContainer.textContent = inputValue;
  }
  
  
  //--------------------------------------------------------------------------------------
  
  
  
  //--------------------------------------------------------------------------------------
  
  var hours = localStorage.getItem("hours") || new Date().getHours();
  var minutes = localStorage.getItem("minutes") || new Date().getMinutes();
  var gamemins = localStorage.getItem("gamemins") || 0;
  var hoursplayed = localStorage.getItem("hoursplayed") || 0;
  var level = 1;
  
  function updateTime() {
      // Menambahkan 1 menit setelah 1 detik berganti
      if (new Date().getSeconds() % 1 === 0) {
          minutes++;
      }
      
      // Menambahkan 1 jam setelah 59 menit berganti
      if (minutes % 60 === 0 && new Date().getSeconds() % 1 === 0) {
          hours++;
          
      }
  
      gamemins++;
  
      if(gamemins % 60 === 0){
        hoursplayed++;
      }
  
      // Menampilkan waktu pada halaman
      var timeString = padNumber(hours % 24) + ":" + padNumber(minutes % 60);
      document.getElementById("clock").innerHTML = timeString;
    
      var myInputValue = localStorage.getItem('myInputValue');

      document.getElementById("greetpopup").innerHTML = myInputValue + ', Selamat Datang, Jaga peliharaanmu agar tetap hidup untuk menang!';

  
      if(hours % 24 >=23){
        document.getElementById("greeting").innerHTML = 'Waktunya Tidur, ' + myInputValue;
      }else if(hours % 24>=18){
        document.getElementById("greeting").innerHTML = 'Selamat Malam, ' + myInputValue;
      }else if(hours % 24>=15){
        document.getElementById("greeting").innerHTML = 'Selamat Sore, ' + myInputValue;
      }else if(hours % 24>=11){
        document.getElementById("greeting").innerHTML ='Selamat Siang, ' + myInputValue;
      }else if(hours % 24>=6){
       document.getElementById("greeting").innerHTML = 'Selamat Pagi, ' + myInputValue;
      }else{
        document.getElementById("greeting").innerHTML ='Waktunya Tidur, ' + myInputValue;
      }
  
      localStorage.setItem("hours", hours);
      localStorage.setItem("minutes", minutes);
      
  
      if(hoursplayed > 16){
        var level = 3;
      }else if(hoursplayed > 8){
        var level = 2;
      }else{
        var level = 1;
      }
      
      localStorage.setItem("level", level);
      document.getElementById("levell").innerHTML = "level sekarang : " + level;
     
      localStorage.setItem("hoursplayed", hoursplayed);
      localStorage.setItem("gamemins", gamemins);
      
      
      // Menyimpan nilai hours dan minutes ke localStorage
      
  }
  
  
  
  function padNumber(number) {
      return ("0" + number).slice(-2);
  }
  
  setInterval(updateTime, 1000); //10000
  
  //--------------------------------------------------------------------------------------
  let food = 5;
  let sleep = 5;
  let health = 5;
  let play = 5;
  let intervalId;
  
  function startchar(){
    var typechar = localStorage.getItem("chartype");
    if (typechar == 0){
      document.getElementById("char").innerHTML = "<img src='asset/baby_spongebob.png'>";
    } else if (typechar == 1){
      document.getElementById("char").innerHTML = "<img src='asset/baby_patrick.png'>";
    } else{
      document.getElementById("char").innerHTML = "<img src='asset/baby_squidward.png'>";
    }
  }
  
  startchar();
  
  function updateFoodBar() {
    const bar = document.getElementById("bar-food");
    bar.style.width = (food * 10) + "%";
    if (food <= 3) {
      bar.classList.add("low");
    } else {
      bar.classList.remove("low");
    }
  }
  
  function updateSleepBar() {
    const bar = document.getElementById("bar-sleep");
    bar.style.width = (sleep * 10) + "%";
    if (sleep <= 3) {
      bar.classList.add("low");
    } else {
      bar.classList.remove("low");
    }
  }
  
  function updateHealthBar() {
    const bar = document.getElementById("bar-health");
    bar.style.width = (health * 10) + "%";
    if (health <= 3) {
      bar.classList.add("low");
    } else {
      bar.classList.remove("low");
    }
  }
  
  function updatePlayBar() {
    const bar = document.getElementById("bar-play");
    bar.style.width = (play * 10) + "%";
    if (play <= 3) {
      bar.classList.add("low");
    } else {
      bar.classList.remove("low");
    }
  }
  
  function reduceSleep() {
    sleep--;
    if (sleep <= 0) {
      sleep=1;
    }
    updateSleepBar();
  }
  
  function reduceFood() {
    food--;
    if (food <= 0) {
      food=1;
    }
    updateFoodBar();
  }
  
  function reduceHealth() {
    if(food === 1 || sleep === 1 || play === 1){
      health--;
    }
    if (health <= 0) {
      /*alert("Game Over");*/
      localStorage.clear();
    }
    updateHealthBar();
  }
  
  function reducePlay() {
    play--;
    if (play <= 0) {
      play=1;
    }
    updatePlayBar();
  }
  
 function startTimer() {
    intervalId = setInterval(reduceFood, 17000); //bbalikin ke 7000
    intervalId = setInterval(reduceSleep, 20000); //60000
    intervalId = setInterval(reduceHealth, 30000);//15000
    intervalId = setInterval(reducePlay, 45000);//15000
}
  
  document.getElementById("health-btn").addEventListener("click", function() {
    var typechar = localStorage.getItem("chartype");
    var currlevel = localStorage.getItem("level");
  
    //spongebob
    if(typechar == 0){
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "spongebob1heal"; //spongebob1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "spongebob2heal"; //spongebob2
      }else{
        document.getElementById("char").innerHTML = "spongebob3heal"; //spongebob3 
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_spongebob.png'>"; //spongebob1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "spongebob2"; //spongebob2eat
        }else{
          document.getElementById("char").innerHTML = "spongebob3"; //spongebob2eat
        }
      }, 3000);
    }
    
    //patrick
    else if(typechar == 1){
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "patrick1heal"; //patrick1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "patrick2heal"; //patrick2
      }else{
        document.getElementById("char").innerHTML = "patrick3heal"; //patrick3
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_patrick.png'>"; //patrick1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "patrick2"; //patrick2eat
        }else{
          document.getElementById("char").innerHTML = "patrick3"; //patrick3eat
        }
      }, 3000);
    }
  
    //squidward
    else{
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "squidward1heal"; //squidward1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "squidward2heal"; //squidward2
      }else{
        document.getElementById("char").innerHTML = "squidward3heal"; //squidward3
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_squidward.png'>"; //squidward1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "squidward2"; //squidward2eat
        }else{
          document.getElementById("char").innerHTML = "squidward3"; //squidward3eat
        }
      }, 3000);
    }
  
    health++;
    if (health > 10) {
      health = 10;
    }
    updateHealthBar();
  });
  
  
  
  
  //charlv1 = 0
  //charlv2 = 1
  //charlv3 = 2
  document.getElementById("food-btn").addEventListener("click", function() {
    var typechar = localStorage.getItem("chartype");
    var currlevel = localStorage.getItem("level");
  
    //spongebob
    if(typechar == 0){
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "<img src='asset/eat_spongebob.gif'>"; //spongebob1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "<img src='asset/eat_spongebob.gif'>"; //spongebob2
      }else{
        document.getElementById("char").innerHTML = "<img src='asset/eat_spongebob.gif'>"; //spongebob3 
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_spongebob.png'>"; //spongebob1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "spongebob2"; //spongebob2eat
        }else{
          document.getElementById("char").innerHTML = "spongebob3"; //spongebob2eat
        }
      }, 3000);
    }
    
    //patrick
    else if(typechar == 1){
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "patrick1eat"; //patrick1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "patrick2eat"; //patrick2
      }else{
        document.getElementById("char").innerHTML = "patrick3eat"; //patrick3
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_patrick.png'>"; //patrick1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "patrick2"; //patrick2eat
        }else{
          document.getElementById("char").innerHTML = "patrick3"; //patrick3eat
        }
      }, 3000);
    }
  
    //squidward
    else{
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "squidward1eat"; //squidward1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "squidward2eat"; //squidward2
      }else{
        document.getElementById("char").innerHTML = "squidward3eat"; //squidward3
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_squidward.png'>"; //squidward1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "squidward2"; //squidward2eat
        }else{
          document.getElementById("char").innerHTML = "squidward3"; //squidward3eat
        }
      }, 3000);
    }
  
    food++;
    if (food > 10) {
      food = 10;
    }
    updateFoodBar();
  });
  
  
  
  document.getElementById("sleep-btn").addEventListener("click", function() {
    var typechar = localStorage.getItem("chartype");
    var currlevel = localStorage.getItem("level");
  
    //spongebob
    if(typechar == 0){
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "spongebob1sleep"; //spongebob1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "spongebob2sleep"; //spongebob2
      }else{
        document.getElementById("char").innerHTML = "spongebob3sleep"; //spongebob3 
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_spongebob.png'>"; //spongebob1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "spongebob2"; //spongebob2eat
        }else{
          document.getElementById("char").innerHTML = "spongebob3"; //spongebob2eat
        }
      }, 3000);
    }
    
    //patrick
    else if(typechar == 1){
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "patrick1sleep"; //patrick1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "patrick2sleep"; //patrick2
      }else{
        document.getElementById("char").innerHTML = "patrick3sleep"; //patrick3
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_patrick.png'>"; //patrick1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "patrick2"; //patrick2eat
        }else{
          document.getElementById("char").innerHTML = "patrick3"; //patrick3eat
        }
      }, 3000);
    }
  
    //squidward
    else{
      if (currlevel == 1){
        document.getElementById("char").innerHTML = "squidward1sleep"; //squidward1
      }else if(currlevel == 2){
        document.getElementById("char").innerHTML = "squidward2sleep"; //squidward2
      }else{
        document.getElementById("char").innerHTML = "squidward3sleep"; //squidward3
      }
      setTimeout(function() {
        if (currlevel == 1){
          document.getElementById("char").innerHTML = "<img src='asset/baby_squidward.png'>"; //squidward1eat
        }else if(currlevel == 2){
          document.getElementById("char").innerHTML = "squidward2"; //squidward2eat
        }else{
          document.getElementById("char").innerHTML = "squidward3"; //squidward3eat
        }
      }, 3000);
    }
    sleep++;
    if (sleep > 10) {
      sleep = 10;
    }
    updateSleepBar();
    
  });
  
  startTimer();
  
  
  //-------------------------------------------------------------------------------------------------------------


  let count = 0;
  document.getElementById("play-btn").addEventListener("click", function() {
    if (sleep <=3 || food <= 3){
      var myInputValue = localStorage.getItem('myInputValue');
      alert(myInputValue + " kekurangan energi untuk bermain. beri dia makan atau beri dia waktu untuk tidur!");
    }else{
      if (count == 0 ){
        document.getElementById("score").style.display = "block";
        document.getElementById("table").style.display = "block";
        document.getElementById("char").style.display = "none";
        document.getElementById("buttoncont").style.display = "none";
        document.getElementById("greetingcontainer").style.display = "none";
        count++;
        minigame();
      } else {
        document.getElementById("score").style.display = "block";
        document.getElementById("table").style.display = "block";
        document.getElementById("char").style.display = "none";
        document.getElementById("buttoncont").style.display = "none";
        document.getElementById("greetingcontainer").style.display = "none";
     
      }
    }
  }
  
  );



//--------------------------------------------------------------------------------------------------------------------





function minigame(){
  
 

  function reset(){
    clearInterval(gameLoop);
    snake = [{ row: 4, col: 4 }];
    foods = [];
    for (let i = 0; i < 3; i++) {
      foods.push({ row: Math.floor(Math.random() * ROWS), col: Math.floor(Math.random() * COLS) });
    }
    dx = 1;
    dy = 0;
    score = 0;
    document.getElementById("score").innerText = "Score: " + score; // Menambahkan baris ini
    clearTable();
    drawFoods();
    drawSnake();
    gameLoop = setInterval(update, 401);
  }
  

const ROWS = 7;
  const COLS = 15;
  const table = document.getElementById("table");
  let snake = [{ row: 4, col: 4 }];
  let foods = [];
  for (let i = 0; i < 3; i++) {
    foods.push({ row: Math.floor(Math.random() * ROWS), col: Math.floor(Math.random() * COLS) });
  }

  let dx = 1;
  let dy = 0;
  let score = 0;

  function drawTable() {
    let html = "";
    for (let row = 0; row < ROWS; row++) {
      html += "<tr>";
      for (let col = 0; col < COLS; col++) {
        html += `<td id="cell-${row}-${col}"></td>`;
      }
      html += "</tr>";
    }
    table.innerHTML = html;
  }

  function drawSnake() {
    snake.forEach((part) => {
      const cell = document.getElementById(`cell-${part.row}-${part.col}`);
      cell.classList.add("snake");
    });
  }

  function drawFoods() {
    foods.forEach((food) => {
      const cell = document.getElementById(`cell-${food.row}-${food.col}`);
      cell.classList.add("food");
    });
  }

  function addFood() {
    const newFood = { row: Math.floor(Math.random() * ROWS), col: Math.floor(Math.random() * COLS) };
    foods.push(newFood);
  }

  function moveSnake() {
    const head = { row: snake[0].row + dy, col: snake[0].col + dx };
    if (head.col < 0) {
      head.col = COLS - 1;
    } else if (head.col >= COLS) {
      head.col = 0;
    }
    if (head.row < 0) {
      head.row = ROWS - 1;
    } else if (head.row >= ROWS) {
      head.row = 0;
    }

    foods.forEach((food, index) => {
      if (head.row === food.row && head.col === food.col) {
        foods.splice(index, 1);
        score++;
        document.getElementById("score").innerText = "Score: " + score;
      }
    });

   
    snake.pop();
    snake.unshift(head);

    if (foods.length === 0) {
      addFood();
    }

    const headCell = document.getElementById(`cell-${head.row}-${head.col}`);
    if (headCell.classList.contains("food")) {
      headCell.classList.remove("food");
    }
  }

  function clearTable() {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const cell = document.getElementById(`cell-${row}-${col}`);
        cell.classList.remove("snake", "food");
      }
    }
  }


  function update() {
    clearTable();
    drawFoods();
    moveSnake();
    drawSnake();
  
if (score === 5) {
      clearInterval(gameLoop); // stop the game loop
      alert("Selamat!");
      document.getElementById("score").style.display = "none"; // hide the score
      document.getElementById("table").style.display = "none"; // hide the table
      document.getElementById("char").style.display = "block";
      document.getElementById("buttoncont").style.display = "block";
      document.getElementById("greetingcontainer").style.display = "none";
      play++;
      play++;
      play++;
      play++;
      play++;
      if (play > 10) {
      play = 10;
      }
        
      updatePlayBar();
      
      reset();
    } 
  }
        
        function onKeyDown(event) {
          if (event.keyCode === 37 && dx === 0) {
            dx = -1;
            dy = 0;
          } else if (event.keyCode === 38 && dy === 0) {
            dx = 0;
            dy = -1;
          } else if (event.keyCode === 39 && dx === 0) {
            dx = 1;
            dy = 0;
          } else if (event.keyCode === 40 && dy === 0) {
            dx = 0;
            dy = 1;
          }
        }

      drawTable();
      document.addEventListener("keydown", onKeyDown);
      const gameLoop = setInterval(update, 400);

      function removeFood() {
  if (foods.length > 0) {
    const removedFood = foods.shift();
    const cell = document.getElementById(`cell-${removedFood.row}-${removedFood.col}`);
    cell.classList.remove("food");
  }
}

function updateFoods() {
  if (foods.length === 0) {
    addFood();
  }
  removeFood();
}

setInterval(updateFoods, 5500);
setInterval(clearFood, 4000);

}