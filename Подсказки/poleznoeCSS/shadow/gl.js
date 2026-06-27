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
  
  <!-- text-shadow -->
  <div style="--zHidH:7ex" zhid="0">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>text-shadow</b> добавляет тени к тексту. Оно принимает список теней, разделенных запятыми, которые нужно применить к тексту и любому из его элементов . Каждая тень описывается некоторой комбинацией смещений по осям X и Y относительно элемента, радиусом размытия и цветом.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>Примеры</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;style>
          .vsem {
            margin: 3px 15px 15px 15px;
            padding: 2px;
          }
          
          .ten0 {
            color: #0b0;
            text-shadow: 0 0 1px #777, 0 0 1px #777, 0 0 1px #777
          }
          .ten1 {/* Для светлого фона */
            color: #000;
            font-weight: 600;
            text-shadow: 1px 1px #fff, 2px 2px #777;
          }
          .ten1-T {/* Для тёмного фона */
            color: #fff;
            font-weight: 600;
            text-shadow: 1px 1px #000, 2px 2px #777;
            background: #000
          }
          .ten2 {
            color: #fff;
            text-shadow: 0 0 2px #000, 0 0 1px #000, 0 0 1px #000;
          }
          .ten2-T {
            color: #000;
            text-shadow: 0 0 2px #fff, 0 0 1px #fff, 0 0 1px #fff;
            background: #000
          }
          .ten3 {
            color: #fff;
            background: #fff;
            text-shadow: 2px 2px 2px #000, 1px 1px 1px #000, 1px 1px 1px #000;
          }
          .ten4 {
            color: #fff;
            background: #fff;
            text-shadow: 0 0 2px #000, 1px 1px 1px #000, 1px 1px 1px #000;
          }
          .ten5 {
            font-size: 22pt;
            text-shadow: 0 2px white, 0 3px #777;
            letter-spacing: 1px;
          }
          .ten6 {
            color: #000;
            text-shadow: 0 0 2px #fff, 0 0 1px #fff, 0 0 1px #fff,
              0 0 2px #000, 0 0 1px #000, 0 0 1px #000;
          }
          .ten7 {
            color: #000;
            text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #fff,
              0 0 1px #000, 0 0 1px #000, 0 0 1px #000;
          }
          &lt;/style>
          
          &lt;div class="vsem ten0">Пример0 <br> Хорошо для тёмного и светлого фона.&lt;/div>
          &lt;div class="vsem ten1">Пример1&lt;/div>
          &lt;div class="vsem ten1-T">Пример1-T&lt;/div>
          &lt;div class="vsem ten2">Пример2&lt;/div>
          &lt;div class="vsem ten2-T">Пример2-T&lt;/div>
          &lt;div class="vsem ten3">Пример3&lt;/div>
          &lt;div class="vsem ten4">Пример4&lt;/div>
          &lt;div class="vsem ten5">Пример5&lt;/div>
          &lt;div class="vsem ten6">Пример6&lt;/div>
          &lt;div class="vsem ten7">Пример7&lt;/div>
          
          </code></div></pre>
        </div><div><iframe></iframe></div>
      </div>
    </div>
  <hr class="hr-1"></div>
  <!-- box-shadow -->
  <div style="--zHidH:7ex" zhid="0">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>box-shadow</b> добавляет эффекты тени вокруг рамки элемента. Вы можете задать несколько эффектов, разделяя их запятыми. Тень от блока описывается смещениями по осям X и Y относительно элемента, радиусами размытия и распространения, а также цветом.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>Примеры</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;style>
          [class*="vse"] {
            display:inline-block;
            margin: 3px 15px 15px 15px;
            padding: 9px;
            color: #000;
            width: 8em;
            background: #fff
          }
          [class*="vse"] > div {
            padding: 4px;
            background: #f0f5
          }
          .vseT {
            background: #000
          }
          
          .ten1 {
            box-shadow: inset 0 0 10px #000;
          }
          .ten2 {
            box-shadow: inset 0 0 3px #000;
          }
          .ten3 {/* Только слева линия */
            box-shadow: -2px 0 #ff0000;
          }
          .ten4 {
            margin: 20px;
            box-shadow: inset #57A8FA 0 0 20px 5px, #57A8FA 0 0 22px 7px;
          }
          .ten5 {/* Непрозрачная обводка */
            box-shadow: 0 0 0 2px #000;
          }
          .ten6 {
            margin: 20px;
            box-shadow: 0 0 20px -5px #f00;
          }
          .ten7 {
            box-shadow: 0 3px 5px #0006;
            border-color: #000;
          }
          .ten8 {
            box-shadow: 0 3px 5px #f556;
            border-color: #f55;
          }
          .ten9 {
            box-shadow: 0 3px 5px #08f6;
            border-color: #08f;
          }
          .ten10 {
            box-shadow: 0 3px 5px #8886;
            border-color: #888;
          }
          .ten11 {
            box-shadow: 0 3px 5px #0b06;
            border-color: #0b0;
          }
          .ten12 {
            box-shadow: inset 0 -19px 3px -7px #ff000052;
          }
          .ten13 {
            box-shadow: 0 0 15px -5px rgba(255, 255, 255, 0.5);
            border-radius: 50%;
          }
          .ten14 {
            border-radius: 50%;
            box-shadow: inset 0 -19px 3px -7px #ff000052;
          }
          &lt;/style>
          
          &lt;div class="vse">&lt;div class="ten1">Пример1&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten2">Пример2&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten3">Пример3&lt;/div>&lt;/div>
          &lt;div class="vseT">&lt;div class="ten4">Пример4&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten5">Пример5&lt;/div>&lt;/div>
          &lt;div class="vseT">&lt;div class="ten6">Пример6&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten7">Пример7&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten8">Пример8&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten9">Пример9&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten10">Пример10&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten11">Пример11&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten12">Пример12&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten13">Пример13&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="ten14">Пример14&lt;/div>&lt;/div>
          </code></div></pre>
        </div><div><iframe></iframe></div>
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