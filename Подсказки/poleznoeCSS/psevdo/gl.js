gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  
  <!-- ::Псевдоэлемент: -->
  <div style="--zHidH:5ex" zhid="1">
  <div class="ram-V0 ram-V2 gI-poi all-c7"><div><button zhidb><p><s></s></p></button>
    <u>::Псевдоэлемент</u>:
    <ul class="ram-V0 all-c8">
      <li><b>p::first-line</b> первая строка каждого элемента &lt;p>.</li>
      <li><b>::first-letter</b> применяет стили к первой букве первой строки.</li>
      <br>
      <li><b>::before</b> до.</li>
      <li><b>::after</b> после.</li>
      <br>
      <li><b>content:attr(data-content)</b> С помощью функции attr() можно извлекать значение атрибута выбранного элемента и использовать это значение в таблице стилей.</li>
      <li>content: " (" attr(href) ")"</li>
    </ul>
    </div></div>
    
    <!-- С просмотром: -->
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z" on><div><button zhidb="2"><p><s></s></p><b>Пример</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          ul {
            counter-reset: n;/* Создает или сбрасывает счетчик */
          }
          li:before {
            counter-increment: n;/* Увеличивает или уменьшает счетчик */
            content: counter(n);/* Вставляет сгенерированное содержимое (используется внутри ::beforeи для вставки сгенерированного содержимого) ::after */
            min-width: 1em;
            margin-right: 0.5em;
          }
          &lt;/style>
          
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
    
  <hr class="hr-1"></div>
  
  <!-- :Псевдокласс: -->
  <div style="--zHidH:5ex" zhid="1">
  <div class="ram-V0 ram-V2 gI-poi all-c7"><div><button zhidb><p><s></s></p></button>
    <u>:Псевдокласс</u>:
    <ul class="ram-V0 all-c8">
      <li><b>:nth-of-type(1)</b> первый.</li>
      <li><b>:first-of-type</b> первый.</li>
      <li><b>:last-of-type</b> последни.</li>
      <br>
      <li><b>:nth-child(1)</b> находит один или более элементов, основываясь на их позиции среди группы соседних элементов.</li>
      <li><b>:first-child</b> первый.</li>
      <li><b>:last-child</b> последни.</li>
      <br>
      <li><b>:not()</b> для всех кроме.</li>
      <br>
      <li><b>:is()</b> Соответствует любому селектору из полученного списка селекторов.</li>
      <li><b>:has()</b> </li>
      <br>
      <li><b>:empty</b> найди любой элемент, у которого нет потомков. Учитываются элементы и текст (включая пробелы). Комментарии не повлияют на то, что элемент будет рассматриваться как не пустой.</li>
    </ul>
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
    &lt;style>
    tr:nth-child(odd) или tr:nth-child(2n+1)//1, 3, 5, и т. д.
    tr:nth-child(even) or tr:nth-child(2n)  //2, 4, 6, и т. д.

    :nth-child(4n)  //4, 8, 12, и т. д.
    :nth-child(4n)  //5, 10, 15, и т. д.

    :nth-child(3n+4)//4, 7, 10, 13, и т. д.

    :nth-child(-n+3)//1, 2, 3 (первые 3)

    nth-child(n+2)//2,3,4... (все начиная с второго)
    nth-child(n+7)//7,8,9... (все начиная с седьмого)

    p:nth-child(n)  //Описывает каждый элемент &lt;p> среди группы соседних элементов. Эквивалентно простому селектору p.

    p:nth-child(1) или p:nth-child(0n+1)//Описывает каждый элемент &lt;p>, являющийся первым среди группы соседних элементов. Эквивалентно селектору :first-child.
    &lt;/style>
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