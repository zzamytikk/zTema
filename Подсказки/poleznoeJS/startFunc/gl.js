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
  
  <!-- Трафарет создания функции: -->
  <div style="--zHidH:7ex" zhid="0">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>Трафарет создания функции</b> пример создания function.
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Пример"><div><div></div><code class="v-BG0">
    &lt;script>
    var pro = { //Начинаем проект
      //q:{},//временная база
      //T:0,//clearTimeout(T)
      O: {//Настройки
        id: 'body',// id = /#|\./.replace(O.O.id,'');
        ms: 1000,//ms задержка на повторное нажатие
        cfg: {
          maxlength: 30000
        }
      },
      //on: 0,//0 = Функция не работает || 1 = функция работает.            // Открывается/Закрывается
      $:function(x) {//★ Запуск function
        if(!this.on && (this.on = 1)) {//1~> Нету && Добавим +1 (Включаем)
          console.log('Работает', this.on);
    
          this.on=0;//† Отключаем
        }
      },
      t: {//return html
        $: q => {
          
        }
      },
      f: { //funk pro.db.chit
        db: {
          /* 
            .f.db.chit('ключь');//Читаем
            .f.db.pish('ключь', '');//Пишим
            .f.db.udal('ключь');//Удалим
          */
          k: 'gl_', //Начало уникального ключа
          chit: function(k) { //Читаем
            return localStorage.getItem(this.k + k)
          },
          pish: function(k, v) { //Пишим
            localStorage.setItem(this.k + k, v)
          },
          udal: function(k) { //Удалим
            localStorage.removeItem(this.k + k)
          }
        }
      },
      xo: {//Закрыть/Открыть
        $: () => {//Открыть
          
        },
        X: () => {//Закрыть
    
        }
      }
    };
    &lt;/script>
    </code></div></pre>
  <hr class="hr-1"></div>

  
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