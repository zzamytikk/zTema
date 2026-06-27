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
      f:{
        //★ Обрезаем дроби без округления!:
        /** z.f.Dr(c, d);
         * 
         *  @param  { number } c - Число для обработки
         *  @param  { number } d - Сколько оставим дробей
         * - - - -
         *
         *  z.f.Dr(5.745788876, 3);
         *  @return { number } - 5.745
         *        ||
         *  z.f.Dr(5.745788876);
         *  @return { number } - 5
         */
        Dr: (c, d) => {
          let x = '1' + (''.padStart(d, '0')); //Добавим нули
          
          return Math.trunc(c * x) / x
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