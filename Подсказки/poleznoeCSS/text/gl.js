gl.M.cho.O.U = {
  //js:['/1/minF/m.js'],
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
  <div class="ram-V0 ram-V2 gI-poi all-c7"><div>
    <div style="--zHidH:6ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
    <u>Единицы измерения</u>:
    <ul class="ram-V0 all-c8">
      <li><b>px и pt</b> являются абсолютными и их размер зависит от разрешения экрана.</ol>
      <li><b>em и %</b> являются относительными и зависят от размера шрифта установленного в документе.</ol>
      <li><b>rem</b> от стиля html</li>
      <li><b>vw</b> 1% ширины окна браузера</li>
      <li><b>vh</b> 1% высоты окна браузера</li>
      <li><b>vmin</b> наименьшее из (vw, vh), в IE9 обозначается vm</li>
      <li><b>vmax</b> наибольшее из (vw, vh)</li>
      <li><b>8ch</b> Ширина в символах (8 букв)</li>
      <li><b>ex</b> Единица определяет высоту буквы «x» в нижнем регистре.</li>
    </ul>
    </div>
  </div></div>
  
  <div class="ram-V0 ram-V2 gI-poi all-c7"><div>
    <div style="--zHidH:6ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
    <u>Список</u>:
    <ul class="ram-V0 all-c8">
      <li><b>font-style: normal;</b> Обычное начертание текста.</li>
      <li><b>font-weight: 900;</b> Толщина текста</li>
      <br>
      <li><b>writing-mode: vertical-lr;</b> текст установлен слева направо</li>
      <li><b>text-orientation: upright;</b> символы стоят друг под другом</li>
      <br>
      <li><b>text-indent: 9px;</b> определяет размер отступа первой строки текста с лева</li>
      <li><b>text-overflow: clip;</b> (+ overflow: hidden;) как будет отображаться пользователю строчный текст, выходящий за границы блока.</li>
      <li><b>text-overflow: ellipsis;</b> определяет, как пользователю отображается скрытое содержимое, превышающее допустимое значение. Это может быть обрезанное содержимое, многоточие ( ) или пользовательская строка.</li>
      <li><b>text-decoration: overline;</b> устанавливает оформление текста. Оно является сокращенным свойством для text-decoration-line, text-decoration-color, text-decoration-style.</li>
      <li><b>text-transform: capitalize;</b> задает регистр текста (заглавные или строчные буквы).</li>
      <li><b>text-align: justify;</b> Выравнивание текста по ширине (display: block;,..)</li>
      <li><b>text-align-last: end;</b> выравнивает последнюю строку текста.</li>
      <br>
      <li><b>white-space: nowrap;</b> не переносит строки</li>
      <li><b>word-break: break-all;</b> указывает перенос пол слова.</li>
      <li><b>word-break: break-word;</b> указывает перенос слова.</li>
      <li><b>word-spacing: 2px;</b> длина пробела между словами и между тегами</li>
      <li><b>letter-spacing: 1px;</b> Отступ между буквами</li>
      <br>
      <li><b>line-height: 2;</b> высота строки / межстрочный интервал.</li>
      <li><b>inline-size: 30px;</b> устанавливает ширину элемента (Это соответствует width)</li>
      <br>
      <li><b>::first-line</b> стилизует начальную (первую) строку.</li>
      <li><b>::first-letter</b> Первая буква всегда заглавная! (Псевдоэлемент :first-letter работает только с блочными элементами (не будет работать например со &lt;span>). Чтобы :first-letter работало со строчными элементами, данному элементу надо задать свойство «inline-block» или «block».)</li>
    </ul>
    </div>
  </div></div>
  
  <fieldset class="all-c1" style="--zHid: 11ex;" zhid="1">
    <legend><button zhidb><p><s></s></p><b>Обрезаем текст по строчкам</b></button></legend>
    
    <div class="zCodR3 ram-n3 all-c0">
      <div class="zCodR3z"><div>Много строк</div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          #preTest {
            /* обрезаем текст по строчкам */
            overflow: hidden;             /* Обрезаем всё за пределами блока */
            display: -webkit-box;         /* Включаем флексбоксы */
            -webkit-box-orient: vertical; /* Вертикальная ориентация */
            -webkit-line-clamp: 2;        /* Число отображаемых строк */
            /* word-break: break-all; +/  /* Указывает перенос пол слова. */
            /* -------------------------- */
            
            width: 150px;
            border: 1px solid red;
          }
          &lt;/style>
            
          &lt;div id="preTest">обрезаем текст по строчкам обрезаем текст по строчкам&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
    
    <div class="zCodR3 ram-n3 all-c0">
      <div class="zCodR3z"><div>1 строчка</div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          #preTest {
            /* обрезаем текст в 1-ну строчку */
            white-space: nowrap;             /* Запрещаем перенос строк! min-width: 0%; убераем выход рамки за пределы */
            overflow: hidden;                /* Обрезаем все, что не помещается в область */
            text-overflow: ellipsis;         /* Добавляем многоточие */
            /* ----------------------------- */
          
            width: 150px;
            border: 1px solid red;
          }
          &lt;/style>
            
          &lt;div id="preTest">обрезаем текст по строчкам&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
  </fieldset>
  
    <!-- text-decoration: -->
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>text-decoration</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          h1 {
            text-decoration: line-through;
          }
          
          h2 {
            text-decoration: overline;
          }
          
          h3 {
            text-decoration: underline;
          }
          h3 + h3 {
            text-decoration: underline dotted;
          }
          h3 + h3 + h3 {
            text-decoration: 5px underline dotted red;
          }
          h3 + h3 + h3 + h3 {
            text-decoration: green wavy underline;
          }
          
          h4 {
            text-decoration: 3px underline overline;
          }
          &lt;/style>
          
          <h1>text-decoration: line-through;</h1>
          
          <h2>text-decoration: overline;</h2>
          
          <h3>text-decoration: underline;</h3>
          <h3>text-decoration: underline dotted;</h3>
          <h3>text-decoration: underline dotted red;</h3>
          <h3>text-decoration: green wavy underline;</h3>
          
          <h4>text-decoration: 3px underline overline;</h4>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
  

  <div class="zCodR3 ram-n3 all-c5" style="--zHidH:10ex" zhid="1">
    <div class="zCodR3z"><div><button zhidb><p><s></s></p><b>Подключение щрифтов</b></button></div></div>
    <div class="zCodR3s">
      <div>
        <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          @font-face {/* eot, ttf, svg и woff */
            font-family: 'Pacifico-Regular';
            src: url('file:///F:/save/diz/ucoz/www/gs/icon/fa-solid-900.eot');                   /* IE9 Compat Modes */
            src: url('file:///F:/save/diz/ucoz/www/gs/icon/fa-solid-900.woff2') format('woff2'), /* Новейшие браузеры */
              url('file:///F:/save/diz/ucoz/www/gs/icon/fa-solid-900.woff') format('woff'),      /* Новые браузеры и IE9+ */
              url('file:///F:/save/diz/ucoz/www/gs/icon/fa-solid-900.ttf')  format('truetype'),  /* Старые Safari, Android, iOS */
              url('file:///F:/save/diz/ucoz/www/gs/icon/fa-solid-900.svg') format('svg');        /* Древние Safari, iOS, Android */
            font-weight: normal;
            font-style: normal;
          }
          
          * {
            font-family: nunito;
            font: 18px futura;
            font-family: Gotham,sans-serif;
            font-family: -apple-system, BlinkMacSystemFont,'Roboto','Helvetica Neue',Geneva,"Noto Sans Armenian","Noto Sans Bengali","Noto Sans Cherokee","Noto Sans Devanagari","Noto Sans Ethiopic","Noto Sans Georgian","Noto Sans Hebrew","Noto Sans Kannada","Noto Sans Khmer","Noto Sans Lao","Noto Sans Osmanya","Noto Sans Tamil","Noto Sans Telugu","Noto Sans Thai",sans-serif,arial,Tahoma,verdana;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-family: 'Merriweather', serif;
            font-family: 'Fira Sans', sans-serif;
            font: 10pt Segoe UI Historic,Segoe UI,Helvetica,Arial,sans-serif;
            font: 9pt Verdana,Arial,Helvetica,Tahoma,sans-serif;
            font: 500 10pt/0px Arial,Helvetica,sans-serif;
            font-family: 'Roboto Slab', serif;
          }
          &lt;/style>
        </code></div></pre>
      </div>
      <div></div>
    </div>
  </div>

  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};
