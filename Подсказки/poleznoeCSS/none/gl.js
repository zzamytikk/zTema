gl.M.cho.O.U = {
  //js:['/1/minF/m.js'],
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
  <div class="ram-V0 ram-V2 gI-inf all-c7"><div>
    <ul class="ram-V0 all-c8">
      <li><b>visibility: visible;</b> позволяет показать элемент, не изменяя макет документа.</li>
      <li><b>visibility: hidden;</b> это позволит скрыть меню со страницы, и не дать работать с ним средствам для чтения с экрана.</li>
      <br>
      <li><b>user-select: auto;</b> по умолчанию.</li>
      <li><b>user-select: none;</b> убрать выделение текста.</li>
      <br>
      <li><b>pointer-events: auto;</b> по умолчанию.</li>
      <li><b>pointer-events: none;</b> убераем видемость для курсора. Это предотвращает появление окна при наведении курсора.</li>
    </ul>
  </div></div>
  
  <pre id="zCod" none class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;style>

  &lt;/style>
  </code></div></pre>
  
  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};
