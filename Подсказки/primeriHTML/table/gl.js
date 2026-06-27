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
  
    <!-- ••• Презентация НАЧАЛО: ••• -->
    <style>
      .tabW table {
        margin:5px 0;
        width: 100%;
      }
    </style>
    
    <div style="--zHid:11ex;" zhid="1">
      <div class="ram-V0 ram-V2 gI-inf all-c7"><div><button zhidb><p><s></s></p></button>
        <u>Сторона отображения названия таблицы(class)</u>:
        <ul class="ram-V0 all-c8">
          <li>По умолчанию верх-центр.</li>
          <li><b>.tabR</b> верх-право.</li>
          <li><b>.tabL</b> верх-лево.</li>
          <li><b>.tabB</b> низ-центр.</li>
          <li><b>.tabBR</b> низ-право.</li>
          <li><b>.tabBL</b> низ-лево.</li>
        </ul>
        
        <div class="tabW">
        <table class="tab-0"><caption>Заголовок: верх-центр</caption><thead><tr>
          <th>.tab-0</th>
          </tr></thead><tbody><tr>
            <td>текст</td>
        </tr></tbody></table>
        <hr class="hr-1">
        <table class="tab-0 tabR"><caption>Заголовок: верх-право</caption><thead><tr>
          <th>.tab-0 .tabR</th>
          </tr></thead><tbody><tr>
            <td>текст</td>
        </tr></tbody></table>
        <hr class="hr-1">
        <table class="tab-0 tabL"><caption>Заголовок: верх-лево</caption><thead><tr>
          <th>.tab-0 .tabL</th>
          </tr></thead><tbody><tr>
            <td>текст</td>
        </tr></tbody></table>
        <hr class="hr-1">
        <table class="tab-0 tabB"><caption>Заголовок: низ-центр</caption><thead><tr>
          <th>.tab-0 .tabB</th>
          </tr></thead><tbody><tr>
            <td>текст</td>
        </tr></tbody></table>
        <hr class="hr-1">
        <table class="tab-0 tabBR"><caption>Заголовок: низ-право</caption><thead><tr>
          <th>.tab-0 .tabBR</th>
          </tr></thead><tbody><tr>
            <td>текст</td>
        </tr></tbody></table>
        <hr class="hr-1">
        <table class="tab-0 tabBL"><caption>Заголовок: низ-лево</caption><thead><tr>
          <th>.tab-0 .tabBL</th>
          </tr></thead><tbody><tr>
            <td>текст</td>
        </tr></tbody></table>
        </div>
      </div></div>
    </div>

 <fieldset class="all-c1">
  <legend>.tab-0</legend>
  
  <!-- Ваш пример -->
      <table class="tab-0 all-c5" style="margin:auto"><caption>Описание</caption><thead><tr>
        <th>Заголовок</th>
        <th>Заголовок2</th>
      </tr></thead><tbody><tr>
        <td>текст</td>
        <td>текст</td>
      </tr><tr>
        <td>текст</td>
        <td>текст</td>
      </tr></tbody></table>
  <!-- ---------- -->
  
  <div style="--zHidH:9ex; border: 1px solid #0000" zhid="1"><button style="top:.4em" zhidb><p><s></s></p></button>
    <h4 class="hr-n1 hr-L" style="width:calc(100% - 2.2em)"><b>Цветовые варианты:</b></h4>
    
    <style>
      .zRazC {
        text-align: left;
      }
      .zRazCtable table {
        margin:auto
      }
    </style>
    <div class="zRazC zRazCtable ram-n1-1 ram-V1 ram-V1-1X all-c5"><div>
      <!-- Ваш пример(Для отображения всех цветов).
        !!! Важно установить class: all- !!! Для авто замены в других цветовых шаблонах.
        Когда в шаблоне много all-c.., установите где меняем all-,
        или all-c..,  для замены их всех: -->
          <table class="tab-0 all-c0"><caption>Описание</caption><thead><tr>
            <th>Заголовок</th>
          </tr></thead><tbody><tr>
            <td>текст</td>
          </tr></tbody></table>
      <!-- ---------- -->
      <b>class</b><s>all-c0</s>
    </div></div>

    <div class="ram-V0 ram-V2 gI-inf all-c2"><div>
      Нажмите на нужный вам цвет, для изенения HTML кода
    </div></div>
    
    <p>Для выбора <u class="u-n1 all-c5">расцветки</u> добавим в тег: <span class="cod-atr">class="<span class="zRazCp" style="color:var(--all-C)">...</span>"</span></p>
    
    <div id="zRazCpre"></div>
  </div>
  <br><br>
  <h4 class="hr-n1 hr-L all-c5" style="--hr-Ct: var(--Ct)"><b>Вариант 2:</b></h4>
  <!-- Ваш пример2 -->
        <table class="tab-0 all-c5" style="margin:auto"><caption>Описание</caption><thead><tr>
          <th>#</th>
          <th>Заголовок</th>
          <th>Заголовок2</th>
        </tr></thead><tbody><tr>
          <th>1</th>
          <td>текст</td>
          <td>текст</td>
        </tr><tr>
          <th>2</th>
          <td>текст</td>
          <td>текст2</td>
        </tr></tbody></table>
  <!-- ---------- -->
  
  <div style="--zHidH:9ex; border: 1px solid #0000" zhid="1"><button style="top:.4em" zhidb><p><s></s></p></button>
    <h4 class="hr-n1 hr-L" style="width:calc(100% - 2.2em)"><b>Цветовые варианты:</b></h4>
    
    <div class="zRazC zRazCtable ram-n1-1 ram-V1 ram-V1-1X all-c5"><div>
      <!-- Ваш пример(Для отображения всех цветов).
        !!! Важно установить class: all- !!! Для авто замены в других цветовых шаблонах.
        Когда в шаблоне много all-c.., установите где меняем all-,
        или all-c..,  для замены их всех: -->
          <table class="tab-0 all-c0"><caption>Описание</caption><thead><tr>
            <th>#</th>
            <th>Заголовок</th>
          </tr></thead><tbody><tr>
            <th>1</th>
            <td>текст</td>
          </tr></tbody></table>
      <!-- ---------- -->
      <b>class</b><s>all-c0</s>
    </div></div>

    <div class="ram-V0 ram-V2 gI-inf all-c2"><div>
      Нажмите на нужный вам цвет, для изенения HTML кода
    </div></div>
    
    <p>Для выбора <u class="u-n1 all-c5">расцветки</u> добавим в тег: <span class="cod-atr">class="<span class="zRazCp" style="color:var(--all-C)">...</span>"</span></p>
    
    <div id="zRazCpre"></div>
  </div>
</fieldset>
  
    <fieldset class="all-c4" style="--zHid: 8ex;" zhid="1">
      <legend><button zhidb><p><s></s></p><b>Установим click(Скопировать) на ячейки td</b></button></legend>
      <div>
        <table class="tab-0T zTabC" style="margin:auto"><thead><tr>
          <th>Заголовок</th>
          <th>Заголовок2</th>
        </tr></thead><tbody><caption>В буфер:</caption>
        <tr>
          <td>Символ</td>
          <td tdno>Символ2 с запретом на копирование</td>
        </tr>
        </tbody></table>
        
        <div class="ram-V0 ram-V2 gI-poi all-c7"><div>
          <u>Полезная информация</u>:
          <ul class="ram-V0 all-c8">
            <li><b>&lt;table class="<u class="u-n1 all-c1">zTabC</u>"></b> class указывает на какой &lt;table> установим возможность скопировать</li>
            <li><b>&lt;td <u class="u-n1 all-c1">tdno</u>=""></b> атрибут установит запрет на копирования для тега &lt;td></li>
          </ul>
        </div></div>
        
        <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
        &lt;table class="tab-0T zTabC">&lt;thead>&lt;tr>
          &lt;th>Заголовок&lt;/th>
          &lt;th>Заголовок2&lt;/th>
        &lt;/tr>&lt;/thead>&lt;tbody>&lt;caption>В буфер:&lt;/caption>
        &lt;tr>
          &lt;td>Символ&lt;/td>
          &lt;td tdno>Символ2 с запретом на копирование&lt;/td>
        &lt;/tr>
        &lt;/tbody>&lt;/table>
        </code></div></pre>
      </div>
    </fieldset>
    
    
    <!-- ••• Презентация КОНЕЦ! ••• -->

  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    zTab.buf.$();//Установим на все <table class="zTabC". click по <td> = Скопировать
    zPrez.razC.$();//Вешаем click 'Цветовые варианты'

    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};