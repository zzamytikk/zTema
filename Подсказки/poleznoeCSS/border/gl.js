gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
  <!-- Найти элемент/Добавить в элемент: -->
  <div style="--zHidH:7ex" zhid="0">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>border</b> Свойство border в CSS — это универсальное сокращение для задания толщины (border-width),
      стиля (border-style) и цвета (border-color) рамки вокруг элемента за один раз, например, 
      border: 2px solid black;. Оно управляет видимой границей элемента, отделяющей его контент, 
      а его составляющие (border-width, border-style, border-color) можно задавать и по отдельности,
      а также для конкретных сторон (top, bottom, left, right).
    </div></div>

    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb=""><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;style>
          /* 
            to right = 90deg
            to left = 270deg
          */
          border-image: radial-gradient(#6592CF 64px, #243D83 0);
          254 fill /* нарезка плиток */
          200px    /* толщина рамки */
          50px 0;  /* выступ наружу, (верх/низ, бока) */ 
          &lt;/style>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  
    <div class="zCodR3 ram-n3 all-c0" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb><p><s></s></p><b>Пример</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          .vsem {
            margin: 3px 15px 15px 15px;
            padding: 2px;
            height:20px;
            background: #f0f5;
          }
          
          .bor {
            border: 4px solid green;/* 1-я линия */
            outline: 4px solid red; /* 2-я линия */
          }
          
          .bor2 {/* Линия с низу */
            border-bottom: 5px;
            border-style: solid;
          }
          
          .bor3 {/* Разрыв линии */
            border-left-width: 50px;
            border-left-style: solid;
            border-image: linear-gradient(to bottom, #bbb, #bbbbbb29, #bbb) 1 30% 1;
          }
          
          /* ✦✦ Линии с затуханием ✦✦ *//* #region */
          [class*="bor4"] {/* ! для всеx */
            border: 3px solid;
          }
          
          .bor4-1 {/* с двух сторон */
            border-image: linear-gradient(90deg, #0000, #999, #0000) 1;
          }
          
          .bor4-2 {/* Горизонт линия с затуханием с лева и права (to right) */
            border-image: linear-gradient(90deg, #0000, #999 0, #0000) 1;
          }
          
          .bor4-3 {/* Горизонт линия с затуханием с права (to left) */
            border-image: linear-gradient(to left, #0000, #999 0, #0000) 1;
          }
          /* ✦✦ Линии с затуханием ✦✦ *//* #endregion */
          
          .bor5 {/* Гнём */
            border-radius: 120% 5px;
            border-top-left-radius: 15em 1em;
            border-bottom-right-radius: 15em 1em;
          }
          &lt;/style>
          
          outline:
          &lt;div class="vsem bor">Пример1&lt;/div>
          Линия с низу:
          &lt;div class="vsem bor2">Пример2&lt;/div>
          Разрыв линии:
          &lt;div class="vsem bor3">Пример3&lt;/div>
          Линии с затуханием:
          &lt;div class="vsem bor4-1">Пример4-1&lt;/div>
          &lt;div class="vsem bor4-2">Пример4-2&lt;/div>
          &lt;div class="vsem bor4-3">Пример4-3&lt;/div>
          Гнём
          &lt;div class="vsem bor5">Пример5&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
  <hr class="hr-1"></div>

  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    //zPrez.razC.$(); //Вешаем click 'Цветовые варианты'
    //zTab.buf.$();//Установим на все <table class="zTabC". click по <td>(Скопировать)
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};