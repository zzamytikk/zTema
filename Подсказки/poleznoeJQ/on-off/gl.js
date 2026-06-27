gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- on(): -->
  <div style="--zHidH:7ex" zhid="1">
    <!-- Описание одного: -->
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>on()</b> Присоединяет функцию обработчика событий для одного или нескольких событий к выбранным элементам.
    </div></div>
    
    <!-- ДопИнфа много(Открыть закрыть каждое): -->
    <div class="ram-V0 ram-V2 gI-inf all-c7"><div>
      <div class="zHid2" style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb="2"><p><s></s></p></button>
      <u>События мышки</u>:
      <ul class="ram-V0 all-c8">
        <li><b>mousedown</b> Нажали мышкой.</li>
        <li><b>touchstart</b> Нажали на сенсорных устройствах.</li>
        <li><b>mouseup</b> Отпустили мышку.</li>
        <li><b>touchend</b> Отпустили на сенсорных устройствах.</li>
        <li><b>Dblclick</b> Двойной клик.</li>
        <br>
        <ol><b>mouseleave и mouseout</b> схожи, но отличаются тем, что mouseleave не всплывает, а mouseout всплывает. Это значит, что mouseleave срабатывает, когда курсор выходит за границы элемента и всех его дочерних элементов, в то время как mouseout срабатывает, когда курсор покидает границы элемента или одного из его дочерних элементов (даже если курсор все ещё находится в пределах элемента).</ol>
        <li><b>mouseout</b> В момент, когда курсор уходит с элемента.</li>
        <li><b>mouseleave</b> Срабатывает, когда курсор манипулятора (обычно мыши) перемещается за границы элемента. (часто используется совместно с событием mouseenter).</li>
        <br>
        <li><b>mouseenter</b> (рекомендуется): срабатывает ровно 1 раз при входе на элемент. Событие не всплывает при наведении на дочерние элементы внутри вашего блока.</li>
        <li><b>mouseover</b> срабатывает при входе на элемент, а также «пузырится» (всплывает), если внутри вашего элемента есть другие блоки, и курсор перемещается на них.</li>
        <br>
        <li><b>mousemove</b> Передвижение курсора.</li>
        <li><b>toucmove</b> Передвижение на сенсорных устройствах.</li>
        <li><b>mousewheel</b> Добавляет кросс-браузерную поддержку колеса мыши с нормализацей дельты.</li>
        <br>
        <li><b>click</b> Клик по обьекту. Хорошо для input[checked]</li>
      </ul></div>
      
      <div class="zHid2" style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb="2"><p><s></s></p></button>
      <u>События разные</u>:
      <ul class="ram-V0 all-c8">
        <li><b>change</b> Событие change выстреливает при изменение полей формы. Оно отслеживает поля &lt;input>, &lt;textarea> и &lt;select>.
          <ul>
            <li>Для селект боксов, радио кнопок и чекбоксов событие выстреливает сразу же после изменения, в других же случаях только в тот момент, как пользователь перейдёт на другой элемент.</li>
            <li>input[text], textaria - Сработает когда нажмём мышку вне input[text], textaria.</li>
          </ul>
        </li>
        <li><b>input</b> Отследит перемещение type="range".
          <ul>
            <li>В textarea Отследит Любое добавление текста(Вставить).</li>
            <li>input[text], textaria - Сработает когда отжимаем кнопку (! Для отслеживания каждой буквы).</li>
          </ul>
        </li>
        <br>
        <li><b>focus</b> .focus() Событие focus выстреливает, когда пользователь переключается на элемент формы. Оно отслеживает поля &lt;input>, &lt;select> и так далее (так же и элементы ссылки). Для селект боксов, радио кнопок и чекбоксов событие выстреливает сразу же после изменения, в других же случаях только в тот момент, как пользователь перейдёт на другой элемент.</li>
        <li><b>blur</b> Когда элемент теряет фокус.</li>
        <li><b>paste</b> Вставили в форму input/textarea.</li>
        <br>
        <li><b>Contextmenu</b> Контекстное меню.</li>
        <br>
        <li><b>scroll</b> .scroll() .scrollTop() Данное событие происходит, когда пользователь осуществляет скролл по элементу.</li>
        <li><b>resize</b> Плохо!!! Обработчик изменения размеров окна браузера (Проверка постоянная)</li>
        <br>
        <li><b>keyup</b> Отжали клавишу.
          <ul>
            <li><b>"Enter"</b> (Enter) Клавиша ввода</li>
            <li><b>" "</b> (Пробел) Строка с одним пробелом</li>
            <li><b>"Backspace"</b> (Backspace) Удаление символа слева</li>
            <li><b>"Tab"</b> (Tab) Табуляция</li>
            <li><b>"Escape"</b> (Escape) Отмена</li>
            <li><b>"Shift"</b> (Shift) Модификатор (лев./прав.)</li>
            <li><b>"Control"</b> (Control/Ctrl) Модификатор</li>
            <li><b>"Alt"</b> (Alt) Модификатор</li>
            <li><b>"Meta"</b> (Windows/Command) Клавиша ОС</li>
            <li><b>"CapsLock"</b> (Caps Lock) Фиксация регистра</li>
            <li><b>"ArrowUp"</b> (Стрелка Вверх) Навигация</li>
            <li><b>"ArrowDown"</b> (Стрелка Вниз) Навигация</li>
            <li><b>"ArrowLeft"</b> (Стрелка Влево) Навигация</li>
            <li><b>"ArrowRight"</b> (Стрелка Вправо) Навигация</li>
            <li><b>"Delete"</b> (Delete) Удаление символа справа</li>
            <li><b>"Home"</b> (Home/End) Начало/конец строки</li>
            <li><b>"PageUp/PageDown"</b> (Page Up/Down) Листание страниц</li>
            <li><b>"F1,F2,.."</b> (F1 - F12) Функциональные клавиши</li>
          </ul>
        </li>
        <li><b>keypress</b> .keypress() Нажатие клавиши.</li>
      </ul></div>
      
      <div class="zHid2" style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb="2"><p><s></s></p></button>
      <u>event</u>:
      <ul class="ram-V0 all-c8">
        <ol>Часто используемые свойства объекта(e = event):</ol>
        <li><b>e.preventDefault()</b> Отменить выполнение действия по умолчанию href || form.</li>
        <li><b>e.stopPropagation()</b> Остановить дальнейшее всплытие события.</li>
        <li><b>e.type</b> Получить тип события (click, input,..).</li>
        <li><b>e.target</b> Самый глубокий элемент, на котором произошло событие. event.</li>
        <li><b>e.currentTarget</b> Ссылка на текущий элемент (для которого сработал обработчик click,..). Это свойство, как правило, равно функции this (e.currentTarget === this)</li>
        <li><b>e.which</b> Определяет, какая клавиша на клавиатуре или кнопка мыши вызвала событие (1 - левая, 2 - колесо, 3 - правая).</li>
        <li><b>e.pageX</b> Координаты курсора/пальца, относительно левого верхнего угла документа.</li>
      </ul>
      </div>
    </div></div>
    
    <!-- HTML код: -->
    <!-- Клик вне элемента: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Клик вне элемента</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          $(document).on('click.id', e => {//• Клик вне элемента
            let b = $('body'); // тут указываем ID элемента окна
            //если клик был не по нашему блоку && и не по его дочерним элементам
            if (!b.is(e.target) && !b.has(e.target)[0]) {//Клик вне элемента
              $('Что закроем');//† Закрываем
            }
          });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    <!-- Координаты курсора/пальца(event) -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Координаты курсора/пальца(event)</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          let m = (e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]).pageX;
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    <!-- Память/cache -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Память/cache</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>//У каждого .on() свой cache
          .on('click', function(e) {//Работает только с this
            $.data(this, 'key', 1); //Пишим
            $.data(this, 'key');    //Читаем
            $.data(S[0], 'key');    //Читаем/Пишим. с элемента где висит .on()
          });
          
          $('input[type="text"]').each(function() {
            $(this).data('oldVal', $(this).val()); //Сохраняется исходное значение поля для дальнейшего сравнения
            
            $(this).on('input', function() {
              //Чувства изменились? Проверим это!
              if ($(this).data('oldVal') !== $(this).val()) {
                $(this).data('oldVal', $(this).val());
                // Здесь можно реализовать необходимую логику в случае изменения.
              }
            });
          });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    <!-- Отследить нажатие кнопки(клавиатуры) -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Отследить нажатие кнопки(клавиатуры)</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          $(document).on('keyup', e => {//закрытие модального окна при нажатии клавиши Escape на клавиатуре:
            console.error(e.key);
            if ( e.key == "Escape" ) {
              $( "#popup" ).hide();
            }
          });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    <!-- Навели мышку и убрали (hover, mouseenter mouseleave) -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Навели мышку и убрали (hover, mouseenter mouseleave)</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          $('body').hover(//Быстрее + удобней
            //function (){} Для this  (работает parent/prev..)
            e => {//Навели
                console.log('Навели',e)
            },
            e => {//Убрали
                console.log('Убрали',e)
            }
          );
          
          // || Или: - - - - - - -
          
          $('body').on('mouseenter mouseleave', e => {
            if (e.type == 'mouseenter') { //Навели
              
            } else { //Убрали
              
            }
          });
          
          // || Или: - - - - - - -
          
          $('body').on({
            mouseenter: e => { //Навели
              // обработчик события mouseenter...
            },
            mouseleave: e => { //Убрали
              // обработчик события mouseleave...
            }
          });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    <!-- &lt;textarea -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>&lt;textarea</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          $('textarea').on('input change focus', () => {//Хорошо для textarea
             
          });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    <!-- scroll -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>&lt;scroll</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          $(document).scroll(function(e) {//Прокрутки страницы
            console.error($(this).scrollTop());
          });
          
          // || Или: - - - - - - - js:
          
          document.addEventListener('scroll', function(e) {
            console.log($(this).scrollTop());
          });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    <!-- Изображение загружено(load) -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Изображение загружено(load)</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;img id="image" src="image.png">
          
          &lt;script>
          $('#image').on('load', function() {
            console.log('Изображение загружено');
          });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  <hr class="hr-1 all-c1"></div>
  
  <!-- event: -->
  <div style="--zHidH:7ex" zhid="1">
    <!-- Описание одного: -->
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>event</b> Присоединяет функцию обработчика событий для одного или нескольких событий к выбранным элементам.
    </div></div>
    
    <!-- ДопИнфа много(Открыть закрыть каждое): -->
    <div class="ram-V0 ram-V2 gI-inf all-c7"><div>
      <div class="zHid2" style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb="2"><p><s></s></p></button>
      <u>event</u>
      <ul class="ram-V0 all-c8">
        <ol>Часто используемые свойства объекта(e = event):</ol>
        <li><b>e.preventDefault()</b> Отменить выполнение действия по умолчанию href || form.</li>
        <li><b>e.stopPropagation()</b> Остановить дальнейшее всплытие события.</li>
        <li><b>e.type</b> Получить тип события (click, input,..).</li>
        <li><b>e.target</b> Самый глубокий элемент, на котором произошло событие. event.</li>
        <li><b>e.currentTarget</b> Ссылка на текущий элемент (для которого сработал обработчик click,..). Это свойство, как правило, равно функции this (e.currentTarget === this)</li>
        <li><b>e.which</b> Определяет, какая клавиша на клавиатуре или кнопка мыши вызвала событие (1 - левая, 2 - колесо, 3 - правая).</li>
        <li><b>e.pageX</b> Координаты курсора/пальца, относительно левого верхнего угла документа.</li>
        <li><b>e.tagName</b> Определит тег элемента в верхнем регистре, но только для узлов-элементов 'DIV, BUTTON' (В js обычно используемое как event.target.className)</li>
        <li><b>e.id</b> Определит id элемента.</li>
        <li><b>e.className</b> Определит class элемента. (В js обычно используемое как event.target.tagName)</li>
        <li><b>e.nodeName</b> Возвращает имя тега в верхнем регистре для узлов-элементов (например, DIV). Для других типов узлов возвращает строку, указывающую тип узла, такую как #text, #comment или имя атрибута.</li>
        <li><b>e.outerHTML</b> Получение содержимого html-тэга включая родительский элемент.</li>
        <li><b>e.innerHTML</b> Получение содержимого html-тэга внутри родителя.</li>
      </ul></div>
    </div></div>
    
    <!-- HTML код. Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;div id="elda" onClick="event">
            &lt;p>name0&lt;/p>//0
            &lt;p>name1&lt;/p>//1 click
            &lt;p>name2&lt;/p>//2
          &lt;/div>
          
          &lt;script>
          let e = event;
          
          $(e.currentTarget)[0].nodeName//return &lt;div>
          
          //Можно: e.target.tagName
          $(e.target)[0].tagName  //return div
          $(e.target)[0].nodeName //return p     //что нажали
          $(e.target)[0].id       //return elda  //(e.id || $(this)[0].id)
          $(e.target).index()     //return 1     //Индекс на какой &lt;p> нажали
          
          //==========
          
          //Получение содержимого html-тэга включая родительский элемент:
          let t = $('p')[0].outerHTML;//return <p>123</p>
          
          //Получение содержимого html-тэга внутри родителя:
          let t = $('p')[0].innerHTML;//return 123
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  <hr class="hr-1 all-c1"></div>
  
  <!-- off(): -->
  <div style="--zHidH:7ex" zhid="1">
    <!-- Описание одного: -->
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>off()</b> Удаление обработчика событий.
    </div></div>
  
    <!-- Пространство имён: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Пространство имён</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          //• событие click в пространстве имён first
          $('#demo').on('click.first',function(){
            console.log('1 обработчик события click');
          });
          //• событие click в пространстве имён second
          $('#demo').on('click.second',function(){
            console.log('2 обработчик события click');
          });
        
          /* Пространство имён - это очень удобная вещь. Она используется, например,
               когда вам необходимо вызвать не все события, а только с определённым именем. */
               
          //• Узнать ключь:
          //• Например, узнать в какой очерёдности будут выполняться события можно так: 
          let q = $._data($('#demo')[0], 'events');
          console.log(q);
        
          /* Другие названия: q.mouseover[0].namespace //Ключь события
                mouseleave = mouseout
                mouseenter = mouseover
                click, mouseup, scroll */
          console.log(q.mouseover[0].namespace);//Ключь события
          if(q.mouseover[0].namespace == 'Kljuch'){
            //+ event установлено
          }
        
          // - - - Пример скрипта: (Ищим по всем ключам): (Надёжнее)
          
          /*  proNS(//Проверка namespace
                e,//event
                'cod',//Какой ключь(namespace) ищим
                'input'//$.on('input.cod'); undefined = click
              );//return true = Ненашли ключ, false = нашли!
          */
          var proNS = (e, P, c = 'click') => { //Ищим .cod, установленный: '$.on('click.cod', () => {})'
            let d = $._data($(e)[0], 'events')?.[c];
                
            //console.debug('Нашли запись: if(' + (d && d[0].namespace) + ').', d);
                
            if (d && d[0].namespace) { //Нашли запись
              return !d.filter(v => { //Проверим все
                //console.debug('if(' + v['namespace'] + '==' + P + ') =>', v['namespace'] == P);
                  
                if (v['namespace'] == P) { //Нашли запись
                  return true //Выбераем совпадение
                }
              })[0]; //[0] Проверка первого совпадения
            }
                
            return true; //Пусто
          };
          
          // - - - Пример выполнения: 
          
          $('.B-i-TAx .B-Ig-cop').each((i, e) => {
            if(proNS(e, 'zBiS')) {//Проверка namespace
              $(e).on('click.zBiS', function() {
                zBiS.$(this);
              });
            } else {
              console.debug('Была попытка повторного запуска скрипта zBiS.$();', e);
            }
          });
          //--------------------------
          // Ищим ключь(.but) среди: click, mouseup, scroll.. ---
          let k, K, a = $._data($(v.e)[0], 'events');//Берём все {click:[], mouseup:[], scroll:[]}
        
          for(k in (a || {})) {
            if(a[k][0].namespace == 'but') {K = 1; break;}//Ключь совпал СТОП! Не вешаем повторно обработчик .on()
          }
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    <!-- Примеры off(): -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Примеры off()</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          $().on('click', function (e) {//Обратится к .off()
            $(e.currentTarget).off();
            $(this).off();
            $(e.currentTarget || this).off();//Только когда function(e)
          });
          
          $('').off() //удаляет обработчики событий, назначенные методом .on()
          //Удалить все:
          $( "p" ).off();     //Обработчики событий с параграфов
          $('p').off('click');//click
          
          $( "form" ).on( 'click.MojKljuch', 'button', () => {} );
          $( "form" ).off( '.MojKljuch' );//Удаляем обработчики из пространства имён ".MojKljuch"
          
          $( "p" ).off( "click", "**" );//Удалить все делегированный обработчики кликов с параграфов
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  <hr class="hr-1 all-c1"></div>
  
  <!-- trigger(): -->
  <div style="--zHidH:7ex" zhid="1">
    <!-- Описание много: -->
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <u>trigger(), triggerHandler()</u>:
      <ul class="ram-V0 all-c8">
        <li><b>trigger()</b> Выполнить все обработчики и поведения, прикрепленные к соответствующим элементам для заданного типа события.</li>
        <li><b>triggerHandler()</b> Запускает указанное событие для выбранного элемента. (Этот метод похож на метод trigger() , за исключением того, что trigger() также запускает стандартное поведение события (например, отправку формы))</li>
      </ul>
    </div></div>
    
    <!-- HTML код. Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;script>
          //+ trigger - вызывает указанное событие у элемента.
          //+ triggerHandler - вызывает обработчик события, при этом само событие не происходит
        
          //• Вызвать событие click в пространстве имён first
            $('#demo').trigger('click.first');
          //• Вызвать событие click в пространстве имён second
            $('#demo').trigger('click.second');
          //• Вызов обработчика события click у выбранного элемента
            $('#header').triggerHandler('click');    
                
          $('button').trigger('click');//input, click
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  <hr class="hr-1 all-c1"></div>

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