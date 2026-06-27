gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  
  <div class="ram-V0 ram-V2 gI-inf all-c7"><div>
    <div style="--zHidH:9ex; --zHidC:#0000" zhid="1">
    <ul class="ram-V0 all-c8"><button zhidb><p><s></s></p></button>
      <li><b>.html()</b> получить или заменить HTML</li>
      <li><b>.text()</b> получить или заменить текст</li>
      <li><b>.val()</b> получить или задать значение формы</li>
      <li><b>.append()</b> вставить в конец элемента</li>
      <li><b>.prepend()</b> вставить в начало элемента</li>
      <li><b>.after()</b> вставить после элемента</li>
      <li><b>.before()</b> вставить перед элементом</li>
      <li><b>.wrap()</b> обернуть элемент</li>
      <li><b>.wrapAll()</b> обернуть все элементы вместе</li>
      <li><b>.wrapInner()</b> обернуть содержимое</li>
      <li><b>.unwrap()</b> удалить родителя</li>
      <li><b>.clone()</b> клонировать элемент</li>
      <li><b>.remove()</b> удалить элемент</li>
      <li><b>.detach()</b> удалить, сохранив данные и события</li>
      <li><b>.empty()</b> очистить содержимое</li>
      <li><b>.replaceWith()</b> заменить элемент</li>
      <li><b>.replaceAll()</b> заменить все выбранные элементы</li>
      <li><b>.insertBefore()</b> вставить каждый элемент из набора соответствующих элементов перед целевым</li>
      <li><b>.insertAfter()</b> вставить каждый элемент из набора соответствующих элементов после целевым</li>
    </ul>
    </div>
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  <p>123</p>
  
  &lt;script>
    //Получение содержимого html-тэга включая родительский элемент:
    let t = $('p')[0].outerHTML;//return <p>123</p>
    
    //Получение содержимого html-тэга внутри родителя:
    let t = $('p')[0].innerHTML;//return 123
  &lt;/script>
  </code></div></pre>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;div>&lt;b>123&lt;/b>&lt;/div>
  
  &lt;script>//Заменить элемент(Вернёт 'retun true'):
  $('#').replaceWith('<span>Заменили</span>');
  
  $('#').replaceWith((i, txt) => {//i=0(хз что), txt='<b>123</b>' (содержание элемента 123)
    let htm = $(this)[0].outerHTML; //html выбранного элемента
    
    return '<span>Заменили</span>'
  });
  &lt;/script>
  </code></div></pre>

  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>//Медлено!!!
  .clone(true);//клонируем вместе с обработчиком события
  &lt;/script>
  </code></div></pre>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  $( "<p>Test</p>" ).insertBefore( ".inner" );
  //||
  $( "h2" ).insertBefore( $( ".container" ) );
  &lt;/script>
  </code></div></pre>

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