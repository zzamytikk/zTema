gl.M.cho.O.U = {
  //js:['/Primery/1/minF/m.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <b>.addClass</b> добавим
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  .addClass('myClass yourClass');
  &lt;/script>
  </code></div></pre>
  
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <b>.hasClass</b> поиск
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  .hasClass('Class1'); //Поиск один из классов. true/false Определяет наличие указанного имени класса у любого из элементов, попавшего в набор
  .hasClass('Class1 Class2'); //true, если у элемента присутствуют все указанные классы.
    //!!В томже порядке: &lt;body class="class0 class class2">
      .hasClass('class0 class')//true
      .hasClass('class class0')//false
  &lt;/script>
  </code></div></pre>
  
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <b>.toggleClass</b> добавим или удалим
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  .toggleClass('zClass');//Есть клас удалим или добавим когда нету класа
  .toggleClass('zClass', true);//true добавим || false удалить !!! (1/0 не работает!) !!!
  
  .toggleClass(function(index, class1, switch1){});//switch определяет должны ли классы только добавляться (true) или же только удаляться (false)
  .toggleClass(function() {
      if ($(this).parent().is('.bar')) {
        return 'happy';
      } else {
        return 'sad';
      }
  });
  &lt;/script>
  </code></div></pre>
  
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <b>.removeClass</b> удалить класс
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  .removeClass('myClass yourClass');
  .removeClass(["blue", "under"]);
  
  .removeClass((i, C) => { //сработает 1 раз! C='class0 class class1';
    //console.debug('removeClass(C) C:',C);
    //console.debug('exec:', /class[0-9]+/.exec(C));//Удаляет первое совпадение: class0
    //console.debug('match:', (C || '').match(/class[0-9]+/g));//Удалим все совпадения: 'class0 class1'
    
    //return /class[0-9]+/.exec(C)//Удаляет первое совпадение zONas-TR
    //return (C || '').match(/class[0-9]+/g)//Удалим все совпадения zONas-TR zONas-B
    
    //return $(this).prev().attr('class');
    //return 'class class2 class3'//Что удалим
    //return ['class', 'class2']
  });
  &lt;/script>
  </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
  </script>
`};