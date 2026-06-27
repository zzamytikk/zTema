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

  <!-- .test() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.test()</b> для поиска совпадений между регулярным выражением и указанной строкой. Возвращает значение, true если совпадение найдено; false в противном случае.
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Пример"><div><div></div><code class="v-BG0">
    &lt;script>
    let t = 'lala wold lala';
  
    new RegExp('word', 'i').test(t); //true||false
    /^(BUTTON|A)$/i.test(t); //true||false
    &lt;/script>
    </code></div></pre>
  </div>
  <!-- .indexOf() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.indexOf()</b> значений String ищет эту строку и возвращает индекс первого вхождения указанной подстроки. Он принимает необязательную начальную позицию и возвращает первое вхождение указанной подстроки с индексом, большим или равным указанному числу.
      <br><b>.indexOf()</b> экземпляров Array возвращает первый индекс, по которому данный элемент может быть найден в массиве, или -1, если его нет.
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Пример"><div><div></div><code class="v-BG0">
    &lt;script>
    if(t.indexOf('wold') !== -1)//return 5; t[5] => w
    // ||
    ['jl2','jl','jl3'].indexOf('jl');//return 1; как /^jl$/
    &lt;/script>
    </code></div></pre>
  </div>
  <!-- .search() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.search()</b> выполняет поиск соответствия между заданной строкой и регулярным выражением.
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Пример"><div><div></div><code class="v-BG0">
    &lt;script>
    'hey JudE'.search(/[A-Z]/);//return 4; Нашли J и вернули индекс J
    &lt;/script>
    </code></div></pre>
  </div>
  <!-- .sort() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.sort()</b> на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива. Порядок сортировки по умолчанию соответствует порядку кодовых точек Unicode.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>[].sort()</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          let A = [ "02", "F", "Б", "z", "Z", "б", "Ё", "Я", '1', 'f' ],
            C = new Intl.Collator();//• Сортирует по принцепу: 0-1 а-я A-Я a-z A-Z
      
          console.error(A.sort((a, b) => C.compare(a, b)));
          //► return [ "02", "1", "б", "Б", "Ё", "Я", "f", "F", "z", "Z" ];
          
          // || ----------------------
          
          console.error(A.sort((a, b) => a > b));
          //► return [ "02", "1", "F", "Z", "f", "z", "Ё", "Б", "Я", "б" ];
          //• Сортирует по принцепу: 0-1 A-Z a-z Ёё A-Я а-я
          //! Ё впереди А
          
          // || ----------------------
          
          let A2 = [
              [ "3", "ё", "A" ],
              [ "2", "я", "A" ],
              [ "1", "а", "B" ]
            ],
            S2 = 1,//key. По какому val сортируем: ё, я, а,
            C2 = new Intl.Collator();//Сортирует по принцепу: 0-1 а-я A-Я a-z A-Z
          
          console.error(A2.sort((a, b) => C2.compare(a[S2], b[S2])));
          /* ► return [
              [ "1", "а", "B" ],
              [ "3", "ё", "A" ],
              [ "2", "я", "A" ]
            ]; */
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>{}.sort()</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          let a3 = { "02":1, "F":1, "Б":1, "z":1, "Z":1, "б":1, "Ё":1, "Я":1, '1':1, 'f':1 },
            c3 = new Intl.Collator(),//Сортирует по принцепу: 0-1 а-я A-Я a-z A-Z
            k3 = Object.keys(a3);//Переделаем многомерный array { "02":1, "F":1 } в ['02', 'F']
          
          console.error(k3.sort((a, b) => c3.compare(a, b)));
          //► return [ "02", "1", "б", "Б", "Ё", "Я", "f", "F", "z", "Z" ];
          
          // || ----------------------
          
          let a4 = {
              1:{ s:1, n:'ё', o:1},
              2:{ s:2, n:"я", o:1},
              3:{ s:3, n:'а', o:1}
            },
            s4 = 'n',//По какому key сортируем
            c4 = new Intl.Collator(),//Сортирует по принцепу: 0-1 а-я A-Я a-z A-Z
            k4 = Object.keys(a4);//Переделаем многомерный array { "02":1, "F":1 } в ['02', 'F'];
          
          console.error(k4.sort((a, b) => c4.compare(a4[a][s4], a4[b][s4])));
          /* ► return
            1:{ s: 3, n: "а", o: 1 }
            2:{ s: 1, n: "ё", o: 1 }
            3:{ s: 2, n: "я", o: 1 } */
          
          //!!! Ниже как читать отсортированое: a4[v]
          
          console.log('Выводи как отсортировали:');
          k4.forEach((v, k, a) => {
          console.error(k + ': ' + v + ' (массив:' + a + '):');
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  <hr class="hr-1"></div>
  <!-- .filter() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.filter()</b> сократить набор сопоставленных элементов до тех, которые соответствуют селектору или проходят проверку функции.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>[].filter()</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          var a = [1, -1, 2, -2, 3], r;
            
          r = a.filter(function (n) {
              return n > 0;//return true Добавит в список найденых
          });
          console.error(r); // 1,2,3
          
          // || ----------------------
          
          let id = [
              {n: 'aa1', k: 1},
              {n: 'a1', k: 1},
              {n: 'aa2', k: 2}
            ],
            poID = 1;//По какому id отберём
          
          console.error(
            id.filter(v => v.k == poID);
            /* return [
              { n: "aa1", k: 1 }
              { n: "a1", k: 1 }
            ] */
          );
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  <hr class="hr-1"></div>
  <!-- .lastIndexOf() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.lastIndexOf()</b> возвращает индекс последнего вхождения указанного символа или подстроки, что часто является более прямым решением, если не требуется сложный поиск по шаблону.
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Пример"><div><div></div><code class="v-BG0">
    &lt;script>
    let t = "cccaaabbee",
    i = 'c', //Ищим
    L = t.lastIndexOf(i); //2

    console.log('Последний индекс символа', i + ':', L); // Последний индекс символа 'c': 2
    &lt;/script>
    </code></div></pre>
  </div>
  <!-- .replace() -->
  <div style="--zHidH:17ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.replace()</b> возвращает новую строку с заменой указанной строки/регулярного выражения.
    </div></div>
    
    <div class="ram-V0 ram-V2 gI-inf all-c7"><div>
      <div class="zHid2" style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb="2"><p><s></s></p></button>
      <u>.replace(//, 'На что заменим')</u>:
      <ul class="ram-V0 all-c8">
        <li><b>$$</b> Вставляет символ доллара «$».</li>
        <li><b>$&</b> Вставляет сопоставившуюся подстроку.</li>
        <li><b>$1</b> Вставляет что в(.*).</li>
        <li><b>$\`</b>  Вставляет часть строки, предшествующую сопоставившейся подстроке.</li>
        <li><b>$'</b>  Вставляет часть строки, следующую за сопоставившейся подстрокой.</li>
        <li><b>$n или $nn</b>  Символы n или nn являются десятичными цифрами, вставляет n-ную сопоставившуюся подгруппу из объекта RegExp в первом параметре.</li>
      </ul>
      </div>
      
      <div class="zHid2" style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb="2"><p><s></s></p></button>
      <u>.replace(new RegExp('Поиск'), '')</u>:
      <ul class="ram-V0 all-c8">
        <ol>Для поиска специальных символов [ ] \\ ^ $ . | ? * + ( ), нам нужно добавить перед ними \\ («экранировать их»).</ol>
        <ol><b>new RegExp(' \\\\w | \\\\\\\\ | [\\\s] | \\\\ | \\\\.) | \\\\\/', 'g')</b> создаёт объект регулярного выражения для сопоставления текста с шаблоном.</ol>
        <br>
        <li><b>{2}</b> 2.</li>
        <li><b>{2,}</b> 2 и больше.</li>
        <li><b>{2,4}</b> 2, 3 или 4.</li>
        <li><b>+</b> 1 или более || {1,}.</li>
        <li><b>*</b> 0 или более || {0,}.</li>
        <li><b>?</b> Соответствует предыдущему символу повторенному || {0,1}.</li>
        <li><b>.</b> соответствует любому символу кроме переноса строки. (.*?) || с переносом строки: (.*?) добавить флаг 'gs' || ((.|\\n)*?).</li>
        <li><b>\\d</b> [0-9].</li>
        <li><b>\\D</b> [^0-9] не цифра. .replace(/[^ ]/g,'~') Заменим всё на '~' кроме пробела.</li>
        <li><b>\\w</b> [A-Za-z0-9_].</li>
        <li><b>\\W</b> [^A-Za-z0-9_] не алфавитно-цифровой символ.</li>
        <li style='word-break: break-word;'><b>\\s</b> [ \\f\\n\\r\\t\\v\\u00A0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000] Соответствует одиночному символу непустого пространства.</li>
        <li><b>\\S</b> не пробельный символ.</li>
        <br>
        <li><b>(?&lt;=y)x</b> только если x предшествует y.</li>
        <li><b>x(?=y)</b> только если за x следует y.</li>
        <li><b>(?&lt;!y)x</b> только если x не предшествует y.</li>
        <li><b>x(?!y)</b> только если за x не следует y.</li>
        <br>
        <li><b>(?:x)</b> Соответствует x но не запоминает соответствие.</li>
        <br>
        <li><b>\\b, \\f, \\v</b> Backspace, Form Feed и Vertical Tab: оставлены для обратной совместимости, сейчас не используются.</li>
        <li><b>\\xXX</b> Символ с шестнадцатеричным юникодным кодом XX, например, '\\x7A' — то же самое, что 'z'.</li>
        <li><b>\\uXXXX</b> Символ в кодировке UTF-16 с шестнадцатеричным кодом XXXX, например, \\u00A9 — юникодное представление знака копирайта, ©. Код должен состоять ровно из 4 шестнадцатеричных цифр.</li>
        <li><b>\\u{X…XXXXXX}</b> (от 1 до 6 шестнадцатеричных цифр) Символ в кодировке UTF-32 с шестнадцатеричным кодом от U+0000 до U+10FFFF. Некоторые редкие символы кодируются двумя 16-битными словами и занимают 4 байта. Так можно вставлять символы с длинным кодом.</li>
        <br>
        <li><b>\\r</b> возврат каретки.</li>
        <li><b>\\n</b> Перемещает позицию печати на одну строку вниз (исходно — без возврата каретки).</li>
        <li><b>\\r\\n</b> Перемещает позицию печати на одну строку вниз В HTML файле или добавить флаг 'gs'.</li>
        <li><b>\\t</b> Перемещает позицию печати к следующей позиции горизонтальной табуляции.</li>
      </ul>
      </div>
      
      <div class="zHid2" style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb="2"><p><s></s></p></button>
      <u>.replace(//флаги, '')</u>:
      <ul class="ram-V0 all-c8">
        <ol>Регулярные выражения могут иметь флаги, которые влияют на поиск. В JavaScript их всего шесть</ol>
        <br> 
        <li><b>i</b> поиск не зависит от регистра: нет разницы между A и a (см. пример ниже).</li>
        <li><b>g</b> поиск ищет все совпадения, без него – только первое.</li>
        <li><b>m</b> Многострочный режим (специальные символы "^" и "$" меняют своё поведение: с установленным флагом они сопоставляются в началом / концом каждой строки в многострочной строке, а не с началом / концом всей многострочной строки).</li>
        <li><b>s</b> Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \\n (рассматривается в главе Символьные классы).</li>
        <li><b>u</b> Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \\p{...}).</li>
        <li><b>y</b> Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y").</li>
      </ul>
      </div>
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Примеры"><div><div></div><code class="v-BG0">
    &lt;script>
      .replace(/ {2,}/g, ' ');   //Замена пробелов 2 и больше на 1
      .replace(/^ +| +$/g, '');  //Удаление пробелов в начале и конце
      .replace(/[\\r\\n\\t]+/g, '');//Удаление всех трех типов разрывов строк
      .replace(/\\t+/g, '');      //Удаление больших пробелов (табуляция)
      .replace(/\\u00a0/g, ' ');  //Замена пробелов
      
      //&lt;|&gt; на <|>
      .replace(new RegExp('&[lg]t;', 'g'), v => v[1]=='l'?'<':'>');
      
      //Удалим все <br> в конце:
      .replace(new RegExp('(<br>\\s*)+$', 'gi'), '');
      
      //Экранируем спец символы: [ ] \\ ^ $ . | ? * + ( )
      .replace(new RegExp('([\\\\^\\\\$\\\\.\\\\|\\\\?\\\\*\\\\+\\\\(\\\\)\\\\[\\\\]\\\\\\\\\\\])', 'g'), '\\\\$1');
      
      .replace(/</g, '&lt;').replace(/"/g, '&#34;').replace(/'/g, '&#39;');//"В HTML
      .replace(/&lt;/g, '<').replace(/&#34;/g, '"').replace(/&#39;/g, "'");//Вернуть
      
      '12'.replace(/\\d/g,'').length;//Количество цифр в строчку return 2
      
      .replace(/<b>(.*?)@/g, '');//? = Убрать первое совпадение до @
      
      //★ Между цифрами и буквами пробелы:
      t = 'BZ8345LK44';
      t =      t.replace(/[a-z0-9](?=[a-z0-9])/gi, '$& ')//style z
      // ||    t.replace(/[^0-9](?=[0-9])|[0-9](?=[^0-9])/gi, '$& ')
      // ||    t.replace(/[a-z](?=\\d)|\\d(?=[a-z])/gi, '$& ')
      // || хз t.replace(/([A-Z]+)(\\d+)([A-Z]+)/, "$1 $2 $3")
      
      //★ Строку в array:
      let a=[], A={}, t='www.e.ld/diz/button/?r=new&k=but';
      
      t.replace(/[?&]+([^=&]+)=([^&]*)/gi, (o, k, v) => {
          a[k] = v
      });//A = { r: "new", k: "but" };
      
      t.replace(/(?<=[/])(.+?)(?=[/])/gi, (o, k) => {
        a.push(k);
      });//a = [diz, button];
      
      //★ Много мелких замен (больше 7):
      'x"'.replace(/д/g, '').replace(/'/g, '"').replace(/\`/g, "'").replace(/д/g, '').replace(/'/g, '"').replace(/\`/g, "'").replace(/л/g, '').replace(/ж/g, '');
  
      //+ Когда больше 7 замен, быстрее всего:
      let na = {'д':'',"'":'"','\`':"'",'ж':'',"'":'"','\`':"'",'л':'',"'":'"'};
  
      'x"'.replace(//Много мелких замен
        new RegExp(
          Object.keys(na)//Выбераем key из {'chto':'na','x':1} в ['chto','x']         //!Ошибка когда пустой array
            .join('|')//делим в строчку 'chto|x'
      ,'g'), c => na[c]);
      
      .replace(//★ console.error|debug,..
        new RegExp('console\\.[a-z]{3,15}\\((.*?)\\);', 'gs'), ''
      )
    &lt;/script>
    </code></div></pre>
  
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Удалим имя из списка"><div><div></div><code class="v-BG0">
    &lt;script>
    let db = 'name,name2,name3',//Список где удаляем
      R = ',',//Что разделяет name
      F = 'name2';//Удалим нужное name
      
    db.replace(new RegExp('(?<='+R+')' + F + R+'|^' + F + '$|^' + F + R+'|'+R + F + '$'), '');
    //return name,name3
    //db.replace(new RegExp('(?<=,)' + F + ',|^' + F + '$|^' + F + ',|,' + F + '$'), '');
    &lt;/script>
    </code></div></pre>
  </div>
  <!-- .exec() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.exec()</b> выполняет поиск сопоставления регулярного выражения в указанной строке. Возвращает массив с результатами или null.
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Пример"><div><div></div><code class="v-BG0">
    &lt;script>
    / /g.exec(t);//Быстрее match и в отсутствии переменной t return null
    &lt;/script>
    </code></div></pre>
  </div>
  <!-- .match() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.match()</b> возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
    </div></div>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Пример"><div><div></div><code class="v-BG0">
    &lt;script>
    t.match(/ /);//в отсутствии переменной t //!Вызывает ошибку
    
    p = (p = t.match(/\\n/g))//Количество \\n (Новых строк в тексте) //+ Без ошибки
      ? p.length + 1
      : 0;
    &lt;/script>
    </code></div></pre>
  </div>
  <!-- for() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>for()</b> создаёт цикл, состоящий из трех необязательных выражений, заключенных в круглые скобки и разделенных точкой с запятой, за которыми следует инструкция (часто блок инструкций), которая должна выполняться в цикле.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Примеры</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          //! c let быстрее
          for(let k in [1,2]){//k => key
            //+Stop = return || break;
          }
          
          // || ----------------------
          
          for (let v of [1,2]) {//3 v => value
            
          }
          
          // || ----------------------
          
          let str = "";

          for (let i = 0; i < 9; i++) {
            str += i;
          }
          
          console.log(str);//"012345678"
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  <hr class="hr-1"></div>
  <!-- forEach() -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>forEach()</b> выполняет указанную функцию один раз для каждого элемента в массиве.
    </div></div>
    
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Примеры</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          var a = ['Яблоко', 'Апельсин', 'Груша'];
          
          a.forEach((v, k, a) => {//val, key, array
            console.error(k + ': ' + v + ' (массив:' + a + ')');
            //break; <= Не использует (Для стоп используем for(k in a))
          });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  <hr class="hr-1"></div>
  
  
  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};
