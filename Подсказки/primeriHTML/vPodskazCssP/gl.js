gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
<link href="/db/publ/tooltipCSSpljus/1-0-0/m.css" rel="stylesheet">
    
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
      <b>Всплывающая подсказка</b> обычный блок с текстом, который появляется при наведении на элемент(ссылки, кнопки и т.д).
      Подсказка даёт более подробную информацию о содержимом элемента.
    </div></div> 
    
    <style>
      .vpPOK > div {
        margin: 9px;
        min-width: min-content;
      }
      
      /* Покажем */
      .vpPOK [class*="vp-"] {
        opacity: 1;
        z-index: 1;
        position: relative;
        transform: translate(0)
      }
      .vpPOK :is(.vp-R, .vp-L, .vp-T, .vp-B) {
        left: unset;
        right: unset;
      }
    </style>
    <!-- ✂ Цветовой набор -->
    <div class="ram-n1-1 ram-V1-1X vpPOK">
      <div class="vpCssP">
        <div class="vp-TR all-c0">.vp-TR .all-c0</div>
      </div><div>
        <div class="vpCssP"><div class="vp-T all-c1">.vp-T all-c1</div></div>
      </div><div>
        <div class="vpCssP"><div class="vp-TL all-c2">.vp-TL all-c2</div></div>
      </div><div>
        <div class="vpCssP"><div class="vp-R all-c3">.vp-R all-c3</div></div>
      </div><div>
        <div class="vpCssP"><div class="vp-L all-c4">.vp-L all-c4</div></div>
      </div><div>
        <div class="vpCssP"><div class="vp-BR all-c5">.vp-BR all-c5</div></div>
      </div><div>
        <div class="vpCssP"><div class="vp-B all-c6">.vp-B all-c6</div></div>
      </div><div>
        <div class="vpCssP"><div class="vp-BL all-c7">.vp-BL all-c7</div></div>
      </div><div>
        <div class="vpCssP"><div class="vp-TR all-c8">.vp-TR all-c8</div></div>
      </div>
    </div>

    <div class="ram-V0 ram-V2 gI-inf all-c2"><div>
      С возможностью отображения <u class="u-n0 all-c1">HTML кодов</u> в подсказке.
    </div></div>

    <h4 class="hr-n1 hr-L" style="--hr-lin: var(--Ct)"><b>Добавим (html, css) подсказку:</b></h4>
    <p>Для создания подсказки в HTML добавим к нужному элементу пользовательский атрибут <span class="cod-scb">data-t = </span><span class="cod-atr">"Текст подсказки"</span> с текстом подсказки.</p>
    <p>Для выбора <u class="u-n0 all-c1">стороны появления</u> подсказки добавим в атрибут <span class="cod-scb">class</span>:</p>
    <!-- ✂ Стороны поивления -->
    <div class="ram-n1-1 ram-V1 all-c1">
      <div class="vpCssP">
        <i>Право центр</i>
        <b>class</b><s>vp-R</s>
        <div class="vp-R all-c8">Право центр</div>
      </div>
      <div class="vpCssP">
        <i>Верх слева на право</i>
        <b>class</b><s>vp-TL</s>
        <div class="vp-TL all-c8">Верх слева на право</div>
      </div>
      <div class="vpCssP">
        <i>Верх центр</i>
        <b>class</b><s>vp-T</s>
        <div class="vp-T all-c8">Верх центр</div>
      </div>
      <div class="vpCssP">
        <i>Верх справа на лево</i>
        <b>class</b><s>vp-TR</s>
        <div class="vp-TR all-c8">Верх справа на лево</div>
      </div>
      <div class="vpCssP">
        <i>Низ справа на лево</i>
        <b>class</b><s>vp-BR</s>
        <div class="vp-BR all-c8">Низ справа на лево</div>
      </div>
      <div class="vpCssP">
        <i>Низ центр</i>
        <b>class</b><s>vp-B</s>
        <div class="vp-B all-c8">Низ центр</div>
      </div>
      <div class="vpCssP">
        <i>Низ слева на право</i>
        <b>class</b><s>vp-BL</s>
        <div class="vp-BL all-c8">Низ слева на право</div>
      </div>
      <div class="vpCssP">
        <i>Лево центр</i>
        <b>class</b><s>vp-L</s>
        <div class="vp-L all-c8">Лево центр</div>
      </div>
    </div>
      
    <p>Для выбора <u class="u-n0 all-c1">расцветки подсказки</u> добавим в атрибут <span class="cod-scb">class</span>:</p>
    <div class="ram-n1-1 ram-V1 all-c2"><!-- ✂ Цвета -->
      <div>
        <i>Красная</i>
        <b>class</b><s>all-c0</s>
      </div>
      <div>
        <i>Зелёный</i>
        <b>class</b><s>all-c1</s>
      </div>
      <div>
        <i>Оранжевый</i>
        <b>class</b><s>all-c2</s>
      </div>
      <div>
        <i>Жёлтый</i>
        <b>class</b><s>all-c3</s>
      </div>
      <div>
        <i>Синий</i>
        <b>class</b><s>all-c4</s>
      </div>
      <div>
        <i>Серый</i>
        <b>class</b><s>all-c5</s>
      </div>
      <div>
        <i>Розовый</i>
        <b>class</b><s>all-c6</s>
      </div>
      <div>
        <i>Океан</i>
        <b>class</b><s>all-c7</s>
      </div>
      <div>
        <i>Белый/Чёрный</i>
        <b>class</b><s>all-c8</s>
      </div>
    </div>
     
    <!-- HTML пример -->
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;head>..&lt;/head>: -->
    &lt;link href="https://zam.usite.pro/db/publ/tooltipCSSpljus/1-0-0/m.css" rel="stylesheet"><!-- Вид 'Всплывающая подсказка' -->
    </code></div></pre>
    <!-- HTML пример -->
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Установим 'Всплывающая подсказка': -->
    &lt;div class="vpCssP">&lt;!-- Оболочка для ориентира появления подсказки -->
    &nbsp; &lt;button>Наведи на меня!&lt;/button>&lt;!-- Для чего подсказка -->
    &nbsp; &lt;div class="vp-B">&lt;b>Она самая&lt;/b> проверка &lt;font color="red">font color red&lt;/font>&lt;/div>&lt;!-- Подсказка -->
    &lt;/div>
    </code></div></pre>
    <b style="color:red">►</b> Исходники(css): <a href="https://github.com/zzamytikk/Vspliv-podskaz-css-pljus/tree/main/tooltipCSSpljus/1-0-0" target="_blank">github</a> <i style="opacity:.4">(m. - Сокращённый вариант, ok. - Подробный)</i>
    
    <!-- Для тёмного дизайна -->
    <div class="ram-V0 ram-V2 gI-inf all-c2"><div>
      Для тёмного дизайна сайта, необходимо добавить <u class="u-n0 all-c1">class="temaT"</u>
    </div></div>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Необходимо добавить в body class="temaT" -->
    &lt;body class="temaT">
    </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
    //zHid.$();//Скрыть/Показать
  </script>
`};