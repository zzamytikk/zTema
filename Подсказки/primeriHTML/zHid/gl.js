gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
    <!-- ••• Презентация НАЧАЛО: ••• -->

    <link href="/db/publ/zHid/1-0-0/m.css" rel="stylesheet">
    <script src="/db/publ/zHid/1-0-0/m.js" defer></script>
    
    <div class="zHidTxt" style="--zHid:9ex;" zhid>
      <div class="ram-V0 ram-V2 gI-inf all-c1 zHidgITop"><div><button zhidb><p><s></s></p></button>
        <span><b>Скрыть/Показать</b> позволяет частично скрыть некоторые элементы интерфейса. 
      Она может быть полезна в различных ситуациях, например, когда вы хотите частично скрыть большой текст.</span>
      </div></div>
    </div>
    
    <!-- Примеры/Для текста(Стрелка с низу): -->
    <div class="zHidTxt" style="--zHid:7ex;" zhid>
      <div class="ram-V0 ram-V2 gI-poi all-c7 zHidgITop"><div><button zhidb><p><s></s></p></button>
        <ul class="ram-V0 all-c8">
          <li><b>zhid=""</b> Когда экран меньше или ровно 699px автоматически скроет большую часть содержания элемента.</li>
          <li><b>zhid="1"</b> Закрыто.</li>
          <li><b>zhid="0"</b> Открыто.</li>
        </ul>
      </div></div>
    </div>
    <style>
      .prezHid b {
        color:#09F
      }
    </style>
    <fieldset class="all-c1">
      <legend>Примеры</legend>
      
      <div class="prezHid">
        <div style="--zHidH: 10ex;" zhid><button zhidb><p><s></s></p></button>
          <b>zhid=""</b> При первой загрузке HTML страницы:
            <br>&nbsp;&nbsp;• Экран больше или ровно 700px: <i style="color:green">Открыто</i>
            <br>&nbsp;&nbsp;• Экран меньше или ровно 699px: <i style="color:red">Закрыто</i>
            
            <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
            &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
            &nbsp;&nbsp;&lt;div zhid="">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
            &nbsp;&nbsp;&nbsp;&nbsp;Тут содержание элемента...
            &nbsp;&nbsp;&lt;/div>
            &lt;/div>
            </code></div></pre>
        </div>
      </div>
      <hr class="all-c5" style="opacity: .5">
      <div class="prezHid">
        <div style="--zHidH: 10ex;" zhid="1"><button zhidb><p><s></s></p></button>
          <b>zhid="1"</b> При первой загрузке HTML страницы:
            <br>&nbsp;&nbsp;• Экран больше или ровно 700px: <i style="color:red">Закрыто</i>
            <br>&nbsp;&nbsp;• Экран меньше или ровно 699px: <i style="color:red">Закрыто</i>
             
            <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
            &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
            &nbsp;&nbsp;&lt;div zhid="1">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
            &nbsp;&nbsp;&nbsp;&nbsp;Тут содержание элемента...
            &nbsp;&nbsp;&lt;/div>
            &lt;/div>
            </code></div></pre>
        </div>
      </div>
      <hr class="all-c5" style="opacity: .5">
      <div class="prezHid">
        <div zhid="0"><button zhidb><p><s></s></p></button>
          <b>zhid="0"</b> При первой загрузке HTML страницы:
            <br>&nbsp;&nbsp;• Экран больше или ровно 700px: <i style="color:green">Открыто</i>
            <br>&nbsp;&nbsp;• Экран меньше или ровно 699px: <i style="color:green">Открыто</i>
            
            <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
            &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
            &nbsp;&nbsp;&lt;div zhid="0">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
            &nbsp;&nbsp;&nbsp;&nbsp;Тут содержание элемента...
            &nbsp;&nbsp;&lt;/div>
            &lt;/div>
            </code></div></pre>
        </div>
      </div>
      
      <h4 class="hr-n1 hr-L"><b>Пример2 с рамкой:</b></h4>
      <div style="--zHidH: 7ex;" zhid>
        <div style="background: #08f4; border-radius: 3px; padding: 3px;">
          <div><button zhidb><p><s></s></p></button>
            Скрыть/Показать — любое содержан ие элемента. текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст..
          </div>
        </div>
      
        <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
        &lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
        &lt;div style="--zHidH: 7ex;" zhid>&lt;!-- --zHid:9ex; - Размер видемой области -->
        &nbsp; &lt;div style="background: #070; color:#fffd; border-radius: 3px; padding: 3px;">&lt;!-- Стиль рамки -->
        &nbsp; &nbsp; &lt;div>
        &nbsp; &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
        &nbsp; &nbsp; &nbsp; Скрыть/Показать — любое содержан ие элемента. текст текст текст текст текст текст текст
        &nbsp; &nbsp; &lt;/div>
        &nbsp; &lt;/div>
        &lt;/div>
        </code></div></pre>
      </div>
      
      <h4 class="hr-n1 hr-L"><b>Без рамки:</b></h4>
      <div style="margin: 7px 0; padding: 5px;">
        <div style="--zHid:9ex" zhid="1"><button zhidb><p><s></s></p></button>
          На брег песчаный и пустой,
          И тридцать витязей прекрасных
          Чредой из вод выходят ясных,
          И с ними дядька их морской;
          Там королевич мимоходом
          Пленяет грозного царя;
          Там в облаках перед народом
          Через леса, через моря
          Колдун несёт богатыря;
          В темнице там царевна тужит,
          А бурый волк ей верно служит;
          Там ступа с Бабою Ягой
          Идёт, бредёт сама собой,
          Там царь Кащей над златом чахнет;
          Там русский дух… там Русью пахнет!
          И там я был, и мёд я пил;
          У моря видел дуб зелёный;
          Под ним сидел, и кот учёный
          Свои мне сказки говорил.
  
          <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
          &lt;div style="margin: 7px 0; padding: 5px;">&lt;!-- style вид рамки -->
          &nbsp; <!-- --zHid:9ex; - Размер видемой области -->
          &nbsp; &lt;div style="--zHid:2ex" zhid="1">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
          &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
          &nbsp; &nbsp; На брег песчаный и пустой,
          &nbsp; &nbsp; И тридцать витязей прекрасных
          &nbsp; &nbsp; Чредой из вод выходят ясных,
          &nbsp; &nbsp; И с ними дядька их морской;
          &nbsp; &nbsp; Там королевич мимоходом
          &nbsp; &nbsp; Пленяет грозного царя;
          &nbsp; &nbsp; Там в облаках перед народом
          &nbsp; &nbsp; Через леса, через моря
          &nbsp; &nbsp; Колдун несёт богатыря;
          &nbsp; &nbsp; В темнице там царевна тужит,
          &nbsp; &nbsp; А бурый волк ей верно служит;
          &nbsp; &nbsp; Там ступа с Бабою Ягой
          &nbsp; &nbsp; Идёт, бредёт сама собой,
          &nbsp; &nbsp; Там царь Кащей над златом чахнет;
          &nbsp; &nbsp; Там русский дух… там Русью пахнет!
          &nbsp; &nbsp; И там я был, и мёд я пил;
          &nbsp; &nbsp; У моря видел дуб зелёный;
          &nbsp; &nbsp; Под ним сидел, и кот учёный
          &nbsp; &nbsp; Свои мне сказки говорил.
          &nbsp; &lt;/div>
          &lt;/div>
          </code></div></pre>
        </div>
      </div>
      
      <h4 class="hr-n1 hr-L"><b>Для текста(Стрелка с низу):</b></h4>
      <div style="margin: 7px 0; padding: 5px;">
        <div class="zHidTxt" style="--zHidH:9ex; padding:3px; border: 1px solid red;" zhid="1"><button zhidb><p><s></s></p></button>
          <span>Александр Сергеевич Пушкин родился 6 июня 1799 года (по старому стилю 26 мая) в Москве в дворянской помещичьей семье 
          (отец его был майор в отставке) в день праздника Вознесения. В тот же день у императора Павла родилась внучка, в честь которой
          
          <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
          &lt;div class="zHidTxt" style="--zHidH:5ex; padding:3px; border: 1px solid red;" zhid="1">&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
          &nbsp; &lt;span>Александр Сергеевич Пушкин родился 6 июня 1799 года (по старому стилю 26 мая) в Москве в дворянской помещичьей семье 
          &nbsp; (отец его был майор в отставке) в день праздника Вознесения. В тот же день у императора Павла родилась внучка, в честь которой 
          &nbsp; во всех церквах шли молебны и гудели колокола. Так, по случайному совпадению день рождения русского гения был ознаменован 
          &nbsp; всеобщим народным ликованием.&lt;/span>
          &lt;/div>
          </code></div></pre>
          
          во всех церквах шли молебны и гудели колокола. Так, по случайному совпадению день рождения русского гения был ознаменован 
          всеобщим народным ликованием.</span>
        </div>
      </div>
      
      <h4 class="hr-n1 hr-L"><b>1 строчка + затемнение:</b></h4>
      <div style="background: #77b; border-radius: 3px; padding: 3px">
        <div class="zHidTx1" style="--zHidtx-bg: #77b;" zhid><button zhidb><p><s></s></p></button>
          <div zhidtx-t>
            В закрытом положении текст в одну строчку с затемнением.
            текст текст текст текст текст текст текст.
          </div>
          
          <div class="ram-V0 ram-V2 gI-vaz all-c2"><div>
            Для затемнения необходимо задать цвет заднего фона <u class="u-n0 all-c1">style="--zHidtx-bg: #77b;"</u>
          </div></div>
          
          <div class="zCodR3 ram-n3 all-c5" style="--zHidH:8ex; background: var(--bg)">
            <div class="zCodR3z"><div>CSS Пример</div></div>
            <div class="zCodR3s">
              <div>
                <pre id="zCod"><div><div></div><code class="v-BG0">
                &lt;div style="background: #77b; border-radius: 3px; padding: 3px">
                &nbsp; &lt;div class="zHidTx1" style="--zHidtx-bg: #77b;" zhid>&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
                &nbsp; &nbsp; &lt;div zhidtx-t>
                &nbsp; &nbsp; &nbsp; В закрытом положении текст в одну строчку с затемнением.
                &nbsp; &nbsp; &nbsp; текст текст текст текст текст текст текст.
                &nbsp; &nbsp; &lt;/div>
                &nbsp; &lt;/div>
                &lt;/div>
                </code></div></pre>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    
    <!-- Скрыть/Показать внутри Скрыть/Показать (Доступно 3 уровня) -->
    <fieldset class="all-c1">
      <legend>Скрыть/Показать внутри Скрыть/Показать (Доступно 3 уровня)</legend>
      
      <div class="ram-V0 ram-V2 gI-inf all-c7"><div>
        <ul class="ram-V0 all-c8">
          <li><b>class="zHid2"</b> 2 уровень Скрыть/Показать (Размещается внутри первого Скрыть/Показать).</li>
          <li><b>class="zHid3"</b> 3 уровень Скрыть/Показать (Размещается внутри второго Скрыть/Показать).</li>
        </ul> 
      </div></div>
      
      <div style="--zHidH:9ex; border: 1px solid red;" zhid="0"><button zhidb><p><s></s></p></button>
        <div style="color:red; margin-bottom:9px;">Уровень 1:</div>
        
        <div class="zHid2" style="--zHidH:8ex; margin:0 0 9px 15px; border: 1px solid green;" zhid="0"><button zhidb="2"><p><s></s></p></button>
          <div style="color:green; margin-bottom:9px">Уровень 2 (class="zHid2"):</div>
          
          <div class="zHid3" style="--zHidH:3ex; margin-left: 15px; border: 1px solid #f90" zhid="1"><button zhidb="3"><p><s></s></p></button>
            <div style="color:#f90; margin-bottom:9px">Уровень 3 (class="zHid3"):</div>
            чпок
          </div>
            
          <div class="zHid3" style="--zHidH:3ex; margin-left: 15px; border: 1px solid #f90" zhid="1"><button zhidb="3"><p><s></s></p></button>
            <div style="color:#f90; margin-bottom: 15px;">Уровень 3² (class="zHid3"):</div>
            чпок
          </div>
            
          <div class="zHid3" style="--zHidH:3ex; margin-left: 15px; border: 1px solid #f90" zhid="1"><button zhidb="3"><p><s></s></p></button>
            <div style="color:#f90; margin-bottom: 15px;">Уровень 3³ (class="zHid3"):</div>
            чпок
          </div>
            
          <div class="zHid3" style="--zHidH:3ex; margin-left: 15px; border: 1px solid #f90" zhid="1"><button zhidb="3"><p><s></s></p></button>
            <div style="color:#f90; margin-bottom: 15px;">Уровень 3⁴ (class="zHid3"):</div>
            чпок
          </div>
        </div>
        
        <div class="zHid2" style="--zHidH:4ex; margin-left: 15px; border: 1px solid green" zhid="1"><button zhidb="2"><p><s></s></p></button>
          <div style="color:green; margin-bottom: 15px;">Уровень 2² (class="zHid2"):</div>
          чпок
        </div>
        
        <div class="zHid2" style="--zHidH:4ex; margin-left: 15px; border: 1px solid green" zhid="1"><button zhidb="2"><p><s></s></p></button>
          <div style="color:green; margin-bottom: 15px;">Уровень 2³ (class="zHid2"):</div>
          чпок
        </div>
      </div>
      <!-- code: -->
      <div class="zCodR3 ram-n3 all-c5" style="--zHidH:8ex" zhid="1">
        <div class="zCodR3z"><div><button zhidb><p><s></s></p><b>HTML Пример</b></button></div></div>
        <div class="zCodR3s">
          <div>
            <pre id="zCod"><div><div></div><code class="v-BG0">
            &lt;div style="--zHidH:9ex; border: 1px solid red;" zhid="0">&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
            &nbsp; &lt;div style="color:red;margin-bottom: 15px">Уровень 1:&lt;/div>
              
            &nbsp; &lt;div class="zHid2" style="--zHidH:8ex; margin-left:15px; border: 1px solid green;" zhid="0">&lt;button zhidb="2">&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
            &nbsp; &nbsp; &lt;div style="color:green; margin-bottom: 15px">Уровень 2 (class="zHid2"):&lt;/div>
            
            &nbsp; &nbsp; &lt;div class="zHid3" style="--zHidH:3ex; margin-left: 15px; border: 1px solid #f90" zhid="1">&lt;button zhidb="3">&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
            &nbsp; &nbsp; &nbsp; &lt;div style="color:#f90;  margin-bottom: 15px">Уровень 3 (class="zHid3"):&lt;/div>
            &nbsp; &nbsp; &nbsp; чпок
            &nbsp; &nbsp; &lt;/div>
            
            &nbsp; &nbsp; &lt;div class="zHid3" style="--zHidH:3ex; margin-left: 15px; border: 1px solid #f90" zhid="1">&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
            &nbsp; &nbsp; &nbsp; &lt;div style="color:#f90; margin-bottom: 15px">Уровень 3² (class="zHid3"):&lt;/div>
            &nbsp; &nbsp; &nbsp; чпок
            &nbsp; &nbsp; &lt;/div>
            
            &nbsp; &nbsp; &lt;div class="zHid3" style="--zHidH:3ex; margin-left: 15px; border: 1px solid #f90" zhid="1">&lt;button zhidb="3">&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
            &nbsp; &nbsp; &nbsp; &lt;div style="color:#f90; margin-bottom: 15px">Уровень 3³ (class="zHid3"):&lt;/div>
            &nbsp; &nbsp; &nbsp; чпок
            &nbsp; &nbsp; &lt;/div>
            
            &nbsp; &nbsp; &lt;div class="zHid3" style="--zHidH:3ex; margin-left: 15px; border: 1px solid #f90" zhid="1">&lt;button zhidb="3">&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
            &nbsp; &nbsp; &nbsp; &lt;div style="color:#f90; margin-bottom: 15px">Уровень 3⁴ (class="zHid3"):&lt;/div>
            &nbsp; &nbsp; &nbsp; чпок
            &nbsp; &nbsp; &lt;/div>
            &nbsp; &lt;/div>
            
            &nbsp; &lt;div class="zHid2" style="--zHidH:3ex; margin-left: 15px; border: 1px solid green" zhid="1">&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
            &nbsp; &nbsp; &lt;div style="color:green; margin-bottom: 15px">Уровень 2² (class="zHid2"):&lt;/div>
            &nbsp; &nbsp; чпок
            &nbsp; &lt;/div>
            
            &nbsp; &lt;div class="zHid2" style="--zHidH:3ex; margin-left: 15px; border: 1px solid green" zhid="1">&lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
            &nbsp; &nbsp; &lt;div style="color:green; margin-bottom: 15px">Уровень 2³ (class="zHid2"):&lt;/div>
            &nbsp; &nbsp; чпок
            &nbsp; &lt;/div>
            &lt;/div>
            </code></div></pre>
          </div>
          <div></div>
        </div>
      </div>
    </fieldset>
    
    <!-- Возможные изменения: -->
    <fieldset class="all-c2">
      <legend>Возможные изменения</legend>
      
      <div style="--zHidH:9ex" zhid>
      <div class="ram-V0 ram-V2 gI-inf all-c7"><div><button zhidb><p><s></s></p></button>
        <u>Полезная информация2</u>:
        <ul class="ram-V0 all-c8">
          <ol>Пример: &lt;div style="--zHid: 2ex;" zhid="">&lt;/div></ol>
          
          <li><b>style="--zHid: 2ex;"</b> размер видемой области.</li>
          <li><b>style="--zHidHs: 2.5ex;"</b> размер затемнения снизу.</li>
          <li><b>style="--zHidC: red;"</b> Цвет затемнения снизу.</li>
          <br>
          <li><b>style="--zHidx: green;"</b> Задаём свой параметр когда окно закрыто, 
            для дальнейшего использования(Применяем на свой элемент): <u class="u-n0 all-c1">style="color: var(--zHidX, green);"</u>. 
            Когда окно закрыто сработает green цвет.
            <u class="u-n1 all-c8">По умолчанию:</u>
            <ul>
              <li><b>--zHidx: 0;</b> для style="color: var(--zHidX, green);"</li>
              <li><b>--zHidx2: none;</b> для style="overflow: var(--zHidX2, hidden);"</li>
              <li><b>--zHidx3: unset;</b> для style="position: var(--zHidX3, absolute);"</li>
              <li><b>--zHidx4: block;</b> для style="display: var(--zHidX4, unset);"</li>
            </ul>
          </li>
        </ul> 
      </div></div>
      </div>
      
      <h4 class="hr-n1 hr-L"><b>Размер видемой области:</b></h4>
      <div class="prezHid">
          <div style="--zHid:2ex" zhid="1"><button zhidb><p><s></s></p></button>
            Установим style="<b>--zHid: 2ex;</b>" размер видемой области.
            <br>По умолчанию = 4ex.
            <br>• ex - Высота шрифта в нижнем регистре.
            <br> &nbsp; &nbsp; &nbsp; &nbsp;- Можно использовать все виды: px, em ...
  
            <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
            &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
            &lt;!-- --zHid:2ex; - Размер видемой области -->
            &nbsp; &lt;div style="--zHid:2ex" zhid="1">&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
            &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
            &nbsp; &nbsp; Тут содержание элемента...
            &nbsp; &lt;/div>
            &lt;/div>
            </code></div></pre>
          </div>
        </div>
      
      <h4 class="hr-n1 hr-L"><b>Размер затемнения снизу:</b></h4>
      <div class="prezHid">
        <div style="--zHidHs:8ex; --zHid:8ex" zhid><button zhidb><p><s></s></p></button>
          Установим style="<b>--zHidHs: 8ex;</b>" размер видемой области.
          <br>По умолчанию = 2.5ex.
          <br>• ex - Высота шрифта в нижнем регистре.
          <br> &nbsp; &nbsp; &nbsp; &nbsp;- Можно использовать все виды: px, em ...
      
          <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
          &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
          &lt;!-- --zHidHs:8ex; - Размер видемой области -->
          &nbsp; &lt;div style="--zHidHs:8ex" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
          &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
          &nbsp; &nbsp; Тут содержание элемента...
          &nbsp; &lt;/div>
          &lt;/div>
          </code></div></pre>
        </div>
      </div>
      
      <h4 class="hr-n1 hr-L"><b>Цвет затемнения снизу:</b></h4>
      <div class="prezHid">
        <div style="--zHidC:red" zhid><button zhidb><p><s></s></p></button>
          Установим style="<b>--zHidC: red;</b>" цвет затемнения снизу.
          <br>По умолчанию = white.
      
          <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
          &lt;div style="margin: 7px 0; padding: 5px; border: 1px solid green">&lt;!-- style вид рамки -->
          &lt;!-- --zHidC:red; - Цвет затемнения снизу -->
          &nbsp; &lt;div style="--zHidC:red" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
          &nbsp; &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
          &nbsp; &nbsp; Тут содержание элемента...
          &nbsp; &lt;/div>
          &lt;/div>
          </code></div></pre>
        </div>
      </div>
  
      <h4 class="hr-n1 hr-L"></h4><b>Убрать затемнения снизу:</b></h4>
      <div class="prezHid" style="--zHidC: #0000;" zhid><button zhidb><p><s></s></p></button>
        Установим style="<b>--zHidC: #0000;</b>" цвет затемнения снизу.
        <br>По умолчанию = white.
        
        <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
        &lt;!-- --zHidC: #0000; - Уберает затемнение снизу  -->
        &lt;div style="--zHidC: #0000;" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
        &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
        &nbsp; Текст текст ...
        &lt;/div>
        </code></div></pre>
      </div>
      
      <h4 class="hr-n1 hr-L"><b>Окно закрыто(Свой параметр):</b></h4>
      <div class="prezHid" style="--zHidx: green;" zhid><button zhidb><p><s></s></p></button>
        Изменим цвет подчёркнутого текста: <u style="color: var(--zHidX, green);">тут</u> когда закрыто изменим на green.
        
        <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
        <!-- --zHidx: green; - Когда окно закрыто задаём свой параметр -->
        &lt;div style="--zHidx: green;" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
        &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
        &nbsp; Изменим цвет подчёркнутого текста: &lt;u style="color: var(--zHidX, green);">тут&lt;/u> когда закрыто изменим на green.
        &lt;/div>
        </code></div></pre>
      </div>
    </fieldset>
    
    <br><h4 class="hr-n1 hr-L" style="--hr-Ct: var(--Ct)"><b>Подключение к сайту:</b></h4>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;head>..&lt;/head>: -->
    &lt;script src="https://code.jquery.com/jquery-3.7.1.min.js" defer>&lt;/script><!-- Библиотека jQuery -->
    &lt;link href="https://zam.usite.pro/db/publ/zHid/1-0-0/m.css" rel="stylesheet"><!-- Вид 'Меню' -->
    &lt;script src="https://zam.usite.pro/db/publ/zHid/1-0-0/m.js" defer>&lt;/script><!-- Мозг 'Меню' -->
    </code></div></pre>

    <b style="color:red">►</b> Исходники(css, js): <a href="https://github.com/zzamytikk/Hidden-box/tree/main/zHid/1-0-0" target="_blank">github</a> <i style="opacity:.4">(m. - Сокращённый вариант, ok. - Подробный)</i>
    
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;body>..&lt;/body>: -->
    &lt;div style="--zHidH:5ex" zhid>
    &nbsp; &lt;button zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>
    &nbsp; Содержание...
    &lt;/div>
    
    &lt;script>
    &nbsp; document.addEventListener('DOMContentLoaded', () => {
    &nbsp; &nbsp; zHid.$();//★ Спрятать/Показать hid (Запускаем)
    &nbsp; });
    &lt;/script>
    </code></div></pre>

    <h4 class="hr-n1 hr-L" style="--hr-Ct: var(--Ct)"><b>Подключение к сайту 'Вариант 2' (Без m.js):</b></h4>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;head>..&lt;/head>: -->
    &lt;script src="https://code.jquery.com/jquery-3.7.1.min.js" defer>&lt;/script><!-- Библиотека jQuery -->
    &lt;link href="https://zam.usite.pro/db/publ/zHid/1-0-0/m.css" rel="stylesheet"><!-- Вид 'Меню' -->
    </code></div></pre>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;body>..&lt;/body>: -->
    &lt;div style="--zHidH:5ex" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
    &nbsp; &lt;button onclick="let z;(z=$(this).closest('[zhid]')).attr('zhid',+(z.attr('zhid') != 1 && z.css('max-height')=='100%'))" zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
    &nbsp; Содержание...
    &lt;/div>
    </code></div></pre>

    <h4 class="hr-n1 hr-L" style="--hr-Ct: var(--Ct)"><b>Подключение к сайту 'Вариант 3' (Только css):</b></h4>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;head>..&lt;/head>: -->
    &lt;link href="https://zam.usite.pro/db/publ/zHid/1-0-0/m.css" rel="stylesheet"><!-- Вид 'Меню' -->
    </code></div></pre>
    <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
    &lt;!-- Добавить в &lt;body>..&lt;/body>: -->
    &lt;div style="--zHidH:5ex" zhid>&lt;!-- zhid Определяет состояние открыто или закрыто при первой загрузке HTML страницы -->
    &nbsp; &lt;button onclick="let z;(z=this.closest('[zhid]')).setAttribute('zhid',+(z.getAttribute('zhid') != 1 && window.getComputedStyle(z).getPropertyValue('max-height').trim()=='100%'))" zhidb>&lt;p>&lt;s>&lt;/s>&lt;/p>&lt;/button>&lt;!-- button кнопка Открыть/Закрыть -->
    &nbsp; Содержание...
    &lt;/div>
    </code></div></pre>
    
    <!-- ••• Презентация КОНЕЦ ••• -->
    
  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
  </script>
`};