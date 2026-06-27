gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  #glPodskaz .ram-n1-1 > div {/* Презентация */
    color: var(--Ct)
  }
  #glPodskaz fieldset pre {
    margin-bottom: 0
  }
  </style>
  
  <div none class="ram-V0 ram-V2 gI-inf all-c7"><div>
    <ul class="ram-V0 all-c8">
      <li><b>delay()</b> установка таймера для задержки выполнения последующих элементов в очереди.</li>
      <li><b>queue(() => {})</b> показать или назначить очередь функций, которые будут применены к элементам.</li>
      <li><b>dequeue( [queueName] )</b> при вызове метода .dequeue(), будет выполнена следующая функция из очереди, а затем удалена из списка.</li>
      <br>
      <ol>Необязательный параметр - queueName - имя очереди. Если оно не будет указано, то будет очищена стандартная очередь "fx".</ol>
      <li><b>clearQueue( [queueName] )</b> очищает очередь функций у выбранных элементов старницы.</li>
    </ul>
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  .delay(300).queue(() => {
    $(this).dequeue();//Запустить сразу же следующий метод очереди (т.е. 2 эффекта будут запущены одновременно)
  }).delay(300).queue(() => {
    $(this).clearQueue();//Очищает очередь функций у выбранных элементов старницы
  });
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