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
        //★ Скопировать в буфер обмена:
        /** z.f.buf.$(t, b);
         * 
         *  @param  { string } t - Текст для буфера обмена
         *  @param  { $() }    b - Путь до кнопки, на которую установим disabled na 9сек || undefined
         *
         */
        buf: {
          $: function(t, b) { //Скопировать в буфер обмена. return true/false = ошибка
            let n = navigator.clipboard,
              inf = this.inf;
            
            if (n) { //Буфер обмена доступен
              let x;
              
              if (b && b[0]) { //button установим disabled na 9сек
                let x = b[0].tagName == 'BUTTON'; //TRUE = button
                
                x ? b.attr('disabled', '') : b.css('opacity', '.6');
                
                setTimeout(() => {
                  x ? b.removeAttr('disabled') : b.css('opacity', '');
                }, 9000);
              }
              
              n.writeText(t).then(() => {
                //console.log('Текст успешно скопирован в буфер обмена');
                inf(c, 1);
              }, er => {
                inf(t);
                console.error('Произошла ошибка при копировании текста: ', er);
              });
            } else { //API буфера обмена не доступно
              inf(t);
            }
          },
          /** z.f.buf.inf(t, b);//Добавим оповищение
           * 
           *  @param  { string } t - Текст для буфера обмена
           *  @param  { number } x - 1 = скопировали, undefined = нет
           *
           */
          inf: (t, x = 0) => {
            /* console.debug(
              (x ? 'Д' : 'Не д') + 'обавлено в буфер: &lt;i>' + t.slice(0, 35).replace(new RegExp('&lt;', 'g'), '&amp;lt;')
                .replace(new RegExp('&', 'g'), '&amp;') + '&lt;/i>'//Для отображения кода  спец символов
            ); */
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