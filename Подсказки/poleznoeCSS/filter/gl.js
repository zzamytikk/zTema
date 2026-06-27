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
  
  <!-- filter -->
  <div style="--zHidH:7ex" zhid="0">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>filter</b> применяет к элементу графические эффекты, такие как размытие или изменение цвета. 
      Фильтры обычно используются для настройки отображения изображений, фонов и границ.
    </div></div>
   
    <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-poi all-c7"><div><button zhidb><p><s></s></p></button>
      <u>Полезная информация</u>:
      <ul class="ram-V0 all-c8">
        <ol>filter:</ol>
        <li><b>blur()</b> Применяет размытие по Гауссу к входному изображению.</li>
        <li><b>brightness()</b> Применяет линейный множитель к входному изображению, делая его более или менее ярким. Значения представляют собой линейные множители эффекта: при 0% создании полностью черного изображения 100% эффект отсутствует, а при значениях, превышающих заданное значение, 100% изображение становится ярче.</li>
        <li><b>contrast()</b> Регулирует контрастность входного изображения. Значение 0%делает изображение серым, 100% не оказывает никакого эффекта, а значения больше 100% создают контрастность.</li>
        <li><b>drop-shadow()</b> Применяет параметр shadow в качестве тени, следуя контурам изображения. Синтаксис тени аналогичен box-shadow(определенному в модуле CSS backgrounds and borders), за исключением того, что inset ключевое слово и spreadпараметр не допускаются. Как и со всеми filter значениями свойств, любые фильтры после drop-shadow() применяются к тени.</li>
        <li><b>grayscale()</b> Преобразует изображение в оттенки серого. Значение параметра 100% полностью соответствует оттенкам серого. Начальное значение 0% параметра не изменяет входные данные. Значения от 0% до 100% приводят к линейному множителю эффекта.</li>
        <li><b>hue-rotate()</b> Применяет поворот оттенка. Значение angle определяет количество градусов вокруг круга цветового оттенка, на которое будут корректироваться входные образцы. Значение 0deg оставляет входные данные без изменений.</li>
        <li><b>invert()</b> Инвертирует сэмплы во входном изображении. Значение 100% полностью инвертирует изображение. Значение 0%оставляет входное изображение неизменным. Значения от 0% до 100% имеют линейный множитель эффекта.</li>
        <li><b>opacity()</b> Применяет прозрачность. 0% Делает изображение полностью прозрачным, 100% оставляя его без изменений.</li>
        <li><b>saturate()</b> Преобразует изображение в сепию, при этом значение параметра 100% делает изображение полностью сепийным и 0% не вносит никаких изменений.</li>
        <li><b>sepia()</b> Преобразует изображение в сепию, при этом значение параметра 100% делает изображение полностью сепийным и 0% не вносит никаких изменений.</li>
        <br>
        <li><b>Пример</b> filter: contrast(175%) brightness(3%);</li>
      </ul>
  
      <u>Полезная информация2</u>:
      <ul class="ram-V0 all-c8">
        <li>filter: none;</li>
        <li>filter: inherit;</li>
        <li>filter: initial;</li>
        <li>filter: revert;</li>
        <li>filter: revert-layer;</li>
        <li>filter: unset;</li>
      </ul>
    </div></div>
    </div>
    
    <!-- С просмотром: -->
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>Пример</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          [class*="vse"] {
            display: inline-block;
            margin: 3px 15px 15px 15px;
            padding: 9px;
            color: #000;
          }
          [class*="vse"] > div {
            width:150px;
            height: 150px;
            padding: 4px;
            background: url('https://zam.usite.pro/i/vse/1/filter.png');
            background-size: cover
          }
          [class*="vse"] i {
            display: block;
            margin-bottom: 4px;
          }
          .vseT {
            background: #000
          }
          
          .pr {
            filter: blur(2px);
          }
          .pr2 {
            filter: brightness(30%);
          }
          .pr3 {
            filter: contrast(250%);
          }
          .pr4 {
            filter: drop-shadow(4px 4px red);
          }
          .pr5 {
            filter: grayscale(80%);
          }
          .pr6 {
            filter: hue-rotate(0.5turn);
          }
          .pr7 {
            filter: invert(100%);
          }
          
          .pr8 {
            filter: opacity(40%);
          }
          .pr9 {
            filter: saturate(390%);
          }
          .pr10 {
            filter: sepia(0.6);
          }
          &lt;/style>
          
          &lt;div class="vse">&lt;div class="pr">&lt;i>blur(2px)&lt;/i>Пример1&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr2">&lt;i>brightness(30%):&lt;/i>Пример2&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr3">&lt;i>contrast(250%):&lt;/i>Пример3&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr4">&lt;i>drop-shadow(4px 4px red):&lt;/i>Пример4&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr5">&lt;i>grayscale(80%):&lt;/i>Пример5&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr6">&lt;i>hue-rotate(0.5turn):&lt;/i>Пример6&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr7">&lt;i>invert(100%):&lt;/i>Пример7&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr8">&lt;i>opacity(40%):&lt;/i>Пример8&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr9">&lt;i>saturate(390%):&lt;/i>Пример9&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr10">&lt;i>sepia(0.6):&lt;/i>Пример10&lt;/div>&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
  <hr class="hr-1"></div>

  <!-- backdrop-filter -->
  <div style="--zHidH:7ex" zhid="0">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>backdrop-filter</b> позволяет применять визуальные эффекты (размытие, контраст, прозрачность и т. д.) к фону элементов, 
      находящихся за целевым элементом. Оно работает так же, как свойство filter, но вместо того, чтобы изменять сам элемент, 
      применяется только к его фону. Чтобы эффект заработал, у элемента должен быть прозрачный фон (rgba, opacity, transparent и т.д.), 
      иначе backdrop-filter не будет заметен.
    </div></div>
   
    <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-poi all-c7"><div><button zhidb><p><s></s></p></button>
      <u>Полезная информация</u>:
      <ul class="ram-V0 all-c8">
        <ol>backdrop-filter:</ol>
        <li><b>blur()</b> Применяет размытие по Гауссу к входному изображению.
          <br> &nbsp; • <b>blur(5px)</b> Помогает размыть текст за фоном, когда прозрачный задний фон(!!!Может вызвать проблему с z-index).

        </li>
        <li><b>brightness()</b> Применяет линейный множитель к входному изображению, делая его более или менее ярким. Значения представляют собой линейные множители эффекта: при 0% создании полностью черного изображения 100% эффект отсутствует, а при значениях, превышающих заданное значение, 100% изображение становится ярче.</li>
        <li><b>contrast()</b> Регулирует контрастность входного изображения. Значение 0%делает изображение серым, 100% не оказывает никакого эффекта, а значения больше 100% создают контрастность.</li>
        <li><b>grayscale()</b> Преобразует изображение в оттенки серого. Значение параметра 100% полностью соответствует оттенкам серого. Начальное значение 0% параметра не изменяет входные данные. Значения от 0% до 100% приводят к линейному множителю эффекта.</li>
        <li><b>hue-rotate()</b> Применяет поворот оттенка. Значение angle определяет количество градусов вокруг круга цветового оттенка, на которое будут корректироваться входные образцы. Значение 0deg оставляет входные данные без изменений.</li>
        <li><b>invert()</b> Инвертирует сэмплы во входном изображении. Значение 100% полностью инвертирует изображение. Значение 0%оставляет входное изображение неизменным. Значения от 0% до 100% имеют линейный множитель эффекта.</li>
        <li><b>saturate()</b> Преобразует изображение в сепию, при этом значение параметра 100% делает изображение полностью сепийным и 0% не вносит никаких изменений.</li>
        <li><b>sepia()</b> Преобразует изображение в сепию, при этом значение параметра 100% делает изображение полностью сепийным и 0% не вносит никаких изменений.</li>
        <br>
        <li><b>Пример</b> backdrop-filter: contrast(175%) brightness(3%);</li>
      </ul>
  
      <u>Полезная информация2</u>:
      <ul class="ram-V0 all-c8">
        <li>backdrop-filter: inherit;</li>
        <li>backdrop-filter: initial;</li>
        <li>backdrop-filter: revert;</li>
        <li>backdrop-filter: revert-layer;</li>
        <li>backdrop-filter: unset;</li>
      </ul>
    </div></div>
    </div>
    
    <!-- С просмотром: -->
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>Пример</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          [class*="vse"] {
            display: inline-block;
            margin: 3px 15px 15px 15px;
            padding: 9px;
            color: #000;
            background: url('https://zam.usite.pro/i/vse/1/filter.png');
            background-size: cover
          }
          [class*="vse"] > div {
            width:150px;
            height: 150px;
            padding: 4px;
          }
          [class*="vse"] i {
            display: block;
            margin-bottom: 4px;
          }
          .vseT {
            background: #000
          }
          
          .pr {
            backdrop-filter: blur(5px);
          }
          .pr2 {
            backdrop-filter: brightness(30%);
          }
          .pr3 {
            backdrop-filter: contrast(250%);
          }
          .pr5 {
            backdrop-filter: grayscale(80%);
          }
          .pr6 {
            backdrop-filter: hue-rotate(0.5turn);
          }
          .pr7 {
            backdrop-filter: invert(100%);
          }
          .pr9 {
            backdrop-filter: saturate(390%);
          }
          .pr10 {
            backdrop-filter: sepia(0.6);
          }
          &lt;/style>
          
          &lt;div class="vse">&lt;div class="pr">&lt;i>blur(2px)&lt;/i>Пример1&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr2">&lt;i>brightness(30%):&lt;/i>Пример2&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr3">&lt;i>contrast(250%):&lt;/i>Пример3&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr5">&lt;i>grayscale(80%):&lt;/i>Пример5&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr6">&lt;i>hue-rotate(0.5turn):&lt;/i>Пример6&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr7">&lt;i>invert(100%):&lt;/i>Пример7&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr9">&lt;i>saturate(390%):&lt;/i>Пример9&lt;/div>&lt;/div>
          &lt;div class="vse">&lt;div class="pr10">&lt;i>sepia(0.6):&lt;/i>Пример10&lt;/div>&lt;/div>
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