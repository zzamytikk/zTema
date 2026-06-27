gl.M.cho.O.U = {
  //js:['/Primery/1/minF/m.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <b>width() || height()</b> возвращают высоту и ширину элемента.
    <br><br>
    <u>+ полоса прокрутки</u>:
    <ul class="ram-V0 all-c8">
      <li><b>innerHeight() || innerWidth()</b> возвращают высоту и ширину элемента, включая «padding».</li>
      <li><b>outerHeight() || outerWidth()</b> возвращают высоту и ширину элемента, включая «padding» и «border».</li>
      <li><b>outerHeight(true) || outerWidth(true)</b> возвращают высоту и ширину элемента, включая «padding», «border» и «margin»</li>
    </ul>
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  console.debug(
    '\\n html:'+
      '\\n\\t width(): ' + e.width() + //return 50.333
      '\\n\\t • С полосой прокру∆тки: ' +
      '\\n\\t innerWidth(): ' + e.innerWidth() + ' + «padding»'+
      '\\n\\t outerWidth(): ' + e.outerWidth() + ' + «padding» и «border»' +
      '\\n\\t outerWidth(true): ' + e.outerWidth(true) + ' + «padding», «border» и «margin».'+
  
      '\\n\\n\\t return (width[' + h + '] - [' + w + ']innerWidth) = ' + (h - w)
  );

  $(window).innerWidth()//Размер Браузер окна (Видимая часть)
  $(window).innerHeight()
  $(document).width()   //Размер страницы с прокруткой
  $(document).height()
  &lt;/script>
  </code></div></pre>
  
 <div class="ram-V0 ram-V2 gI-poi all-c7"><div>
    <ul class="ram-V0 all-c8">
      <li><b>offset()</b> координаты относительно окна + прокрутка.</li>
      <li><b>position()</b> координаты относительно родителя для выбранных элементов.</li>
      <li><b>scrollLeft() || scrollTop()</b> Получает/Устанавливает значение отступа прокрутки.</li>
      <li><b>$()[0].getBoundingClientRect()</b> содержит размеры элемента и его положение относительно видимой области просмотра.</li>
    </ul>
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  .offset();//return {top: 46.88, left: 18.2833}
  //.offset().left || .offset().right
  .offset({top:150,left:100});//Установит координаты элемента относительно документа.
  
  .position()//return top: 46.222, left: 18.555
  //.position().left || .position().right
  
  .scrollTop(77);//Перематаем scroll
  
  $()[0].getBoundingClientRect();/* return {
    width: 300.3999938964844, height: 196.6999969482422,
    top: 137, right: 386.1999969482422, bottom: 333.6999969482422, left: 85.80000305175781,

    x: 85.80000305175781, y: 137//! left и top Старо!
  } */
  &lt;/script>
  </code></div></pre>
  
  <script>
    zCod.$();//Подсветка HTML кода
    //zHid.$();//Скрыть/Показать
    //zPrez.razC.$(); //Вешаем click 'Цветовые варианты'
    //zTab.buf.$();//Установим на все <table class="zTabC". click по <td>(Скопировать)
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};