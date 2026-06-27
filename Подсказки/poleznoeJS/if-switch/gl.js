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
    <b>if</b> выполняет инструкцию, если указанное условие выполняется (истинно). Если условие не выполняется (ложно), то может быть выполнена другая инструкция.
    <br><b>switch</b> вычисляет выражение, сопоставляя его значение с рядом case предложений, и выполняет операторы после первого case предложения с соответствующим значением, пока не break встретится оператор. default Переход к предложению оператора switch будет выполнен, если ни одно из них не case соответствует значению выражения.
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  let id = 2;
  
  if(id == 2){
    //code
  }else if(id == 3){
    //code
  }else{
    //Когда false всё
  }
  
  switch (id) {
    case 0:
      //code
      break;
    case 1:
      //code исполним
      break;
    case 2:
      //code
      break;
    default:
      //Когда false всё
      break;
  }
  &lt;/script>
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
