gl.POD = {
  db: {
    I_max: 1, //Всего запусков
    na: 1, //Работа скрипта 1 сек
    Nas: (
      e,//$('input[range]')
      n,//Путь до переменной 'I_max' || 'na'
      v,//value
      p//1 = Первый запуск(Читаем)
    ) => {//Сохранение настроек
      let C, k = 'TestSkJs-'+n;
      
      if(p) {//Первый запуск
        C = gl.f.db.chit(k);
        //console.debug('Первый запуск chit', typeof C);
      }
      
      if(C != null) {//Есть запись
        //console.debug('Востоновим '+n, C);
        e.val(C);
      } else {//console.debug('Запишим', v);
        gl.f.db.pish(k, v);
      }
      
      gl.POD.db[n] = C || v
    }, 
    //Список:
    js1: [
      //{0-Первая запись
      //all: [],  //Все записи выполнений
      //sred: 123 //Среднее арифметическое массива
      //vse: 456  //Все записи выполнений вместе
      //}
    ],
    js2: [],
    $: b => { //Вывод подробного списка
      let t = '';
      
      gl.POD.db['js' + b.attr('data-testjs-n')][b.attr('data-testjs-dbid')].all.forEach((v, k) => { //console.log(v);
        t += (t ? '<br>' : '') + (k + 1) + ') <span style="color: green">' + v.toLocaleString() + '</span>';
      });
      
      return t
    }
  },
  //gl.POD.$();//Вешаем click
  $: () => {
    $('#glPodskaz #testJS1 textarea').val(gl.f.db.chit('testJS1')); //Востановим предыдущую запись
    $('#glPodskaz #testJS2 textarea').val(gl.f.db.chit('testJS2'));
    
    $('#glPodskaz #testJS .B-Ig-srv').click(function() {
      var b = $(this); //button Запуска
      
      gl.POD.on();//Вкл/выкл button запуска и textarea
      gl.POD.c(b);
    });
  },
  //gl.POD.on();//Вкл/выкл button запуска и textarea
  on: x => {
    let b = $('#glPodskaz');
    
    b.find('.B-Ig-srv')[x?'removeAttr':'attr']('disabled', '')[x?'removeClass':'addClass']('B-L');//button запуск
    b.find('textarea')[x?'removeAttr':'attr']('disabled', '');
  },
  /*  gl.POD.c(
        b=$(), //button Запуска
        s=2         //Берём val() из #testJS2 textarea
         =undefined //Берём val() из #testJS1 textarea
      );
  */
  c: (b, s) => { //Запуск 1,2 script
    let t, o = $('#glPodskaz #testJS'),
      v = o.find('#testJS' + (s || 1) + ' textarea').val();
    //console.debug('v('+v.length+'):',v,', v2('+o.find('#testJS2 textarea').val().length+'):',o.find('#testJS2 textarea').val());
    
    if (!s) { //Первый запуск
      let v2 = o.find('#testJS2 textarea').val();
      
      if (!v.length || !v2.length) { //Незаполнено какое-то поле txtarea
        Oinf.$({
          id: 'jsScriptPro',
          x: 0,
          t: 'Заполните все поля ввода!'
        });
        gl.POD.on(1);//Вкл/выкл button запуска и textarea
        return;
      }
      
      gl.f.db.pish('testJS1', v); //Сохраним запись
      gl.f.db.pish('testJS2', v2);
    }
    
    if (v) { //Есть запись
      if(!s){//Первый запуск
        Oinf.$({//Инфо окно
          id: 'jsScriptPro',
          s: 3, //Сторона поивления
          t: 'Запускаем обработку script'
        });
      }
      o.parent().find('#jsScriptPro').remove(); //Удалим прошлый
      setTimeout(() => { //Позволим поивится окну
        o.parent().append(
          $('<script id="jsScriptPro">').html( //Создаём script
            'gl.POD.zap.$({' +
            'f: () => {' + v + '\n},' + //• Функция
            'n: ' + (s || 1) + //• Какой js Выполняем js1/js2
            '});'
          )
        ); //! Работает только новое добавление script
      }, s?0:1200);
    }
  },
  zap: { //Запкскаем циклы обработки
    /*  gl.POD.zap.$({
          f: () => {}, //• Функция
          n: 2         //• Какой js Выполняем js1/js2
        });
    */
    $: function(q) {
      let T, o = $('#glPodskaz #testJS'),
        db = gl.POD.db,
        JS, dbID = db['js' + q.n].length, //id Записи
        I, stop, tab,
        TmsAll = db.I_max * +(db.na + '000'); //Всего милесекунд За все запуски
      
      if (q.n == 1) { //• Первый запуск js1-2
        (T = o.find('.ram-n0'))[
          T.text() == '...' ? 'html' : 'append'
        ](this.t(db))//Выводим шаблон для результатов
          .scrollTop(T[0].scrollHeight);
      }
      
      db['js' + q.n][dbID] = { //Создаём базу для записей
        
        all: [], //Все записи выполнений
        
        //sred: 0,  //Среднее арифметическое массива
        vse: 0 //Все записи выполнений вместе
      };
      JS = db['js' + q.n][dbID]; //Сократили
      
      setTimeout(() => {
        for (I = 1; I <= db.I_max; I++) { //10 повторов
          stop = gl.f.Ot() + +(db.na + '000'); //Остановим через 1 мин
          
          for (i = 1; i < 10000000000; i++) {
            q.f(); //Запускаем нашу функцию
            if (gl.f.Ot() > stop) { break } //Остановим
          }
          JS.all.push(i); //Добавим в базу
          JS.vse += i; //Все записи выполнений вместе
        }

        tab = o.find('table:last-child');
        tab.find('#Tjs' + q.n + 'vse').html('<span style="color: #0b0;">' + JS.vse.toLocaleString() + '</span>');
        
        JS.sred = Math.floor(JS.vse / JS.all.length);
        
        tab.find('#Tjs' + q.n).html( //Вывод подробного списка
          `<div id="testJSpod" class="zONas-BL">
            <button class="B-" data-testjs-dbid="${dbID}" data-testjs-n="${q.n}">${JS.sred.toLocaleString()}</button>
            <div><div></div></div>
          </div>`
        );
        
        if (q.n == 1) { //Запускаем второй script для сравнения
          gl.POD.c(0, 2);
        } else { //+ Завершили! Выводим результат
          //console.log(db);
          zONas.$({ //★ Запускаем индивидуально для подгруза
            id: 'testJSpod', //Путь до <div id="svoi2" class="zONas-
            
            F: (d, b, N) => { //Своя функция (Сработает при открытии окна)
              //d = $() //<div id="svoi2" class="zONas-
              //b = $() //<button
              //N = $() //Путь до содержания окна
              
              zONas.L(d, b, N, gl.POD.db.$(b)); //Выводим наш текст HTML. //htm=false;//Остановит вывод окна!
            }
          });
          
          let bOtext = $('#glPodskaz .B-i-TAx'),
            js1 = db.js1[dbID],
            js2 = db.js2[dbID],
            min = js1.vse < js2.vse ? 1 : 2, //Меньшее 27 000 раз
            max = js1.vse > js2.vse ? 1 : 2, //Большее 30 000 раз
            dbMin = db['js' + min][dbID],
            dbMax = db['js' + max][dbID];
          
          if (js1.vse == js2.vse) {
            tab.find('#Tjs1P, #Tjs2P').html('100%');
            bOtext.attr('data-q', '100%');
          } else {
            tab.find('#Tjs' + min + 'vse').append(' <span style="color:red">(-' + (dbMax.vse - dbMin.vse).toLocaleString() + ')</span>'); //Меньше на всего раз
            tab.find('#Tjs' + min).append(' <span style="color:red">(-' + (dbMax.sred - dbMin.sred).toLocaleString() + ')</span>');
            //console.error(dbMax.vse - dbMin.vse, (dbMax.vse - dbMin.vse).toLocaleString());
            //console.error(dbMax.sred - dbMin.sred, (dbMax.sred - dbMin.sred).toLocaleString());
            tab.find('#Tjs' + max + 'P').html('<span style="color: green;">100%</span>'); //% js1 > js2
            
            let proc1 = dbMax.vse / 100; // 1% = 345раз
            prominus = gl.f.Odr.r(dbMin.vse / proc1, -2);
            
            // console.error(
            //     'js' + min + '.vse[' + dbMin.vse + '] / proc1[' + proc1 + '] => ' +
            //      gl.f.Odr.r(prominus, -2) + '%'
            // );
            
            tab.find('#Tjs' + min + 'P').html(
              '<span>' + prominus + '%</span>' +
              ' <span style="color: red;">(-' + gl.f.Odr.r(100 - prominus, -2) + '%)</span>'
            ); //% js1 > js2
            
            bOtext.eq(min - 1).attr('data-q', prominus + '%');
            
            //-----Время
            let TmsProc1 = TmsAll / 100, //1% = 30 милесекунд
              TmsOK = TmsAll - prominus * TmsProc1, //Быстрее на милесек
              Bna = 'Быстрее на ' + Math.round(TmsOK).toLocaleString() + 'мс';
              
            bOtext.eq(max - 1).attr('data-q', Bna);
            tab.find('#Tjs'+max+'P').append('<div style="color:green;font-size:.8em">('+Bna+')</div>');
            //console.error('Всего милесекунд:', TmsAll, '1% =', TmsProc1);
            //console.error('Быстрее на милесек:', Math.round(TmsOK));
            
            Oinf.$('jsScriptPro');
            gl.POD.on(1);//Вкл/выкл button запуска и textarea
          }
        }
        (T=o.find('.ram-n0')).scrollTop(T[0].scrollHeight);
      }, 9); //Задержка для поивления загрузки на button
    },
    t: db => { //Шаблон
      return `<table>
        <caption>${db.I_max} повторов по ${db.na}мс!</caption>
        <tr>
          <th>№</th>
          <th>Всего раз(а)</th>
          <th>Средние раз(а)</th>
          <th>Эфективности</th>
        </tr>
        <tr>
          <td>js1</td>
          <td id="Tjs1vse">...</td>
          <td id="Tjs1">...</td>
          <td id="Tjs1P">...</td>
        </tr>
        <tr>
          <td>js2</td>
          <td id="Tjs2vse">...</td>
          <td id="Tjs2">...</td>
          <td id="Tjs2P">...</td>
        </tr>
      </table>`
    }
  }
};