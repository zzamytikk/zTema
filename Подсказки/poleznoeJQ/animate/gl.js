gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  //js:['/Подсказки/poleznoe/skorostJS/ok.js'],//Для тестирования localhost временноустановить!!!
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <b>animate()</b> анимация CSS-свойств.
    <br><b>fadeIn()</b> отобразить соответствующие элементы, сделав их непрозрачными.
    <br><b>fadeOut()</b> скройте соответствующие элементы, сделав их прозрачными.
    <br><b>fadeToggle()</b> отображение или скрытие сопоставленных элементов путем анимации их непрозрачности.
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  .fadeIn(999, 1);//показать
  .animate({ opacity: 1 }, 999, function () {});//круче
  // ||
  .fadeOut(999, 0);//убрать
  .animate({ opacity: 0 }, 999, function () {});//круче
  // ||
  .fadeToggle(500)//opacyti:0 тогда opacyti:1 || opacyti:1 тогда opacyti:0
  // ||
  let n = 80;
  
  .animate({ width: n + '%' }, 300, function () {
    //код
  });
  // ||
  .animate({height: 100%},{
    queue       : false,//без очереди
    duration    : 800,
    complete    : function() {
      //код
    }
  });
  // ||
  //scrollTop:
  $('.M').animate({scrollTop: $('.M')[0].scrollHeight}, 99);
  &lt;/script>
  </code></div></pre>

  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <ul class="ram-V0 all-c8">
      <ol>display:none; opacity:0</ol>:
      <b>show()</b> отображение соответствующих элементов.
      <br><b>hide()</b> скрыть соответствующие элементы.
      <br><b>toggle()</b> отобразить или скрыть сопоставленные элементы.
    </ul>
    
    <u>Только вертикально</u>:
    <ul class="ram-V0 all-c8">
      <li><b>slideUp()</b> скройте соответствующие элементы скользящим движением.</li>
      <li><b>slideDown()</b> отобразите соответствующие элементы с помощью скользящего движения.</li>
    </ul>
  </div></div>
  
  <script>
    zCod.$();//Подсветка HTML кода
    //zHid.$();//Скрыть/Показать
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};
