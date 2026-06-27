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
      f: { //Функции
        //★ Отслеживаем изменения размера браузер окна:
        /** z.f.oko(f);
         * 
         *  @param  { function } f
         *
         * - - - -
         *
         *  gl.f.oko(m=>{//Отслеживаем изменения размера браузер окна
         *    console.debug(
         *      'Отслеживаем изменения размера браузер окна!',
         *      '\\n width:', m.contentRect.width,     //width
         *      '\\n height:', m.contentRect.height,   //height
         *      m
         *    );
         *  });
         */
        oko: f => {
          let M = window.ResizeObserver;
          
          if (typeof M !== 'undefined') {
            new M(m => { //1~> Сработало! Наблюдение за обьектом
                f(m[0]);
                //m[0]//even
                //console.debug(m[0]);
              })
              .observe($('html')[0], {}); //Передаем элемент и настройки в наблюдатель
          }
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