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
  
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Пример"><div><div></div><code class="v-BG0">
    &lt;script>
    var z = {
      f: {//Функции
        //★ Время от начала 1 января 1970 года:
        /** z.f.Ot(s);
         * 
         *  @param  { number } s - 1 = Секунды, undefined/0 = Миллисекунды
         *
         * - - - -
         *
         *  z.f.Ot() - Миллисекунды
         *  @return { number } - 1356788654467
         *        ||
         *  z.f.Ot(1) - Секунды
         *  @return { number } - 1356788654
         */
        Ot: s => {
          let m = new Date().getTime(); //Миллисекунды
          
          return s ? Math.floor(m / 1000) //Переведём миллисекунды в секунды
            : m
        }
      }
    };
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