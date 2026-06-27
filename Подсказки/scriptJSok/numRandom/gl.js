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
        //★ Случайная цифра из заданого диапазона:
        /** z.f.Rand(c, d);
         * 
         *  @param  { number } c - от 3
         *  @param  { number } d - до 5
         *       ! Включая 3 и 5
         * - - - -
         *
         *  z.f.Rand(3, 5);
         *  @return { number } - 3 || 4 || 5
         */
        Rand: (i, a) => Math.floor(Math.random() * (a - i + 1)) + i,
        //★ Корректировка округления десятичных дробей и обрезание:
        /** z.f.Odr.r(1.234, -2); round @return { number } 1.23    //• В центр
         *  z.f.Odr.f(1.234, -2); floor @return { number } 1.23    //• В низ
         *  z.f.Odr.c(1.234, -2); ceil  @return { number } 1.24    //• В верх
         * 
         *  @param  { number }
         *  @return { number }
         */
        Odr: {
          r: (n, i) => z.f.Odr.$('round', n, i), //      return 1.23
          f: (n, i) => z.f.Odr.$('floor', n, i), //низ   return 1.23
          c: (n, i) => z.f.Odr.$('ceil', n, i),  //верх  return 1.24
          /**
           * @param   {String}  t Тип корректировки.
           * @param   {Number}  n Число.
           * @param   {Integer} i Показатель степени (десятичный логарифм основания корректировки).
           * @return  {Number}    Скорректированное значение.
           */
          $: (t, n, i) => { //Корректировка округления десятичных дробей.
            if (i === 'undefined' || +i === 0) { // Если степень не определена, либо равна нулю...
              return Math[t](n);
            }
            
            n = +n;
            i = +i;
            
            if (isNaN(n) || !(typeof i === 'number' && i % 1 === 0)) { // Если значение не является числом, либо степень не является целым числом...
              return NaN;
            }
            // Сдвиг разрядов
            n = n.toString().split('e');
            n = Math[t](+(n[0] + 'e' + (n[1] ? (+n[1] - i) : -i)))
              // Обратный сдвиг
              .toString().split('e');
            
            return +(n[0] + 'e' + (n[1] ? (p + n[1] + i) : i));
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