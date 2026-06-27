gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  #glPodskaz .ram-n1-1 > div {/* Презентация */
    color: var(--Ct)
  }
  #glPodskaz fieldset pre {
    margin-bottom: 0
  }
  </style>
  
  <div none class="ram-V0 ram-V2 gI-inf all-c7"><div>
    <ul class="ram-V0 all-c8">
      <li><b></b> .</li>
      <br>
      <li><b></b> .</li>
    </ul>
  </div></div>
  
  <div style="display:none" class="ram-V0 ram-V2 gI-inf all-c7"><div>
    <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
    <u><b>!!</b> boolean</u>:
    <ul class="ram-V0 all-c8">
      <ol>ДопИнфа.</ol>
      <li><b></b> .</li>
      <li><b></b> .</li>
      <br>
      <li><b></b> .</li>
    </ul>
    </div>
    
    <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
    <u><b>+</b> number</u>:
    <ul class="ram-V0 all-c8">
      <li><b></b> .</li>
    </ul>
    </div>
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  $(e).attr('src', $(e).attr('data-src')).removeAttr()
    .on('load', () => alert('success'))
    .on('error.img', () => {
      //console.log(++s);
      $(e).off('.img')//Удаляем error! (Уберает повтор загрузку error при невернов url)
        .attr('src', '/i/all/img-4041.png');
    });
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