gl.M.cho.O.U = {
  //js:['https://zam.usite.pro/db/Primery/1/minF/m.js'],
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz111 > *:last-child > * {/* Содержание окна */
    width: calc(100vw - 14px);/* На весь экран */
  }
  
  #glPodskaz .B-i-TAx {
    margin: .5em .65em 5px 11px;
    width: calc(100vw - 2.5em);
    height: calc(100vh - 5em);
  }
  </style>
  
  <div class="B-i-TAx">
    <textarea placeholder="Введите запрос..." required=""></textarea>
    <div>
      <button class="B-Ix-X B-R-Io all-c0" onclick="$(this).parent().prev().val('').focus()"><p><s></s><s></s></p></button>
    </div>
  </div>

  <script>
    //zCod.$();//Подсветка HTML кода
    //zHid.$();//Скрыть/Показать

    //zBiT.c();//Скопировать текст textarea
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {//Вешаем click + Покажем записи
        $('#glPodskaz textarea')
        .val(gl.f.db.chit(gl.POD.K))//Покажем запись
        
        .on('change paste', e => {
          let b = $(e.currentTarget);
          
          gl.POD.S(b);
        });
      },
      /* 
        gl.f.db.chit(gl.POD.K);//Читаем
        gl.f.db.pish(gl.POD.K, '');//Пишим
        gl.f.db.udal(gl.POD.K);//Удалим
      */
      K: 'db-Zametki',//Ключь
      S: b => {//Сохраним запись
        let v = b.val();
        //console.debug(v);
        
        gl.f.db.pish(gl.POD.K, v);//Сохраним запись
      }
    };gl.POD.$();
  </script>
`};