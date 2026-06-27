gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
    max-width: 1200px
  }
  </style>
  
  <!-- @media -->
  <div style="--zHidH:7ex" zhid="0">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>@media</b> можно использовать для применения части таблицы стилей на основе результата одного или нескольких медиазапросов. 
      С его помощью вы указываете медиазапрос и блок CSS, который будет применен к документу только в том случае, 
      lесли медиазапрос соответствует устройству, на котором используется контент.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>Пример</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;style>
          /* В @media можно указывать определённые типы устройств:
          
              all – для всех;
              print – для принтеров и в режиме предварительного просмотра страницы перед печатью;
              screen – для устройств с экранами;
              speech – для программ чтения с экрана.
          
              Например, этот @media только для экранов:
          
                  @media screen { ... }
          
              А здесь для экранов и принтеров:
          
                  @media screen, print { ... }
          */
          
          @media (min-width: 411px) and (min-height: 731px) {} /* width >= 411px && height >= 731px */
          @media (min-width: 411px) and (min-height: 731px) {} /* width >= 411px || height >= 731px */
          
          /* Тема браузер окна:
               light - светлая
               dark  - тёмная
          */
          @media (prefers-color-scheme: light) {
            .theme-b {
              background: #bcd;
              color: #334;
              outline: 5px dotted #000;
            }
          }
          &lt;/style>
          </code></div></pre>
        </div><div></div>
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