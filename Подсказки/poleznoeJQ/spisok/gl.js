gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  //js:['/Подсказки/poleznoe/skorostJS/ok.js'],//Для тестирования localhost временноустановить!!!
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  </style>
  
          <div class="ram-V0 ram-V2 gI-inf all-c7"><div>
            <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
            <u>Выборка элементов</u>:
            <ul class="ram-V0 all-c8">
              <li><b>$(селектор)</b> выбор элементов по CSS-селектору</li>
              <li><b>.eq()</b> выбор элемента по индексу</li>
              <li><b>.first()</b> первый элемент выборки</li>
              <li><b>.last()</b> последний элемент выборки</li>
              <li><b>.slice()</b> выбор диапазона элементов</li>
              <li><b>.filter()</b> фильтрация элементов по условию</li>
              <li><b>.not()</b> исключение элементов</li>
              <li><b>.is()</b> проверка соответствия условию</li>
              <li><b>.has()</b> выбор элементов, содержащих потомков</li>
              <li><b>.map()</b> преобразование элементов выборки</li>
              <li><b>.find()</b> поиск дочерних элементов</li>
              <li><b>.children()</b> только прямые дочерние элементы</li>
              <li><b>.parent()</b> родитель</li>
              <li><b>.parents()</b> все предки</li>
              <li><b>.closest()</b> ближайший предок по селектору (Быстрее на 30% чем много parent())</li>
              <li><b>.siblings()</b> все «соседи» элемента</li>
              <li><b>.next()</b> следующий элемент</li>
              <li><b>.nextAll()</b> все следующие элементы</li>
              <li><b>.prev()</b> предыдущий элемент</li>
              <li><b>.prevAll()</b> все предыдущие элементы</li>
            </ul>
            </div>
            
            <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
            <u>Манипуляции с DOM</u>:
            <ul class="ram-V0 all-c8">
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
              <li><b>.insertBefore()</b> вставляет указанное содержимое перед каждым целевым элементом, переданным в параметре метода.</li>
              <li><b>.insertAfter()</b> вставить указанное содержимое после каждого целевого элемента, переданного в параметре метода.</li>
            </ul>
            </div>
            
            <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
            <u>Атрибуты и данные</u>:
            <ul class="ram-V0 all-c8">
              <li><b>.attr()</b> получить или задать атрибут</li>
              <li><b>.removeAttr()</b> удалить атрибут</li>
              <li><b>.prop()</b> работа со свойствами</li>
              <li><b>.removeProp()</b> удалить свойство</li>
              <li><b>.data()</b> привязать или получить данные</li>
              <li><b>.removeData()</b> удалить данные</li>
            </ul>
            </div>
            
            <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
            <u>CSS и размеры</u>:
            <ul class="ram-V0 all-c8">
              <li><b>.css()</b> получить или задать CSS-свойство</li>
              <li><b>.addClass()</b> добавить класс</li>
              <li><b>.removeClass()</b> удалить класс</li>
              <li><b>.toggleClass()</b> переключить класс</li>
              <li><b>.hasClass()</b> проверить наличие класса</li>
              <li><b>.offset()</b> координаты относительно документа</li>
              <li><b>.position()</b> позиция относительно родителя</li>
              <li><b>.scrollTop()</b> позиция прокрутки сверху</li>
              <li><b>.scrollLeft()</b> позиция прокрутки слева</li>
              <li><b>.height()</b> высота элемента</li>
              <li><b>.width()</b> ширина элемента</li>
              <li><b>.innerHeight()</b> высота + padding</li>
              <li><b>.innerWidth()</b> ширина + padding</li>
              <li><b>.outerHeight()</b> высота + padding + border (+ margin)</li>
              <li><b>.outerWidth()</b> ширина + padding + border (+ margin)</li>
            </ul>
            </div>
            
            <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
            <u>События</u>:
            <ul class="ram-V0 all-c8">
              <li><b>.on()</b> назначить обработчик события</li>
              <li><b>.off()</b> убрать обработчик</li>
              <li><b>.one()</b> обработчик с одним срабатыванием</li>
              <li><b>.trigger()</b> запустить событие</li>
              <li><b>.triggerHandler()</b> запустить событие без всплытия</li>
              <li><b>.hover()</b> наведение и уход курсора</li>
              <li><b>.focus()</b> событие фокуса</li>
              <li><b>.blur()</b> потеря фокуса</li>
              <li><b>.click()</b> клик мыши</li>
              <li><b>.dblclick()</b> двойной клик</li>
              <li><b>.mousedown()</b> нажатие кнопки мыши</li>
              <li><b>.mouseup()</b> отпускание кнопки мыши</li>
              <li><b>.mousemove()</b> движение мыши</li>
              <li><b>.mouseenter()</b> вход курсора</li>
              <li><b>.mouseleave()</b> выход курсора</li>
              <li><b>.keydown()</b> нажатие клавиши</li>
              <li><b>.keyup()</b> отпускание клавиши</li>
              <li><b>.keypress()</b> ввод символа</li>
              <li><b>.resize()</b> изменение размеров окна</li>
              <li><b>.scroll()</b> прокрутка</li>
              <li><b>.submit()</b> отправка формы</li>
              <li><b>.change()</b> изменение значения</li>
              <li><b>.select()</b> выделение текста</li>
              <li><b>.load()</b> загрузка содержимого</li>
              <li><b>.ready()</b> DOM готов</li>
            </ul>
            </div>
            
            <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
            <u>Эффекты и анимации</u>:
            <ul class="ram-V0 all-c8">
              <li><b>.show()</b> показать элемент</li>
              <li><b>.hide()</b> скрыть элемент</li>
              <li><b>.toggle()</b> переключить видимость</li>
              <li><b>.fadeIn()</b> плавное появление</li>
              <li><b>.fadeOut()</b> плавное исчезновение</li>
              <li><b>.fadeToggle()</b> переключить прозрачность</li>
              <li><b>.fadeTo()</b> плавная смена прозрачности</li>
              <li><b>.slideDown()</b> развернуть элемент</li>
              <li><b>.slideUp()</b> свернуть элемент</li>
              <li><b>.slideToggle()</b> переключить слайд</li>
              <li><b>.animate()</b> анимация CSS-свойств</li>
              <li><b>.stop()</b> остановить анимацию</li>
              <li><b>.finish()</b> завершить анимацию</li>
              <li><b>.delay()</b> задержка перед анимацией</li>
              <li><b>.queue()</b> работа с очередью анимаций</li>
              <li><b>.dequeue()</b> запуск следующей анимации</li>
              <li><b>.clearQueue()</b> очистить очередь анимаций</li>
            </ul>
            </div>
            
            <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
            <u>AJAX</u>:
            <ul class="ram-V0 all-c8">
              <li><b>$.ajax()</b> универсальный AJAX-запрос</li>
              <li><b>$.get()</b> GET-запрос</li>
              <li><b>$.post()</b> POST-запрос</li>
              <li><b>$.getJSON()</b> запрос JSON</li>
              <li><b>$.getScript()</b> загрузка JavaScript-файла</li>
              <li><b>.load()</b> загрузка данных в элемент</li>
              <li><b>$.ajaxSetup()</b> глобальные настройки AJAX</li>
              <li><b>$.ajaxPrefilter()</b> обработка AJAX-запросов до отправки</li>
              <li><b>$.ajaxTransport()</b> кастомный транспорт AJAX</li>
            </ul>
            </div>
            
            <div style="--zHidH:3ex; --zHidC:#0000" zhid="1"><button zhidb><p><s></s></p></button>
            <u>Утилиты</u>:
            <ul class="ram-V0 all-c8">
              <li><b>$.each()</b> перебор массива или объекта</li>
              <li><b>$.map()</b> преобразование коллекции</li>
              <li><b>$.grep()</b> фильтрация массива</li>
              <li><b>$.inArray()</b> поиск элемента в массиве</li>
              <li><b>$.isArray()</b> проверка массива</li>
              <li><b>$.isFunction()</b> проверка функции</li>
              <li><b>$.isEmptyObject()</b> проверка пустого объекта</li>
              <li><b>$.isPlainObject()</b> проверка «чистого» объекта</li>
              <li><b>$.type()</b> определение типа</li>
              <li><b>$.merge()</b> объединение массивов</li>
              <li><b>$.extend()</b> объединение объектов</li>
              <li><b>$.proxy()</b> изменение контекста функции</li>
              <li><b>$.now()</b> текущее время (timestamp)</li>
              <li><b>$.trim()</b> убрать пробелы по краям</li>
              <li><b>$.parseJSON()</b> парсинг JSON (устарело)</li>
              <li><b>$.parseXML()</b> парсинг XML</li>
            </ul>
            </div>
          </div></div>

  <script>
    //zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};