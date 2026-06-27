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
        &lt;div id="testOkno" style="position:absolute;right:0;width:150px;height:50px;background:green;">Провиди в право &lt;/div>
        
        &lt;script>
        var z = {
          //★ Закроем окно проведя пальцем
          /** z.Xs.$(O, id, s);//Вешаем .on(). Закроем окно проведя пальцем по нему в сторону стенки
           * 
           *  @param  { array }  O  - Начало пути z (Для сокращения)
           *  @param  { string } id - Путь до окна
           *  @param  { string } s  - Сторона поивления окна left/right
           */
          Xs: {
            $: (O, id, s) => { //Вешаем .on()
              let q; //q <= Для сохранения записей mousemove/touchmove (в .on())
              console.debug('--- Вешаем.on(); Закроем окно проведя пальцем');
              
              $(id).on('mouseup mousedown mousemove touchstart touchmove touchend', function(e) {
                console.debug('.ON()', e.type, e.type == 'mousedown' || e.type == 'touchstart' ? '----------------------:' : ':');
                
                if (e.type == 'mousedown' || e.type == 'touchstart') { //Кординаты курсора для начальной точки mousemove/toucmove
                  (function(m) {
                    q = {
                      n: m, //Кординаты курсора начальная точка mousedown || touchstart
                      S: m //Кординаты когда меняем mousemove || touchmove
                    }
                  }(O.Xs.m(O, e))); //Координаты мышки относительно окна
                  
                  /*console.debug('Кординаты курсора:',
                    '\\n\\tНачало q.n:', q.n,
                    '\\n\\tПоследняя запись q.S:', q.S,
                  );*/
                  //console.debug('Запишим начальную точку q.n:', q.n);
                  return;
                }
                
                if (q?.n) { //Была запись в mousedown
                  if (e.type == 'mousemove' || e.type == 'touchmove') { //scroll
                    if (q.n) { //Убераем холостое срабатывание когда нажали и отпустили, без лево право. mousemove || touchmove
                      //console.debug('Перезапись координатов мышки q.S['+q.S+'] на:', m,);
                      //Перезапись:
                      q.S = O.Xs.m(O, e); //Координаты мышки относительно окна
                    }
                  } else { //mouseup || touchend
                    //console.debug('q.n['+q.n+'] != ['+q.S+']q.S =', q.n != q.S? 'true':'false Остановим!!!');
                    if (q.n != q.S) { //Когда было перемещение && 
                      let p = 30; //Минимальный парог для провести мышкой
                      /* Закроем когда только провили мышкой:
                        (n30 + p20)50 < 51S в право
                          50 < 9
                        (n30 - p20)10 > 9S  в лево
                          10 > 51
                      */
                      /*console.debug('Окно открыто с:', s,
                        '\\nif((s[0]['+s[0]+'] == \'r\' && (q.n['+q.n+'] + ['+p+']p)['+(q.n +p)+'] < ['+q.S+']q.S)',
                        '\\n || (s[0]['+s[0]+'] == \'l\' && (q.n['+q.n+'] - ['+p+']p)['+(q.n + p)+'] > ['+q.S+']q.S)) =>',
                        (s[0] == 'r' && (q.n + p) < q.S) || (s[0] == 'l' && (q.n - p) > q.S)
                      );*/
                      if ((s[0] == 'r' && (q.n + p) < q.S) || (s[0] == 'l' && (q.n - p) > q.S)) { //Закроем окно
                        //console.debug('Закроем окно');
                        $(id).css('border-color', 'red').animate({right: '-100%'}, 600, () => {
                          $(id).remove()
                        });
                      }
                    }
                    q = {}; //Обнулим
                  }
                }
              });
            },
            //★ Координаты мышки относительно окна
            /** z.Xs.m(O, e);//Координаты мышки относительно окна
             * 
             *  @param  { array } O  - Начало пути z (Для сокращения)
             *  @param  { event } e  - .on()
             * - - - -
             *  @return { number }   - Координаты мышки относительно окна
             */
            m: (O, e) => O.f.Dr( //Обрезаем дроби без округления!
              //mousemove || touchmove
              e.pageX || (e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]).pageX, 3) //.123 До 3 дробин (Для точности установления направления: перемещения контейнера!!)
          },
          f: { //Функции
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
        
        z.Xs.$(z, '#testOkno', 'right');//Вешаем .on(). Закроем окно проведя пальцем по нему в сторону стенки
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