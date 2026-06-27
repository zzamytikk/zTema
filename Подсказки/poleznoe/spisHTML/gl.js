gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  
  #glPodskaz th {
    text-align: center;
  }
  #glPodskaz :is(th, td) {
    padding:0 2px;
    border: 1px dashed #777
  }
  #glPodskaz tr td:last-child {
    text-align: left;
  }
  </style>
  
        <table class="zTabC">
            <tbody>
                <tr>
                    <th style="width: 10%;">Элемент</th>
                    <th>Описание</th>
                </tr>
                <tr>
                    <td><kbd>&lt;!--...--&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Используется для добавления комментариев</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;!DOCTYPE&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Объявляет тип&nbsp;документа и предоставляет основную информацию для браузера — его язык и версия</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;a&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создаёт гипертекстовые ссылки</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;abbr&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет текст как аббревиатуру или акроним. Поясняющий текст задаётся с помощью атрибута
                        <kbd>title</kbd>
                    </div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;address&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Задает контактные данные автора/владельца документа или статьи. Отображается в браузере курсивом.</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;area&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Представляет собой гиперссылку с текстом, соответствующей определенной области на карте-изображении
                        или
                        активную область внутри карты-изображения. Всегда вложен внутрь элемента <kbd>&lt;map&gt;</kbd>
                    </div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;article&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Раздел контента, который образует независимую часть документа или сайта, например, статья в журнале,
                        запись в блоге, комментарий</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;aside&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Применяется для боковых панелей, рекламных блоков, ссылок на архив, меток и другой информации,
                        которая отделена от основного содержимого страницы
                    </div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;audio&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Загружает звуковой контент на веб-страницу</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;b&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Задает полужирное начертание отрывка текста, не придавая акцент или важность выделенному</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;base&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Задает базовый адрес (URL), относительно которого вычисляются все относительные адреса. Это поможет
                        избежать проблем при переносе страницы в другое место, так как все ссылки будут работать, как и
                        прежде
                   </div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;bdi&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Изолирует отрывок текста, написанный на языке, в котором чтение текста происходит справа налево, от
                        остального текста</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;bdo&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Отображает текст в направлении, указанном в атрибуте <kbd>dir</kbd>, переопределяя текущее
                        направление
                        написания текста</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;blockquote&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выделяет текст как цитату, применяется для описания больших цитат</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;body&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Представляет тело документа (содержимое, не относящееся к метаданным документа)</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;br&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Перенос текста на новую строку</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;button&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает интерактивную кнопку. Элемент может содержать текст или изображение</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;canvas&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Холст-контейнер для динамического отображения изображений, таких как простые изображения, диаграммы,
                        графики и т.п. Для рисования используется скриптовый язык JavaScript</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;caption&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Добавляет подпись к таблице. Вставляется сразу после открывающего тега <kbd>&lt;table&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;cite&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Используется для указания источника цитирования. Отображается курсивом</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;code&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Представляет фрагмент программного кода, отображается шрифтом семейства <kbd>monospace</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;col&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выбирает для форматирования один или несколько столбцов таблицы, не содержащих информацию одного типа</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;colgroup&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает структурную группу столбцов, выделяющую множество логически однородных ячеек</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;data&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент используется для связывания значения атрибута <kbd>value</kbd>, которое представлено в
                        машиночитаемом формате и может быть обработано компьютером, с содержимым элемента</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;datalist&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент-контейнер для выпадающего списка элемента <kbd>&lt;input&gt;</kbd>. Варианты значений
                        помещаются
                        в элементы&nbsp;<kbd>&lt;option&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;dd&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Используется для описания термина из элемента <kbd>&lt;dt&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;del&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Помечает текст как удаленный, перечёркивая его</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;details&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создаёт интерактивный виджет, который пользователь может открыть или закрыть. Представляет собой
                        контейнер для контента, видимый заголовок виджета помещается в элемент <kbd>&lt;summary&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;dfn&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет слово как термин, выделяя его курсивом. Текст, идущий следом, должен содержать
                        расшифровку
                        этого термина</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;dialog&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Интерактивный элемент, с которым взаимодействует пользователь для выполнения задачи, например,
                        диалоговое окно, инспектор или окно. Без атрибута <kbd>open</kbd> не виден для пользователя</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;div&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент-контейнер для разделов&nbsp;HTML-документа. Используется для группировки блочных элементов с
                        целью форматирования стилями</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;dl&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент-контейнер, внутри которого находятся термин и его описание</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;dt&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Используется для задания термина</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;em&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выделяет важные фрагменты текста, отображая их курсивом</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;embed&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент-контейнер для встраивания внешнего интерактивного контента или плагина</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;fieldset&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Группирует связанные элементы в форме, рисуя рамку вокруг них</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;figcaption&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Заголовок/подпись для элемента <kbd>&lt;figure&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;figure&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Самодостаточный элемент-контейнер для такого контента как иллюстрации, диаграммы, фотографии,
                        примеры
                        кода, обычно с подписью</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;footer&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет завершающую область (нижний колонтитул) документа или раздела</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;form&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Форма для сбора и отправки на сервер информации от пользователей. Не работает без атрибута
                        <kbd>action</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;h1-h6&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создают заголовки шести уровней для связанных с ними разделов</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;head&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент-контейнер для метаданных HTML-документа, таких как <kbd>&lt;title&gt;</kbd>,
                        <kbd>&lt;meta&gt;</kbd>, <kbd>&lt;script&gt;</kbd>, <kbd>&lt;link&gt;</kbd>,
                        <kbd>&lt;style&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;header&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Секция&nbsp;для вводной информации сайта или группы навигационных ссылок. Может содержать один или
                        несколько заголовков, логотип, информацию об авторе</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;hr&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Горизонтальная линия для тематического разделения параграфов</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;html&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Корневой элемент HTML-документа. Сообщает браузеру, что это HTML-документ. Является контейнером для
                        всех
                        остальных html-элементов</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;i&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выделяет отрывок текста курсивом, не придавая ему дополнительный акцент</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;iframe&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает встроенный фрейм, загружая в текущий HTML-документ другой документ</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;img&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Встраивает изображения в HTML-документ с помощью атрибута <kbd>src</kbd>, значением которого
                        является
                        адрес встраиваемого изображения</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;input&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает многофункциональные поля формы, в которые пользователь может вводить данные</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;ins&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выделяет текст подчеркиванием. Применяется для выделения изменений, вносимых в документ</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;kbd&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выделяет текст, который должен быть введён пользователем с клавиатуры, шрифтом семейства monospace</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;label&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Добавляет текстовую метку для элемента <kbd>&lt;input&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;legend&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Заголовок элементов формы, сгруппированных с помощью элемента <kbd>&lt;fieldset&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;li&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент маркированного или нумерованного списка</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;link&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет отношения между документом и внешним ресурсом. Также используется для подключения внешних
                        таблиц стилей</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;main&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Контейнер для основного уникального содержимого документа. На одной странице должно быть не более
                        одного
                        элемента <kbd>&lt;main&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;map&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создаёт активные области на карте-изображении. Является контейнером для элементов
                        <kbd>&lt;area&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;mark&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выделяет фрагменты текста, помечая их желтым фоном</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;meta&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Используется для хранения дополнительной информации о странице. Эту информацию используют браузеры
                        для
                        обработки страницы, а поисковые системы — для ее индексации. В блоке <kbd>&lt;head&gt;</kbd> может
                        быть
                        несколько элементов <kbd>&lt;meta&gt;</kbd>, так как в зависимости от используемых атрибутов они
                        несут
                        разную информацию</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;meter&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Индикатор&nbsp;измерения в заданном диапазоне</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;nav&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Раздел документа, содержащий навигационные ссылки по сайту</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;noscript&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет секцию, не поддерживающую сценарий (скрипт)</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;object&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Контейнер для встраивания мультимедиа (например, аудио, видео, Java-апплеты, ActiveX, PDF и Flash).
                        Также можно вставить другую веб-страницу в текущий HTML-документ. Для передачи параметров
                        встраиваемого
                        плагина используется элемент <kbd>&lt;param&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;ol&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Упорядоченный нумерованный список. Нумерация может быть числовая или алфавитная</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;optgroup&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Контейнер с заголовком для группы элементов <kbd>&lt;option&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;option&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет вариант/опцию для выбора в раскрывающемся списке <kbd>&lt;select&gt;</kbd>,
                        <kbd>&lt;optgroup&gt;</kbd> или <kbd>&lt;datalist&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;output&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Поле для вывода&nbsp;результата вычисления, рассчитанного с помощью скрипта</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;p&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Параграфы в тексте</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;param&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет параметры для плагинов, встраиваемых с помощью элемента <kbd>&lt;object&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;picture&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент-контейнер, содержащий один элемент <kbd>&lt;img&gt;</kbd> и ноль или несколько элементов
                        <kbd>&lt;source&gt;</kbd>. Сам по себе ничего не отображает. Дает возможность браузеру выбирать
                        наиболее
                        подходящее изображение</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;pre&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выводит текст без форматирования, с сохранением пробелов и переносов текста. Может быть использован
                        для
                        отображения компьютерного кода, сообщения электронной почты и т.д</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;progress&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Индикатор&nbsp;выполнения задачи любого рода</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;q&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет краткую цитату</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;ruby&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Контейнер для&nbsp;Восточно-Азиатских символов и их расшифровки</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;rb&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет вложенный в него текст как базовый компонент аннотации</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;rt&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Добавляет краткую характеристику сверху или снизу от символов, заключенных в элементе
                        <kbd>&lt;ruby&gt;</kbd>, выводится уменьшенным шрифтом</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;rtc&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Отмечает вложенный в него текст как дополнительную аннотацию</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;rp&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выводит альтернативный текст в случае если браузер не поддерживает элемент &lt;ruby&gt;</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;s&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Отображает текст, не являющийся актуальным, перечеркнутым</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;samp&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Используется для вывода текста, представляющего результат выполнения программного кода или скрипта,
                        а
                        также системные сообщения. Отображается моноширинным шрифтом</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;script&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Используется для определения сценария на стороне клиента (обычно JavaScript). Содержит либо текст
                        скрипта, либо указывает на внешний файл сценария с помощью атрибута <kbd>src</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;section&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет логическую область (раздел) страницы, обычно с заголовком</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;select&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент управления, позволяющий выбирать значения из предложенного множества. Варианты значений
                        помещаются в&nbsp;<kbd>&lt;option&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;small&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Отображает текст шрифтом меньшего размера</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;source&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Указывает местоположение и тип альтернативных медиаресурсов для элементов
                        <kbd>&lt;picture&gt;</kbd>,
                        <kbd>&lt;video&gt;</kbd>, <kbd>&lt;audio&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;span&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Контейнер для строчных элементов. Можно использовать для форматирования отрывков текста, например,
                        выделения цветом отдельных слов</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;strong&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Расставляет акценты в тексте, выделяя полужирным</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;style&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Подключает встраиваемые таблицы стилей</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;sub&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Задает подстрочное написание символов, например, индекса элемента в химических формулах</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;summary&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создаёт видимый заголовок для элемента <kbd>&lt;details&gt;</kbd>. Отображается с закрашенным
                        треугольником, кликнув по которому можно просмотреть подробности заголовка</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;sup&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Задает надстрочное написание символов</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;table&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Элемент для создания таблицы</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;tbody&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет тело таблицы</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;td&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает ячейку таблицы</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;template&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Используется для объявления фрагментов HTML-кода, которые могут быть клонированы и вставлены в
                        документ
                        скриптом. Содержимое элемента не является его дочерним элементом</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;textarea&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает большие поля для ввода текста</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;tfoot&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет нижний колонтитул таблицы</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;th&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает заголовок ячейки таблицы</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;thead&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет заголовок таблицы</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;time&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Определяет дату/время</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;title&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Заголовок HTML-документа, отображаемый в верхней части строки заголовка браузера. Также может
                        отображаться в результатах поиска, поэтому это следует принимать во внимание предоставление
                        названия</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;tr&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает строку таблицы</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;track&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Добавляет субтитры для элементов <kbd>&lt;audio&gt;</kbd> и <kbd>&lt;video&gt;</kbd></div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;u&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выделяет отрывок текста подчёркиванием, без дополнительного акцента</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;ul&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Создает маркированный список</div></td>
                </tr>
                <tr>
                    <td><kbd>&lt;var&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Выделяет переменные из программ, отображая их курсивом</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;video&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Добавляет на страницу видео-файлы. Поддерживает 3 видео формата: MP4, WebM, Ogg</div></td>
                </tr>
                <tr>
                    <td><kbd style="color: #38bac7;">&lt;wbr&gt;</kbd></td>
                    <td tdno><div style="--zHidH:2.3ex" zhid><button zhidb><p><s></s></p></button>Указывает браузеру возможное место разрыва длинной строки</div></td>
                </tr>
            </tbody>
        </table>

  <script>
    //zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    zTab.buf.$();//Установим на все <table class="zTabC". click по <td>(Скопировать)
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
        
      }
    };
  </script>
`};