/*  ✪ https://zam.usite.pro/publ/
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var js = {
  $: () => {//Добавим button: Загрузка | disabled
    let t, F, B, cod;
    
    $('.flex-w[zhid]').each((i, e) => {
      F = $(e);//.flex-w      div><fieldset
      
      B = F.find('.all-c1').html();//all button
      B = $('<div>').html(B);//Добавим в div
      $('legend, .ram-V0, .udalim, [udalim]', B).remove();//Удалим заголовок, Лишние, Где стоит class="idalim"
      B.find('button, a, input, textarea, select').attr('disabled', '');
      
      t='';
      for (i = 1; i > -1; i--) { //1 - Загрузка | 0 - disabled
        B.find('[class*="B-"]')[(i?'add':'remove')+'Class']('B-L');
        
        B.find('.B-i-CR input[type="radio"]').each((I, e) => {
          $(e).attr('name', $(e).attr('name') + i);//Меняем name для Загрузка/disabled, для коректного отображения
        }); 
        
        cod = B.find('[class*="B-"]').eq(0)[0].outerHTML;//Первый элемент для html cod где нельзя click
        B.find('[dobvhtmlcod]').each((i, e) => {//Добавим выбранные в HTML код [dobvhtmlcod]
          cod+='\n'+$(e)[0].outerHTML;
        });
        
        t+='<div><div style="--zHidH:3.5ex" zhid="1">'+
          '<fieldset class="all-c' + (i ? 4 : 0) + ' v-BG0">' +
            '<legend><button zhidb><b>' + (i ? '.B-L Загрузка...' : 'disabled') + ' &nbsp;</b><p><s></s></p></button></legend>' +
            B.html();//Загрузка/disabled `Там нельзя click`:
        
          if(!F.find('.bezHtmlCod')[0]){//#cod `html пример` не покажем. Добавить .bezHtmlCod
          t+='<div id="ubrRam" style="--zHidH:4ex;border:1px solid #0000" zhid><button style="right:-2px;" zhidb><p><s></s></p></button>'+
              '<pre id="zCod" style="margin-bottom:0; margin-right: 1.7em" class="ram-n0 all-c5" data-ram-zag="HTML"><div><div></div><code class="v-BG0">'+
                cod.replace(/ dobvhtmlcod=""/g, '').replace(/\</g,'&lt;')+
              '</code></div></pre>'+
            '</div>';
        }
        t+='</fieldset></div></div>';
      }
      //console.debug(t);
      F.append(t)
        .find('legend').eq(0).after('<button zhidb><p><s></s></p></button>');
    });
  },
  P:{//Панель инструментов
    hid: e => {//Добавить для всех button,a hidden
      let b=$(e),//button
        x=b.css('color')=='rgb(255, 0, 0)';//1=Отключим

      $('.flex-w').find('button, a').css('overflow', x?'':'hidden');
        b.css('color', x?'':'red');
    },
    bor: e => {//borde
      let b=$(e),//button
        x=b.css('color')=='rgb(255, 192, 203)';//1=Отключим
          
      $('.flex-w').find('button, a').css('border', x?'':'1px solid pink');
      b.css('color', x?'':'pink');
    },
    zad: e => {//background
      let b=$(e),//button
        x=b.css('color')=='rgb(0, 187, 0)';//1=Отключим
          
      $('.flex-w').find('button, a').css('background', x?'':'#0b05');
      b.css('color', x?'':'#0b0');
    },
    Bstop: e => {//<body class="Bstop"
      let b=$(e),//button
        x=b.css('color')=='rgb(255, 0, 0)';//1=Отключим

      $('main')[(x?'remove':'add')+'Class']('Bstop');
      b.css('color', x?'':'red');
    }
  },
  F:{/* Разное */
    Bs: e => {/* Смена иконки с 1-й на другую `Анимация` */
      let B=$(e),
        s=B.find('b').text().split(' '),
        c=B.attr('class');
      
      B.removeClass(s[c==s[1]?1:3])
        .addClass(s[c==s[1]?3:1]);
    }
  },
  cod:{//Посмотреть HTML код кнопки
    //js.cod.$('#okno');//Вешаем обработчик кнопок, для показаHTML кода. ([nebl] - запрет на обработку)
    //#okno - id где вешаем, undefined - main
    $:b => {//Вешаем обработчик кнопок, для показаHTML кода. ([nebl] - запрет на обработку)
      zONas.O.o = 9;//Отступ от стенок. (Для удобства копирования)
      b = $(b || 'main');
      [ 
        //[
            //$() Куда вешаем,
            //'change keyup paste'//undefined: click //для .on()
        //]
        [b.find('button[class*="B-"], a[class*="B-"]').not('[nebl]')],
        [b.find('div[class*="B-"]').find('input:not([type="range"]), textarea, select')],
        [b.find('div[class*="B-i-R"] input'), 'input']//[type="range"]
      ].forEach(v => {
        js.cod.$c(v[0],v[1])
      });
    },
    /* js.cod.$c(
         b,//$() Куда вешаем
         on = undefined (click)
       );
    */
    $c: (b, on='click') => {//.on 'click, input'
      //console.debug('Вешаем на:', b);
      let ON = on.replace(/[a-z]+/gi, '$&.cod');
      //console.debug(ON);
      b.on(ON, function(e) {
        let O = js.cod, htm, iR, T=$(this),
          tag=$(e.currentTarget)[0].nodeName;//Что нажали
        
        if(tag=='A'){e.preventDefault();}//отменить выполнение действия для <a
        T.off('.cod');//Работает только с this
        //console.debug('OK', tag);
        
        T = T.is('[class*="B-"]')
          ? T
          : T.closest('[class*="B-"]');
        
        if(!T.parent('[class*="zONas-"]')[0]) { //1-е нажатие(добавим HTML окна)
          htm=T[0].outerHTML;
          
          if (T.find('input[type="range"]')[0]) {//Для корекции
            iR=T.find('input').val()
          }
          
          //console.debug('Заменим на:', O.t(htm, ++O.i));
          T.replaceWith(O.t(htm, ++O.i, tag));
          //console.debug('Первое нажатие',T);
          zCod.$();//Запускаем поиск <code
          
          if(T.find('input[type="range"]')[0]){
            $('#codHtm' + O.i).val(iR).parent().find('div i').text(iR);//После замены html
            zBiS.$({ //Запускает обработку (Цифр) input[range]
              id: '#codHtm' + O.i, //Добавить в <input id="rangeT"
              f: e => { //function для обработки
                //e = $(this);
                //console.log('value:', e.val());
              }
            });
          }
          
          T=(T=$('#codHtm' + O.i)).is('[class*="B-"]')
            ? T
            : T.closest('[class*="B-"]');
          T.addClass('B-L');//Загрузка
          
          setTimeout(() => {
            //console.debug('zO'+O.i);
            zONas.$({
              id: 'zO'+O.i,
              ON: on
              /*F: (d, b, N) => { //Своя функция (Сработает при открытии окна)
                //Пути $() до: 
                //d = <div id="svoi" class="zONas-
                //b = <button
                //N = Содержания окна
                zONas.L(d, b, N, htm);//Выводим наш текст HTML. //htm=false; => Остановит вывод окна!
                
              }*/
            });//Вешаем клик окна
            
            setTimeout(() => {
              //console.debug('click i:', '#codHtm' + O.i,$('#codHtm' + O.i));
              $('#codHtm' + O.i).trigger(on+'.zONas')//Только открытие окна
                .focus();//Откроем окно
                
              T.removeClass('B-L');//Уберём загрузку
            }, 301);//301 Для cPri() #cod
          }, 1);
        }
      });
    },
    i:0,//Для поиска после замены
    //t($(this)[0].outerHTML, ++O.i)
    t: (bHtm, i) => {//Для установки всплыв окно
      let B = $('<div>').html(bHtm),
        B2 = $('<div>').html(bHtm);//Для вывода HTML кода
      //console.debug('click');
      $(B).find('button').attr('id','codHtm'+i)//id для button (После replaceWith поможет найти)
      $(B).find('a, input, textarea, select')
        .attr('id','codHtm'+i)//Для первого авто click (setTimeout)
        .addClass('zonasb');//Скрыть/Показать (button)
      //console.debug(B.html());
      $(B2).find('.B-i-R i').text('');
      $(B2).find('button').removeAttr('nebl');//Для #cod
          
      return '<div id="zO'+i+'" class="zONas-BR all-c4">'+
        B.html() +//html button
        '<div><div>'+js.cod.htm($(B2).html())+//Текст..
        '</div></div></div>';
    },
    htm: t => {//Пример HTML кода
      return '<pre id="zCod" class="ram-n0 all-c5" style="margin: .5em .3em .3em .3em"><div><div></div><code class="v-BG0">'+
        t.replace(/\</g,'&lt;')+
        '</code></div></pre>';
    }
  },
    /* proNS(//Проверка namespace
        e,//event
        'cod',//Какой ключь(namespace) ищим
        'input'//$.on('input.cod'); undefined = click
      );//return true = Ненашли ключ, false = нашли!
    */
    proNS: (e, P, c = 'click') => { //Ищим namespace установленный: $.on'click.cod'
      let d = $._data($(e)[0], 'events')?.[c];
    
      console.debug('Нашли запись: if(' + (d && d[0].namespace) + ').', d);
    
      if (d && d[0].namespace) {//Нашли запись
        return !d.filter(v => {//Проверим все
          console.debug('if(' + v['namespace'] + '==' + P + ') =>', v['namespace'] == P);
    
          if (v['namespace'] == P) {//Нашли запись
            return true//Выбераем совпадение
          }
        })[0];//[0] Проверка первого совпадения
      }
      
      return true;//Пусто
    }
};

/*
  ★    Название функции
  *     Описание
  •     Описание2
  ◈ ✂ ✓ ✪
*/
