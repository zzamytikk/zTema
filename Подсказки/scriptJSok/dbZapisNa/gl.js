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
        //★ Запись на устройство(База данных)
        /** z.f.db.chit(k);//Читаем
         *  @return { string } || @return { null }
         *       ! Читаем if(z.f.db.chit('ключь') != null) = Есть запись
         *       ! Можно сразу .val(z.f.db.chit('ключь')
         *
         *  z.f.db.pish(k, v);//Пишим
         *  z.f.db.udal(k);//Удалим
         * 
         *  @param  {string} k - Уникальный ключь
         *  @param  {string} v - Что запишим
         */
        db: {
          k: 'gl_', //Начало уникального ключа
          chit: function(k) { //Читаем (if(.chit('ключь') != null) = Нету записи. Можно сразу .val(z.f.db.chit('ключь')))
            return localStorage.getItem(this.k + k)
          },
          pish: function(k, v) { //Пишим
            localStorage.setItem(this.k + k, v)
          },
          udal: function(k) { //Удалим
            localStorage.removeItem(this.k + k)
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