gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  #glPodskaz fieldset pre {
    margin-bottom: 0
  }
  
  #glPodskaz .prezen > div {
    border: 1px solid var(--all-br)
  }
  </style>
  
  <fieldset class="all-c1" style="--zHid: 6ex;" zhid="1">
    <legend>100% для 1 блока в ряд:</legend><button zhidb><p><s></s></p></button>
    <div>
      <div class="flex-w prezen">
        <div>Блок 1</div>
        <div>Блок 2</div>
        <div>Блок 3</div>
        <div>Блок 4</div>
      </div>
      
      <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
      &lt;div class="flex-w">
        &lt;div>Блок 1&lt;/div>
        &lt;div>Блок 2&lt;/div>
        &lt;div>Блок 3&lt;/div>
        &lt;div>Блок 4&lt;/div>
      &lt;/div>
      </code></div></pre>
    </div>
  </fieldset>
  
  <fieldset class="all-c1" style="--zHid: 6ex;" zhid="1">
    <legend>50% для мах 2 блоков в ряд:</legend><button zhidb><p><s></s></p></button>
    <div>
      <div class="flex-w prezen" style="--flexW:49%">
        <div>Блок 1</div>
        <div>Блок 2</div>
        <div>Блок 3</div>
        <div>Блок 4</div>
      </div>
      
      <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
      &lt;div class="flex-w" style="--flexW:50%">
        &lt;div>Блок 1&lt;/div>
        &lt;div>Блок 2&lt;/div>
        &lt;div>Блок 3&lt;/div>
        &lt;div>Блок 4&lt;/div>
      &lt;/div>
      </code></div></pre>
    </div>
  </fieldset>
  
  <fieldset class="all-c1" style="--zHid: 6ex;" zhid="1">
    <legend>33.3% для 3 блока в ряд:</legend><button zhidb><p><s></s></p></button>
    <div>
      <div class="flex-w prezen" style="--flexW:33%">
        <div>Блок 1</div>
        <div>Блок 2</div>
        <div>Блок 3</div>
        <div>Блок 4</div>
      </div>
      
      <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
      &lt;div class="flex-w"  style="--flexW:33.3%">
        &lt;div>Блок 1&lt;/div>
        &lt;div>Блок 2&lt;/div>
        &lt;div>Блок 3&lt;/div>
        &lt;div>Блок 4&lt;/div>
      &lt;/div>
      </code></div></pre>
    </div>
  </fieldset>

  <fieldset class="all-c1" style="--zHid: 6ex;" zhid="1">
    <legend>25% для 4 блока в ряд:</legend><button zhidb><p><s></s></p></button>
    <div>
      <div class="flex-w prezen" style="--flexW:24%">
        <div>Блок 1</div>
        <div>Блок 2</div>
        <div>Блок 3</div>
        <div>Блок 4</div>
      </div>
      
      <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
      &lt;div class="flex-w" style="--flexW:50%">
        &lt;div>Блок 1&lt;/div>
        &lt;div>Блок 2&lt;/div>
        &lt;div>Блок 3&lt;/div>
        &lt;div>Блок 4&lt;/div>
      &lt;/div>
      </code></div></pre>
    </div>
  </fieldset>
  
  <div class="ram-V0 ram-V2 gI-inf all-c3"><div>
    <ul class="ram-V0 all-c8">
      <li>Когда экран меньше 620px Делаем все контенеры в 1 ряд (Вертикально)</li>
    </ul>
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">
  <style>
  .flex-w {
    display: flex;
    flex-wrap: wrap;/* Когда не помещается горизонтально переносим в низ */
  }
  .flex-w > * {
    width: var(--flexW, 100%);
  }
  
  @media (max-width: 620px) {/* Когда экран меньше 620px Делаем все контенеры в 1 ряд */
    .flex-w > * {
      flex-basis: 100%;
    }
  }
  </style>
  </code></div></pre>

  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="Полезное"><div><div></div><code class="v-BG0">
  <style>
  flex {
    display: flex;
    flex-direction: row;
      flex-direction: column;/* Вертикально */
    flex-wrap: nowrap;
    flex-flow: row nowrap;
    justify-content: space-evenly;/* Контенеры по центру раздельно */
      justify-content: flex-end;/* Контенеры в право */
    align-items: stretch;
      align-items: flex-start;/* к верху */

      /* > */
        align-self: flex-start;
        align-content: flex-start;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 100%;
    order: -1;
  }
  </style>
  </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
  </script>
`};