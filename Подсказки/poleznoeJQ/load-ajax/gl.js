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
  
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <b>$.ajax</b> Загрузка документа(xml, json, script, html)/Отправка формы.
    <br><b>.load</b> Загрузка документа.
    <br><b>$.getScript</b> Загрузка(js) документа.
  </div></div>
  
  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  $.ajax({
    url: '/gl.html',           //Куда отправить запрос
    //method: 'get',             //Метод запроса (post или get)
    dataType: 'html',          //Тип данных в ответе (xml, json, script, html).
    //data: {text: 'Текст'},   //Данные передаваемые в массиве
    success: htm => {   //функция которая будет выполнена после успешного запроса.
      htm = $('&lt;div>').html(htm);//В див
      htm = $('[htm]', htm);        //в .html файле выбераем свой текст завернутый в:
        //&lt;div htm>ваш текст.. &lt;div id="ch">удалим меня&lt;/div> ваш текст..&lt;/div> 
      $('#ch', htm).remove();       //удалим что нам надо по id

      console.debug(htm.html());
    },
    error: err => {
      console.debug('err', err.responseText, '\n'+err.statusText, '\n'+err);
    }
  });
  
  //-----------------
  
  $('#kudaZagruzhenoe').load('http://yraaa.ru/index/8-4 .ctoPodgruzili');
  
  //-----------------
  
  $.getScript('ajax/test.js');
  // ||
  $.getScript('ajax/test.js', () => {//script
    //Загрузили
  }).done(function (script, textStatus) {
    console.log(textStatus);
  }).fail((jqxhr, settings, exception) => {
    x ='&lt;font color=red>Ошибка подгрузки</font>';
  });
  &lt;/script>
  </code></div></pre>

  <div class="ram-V0 ram-V2 gI-pre all-c0"><div>
    <b>$.parseJSON()</b> Устарело! Необходимо использовать JSON.parse()!
  </div></div>
  
  <div class="ram-V0 ram-V2 gI-inf all-c1"><div>
    <b>JSON.parse()</b> преобразуют строку JSON в объект JavaScript.
    <br><b>JSON.stringify()</b> преобразует JavaScript-объект в строку JSON, готовую для отправки, например, на сервер.
  </div></div>

  <pre id="zCod" class="ram-n0 all-c5" data-ram-zag="HTML пример"><div><div></div><code class="v-BG0">
  &lt;script>
  a = '{"name":"John", "age":30, "city":"New York"}';
  o = JSON.parse(t);
  console.log(o.name);//Выведет: John

  a = { name: "Jane", age: 25 };
  o = JSON.stringify(a);
  console.log(o);//Выведет '{"name":"Jane","age":25}'
  &lt;/script>
  </code></div></pre>

  <script>
    zCod.$();//Подсветка HTML кода
    //zHid.$();//Скрыть/Показать
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};
