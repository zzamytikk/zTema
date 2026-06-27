gl.M.cho.O.U = {
  //js:['/1/minF/m.js'],
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  
  <div class="ram-V0 ram-V2 gI-inf all-c7"><div>
    <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
    <u><b>!!</b> Переводим в boolean</u>:
    <ul class="ram-V0 all-c8">
      <ol>true/false = Объект Boolean является объектом-обёрткой над примитивом логического типа.</ol>
      <li><b>!!''</b> false.</li>
      <li><b>!!0</b> false.</li>
      <li><b>!!undefined</b> false.</li>
      <li><b>!!'false'</b> false.</li>
      <br>
      <li><b>!!'true'</b> true.</li>
      <li><b>!!1</b> true.</li>
      <li><b>!!'0'</b> true.</li>
    </ul>
    </div>
    
    <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
    <u><b>+</b> Переводим в number</u>:
    <ul class="ram-V0 all-c8">
      <li><b>+'123'</b> 123.</li>
    </ul>
    </div>
    
    <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
    <u><b>%</b> получение остатка от деления</u>:
    <ul class="ram-V0 all-c8">
    <ol>А если любое число проверяете на ноль - тогда вы проверяете, делится ли это число.</ol>
      <li><b>if(i % 2 == 0)</b> раскрасить каждую 2 строку в списке другим цветом.</li>
      <li><b>if(i % 10 == 0)</b> показать на экране прогресс при каждой 10 итерации.</li>
      <li><b>if(i % 3 == 0)</b> разделить поток цифр, добавив пробел после каждых 3.</li>
    </ul>
    </div>
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  //Получить значение без px:
  let = parseInt(b.css('right'), 10);//Самый быстрый. чем: split, replace
  // ||
  //Количество цифр в строчку:
  let i = 1222;

  console.error(
    'String(i).length =>', String(i).length//return 4
  );
  // ||
  //Клонируем:
  let clone = Object.assign({}, user);//Для любой переменной   user = {};
  // ||
  let a = [1,2,3];//Только для []
  let clone = a.slice(0);//Клонируем
  /* Чтобы клонировать/копировать содержимое массива, все, что вам нужно сделать, это вызвать метод slice,
    передав 0 в качестве первого аргумента: var clone = a.slice(0);
    Код выше создает копию исходного массива; имейте в виду, если в вашем массиве существуют
    объекты - они хранятся как ссылки. */
  &lt;/script>
  </code></div></pre>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag=".slice()"><div><div></div><code class="v-BG0">
  &lt;script>
  const t = "The quick brown fox jumps over the lazy dog.";
  
  t.slice(31);//=> the lazy dog.
  
  t.slice(4, 19);//=> quick brown fox
  
  t.slice(-4);//=> dog.
  
  t.slice(-9, -5);//=> lazy
  &lt;/script>
  </code></div></pre>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  //Полная загрузка документа:
  document.addEventListener('DOMContentLoaded', () => {
    //Код
  });
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
