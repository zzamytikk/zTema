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
  
  <div class="zCodR3 ram-n3 all-c0" style="--zHidH:8ex" zhid="0">
    <div class="zCodR3z"><div><button zhidb><p><s></s></p><b>Пример</b></button></div></div>
    <div class="zCodR3s">
      <div>
        <pre id="zCod"><div><div></div><code class="v-BG0">
        &lt;style>
        /* ✦ .Obg Задний фон ✦ *//* #region */
        .Obg {z-index: 6; opacity: 0;
          position:fixed;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          background: #0006;
          animation: a-Obg .5s ease-out forwards;
          transition: height .3s;
        }
        @keyframes a-Obg {
          to {
            opacity: 1;
          }
        }
        /* ✦ .Obg Задний фон ✦ *//* #endregion */
        &lt;/style>
        
        &lt;script>
        var z = {
          f: {//Функции
            //★ Добавим задний фон
            /** z.f.$({id:'',i:'',f:'',c:''});//Добавим задний фон
             * 
             *  @param  { string/$() } id - куда добавим. (.append(..);)
             *  @param  { string }     i  - id Для удаления заднего фона. z.f.bg('test');
             *  @param  { string }     f  - ()=>{} Сработает при нажатие на задний фон
             *  @param  { array }      c  - css Заднего фона
             *
             * - - - -
              z.f.bg({//✫ Добавим задний фон
                id: 'string/event',     //* $() куда добавим. (.append(..);)
                i: 'test',              //* id Для удаления заднего фона. z.f.bg('test');
                f: 'function',          //* ()=>{} Сработает при нажатие на задний фон
        
                c:{                     //* css Заднего фона
                  'z-index': 7, //undefined = 9
                  top: 40,      //Отступ от края браузер окна
                  background: ''//Свой задний фон. //Стандартный: #0006
                }
              });
        
              z.f.bg('test');//† Закрыть задний фон
             */
            bg: q => {
              if (q.id) {
                let i = 'bg-' + q.i;
                
                $(q.id).append(
                  $('&lt;div id="' + i + '" class="Obg">')
                    .css(q.c || {})
                );
                
                if (typeof q.f == 'function') { //Вешаем click на задний фон
                  $('#' + i).click(q.f);
                }
              } else { //† Закрыть задний фон
                $('#bg-' + q).css({ height: 0, opacity: 0 }); //Анимация закрытия
                
                setTimeout(() => {
                  $('#bg-' + q).remove(); //Удаляем задний фон
                }, 300);
              }
            }
          }
        };
        
        z.f.bg({//✫ Добавим задний фон
          id: 'body',     //* $() куда добавим. (.append(..);)
          i: 'test',      //* id Для удаления заднего фона. z.f.bg('test');
          f: () => {      //* ()=>{} Сработает при нажатие на задний фон
            z.f.bg('test');
          },
        
          c:{             //* css Заднего фона
            'z-index': 7,        //undefined = 9
            top: 40,             //Отступ от края браузер окна
            background: '#0b06'  //Свой задний фон. //Стандартный: #0006
          }
        });
        &lt;/script>
        </code></div></pre>
      </div>
      <div><iframe></iframe></div>
    </div>
  </div>


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