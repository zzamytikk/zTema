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
    <ul class="ram-V0 all-c8">
      <li><b>.each();</b> итерация по объекту jQuery, выполнение функции для каждого соответствующего элемента.</li>
      <li><b>.filter();</b> сократить набор сопоставленных элементов до тех, которые соответствуют селектору или проходят проверку функции.</li>
      <li><b>$.inArray();</b> поиск переданного значения в массиве.</li>
    </ul>
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  $().each((index, event) => {
    if ( x ) {
      // и тут вы принимаете решение прервать
      // дальнейший перебор элементов,
      // возвращая false
      return false;//Остановим
    }
  });
  // ||
  $.each([ 52, 97 ], ( index, value ) => {
    console.debug( index + ": " + value );
  });
  // ||
  var a = {
    "flammable": "inflammable",
    "duh": "no duh"
  };
  
  $.each( a, ( key, value ) => {
    console.debug( key + ": " + value );
  });
  &lt;/script>
  </code></div></pre>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  $('#list>li').filter(':odd');
  // ||
  $('[class*="hid-"] > legend').filter((i, e) => {//Мы можем выбрать элементы списка,а затем отфильтровать их по содержимому
    //по   i       || id                             || Не содержит button:
    return i === 1 || $(e).attr( "id" ) === "fourth" || !$(e).find('button')[0]
  });
  &lt;/script>
  </code></div></pre>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  const arr = [1, 2, 3, "a", "b", "c"];
  
  //$.inArray( value, arr, fromIndex );
  $.inArray( "a", arr );    //return 3
  $.inArray( "d", arr );    //return -1 (значение не найдено в массиве)
  $.inArray( "b", arr, 3 ); //return 4
  $.inArray( 2, arr, 2 );   //return -1
  $.inArray( 1, arr, -6 );  //return 0
  $.inArray( 1, arr, -5 );  //return -1
  
  //! Быстрее => arr.indexOf('a') > -1?1:2;
  &lt;/script>
  </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
  </script>
`};