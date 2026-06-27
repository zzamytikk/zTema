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
  
  <!-- confirm(): -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>confirm()</b> дает браузеру команду отобразить диалоговое окно с необязательным сообщением и подождать, пока пользователь не подтвердит или не отменит диалог.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Движение в право</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;p id="testinf">... &lt;/p>
          
          &lt;script>
          if (confirm('Удалить ?')) {
            $('#testinf').text('Да')
          } else {
            $('#testinf').text('Нет')
          }
          &lt;/script>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>

  <hr class="hr-1"></div>

  <!-- prompt(): -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>prompt()</b> дает браузеру команду отобразить диалоговое окно с необязательным сообщением, предлагающим пользователю ввести текст, и подождать, пока пользователь либо отправит текст, либо отменит диалог.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Движение в право</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          let  imja = prompt('Введи своё имя:', 'Ананим');
          
          if (imja == null || imja == '') {
            $('#preTest').text('Была отмена.')
          } else {
            $('#preTest').text('Прива ' + imja + '! Как дела?')
          }
          &lt;/script>
            
          &lt;div id="preTest">...&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>

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