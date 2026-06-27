gl.M.cho.O.U = {
  js:['/poleznoe/skorostJS/ok.js'],
  html: `
  <style>
    #glPodskaz #testJS {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: calc(100vw - 18px);
      height: calc(100vh - 3.8em);/* - Отступ от верха */
    }
    
    #glPodskaz #testJS > :first-child {/* Результат */
      position:relative;
      width: 100%;
      height: 35%;
    }
    #glPodskaz #testJS .B-Ig-srv {/* button начать */
      z-index: 1;
      position: absolute;
      bottom: -.7em;
      left: 50%;transform: translateX(-50%);
    }
    #glPodskaz #testJS .ram-n0 {/* Результат. вывод */
      height:calc(100% - 1.2em);
      height:92%;
      overflow: auto
    }
    
    #glPodskaz #testJS > * {
      width: calc(50% - 9px);
      height: 65%;
      bordern: 1px solid red;
    }

    #glPodskaz #testJS .B-i-TAx {/* Все div (textarea) */
      width: 100%;
      height: calc(100% - 6px);
    }
    
    #glPodskaz #testJS .B-i-TAx > div {/* Кнопка удалить */
      top: -1.3em;
      top: -20px;
      top: calc(-.5em + -12px);
      left: 50%;
      transform: translateX(-50%);
      right: unset;
    }
    
    /* table Таблица результатов */
    #glPodskaz #testJS table {
      width: 100%;
      font-size: .8em;
    }
    #glPodskaz #testJS table:not(:first-child) {
      margin-top: 3px;
    }
    #glPodskaz #testJS table caption {
      caption-side: bottom;
      text-align: right;
      padding-right: 1px;
      color:var(--Ct);
      opacity:.6
    }
    #glPodskaz #testJS table :is(th, td) {
      text-align: center;
    }
    #glPodskaz #testJS table th {
      color: var(--Ct)
    }
    
    #glPodskaz #testJS table tr:nth-child(2) {
      background: #f901;
    }
    #glPodskaz #testJS table tr:nth-child(2) td:first-child {
      color: var(--C2-50);
      font-weight: 900;
    }
    #glPodskaz #testJS table tr:nth-child(2) {
      background: #f0f1;
    }
    #glPodskaz #testJS table tr:nth-child(3) td:first-child {
      color: var(--C6-50);
      font-weight: 900;
    }
    
    /* Общий результат */
    #glPodskaz .B-i-TAx::after {
      content: attr(data-q);
      position: absolute;
      right: 4px;
      bottom: 0;
      color: red;
    }
    #glPodskaz .B-i-TAx[data-q^="Быстрее на"]::after {
      color: #0b0;
      pointer-events: none;
    }
    
    #glPodskaz .zONasID {z-index: 1;
      position:absolute;
      bottom: -.65em;
      right: 9px;
      font-size: .7em;
    }
  </style>
  
  <div id="testJS">
    <div>
      <div class="zONasID zONas-TL all-c4">
      <button class="B-R-Io B-Ig-nas"><p></p></button>
      <div><div>

        <div class="B-i-R2-t all-c0">
          <datalist id="testJS1rangD">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </datalist>
          <input id="testJS1rang" type="range" min="1" max="3" step="1" value="1" list="testJS1rangD">
          <div><b>Мс повтора</b><input type="text" value="..."></div>
          <s>1</s><s>3</s>
        </div>
        <br>
        <div class="B-i-R2-t all-c0">
          <datalist id="testJS1rang2D">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </datalist>
          <input id="testJS1rang2" type="range" min="1" max="5" step="1" value="5" list="testJS1rang2D">
          <div><b>Повторов</b><input type="text" value="..."></div>
          <s>1</s><s>5</s>
        </div>
        
      </div></div></div>
      
      <button class="B-Ig-srv B-R-Io all-c1"><p></p></button>
      <div class="ram-n0">...</div>
    </div>
    
    <div id="testJS1">
      <div class="B-i-TAx all-c2">
        <textarea placeholder="Введите код javascript для проверки 1" required></textarea>
        <div>
          <button class="B-Ix-X B-R-Io all-c0" onclick="$(this).parent().prev().val('').focus()"><p><s></s><s></s></p></button>
        </div>
      </div>
    </div>
        
    <div id="testJS2">
      <div class="B-i-TAx all-c6">
        <textarea placeholder="Введите код javascript для проверки 2 (Сравним с первым javascript кодом)" required></textarea>
        <div>
          <button class="B-Ix-X B-R-Io all-c0" onclick="$(this).parent().prev().val('').focus()"><p><s></s><s></s></p></button>
        </div>
      </div>
    </div>
  </div>

  <script>
    gl.POD.$();//Вешаем click
    zONas.$();//★ Запускаем Всплывающее окно (Настройки/Разное)
    
    zBiS.$({//Запускает обработку цифр 'input[range]'
      id: '#testJS1rang2',
      f: (e, v, p) => {
        gl.POD.db.Nas(e, 'I_max', v, p);
      }
    });
    zBiS.$({
      id: '#testJS1rang',
      f: (e, v, p) => {
        gl.POD.db.Nas(e, 'na', v, p);
      }
    });
  </script>
`};