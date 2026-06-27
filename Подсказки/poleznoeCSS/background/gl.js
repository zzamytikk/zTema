gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `

  <!-- background -->
  <div style="--zHidH:5ex" zhid="0">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>background</b> устанавливает все свойства стиля фона одновременно, такие как цвет, изображение, начало координат и размер, а также метод повтора. Свойства компонента, не указанные в объявлении значения сокращенного свойства, устанавливаются на значения по умолчанию.
    </div></div>
    <!-- Полезная информация: -->
    <div class="zHid2" style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-poi all-c7"><div><button zhidb="2"><p><s></s></p></button>
      <u>Полезная информация</u>:
      <ul class="ram-V0 all-c8">
        <i>background-size:</i>
        <li><b>auto</b> Изображение отображается в своём исходном размере.</li>
        <li><b>cover</b> Масштабирует изображение так, чтобы оно полностью покрыло блок, сохраняя пропорции, но может обрезать края.</li>
        <li><b>contain</b> Масштабирует изображение так, чтобы оно полностью поместилось в блок, сохраняя пропорции, но могут появиться пустые области (полосы).</li>
        <li><b><ширина> <высота></b> Задаёт точный размер в единицах измерения (px, em, %, vw, vh, etc.).</li>
      </ul>
    </div></div>
    </div>
    <!-- Линии: -->
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>Линии</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;style>
          [class*="vse"] {
            display: inline-block;
            margin: 3px 15px 15px 15px;
            padding: 9px;
            width:8em;
            color: #000;
            background: #fff
          }
          [class*="vse"] > div {
            padding: 4px;
          }
          [class*="vse"] i {
            display: block;
            margin-bottom: 4px;
          }
          .vseT {
            background: #000
          }
          
          .bg1 {/* Тетрадь в клетку */
            background:
              linear-gradient(#6663, #0000 1px ),
              linear-gradient( 90deg, #6663, #0000 1px );
            background-size: 15px 15px;
          }
          .bg2 {/* Шахматная доска */
            /* + Для подсветки прозрачных картинок, или же просто любого элемента / блока. */
            background-color: red;/* Задний фон (если надо) */
            background-image:
              linear-gradient( 45deg, #888 25%, #0000 25%, #0000 74%, #888 75%, #888),
              linear-gradient( 45deg, #888 25%, #0000 25%, #0000 74%, #888 75%, #888);
            background-size: 30px 30px;
            background-position: 0 0, 15px 15px;
          }
          .bg3 {/* Линия с низу с затуханием: с лева и права */
            background: linear-gradient(90deg, #0000, #777 50%, #0000) 0 99%;
            background-repeat: no-repeat;
            background-size: 100% 1px;
          }
          .bg4 {/* Линия с верху с затуханием: с права на лево */
            background: linear-gradient(270deg, red, #0000);
            background-repeat: no-repeat;
            background-size: 100% 1px;
          }
          .bg5 {/* Линия с верху с затуханием: с лева на право */
            background: linear-gradient(90deg, red, #0000);
            background-repeat: no-repeat;
            background-size: 100% 1px;
          }
          .bg6 {/* Вертикальная 1 линия с лева */
            background: linear-gradient(to right, #808080 1px, #0000 1px);
          }
          .bg7 {/* Линия с затуханием с лева и права */
            background: linear-gradient(90deg, #0000, red 50%, #0000);
          }
          .bg8 {/* Горизонтальные линии */
            background: linear-gradient(to right, #0000 30%, #868686 0);
            background-size: 10px 100%;
          }
          .bg9 {/* Горизонтальная линия верх и низ */
            background-image:
              linear-gradient(to bottom, #333, #333 1px, #0000 1px, #0000), /* Линия сверху */
              linear-gradient(to top, #333, #333 1px, #0000 1px, #0000);   /* Линия снизу */
            background-size: 100% 100%; /* Растягивает градиент на всю высоту */
            background-position: 0 0, 0 100%; /* Позиционирует верхний градиент сверху, нижний - снизу */
            background-repeat: no-repeat; /* Отключает повторение градиентов */
          }
          .bg10 {/* Горизонтально много линий */
            background: repeating-linear-gradient(180deg, #0000, #0000 2px, #3CA1D9 2px, #3CA1D9 4px);
          }
          .bg11 {/* Вертикально много линий */
            background: repeating-linear-gradient( 90deg, #0000, #0000 10px, #ddd 10px, #ddd 20px );
          }
          .bg12 {/* 45° много линий */
            background: repeating-linear-gradient( 45deg, #0000, #0000 10px, #ddd 10px, #ddd 20px );
          }
          .bg13 {/* 45° много линий */
            background: repeating-linear-gradient(/* top */
              45deg,
              #0000,
              #0000 10px,
              #ccc 10px,
              #ccc 20px
            ),
            linear-gradient(/* bottom */
              to bottom,
              red,
              #999
            );
          }
          .bg14 {
            background: repeating-linear-gradient(
              -55deg,
              #222,
              #222 10px,
              #333 10px,
              #333 20px
            );
          }
          .bg15 {
            background: linear-gradient(
              to bottom,
              blue,
              blue 50%,
              red 50%,
              red
            );
            background-size: 100% 20px;
          }
          .bg16 {
            background: repeating-linear-gradient(
              to right,
              #f6ba52,
              #f6ba52 10px,
              #ffd180 10px,
              #ffd180 20px
            );
          }
          .bg17 {
            background: linear-gradient(
              to bottom,
              #808080 2px,
              #0000 2px,
              #0000 4px,
              #d1ecfe 4px,
              #d1ecfe calc(100% - 4px),
              #0000 calc(100% - 4px),
              #0000 calc(100% - 2px),
              #808080 calc(100% - 2px)
            );
          }
          .bg18 {
            background: linear-gradient(to top, red, green);
          }
          .bg19 {
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)
          }
          &lt;/style>
          
          &lt;div class="vse">&lt;div class="bg1">Пример1&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg2">Пример2&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg3">Пример3&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg4">Пример4&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg5">Пример5&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg6">Пример6&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg7">Пример7&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg8">Пример8&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg9">Пример9&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg10">Пример10&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg11">Пример11&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg12">Пример12&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg13">Пример13&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg14">Пример14&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg15">Пример15&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg16">Пример16&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg17">Пример17&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg18">Пример18&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg19">Пример19&lt;/div>&lt;/div>
          </code></div></pre>
        </div><div><iframe></iframe></div>
      </div>
    </div>
    <!-- Круги/Овал: -->
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>Круги/Овал</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          [class*="vse"] {
            display: inline-block;
            margin: 3px 15px 15px 15px;
            padding: 9px;
            width:8em;
            color: #000;
            background: #fff
          }
          [class*="vse"] > div {
            padding: 4px;
          }
          [class*="vse"] i {
            display: block;
            margin-bottom: 4px;
          }
          .vseT {
            background: #000
          }
          
          /*+ radial-gradient(форма градиента / размер / позиция центра, первый цвет, второй цвет и т.д.);
            позиция центра: at left, at top, at right, at bottom, at center, at 20%, at 130px 500px
          */
          .bg1 {
            background: radial-gradient(circle at 50% 40%,white 20%,yellow 50%);/* круг свечение */
            box-shadow: 0 0 10px 2px rgba(255,255,0,.7);
            border-radius: 20px;
          }
          .bg2 {
            background: repeating-radial-gradient(/* Круги от центра */
              circle,
              purple,
              purple 10px,
              #4b026f 10px,
              #4b026f 20px
            );
          }
          .bg3 {/* Свечение в центре (Круг) */
            background: radial-gradient(circle at 50% 50%, red, #0000);
          }
          .bg4 {
            background: radial-gradient(circle at 50% 50%, red -20%, #0000 50%);/* Много точек */
            background-size: 10px 10px;
          }
          .bg5 {/* круг 35px = Размытость  100% = чётче */
            background: radial-gradient(circle, red 15%, #0000 30px 100%);
          }
          .bg6 {/* овал */
            background: radial-gradient(red 15%, #0000 35px 100%);
          }
          .bg7 {
            background: radial-gradient(ellipse 80px 40px, #a09af1, #0000)
          }
          .bg8 {
            background: radial-gradient(#06f 10%, #fff3 40%, #0000 60%);
            background-size: 15% 100%;
            background-repeat: no-repeat;
          }
          
          .bg9 {
            position: relative;
            background: red;
          }
          .bg9::before,.bg9::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 10px;
            background-size: 20px 10px;
          }
          .bg9::before {
            top: -10px;
            background-image: radial-gradient(circle at 10px -5px, #0000 12px, red 13px);
          }
          .bg9::after {
            bottom: -10px;
            background-image: radial-gradient(circle at 10px 15px, #0000 12px, red 13px);
          }
          &lt;/style>
          
          &lt;div class="vse">&lt;div class="bg1">Пример1&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg2">Пример2&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg3">Пример3&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg4">Пример4&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg5">Пример5&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg6">Пример6&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg7">Пример7&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg8">Пример8&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="bg9">Пример9&lt;/div>&lt;/div>
          &lt;/style>
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