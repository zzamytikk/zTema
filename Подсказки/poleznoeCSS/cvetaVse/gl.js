gl.M.cho.O.U = {
  js:['/poleznoeCSS/cvetaVse/cveta.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>
  #glPodskaz #CvetaVse .B- b {
    text-shadow: 0 0 1px #777, 0 0 1px #777, 0 0 1px #777
  }
  #glPodskaz #CvetaVse .B-::before {
    content: '';
    margin-right:2px;
    width: .8em;
    height: .8em;
    background: var(--B-C);
    border: 1px solid var(--Ct);
  }
  
  /* 2 Квадрата для белого и тёмного фона: */
  .CvetaVse2kv {z-index: 999;
    position: sticky;
    top: 0;
    margin-top: -2px;/* Корекция. Убрали перемещение */
    display: flex;
    width: 100%;
    height: 90px;
    border: 1px solid red; 
  }
  .CvetaVse2kv > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    border: 1px solid green
  }
  .CvetaVse2kv > div > div {
    width: 50px;
    height: 50px;
    border-radius: 3px;
  }
  </style>
  
  <div class="CvetaVse2kv">
    <div style="background: #012"><div></div></div>
    <div style="background: #fff"><div></div></div>
  </div>
  
  <div id="CvetaVse"></div>

  <script>
    gl.POD.$();//Цвета
    //zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};