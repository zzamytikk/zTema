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
        //★ Проверка namespace: ".cod, установленный $.on('click.cod')":
        /** z.f.proNS(e, k, d);//Проверка namespace ".cod, установленный $.on:'click.cod'"
         * 
         *  @param  { event || $() } e - Для проверки(Путь до элемента)
         *  @param  { string }       k - Какой ключь(namespace) ищим
         *  @param  { string }       d - Событие $.on('input'); || undefined = click
         * 
         * - - - -
         *
            $('.zScG').each((i, e) => {
              if(gl.f.proNS(e, 'scrolGor', 'mouseup')){//.on не установлен
                $(e).on('mouseup.scrolGor', e => {
                  let b = $(e.currentTarget);//Где установлин .on('click')
                });
              }
            });
         *  @return { boolean } - true = Не нашли ключ, false = нашли!
         */
        //!!!!! Быстрее: if (!$(e).attr('onzhid')) {$(e).attr('onzhid', 1);} //Повесили click
        proNS: (e, P, c = 'click') => {
          let d = $._data($(e)[0], 'events')?.[c];
          
          //console.debug('Нашли запись: if(' + (d && d[0].namespace) + ').', d);
          
          if (d && d[0].namespace) { //Нашли запись
            return !d.filter(v => { //Проверим все
              //console.debug('if(' + v['namespace'] + '==' + P + ') =>', v['namespace'] == P);
              
              if (v['namespace'] == P) { //Нашли запись
                return true //Выбераем совпадение
              }
            })[0]; //[0] Проверка первого совпадения
          }
          
          return true; //Пусто
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