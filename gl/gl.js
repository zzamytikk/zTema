//Запуск:
var gl = {
  //POD:() => {},//Временная подгрузка скриптов из открытие страниц gl.M.cho. 'Подсказки'
  //gl.$();//Запуск инструментов (bg,resize,menu...)
  $: () => {
    gl.M.$(); //Кнопки перед меню
  },
  //Настройки:
  z: {
    //Меню:
    //Mx:1//1 - Открыто/undefined/0 - Закрыто
  },
  //Кнопки меню горизонтальное:
  M: {
    $: () => { //Запуск
      let O = gl.M;
      
      $('#M').addClass(gl.z.Mx ? 'X' : 0) //Скроем при старте
        .find('>div').append('<div>' + O.X.t() + ' <div></div></div><div class="all-c4">' + //Удалить меню
          O.tema.t() + //Смена фона body
          O.cho.t() + //Подсказки
          O.font.fam.t() + //font-family
          O.font.siz.t() + //font-size
          O.bodyS.t() + //Добавим полосу прокрутки
        '<div>');
      
      //Вешаем click:
      O.tema.t$(); //Смена фона body click + при загрузке установить body class
      O.cho.t$(O); //Подсказки
      O.font.fam.t$(); //font-family
      O.font.siz.t$(); //font-size
      O.bodyS.t$(); //Вешаем click
    },
    font: { //font-size/font-family html
      siz: { //font-size
        $: e => { //$ || string
          let C = typeof e == 'string' ? e : $(e).val();
          
          gl.f.db.pish('font-siz', C);
          
          $('html').css('font-size', C + 'pt')
        },
        t: () => { //кнопки <select
          let s = gl.f.db.chit('font-siz') || 12,
            t = '<div class="B-S"><select id="font-siz">';
          
          [8, 10, 12, 14, 16, 18, 20, 22, 24].forEach(v => {
            t += '<option value="' + v + '"' +
              (v == s ? ' selected' : '') + '>' + v;
          });
          
          return t + '</select></div>'
        },
        t$: () => { //click + localStorage
          let O = gl.M.font.siz,
            l = gl.f.db.chit('font-siz');
          
          if (l) { //Установим font-size в html
            O.$(l);
          }
          
          $('#font-siz').on('change', function() { //click
            O.$(this)
          });
        }
      },
      fam: { //family
        $: e => { //$() || {string}
          let C = typeof e == 'string' ? e : $(e).val();
          
          if (C != 'font-family') {
            gl.f.db.pish('font-fam', C);
            
            $('body').css('font-family', C)
          } else {
            gl.f.db.udal('font-fam'); //Удалим
            $('body').css('font-family', '')
          }
        },
        t: () => { //кнопки <select
          let s = gl.f.db.chit('font-fam'),
            t = '<div class="B-S"><select id="font-fam">' +
            '<option>font-family';
          
          [
            'Istok Web',
            'Comfortaa',
          ].forEach(v => {
            t += '<option value="' + v + '"' +
              (v == s ? ' selected' : '') + '>' + v;
          });
          
          return t + '</select></div>'
        },
        t$: () => { //click + localStorage
          let O = gl.M.font.fam,
            l = gl.f.db.chit('font-fam');
          
          if (l) { //Установим font-family в body
            O.$(l);
          }
          
          $('#font-fam').on('change', function() { //click
            O.$(this)
          });
        }
      }
    },
    bodyS: { //Добавим полосу прокрутки
      $: e => { //V=Вертикально, G=Горизонт
        var b = $('body'),
          v = $(e).val(),
          c = /px$/.test(v);
        //console.debug('val:', v, ', 1 = Цыфры:', c);
        
        if (!c) { //Вертикально/Горизонтально
          b.removeClass('bodyS1 bodyS2');
          
          if (v != 0) {
            gl.f.db.pish('bodyS', v);
            b.addClass('bodyS' + v);
          } else {
            gl.f.db.udal('bodyS'); //Удалим
          }
        }
        
        if (c) { //Пиксели
          if (v != '1700px') {
            gl.f.db.pish('bodyScif', v);
            b.css('--Scroll', v);
          } else {
            gl.f.db.udal('bodyScif'); //Удалим
          }
        }
        
        //console.debug('body class:', b.attr('class'));
        //console.debug('body style:', b.attr('style'));
      },
      t: () => { //кнопки <select
        let c = gl.f.db.chit('bodyScif'),
          s = gl.f.db.chit('bodyS'),
          t = '<div id="bodyS">&nbsp;scroll:<div class="B-S"><select>';
        
        [ //name cif
          '999px',
          '1700px',
          '2500px'
        ].forEach(v => {
          t += '<option value="' + v + '"' +
            (v == c || (!c && /1700px/.test(v)) ? ' selected' : '') + '>' + v
        });
        
        t += '</select><div></div><select>';
        
        a2 = [ //name
          'Выключен',
          'Вертикально',
          'Горизонтально'
        ].forEach((v, i) => {
          t += '<option value="' + i + '"' +
            (i == s ? ' selected' : '') + '>' + v
        });
        
        return t + '</select></div>'
      },
      t$: () => { //СТАРТ Вешаем click
        let b = $('body'),
          c = gl.f.db.chit('bodyScif'),
          s = gl.f.db.chit('bodyS');
        
        if (c && s) { //Пиксели
          b.css('--Scroll', c);
        }
        if (s) {
          b.addClass('bodyS' + s)
        }
        
        $('#bodyS select').on('change', function() {
          gl.M.bodyS.$(this);
        });
      }
    },
    tema: { //Смена фона body
      //e = this <select
      c: e => { //Вырезаем из списка class tema[0-9- и заменим на новый
        let C = $(e).val(),
          s = C.split('/');
          
        $('body').removeClass((i, c) =>//Удалим все tema:
          (c || '').match(new RegExp('tema[0-9-T]+', 'g')));
        
        if(s[0] != '0') {//Кроме: Тема браузера
          gl.f.db.pish('tema', C);//Запишим в базу
        
          $('body').addClass('tema' + s[0]+//Добавим новый
            (s[1] ? ' temaT' : ''));//Тема тёмная
        } else {
          gl.f.db.udal('tema');//Удалим
        }
      },
      a: [ //class, color, name, 1=тёмный фон
        ['0', , 'Тема браузера'],
        ['4-2', '012', 'Тёмно синий', 1],
        [8, 'fff', 'Белый'],
        [9, '000', 'Чёрный', 1]
      ],
      t: function() { //кнопки <select
        let T = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches?0:'',//Тема браузера тёмная
          s = gl.f.db.chit('tema') || T,//Сохранённая тема || Тёмная(Если установлено в браузере) или по умолчанию светлая
          t = '<div class="B-S" mnet><select id="tema">';
        
        this.a.forEach(v => {//value="4-2/1" <= цвет/тёмная
          //console.debug(s+'.indexOf('+v[0]+'):', String(s).indexOf(v[0]) > -1);
          t += '<option value="' + v[0] +//tema[1-9] какой цвет /
            (v[3] ? '/' + v[3] : '') + '" ' +//1 = тёмная тема
            (String(s).indexOf(v[0]) > -1? ' selected' : '') +//Откроем раздел по выбраной теме
            '>' + v[2]//название цвета
        });
        
        return t + '</select></div>'
      },
      t$: () => { //СТАРТ Вешаем click + проверим localStorage
        let s, l = gl.f.db.chit('tema');
        
        if (l) { //Была запись в db
          s = l.split('/');
          
          if(s[0] != '0'){//Кроме: Тема браузера
            $('body').addClass('tema' + s[0] + (s[1] ? ' temaT' : ''));
          }
        }
        
        $('#tema').on('change', function() {
          gl.M.tema.c(this); //Смена фона
        });
      }
    },
    X: { //Убрать меню
      $: () => {
        let B = $('#M > div [x]'), //button
          x = B.is('.B-I-X2'); //Панель открыта
        
        B.removeClass('B-I-' + (x ? 'X2' : 'Ok')) //Меняем вид кнопки
          .addClass('B-I-' + (x ? 'Ok' : 'X2'));
        
        $('#M').toggleClass('X');
      },
      t: () => {
        return '<button class="B-I-X2" onclick="gl.M.X.$()" x><p><s></s><s></s></p></button>'
      }
    }
  },
  //Функции:
  f: {
    //★ Добавим задний фон
    /** gl.f.$({id:'',i:'',f:'',c:''});//Добавим задний фон
     * 
     *  @param  { string/$() } id - куда добавим. (.append(..);)
     *  @param  { string }     i  - id Для удаления заднего фона. zMenu.f.bg('string');
     *  @param  { string }     f  - ()=>{} Сработает при нажатие на задний фон
     *  @param  { array }      c  - css Заднего фона
     *
     * - - - -
      gl.f.bg({//✫ Добавим задний фон
        id: 'string/event',     //* $() куда добавим. (.append(..);)
        i: 'string',            //* id Для удаления заднего фона. gl.f.bg('string');
        f: 'function',          //* ()=>{} Сработает при нажатие на задний фон

        c:{                     //* css Заднего фона
          'z-index': 7, //undefined = 9
          top: 40,
          background: ''//Свой задний фон. //Стандартный: #0006
        }
      });

      gl.f.bg('string');//† Закрыть задний фон
     */
    bg: q => {
      if (q.id) {
        let i = 'bg-' + q.i;
        
        $(q.id).append($('<div id="' + i + '" class="Obg">')
          .css(q.c || {}));
        
        if (typeof q.f == 'function') { //Вешаем click на задний фон
          $('#' + i).click(q.f);
        }
      } else { //† Закрыть задний фон
        $('#bg-' + q).css({ height: 0, opacity: 0 }); //Анимация закрытия
        
        setTimeout(() => {
          $('#bg-' + q).remove(); //Удаляем задний фон
        }, 300);
      }
    },
    //★ Обрезаем дроби без округления!:
    /** gl.f.Dr(c, d);
     * 
     *  @param  { number } c - Число для обработки
     *  @param  { number } d - Сколько оставим дробей
     *
     * - - - -
     *
     *  gl.f.Dr(5.745788876, 3);
     *  @return { number } - 5.745
     *        ||
     *  gl.f.Dr(5.745788876);
     *  @return { number } - 5
     */
    Dr: (c, d) => {
      let x = '1' + (''.padStart(d, '0')); //Добавим нули
      
      return Math.trunc(c * x) / x
    },
    //★ Случайная цифра из заданого диапазона:
    /** gl.f.Rand(c, d);
     * 
     *  @param  { number } c - от 3
     *  @param  { number } d - до 5
     *       ! Включая 3 и 5
     * - - - -
     *
     *  gl.f.Rand(3, 5);
     *  @return { number } - 3 || 4 || 5
     */
    Rand: (i, a) => Math.floor(Math.random() * (a - i + 1)) + i,
    //★ Корректировка округления десятичных дробей и обрезание:
    /** gl.f.Odr.r(1.234, -2); round @return { number } 1.23    //• В центр
     *  gl.f.Odr.f(1.234, -2); floor @return { number } 1.23    //• В низ
     *  gl.f.Odr.c(1.234, -2); ceil  @return { number } 1.24    //• В верх
     * 
     *  @param  { number }
     *  @return { number }
     */
    Odr: {
      r: (n, i) => gl.f.Odr.$('round', n, i), //      return 1.23
      f: (n, i) => gl.f.Odr.$('floor', n, i), //низ   return 1.23
      c: (n, i) => gl.f.Odr.$('ceil', n, i), //верх  return 1.24
      /**
       * @param   {String}  t Тип корректировки.
       * @param   {Number}  n Число.
       * @param   {Integer} i Показатель степени (десятичный логарифм основания корректировки).
       * @return  {Number}    Скорректированное значение.
       */
      $: (t, n, i) => { //Корректировка округления десятичных дробей.
        if (i === 'undefined' || +i === 0) { // Если степень не определена, либо равна нулю...
          return Math[t](n);
        }
        
        n = +n;
        i = +i;
        
        if (isNaN(n) || !(typeof i === 'number' && i % 1 === 0)) { // Если значение не является числом, либо степень не является целым числом...
          return NaN;
        }
        // Сдвиг разрядов
        n = n.toString().split('e');
        n = Math[t](+(n[0] + 'e' + (n[1] ? (+n[1] - i) : -i)))
          // Обратный сдвиг
          .toString().split('e');
        
        return +(n[0] + 'e' + (n[1] ? (p + n[1] + i) : i));
      }
    },
    //★ Время от начала 1 января 1970 года:
    /** gl.f.Ot(s);
     * 
     *  @param  { number } s - 1 = Секунды, undefined/0 = Миллисекунды
     *
     * - - - -
     *
     *  gl.f.Ot() - Миллисекунды
     *  @return { number } - 1356788654467
     *        ||
     *  gl.f.Ot(1) - Секунды
     *  @return { number } - 1356788654
     */
    Ot: s => {
      let m = new Date().getTime(); //Миллисекунды
      
      return s ?
        Math.floor(m / 1000) //Переведём миллисекунды в секунды
        :
        m
    },
    //★ Запись на устройство(База данных)
    /** gl.f.db.chit(k);//Читаем
     *  @return { string } || @return { null }
     *       ! Читаем if(gl.f.db.chit('ключь') != null) = Есть запись
     *       ! Можно сразу .val(gl.f.db.chit('ключь')
     *
     *  gl.f.db.pish(k, v);//Пишим
     *  gl.f.db.udal(k);//Удалим
     * 
     *  @param  {string} k - Уникальный ключь
     *  @param  {string} v - Что запишим
     */
    db: {
      k: 'gl_', //Начало уникального ключа
      chit: function(k) { //Читаем (if(.chit('ключь') != null) = Нету записи. Можно сразу .val(gl.f.db.chit('ключь')))
        return localStorage.getItem(this.k + k)
      },
      pish: function(k, v) { //Пишим
        localStorage.setItem(this.k + k, v)
      },
      udal: function(k) { //Удалим
        localStorage.removeItem(this.k + k)
      }
    },
    //★ Скопировать в буфер обмена:
    /** gl.f.buf.$(t, b);
     * 
     *  @param  { string } t - Текст для буфера обмена
     *  @param  { $() }    b - Путь до кнопки, на которую установим disabled na 9сек || undefined
     *
     */
    buf: {
      $: function(t, b) { //Скопировать в буфер обмена. return true/false = ошибка
        let n = navigator.clipboard,
          inf = this.inf;
        
        if (n) { //Буфер обмена доступен
          let x;
          
          if (b && b[0]) { //button установим disabled na 9сек
            let x = b[0].tagName == 'BUTTON'; //TRUE = button
            
            x ? b.attr('disabled', '') : b.css('opacity', '.6');
            
            setTimeout(() => {
              x ? b.removeAttr('disabled') : b.css('opacity', '');
            }, 9000);
          }
          
          n.writeText(t).then(() => {
            //console.log('Текст успешно скопирован в буфер обмена');
            inf(t, 1);
          }, er => {
            inf(t);
            console.error('Произошла ошибка при копировании текста: ', er);
          });
        } else { //API буфера обмена не доступно
          inf(t);
        }
      },
      /** gl.f.buf.inf(t, b);//Добавим оповищение
       * 
       *  @param  { string } t - Текст для буфера обмена
       *  @param  { number } x - 1 = скопировали, undefined = нет
       *
       */
      inf: (t, x = 0) => {
        Oinf.$({ //✓ Покажем сообщение 'Хорошо':
          id: 'glBuf',
          x: x,
          s: 3, //низ лево
          xS: 4, //сек
          t: (x ? 'Д' : 'Не д') + 'обавлено в буфер: <i>' + t.slice(0, 35).replace(new RegExp('<', 'g'), '&lt;')
            .replace(new RegExp('&', 'g'), '&amp;') + '</i>' //Для отображения кода  спец символов
        });
      }
    },
    //★ Отслеживаем изменения размера браузер окна:
    /** gl.f.oko(f);
     * 
     *  @param  { function } f
     *
     * - - - -
     *
     *  gl.f.oko(m=>{//Отслеживаем изменения размера браузер окна
     *    console.debug(
     *      'Отслеживаем изменения размера браузер окна!',
     *      '\n width:', m.contentRect.width,     //width
     *      '\n height:', m.contentRect.height,   //height
     *      m
     *    );
     *  });
     */
    oko: f => {
      let M = window.ResizeObserver; //Отслеживаем изменения размера окна
      
      if (typeof M !== 'undefined') {
        new M(m => { //1~> Сработало! Наблюдение за обьектом
            f(m[0]);
            //m[0]//even
            //console.debug(m[0]);
          })
          .observe($('html')[0], {}); //Передаем элемент и настройки в наблюдатель
      }
    },
    //★ Проверка namespace: ".cod, установленный $.on('click.cod')":
    /** gl.f.proNS(e, k, d);//Проверка namespace ".cod, установленный $.on:'click.cod'"
     * 
     *  @param  { event || $() } e - Для проверки(Путь до элемента)
     *  @param  { string }       k - Какой ключь(namespace) ищим
     *  @param  { string }       d - Событие $.on('input'); || undefined = click
     * 
     * - - - -
     *
        $('.zScG').each((i, e) => {
          if(gl.f.proNS(e, 'scrolGor', 'mouseup')){//.on не установлен
            $(e).on('mouseup.scrolGor', e => {
              let b = $(e.currentTarget);//Где установлин .on('click')
            });
          }
        });
     *  @return { boolean } - true = Не нашли ключ, false = нашли!
     */
//!!!!! Быстрее: if (!$(e).attr('onzhid')) {$(e).attr('onzhid', 1);//.on установлен} //Повесили click
    proNS: (e, P, c = 'click') => {
      let d = $._data($(e)[0], 'events')?.[c];
      
      //console.debug('Нашли запись: if(' + (d && d[0].namespace) + ').', d);
      
      if (d && d[0].namespace) { //Нашли запись
        return !d.filter(v => { //Проверим все
          //console.debug('if(' + v['namespace'] + '==' + P + ') =>', v['namespace'] == P);
          
          if (v['namespace'] == P) { //Нашли запись
            return true //Выбераем совпадение
          }
        })[0]; //[0] Проверка первого совпадения
      }
      
      return true; //Пусто
    }
  }
};

//Всплыв меню подсказки (★ Вешаем 'Окно настройки') = Только 1 запуск скрипта
//return <div #glPodskaz .zONas-TR + .MspisZ
gl.M.cho = {
  //return {html} - Кнопка + Всплыв окно настроек
  t: () => {
    //.zONasNet = Убрали авто закрытие
    //.zONasO   = Открываем
    return `
      <div id="glPodskaz" class="zONas-TR zONasNet">
        <div><button class="B-Ig-vVg"><p></p></button></div>
        <div><div></div></div>
      </div>
      
      <div class="MspisZ">
        <button class="B-Ig-X B-R-Io all-c0"><p></p></button>
        <div>Меню</div>
      </div>`;
  },
  //Только 1 запуск скрипта. Список Меню `Окно` вешаем обработчик / Вешаем click 'Назад к меню/Закрыть окно'
  t$: O => {
    O.cho.O.$(); //★ Вешаем 'Окно настройки'
    
    $('.MspisZ button').click(function() { //Вешаем click 'Назад к меню/Закрыть окно'
      let b = $('#glPodskaz > div:eq(0) .B-Ig-vVg'); //Кнопка Открыть/Закрыть окно
      
      if ($(this).is('.B-Ig-zad')) { //Откроем окно. Нажали 'Вернёмся к меню'
        O.cho.O.M.zad.n.x = 1; //Жмём вернутся к меню
        b.click();
      }
      
      b.click(); //x=0 Просто закроем, x=1 Закроем откроем
    });
  }
};

//Окно:  Вешаем 'Окно настройки'  (Открыть/Закрыть)
//Открыли/Закрыли Раздел
gl.M.cho.O = {
  /*
    gl.M.cho.O.put[1]=='П'//Проверим что localhost
    put: '/Подсказки || https://zam.usite.pro/db/Primery',//Путь до матерьялов.
  */
  //.js Подгружаем с сайт `Путь до главного скрипта с настройками, Для script, Содержание Загруженого`
  U: {
    //gl:'/Подсказки/minF/gl.js',//Путь до главного скрипта с настройками
    js: [], //Для script
    //html:''//Содержание Загруженого
  },
  //★ Вешаем 'Окно настройки' gl.M.cho.O.$();
  $: function() { //Только 1 запуск скрипта.
    let O = this;
    
    $.ajax({ //Быстрая проверка на существования файла
      url: '/Подсказки/',
      type: 'HEAD',
      success: () => {
        O.put = O.M.H //Откуда подгружаем
          ?
          'https://zam.usite.pro/db/Primery' :
          '/Подсказки' //localhost
      },
      error: () => {
        O.put = 'https://zam.usite.pro/db/Primery'
      }
    });
    
    zONas.L2 = (d, b, N, t, M) => { //Сократим
      if (!M) { //Открываем раздел
        O.BA(0, gl.M.cho.O.M.R); //Анимация кнопки Закрыть окно/Назад к меню
      }
      gl.M.cho.O.oz();//Координаты кнопки: Закрыть окно/Назад к меню и Название раздела
      
      zONas.L(d, b, N, t); //Выводим наш текст HTML. //htm=false;//Остановит вывод окна!

      if (M) { //Открываем меню
        //console.debug('Scroll для назад к меню O.M.zad.n.s', O.M.zad.n.s);
        if (O.M.zad.n.s === undefined) { //Нe нажали назад к меню
          let s = $('#glPodskaz > div').eq(-1);
          //console.debug('Открыли меню(В самый низ):', s.height());
          
          s.scrollTop(s.height()); //Открыли меню scroll в самый низ
        } else { //Нажали назад к меню
          //console.debug('O.M.zad.n.x', O.M.zad.n);
          O.M.zad.$(); //Нажали Вернёмся к меню
        }
      }
      
      gl.M.cho.O.U = { //Очистка
        gl: '',
        js: [],
        html: ''
      }; //console.debug(U, gl.M.cho.O.U);
      
      b.removeClass('B-L').removeAttr('disabled');
    };
    
    zONas.$({ //Вешаем обработчик click 
      id: 'glPodskaz', //Путь до <div id="svoi2" class="zONas-
      F: (d, b, N) => { //Своя функция 'Сработает при открытии окна'
        //d = $() //<div id="svoi2" class="zONas-
        //b = $() //<button
        //N = $() //Путь до содержания окна
        b.addClass('B-L').attr('disabled', '');
        $('#M > div > :eq(-1)').css('overflow', 'unset'); //Для видимости окна
        
        setTimeout(() => { //Для показа индикатора загрузки
          let U = gl.M.cho.O.U;
          
          if (U.gl) { //zam.usite.pro
            let put = gl.M.cho.O.put; // '/Подсказки || https://zam.usite.pro/db/Primery',//Путь до матерьялов.
            
            //console.debug(U.gl);
            $.getScript(U.gl, () => { //Всё `html, и js ссылки для доп подгоузки`
              u = gl.M.cho.O.U; //Обновим после загрузки
              //console.debug(typeof u.js, u.js[0]); 
              if (typeof u.js == 'object' && u.js[0] !== undefined) { //Доп подгоузка js:
                u.js.forEach((v, k) => {
                  
                  //console.debug(put+'|'+v);
                  $.getScript(put + v, () => { //script
                    //console.debug('k['+k+'] == ['+(u.js.length - 1)+'](u.js.length - 1)'); 
                    if (k == (u.js.length - 1)) { //Послед загрузка
                      zONas.L2(d, b, N, gl.M.cho.O.U.html); //Выводим html
                    }
                  }).fail(() => {
                    zONas.L2(d, b, N, '<font color=red>Ошибка подгрузки внутрених файлов из gl.js: $.getScript("<u>' + (put + v) + '</u>");</font><br>При подгоузке скриптов из главного файла <u>' + U.gl + '</u>');
                  });
                });
              } else { //Выводим html без подгруза скриптов
                zONas.L2(d, b, N, gl.M.cho.O.U.html);
              }
            }).fail(() => {
              zONas.L2(d, b, N, '<font colo/r=red>Ошибка подгрузки главного файла gl.js(С содержанием и подгружаемыми файлами .css и .js):<br>$.getScript("<u>' + gl.M.cho.O.U.gl + '</u>");</font>');
            });
          } else { //Откроем список Меню
            zONas.L2(d, b, N, O.M.t(), 1);
            O.M.C(); //Вешаем click По списку меню + Запуск Скрыть/Показать + Поиск
          }
        }, 300);
      },
      Fx: d => { //При закрытии окна вернём overflow
        let n = gl.M.cho.O.M.zad.n;
        
        //Нажали не вернутся к меню && есть запись
        if (n.x == 2) { //Открыли раздел
          O.R.O();//Открыли раздел
          
          n.x = 0; //console.debug('x=2; Очистим на x='+n.x+'; (Для Будущей очистки или Нажатия вернёмся к меню)', n);
        } else if (n.x != 1 && n.s >= 0) { //Очистка вернутся к меню
          //console.debug('if (n.x['+(n.x)+'] != 1 && n.s['+n.s+'] >= 0) => '+ (n.x!=1 && n.s >= 0));
          gl.M.cho.O.M.zad.n = {}; //Полный путь обязательно
          //console.debug('Полная очистка n={}; "Вернёмся к меню" Когда не нажимали назад к меню', n)
        }
        
        $('#M > div > :eq(-1)').removeAttr('style'); //Походу left/right окно
        O.BA(1); //Показать кнопку закрыть(На будущее открытие окна)
        $('#glPodskaz > :eq(-1) > * > *').remove(); //Очистка содержимого окна + снятие .on('click'
        
        delete gl.POD; //Временная подгрузка скриптов из открытие страниц gl.M.cho. 'Подсказки'
        
        if ($('.MspisZ .B-Ig-zad')[0]) { //Закрываем окно из разделов
          O.R.X();//Закрыли раздел
        }
      },
      oF: d => {//Своя функция (Сработает после изменения размера браузер окна)
        //d = $() //<div id="svoi2" class="zONas-

        gl.M.cho.O.oz('brauz');//Координаты кнопки: Закрыть окно/Назад к меню и Название раздела
      }
    });
  },
  R: {//Открыли/Закрыли раздел'Не меню!'
    O: () => {//Открываем
      gl.f.bg({ //✫ Добавим задний фон
        id: 'body', //* $() куда добавим. (.append(..);)
        i: 'glNastOko', //* id Для удаления заднего фона. gl.f.bg('glNastOko');
        f: () => { //* Сработает при нажатие на задний фон
          $('#glPodskaz > div:first-child .B-Ig-vVg').click(); //Закроем окно
        }
      });
      
      $('#glPodskaz').addClass('glPodskazR');//Для css сообщили что открыли раздел
    },
    X: () => {//Закрываем
      gl.f.bg('glNastOko'); //Уберём затемнение фона
      
      $('#glPodskaz').removeClass('glPodskazR');//Для css сообщили что закрыли раздел
    }
  },
  oz: (i) => {//Координаты кнопки: Закрыть окно/Назад к меню и Название раздела
    setTimeout(() => {
    /* console.debug(i,
      '\n\tДо окна:', $('#glPodskaz > :last-child').offset().left,
      '\n\tРазмер окна:', $('#glPodskaz > :last-child').outerWidth(),
      '\n\tРазмер кнопки:', $('.MspisZ button').outerWidth(),
      '\n\tВсего:', Math.round($('#glPodskaz > :last-child').offset().left + $('#glPodskaz > :last-child').outerWidth() - $('.MspisZ button').outerWidth()));
    */
    $('.MspisZ').css('left', Math.round($('#glPodskaz > :last-child').offset().left + $('#glPodskaz > :last-child').outerWidth() - $('.MspisZ button').outerWidth()));
    }, 401);
  },
  //★ Анимация кнопки Закрыть окно/Назад к меню и Название раздела
  /** gl.M.cho.O.BA(x, R);
   * 
   *  @param { number } x - x=1; Показать кнопку закрыть. x=0; Вернутся к меню
   *  @param { string } R - Название раздела || undefined = Меню
   */
  BA: (x = 0, R) => {
    let b = $('.MspisZ'),
      a = ['B-Ig-zad all-c2', 'B-Ig-X all-c0'];
    
    b.css({ right: '-100%', opacity: 0 }); //Спрячим
    //console.debug('removeClass(a['+(+!x)+'] '+a[+!x]+').addClass(a['+x+'] '+a[x]+')');
    setTimeout(() => { //Заменим кнопку и вернём
      b.find('div').html(R //Название раздела
        ?
        R + (gl.M.cho.O.put[1] == 'П' // /Подсказки
          ?
          '<div><i>localhost</i></div>' : '') :
        'Меню');
      b.removeAttr('style') //Удалим b.css('right', '-100%')
        .find('button').removeClass(a[+!x]).addClass(a[x]);
    }, 400);
  }
};
//МЕНЮ: Открываем разделы по /url.js | Ишим раздел в db и берём урл | Вернуть меню как было
gl.M.cho.O.M = {
  /* Подгруз:
    a:[],  //Список разделов/подразделов
    por:{},//Последние открытые разделы
    stc:{},//Поиск
    
    R: 'Название открытого раздела (Меню1)', //Для отображения открытого раздела под окном
    C: () => {},//Вешаем click По списку меню.
    
    T: '',//Запись сформированного меню
    t: () => {},//return Список меню button + Последние открытые разделы/Поиск
  */
  //H: 1,//1-Откроем только www.zam.usite.pro, undefined-автоОпределение
  //★ Открываем разделы по /primeriHTML/button.js'HTML' в окно настроек
  /** gl.M.cho.O.M.u(n, K);
   * 
   *  @param  { string } n - Название раздела
   *  @param  { string } k - Путь до категории (Помагает при одинаковых названий разделов)
   * - - - -
   *  gl.M.cho.O.M.u('button', 'primeriHTML');
   */
  u: (n, k) => {
    let O = gl.M.cho.O,
      s = O.M.srcA(n, k); //Ишим раздел в списке меню return [url, Название Категории]
    //console.debug('Ишим раздел в списке меню:', s);
    if (!s) { //Не нашли раздел!
      Oinf.$({ //✗ Покажем сообщение 'Ошибка':
        id: 'glErrchoMu',
        x: 0,
        t: 'Ошибка! не удалось найти раздел <i>' + n + '</i>'
      });
      //
      return [n, k]; //Для отслеживания ошибки в gl.M.cho.O.M.por.on
    }
    O.M.zad.z(); //Запишим. Вернуть меню как было до нажатия button
    O.M.R = n; //Название нажатой button
    O.M.por.$(n, k, s[1]); //Добавим в db (Последние открытые разделы)
    
    O.M.zad.n.x = 2; //console.debug('Говорим не очищать x='+O.M.zad.n.x+'; (Для вернутся к меню)', O.M.zad.n);
    $('#glPodskaz > div:first-child .B-Ig-vVg').click(); //Закроем
    //Запишим для открытия
    //console.debug('O.put:', O.put, '\nO.M.srcA(' + n + '):', O.M.srcA(n), '\n\t' + O.put + '/' + O.M.srcA(n) + '/gl.js');
    O.U.gl = O.put + '/' +
      s[0] + //урл категория/раздел
      '/gl.js';
    //console.debug(O.U.gl);//return;
    $('#glPodskaz > div:first-child .B-Ig-vVg').click(); //Откроем окно
    
    setTimeout(() => { //Вернём на 0 при открытии раздела:
      $('#glPodskaz > :last-child').animate({ scrollTop: 0 }, 300);
    }, 400);
  },
  //★ Ишим раздел в db и берём урл
  /** gl.M.cho.O.M.srcA(n, K);
   * 
   *  @param  { string } n - Название раздела
   *  @param  { string } K - Путь до категории (Помагает при одинаковых названий разделов)
   * - - - -
   *  @return { array[ string ] } - [url, Название Категории]
   */
  srcA: function(n, K) {
    let k, v, u;
    
    for (k of this.a) { //Поиск по списку меню
      //console.debug('if(K && K['+K+'] == ['+k[2]+']k[2]) =>', K && K == k[2]);
      if (K && K == k[2]) { //Пришол путь на категорию
        for (v of k[1]) { //Поиск по раздела в категории 
          //console.debug('if ('+(typeof v[0])+': v[0]['+v[0]+'] == ['+n+']n :'+(typeof n)+') =>', v[0] == n);
          if (v[0] == n) { //Совпало
            return [k[2] + '/' + v[1], k[0]]; //url категория/раздел
          }
        }
      } else if (k[0] == n) { //Совпало. раздел без категории
        return [k[1]];
      }
    }
  },
  //Вернуть меню как было до нажатия button
  zad: {
    n: {
      //x: 0,//1=Нажали вернутся в раздел, 2=Говорим что не очисщать (Для вернутся к меню)
      //s:0,//scroll где остановились
      r: [], //Названия открытых разделов
      //src: ''//введённый поиск
    },
    $: function() { //Вернём
      let b = $('.Mspis2');
      
      this.n.r.forEach(v => { //Откроем меню2(Которые были открыты)
        b.find('> [zhidb]:contains(' + v + ')').parent().attr('zhid', '0')
      });
      
      if (this.n.s) { //Вернём scroll как было до открытия раздела
        $('#glPodskaz > div:eq(-1)').scrollTop(this.n.s)
      }
      
      if(this.n.src){//Запускаем поиск
        $('.MspisS .B-i-Tx input').val(this.n.src);//введённый поиск
        setTimeout(() => {
          $('.zScGb .B-I-src').click();//Окроем поиск
        }, 1); 
      }
      
      this.n = {};
      //console.debug('Вернулись к меню + Очистка n={};', this.n);
    },
    z: function() { //Запишим
      this.n = {
        s: $('#glPodskaz > div:eq(-1)').scrollTop(),
        r: [],
        src: $('.MspisS .B-i-Tx input').val()//введённый поиск
      };
      
      $('.Mspis2[zhid="0"]').each((i, e) => { //Названия открытых разделов
        this.n.r.push($(e).find('[zhidb]').text())
      });
      //console.debug('Названия открытых разделов и scroll:',this.n);
    }
  }
};
//gl.M.cho.O.M.H = 1; // 1-Откроем только www.zam.usite.pro, undefined-автоОпределение

//Вешаем click По списку меню. !!! Сработает каждый раз при открытии окна
//gl.M.cho.O.M.R: 'Название открытого раздела (Меню1)', //Для отображения открытого раздела под окном
gl.M.cho.O.M.C = function() {
  let O = this;
  
  zHid.$(); //Запуск Скрыть/Показать
  O.src.c(); //Вешаем обработчик Поиск
  zScG.$(); //Прокрутка разного материала по горизонтали
  O.por.on(); //.on(click); Последние открытые разделы
  
  //Список меню, Последнии открытые разделы .MspisSpo
  $('.MspisM, .MspisSM').on('click.mSpis', e => { //Вешаем click По списку меню
    let M, u, k, n, b = $(e.target); //Что нажали
    //console.debug('click по .Mspis');return;
    if (b.is('.MspisMzvz')) {
      O.por.x.$(b); //Список исключения. Название раздела который не добавим в `Последние открытые разделы`
    } else if (/[PSB]|BUTTON/.test(b[0].tagName)) {
      b = !b.is('.B-Ix-kr') //Когда нажали на потомкам <p,s,b>
        ?
        b.closest('.B-Ix-kr') //До button
        :
        b;
      
      if (b[0]) { //Нажали на раздел .B-Ix-kr
        //console.debug('Раздел:', b.find('b:eq(0)').text(), '\nПуть до Категории:', b.parent('.Mspis2').attr('zkatp'));
        O.u(b.find('b:eq(0)').text(), b.parent('.Mspis2').attr('zkatp')); //Откроем раздел
      }
    }
  });
  
  $('.MspisS .zScG').width($('.MspisS .zScG').width()); //Для избежания изменения размеров окна при поиске
};

//► ► ► Список разделов:
gl.M.cho.O.M.a = [
  /* [0: 'Название раздела', 1: 'url', 2: 'теги через зяпятую || описание(для поиска)']
       ||
     [
       0: 'Примеры',//Заголовок категории
       1: [//Список разделов:
         0: 'Кнопки',//Название раздела
         1: 'button',//url (название раздела)
         2: 'html, css'//теги через зяпятую || описание(для поиска)
       ],
       2: 'primeryHTML'//url(Название папки категории) Её добавим в .Mspis > [zhidb="primeryHTML"]. Для поиска разделов с одинаковыми названиями
       3: 'HTML'//Для всех разделов (Доп инфа для поиска)
       
     ]
     • Пример готового url = primery/button
     • В поиске задействованы: Название раздела + теги/описание + Для категорий(Доп инфа для поиска)
  */
  ['Примеры для сайта HTML', [
    ['Кнопки', 'button', 'button, a, input, select, рамки, иконки, icon, свои, google'],
    ['Подсветка кода', 'zCod', 'css, js, zCod.$'],
    ['Линия разграничения', 'hr', 'css, &lt;hr>'],
    ['Рамки', 'ramki', 'css, .ram-'],
    ['Информационное окно', 'okno_inf_menu', 'css, js, jquery, окно, Инфо-Подсказка, Информационное окно'],
    ['Всплывающая подсказка css +', 'vPodskazCssP', 'окно, tooltip'],
    ['display: flex', 'flex', 'css'],
    ['fieldset', 'fieldset', 'css, рамка с заголовком'],
    ['Подчеркнуть текст', 'podUtxt', 'css, &lt;u>, выделить'],
    ['Спрятать/Показать', 'zHid', 'css, js, jquery, скрыть, hidden, zHid'],
    ['Всплывающие "Окно настройки"', 'OknoNastr', 'css, js, jquery'],
    ['table', 'table', 'Таблица, css, .tab-'],
    
  ], 'primeriHTML', 'HTML'],
  
  ['Полезное CSS', [
    ['Работа с текстом', 'text', 'px,pt,rem,em,%,vh,vw,vmin,vmax,ch,ex,font,first, writing, white, word, letter, line, inline, text-decoration, Единицы измерения, сокращение текста, Обрезаем, Троеточие, Обрезать по строчкам'],
    ['Показать/Скрыть/Выделить/Видемость', 'none', 'none, visibility, visible, hidden, user-select, pointer-events'],
    ['Цвета .all-c.. --all-..', 'cvet-cssAll', 'root'],
    ['Цветавой набор', 'cvetaVse', 'color'],
    ['Цвета', 'color', 'Список, color'],
    ['Анимации', 'animacija', 'animation, transition, transform, clip'],
    ['Закомментировать', 'kom', 'kom'],
    ['Рамка/Линии', 'border', 'border'],
    ['Тень текста/контейнера', 'shadow', 'box-shadow, text-shadow'],
    ['Задний фон', 'background', 'background, Линии, Круги, Овал, Размытие, Затухание'],
    ['Полезное', 'poleznoe', 'Уровни, специфичности, Селекторы, Поиск, по, атрибуту'],
    ['@media', 'media'],
    ['Фильтры', 'filter', 'filter, backdrop-filter, blur'],
    ['::Псевдоэлемент/:Псевдокласс', 'psevdo', '::first-line, ::first-letter, ::before, ::after, content, attr(), counter, :nth-of-type(), :first-of-type, :last-of-type, :nth-child(), :first-child, :last-child, :not(), :is(), :has(), :empty'],
    
  ], 'poleznoeCSS', 'CSS'],
  
  ['Полезное JavaScript/js', [
    ['Полезное', 'poleznoe', 'boolean, % деление, number, true, false, slice(), assign(), Клонирование, Загрузка документа, Обрезать текст'],
    ['Поиск/Замена/Сортировка', 'poisk', 'test(), indexOf(), search(), sort(), filter(), lastIndexOf(), new RegExp(), replace(), exec(), match(), for(), forEach()'],
    ['if/switch', 'if-switch'],
    ['Закомментировать', 'kom', 'Спецзнаки, Разделения, kom, Описание функции, @param'],
    ['Всплывающие окно', 'vsplyv-okno', 'confirm(), prompt(), Окно приглашения'],
    ['Трафарет создания функции', 'startFunc', 'function, пример'],
    ['Найти элемент/Добавить в элемент', 'NDelement', 'document, querySelector, querySelectorAll, textContent'],
    ['array', 'array', 'keys(), values(), split(), join(), reverse(), toReversed(), unshift(), push(), splice(), toSpliced(), pop(), concat(), new Array(), indexOf(), Поиск, isArray(), Проверка, Удалить, Перевернуть, Добавить значений в начало/конец массива']
    
  ], 'poleznoeJS', 'JavaScript js'],
  
  ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа, Выборка элементов, Родитель, Потомки'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter(), '+
      'outerHTML, innerHTML, внутри, родителя'],
    ['Обработчик событий', 'on-off', 'on(), event, js, off(), trigger(), mousedown, touchstart, mouseup, touchend, Dblclick, mouseleave, mouseout, mouseleave, mousemove, toucmove, mousewheel, click, change, input, focus, blur, paste, Contextmenu, scroll, '+
      'resize, keyup, keypress, preventDefault(), stopPropagation(), type, target, currentTarget, which, pageX, События мыши, Клик вне элемента, Координаты, курсора, пальца, Память, cache, Отследить нажатие кнопки(клавиатуры), tagName, id, className, nodeName, '+
      'outerHTML, innerHTML, внутри, родителя, index()'],
    
  ], 'poleznoeJQ', 'JQuery'],
  
  ['Готовые скрипты JS/JQuery', [
    ['Обрезаем дроби без округления', 'drob-obrez-bezOkrug', 'Math.trunc(), padStart()'],
    ['Свайпнуть для закрытия окна', 'svajpZakroem', 'on(), mouseup, mousedown, mousemove, touchstart, touchmove, touchend'],
    ['Добавим задний фон', 'bg', 'css, bg'],
    ['Проверка namespace', 'namespacePro', '.on(), proNS'],
    ['Изменения размера браузер окна', 'oko', 'Отслеживаем, window.ResizeObserver, observe(), окно'],
    ['Скопировать в буфер обмена', 'bufer', 'navigator.clipboard, writeText()'],
    ['Случайная цифра из заданого диапазона', 'numRandom', ' Math, floor(), round(), ceil(), random'],
    ['Время от начала 1 января 1970 года', 'timeOt1970', 'Date(), getTime()'],
    ['Запись на устройство(База данных)', 'dbZapisNa', 'db, localStorage, getItem(), setItem(), removeItem()'],
    
  ], 'scriptJSok', 'JS JQuery'],
  
  ['Полезное для сайта', [
    ['Проверить скорость js', 'skorostJS', 'js1 и js2 сравнить по скорости'],
    ['Список HTML `тегов`', 'spisHTML', '&lt;p>, &lt;div>,&lt;html>,..'],
    ['Список HTML `спец символов`', 'htmlSpecSim', '&amp;copy;,&amp;#8250;,&amp;quot;,..'],
    
  ], 'poleznoe'],
  
  //Без категории:
  ['Заметки', '1/zametki', 'планы'],
  ['Презентация', '1/prezentacija', 'html, css, js'],
  ['Сжатие', '1/sokratitCSSjs', 'js, css, minify, Уменьшить, код']
  
 //Список для тестирования: (!! Необходи сдделать подгруз доп разделов при прокрутке в низ)
 /*
 //(
  ,['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'],
    ['Полезное JQuery', [
    ['Список функций', 'spisok', 'Описание'],
    ['Class', 'class', 'add(), has(), remove(), Добавить, Поиск, Удалить, toggle()'],
    ['Анимации', 'animate', 'Анимация CSS-свойств, fadeIn(), fadeOut(), fadeToggle(), show(), hide(), toggle(), slideUp(), slideDown(), animate'],
    ['Загрузка GET/POST', 'load-ajax', '$.ajax(), .load(), $.getScript(), JSON.parse(), JSON.stringify(), $.parseJSON()'],
    ['Размеры/Координаты', 'width', 'width(), innerWidth(), outerWidth(), offset(), position(), scroll(Top/Left), getBoundingClientRect()'],
    ['Выбрать/Поиск', 'find-is-has', 'find(), children(), is(), has(), not(), eq()'],
    ['Поиск/Сортировка', 'poisk', 'each(), filter() $.inArray()'],
    ['Удалить', 'remove', 'remove()'],
    ['селекторы', 'selector', ':contains'],
    ['Атрибуты', 'attr', 'attr(), removeAttr(), Добавить, Удалить'],
    ['input/textarea', 'input', 'focus(), :checked, is(), attr(), pop()'],
    ['Таймер', 'taymer', 'delay(), queue(), dequeue(), clearQueue()'],
    ['event', 'event', 'currentTarget, target, nodeName, tagName, id, index, text'],
    ['Подгрузка изображения', 'img', 'img, src, load'],
    ['Полезное', 'poleznoe', '$.fn, Добавить function в jQuery, Загрузка документа'],
    ['Манипуляции с DOM(html)', 'html-dom', 'html(), text(), val(), append(), prepend(), after(), before(), wrap(), wrapAll(), wrapInner(), unwrap(), clone(), remove(), detach(), empty(), replaceWith(), replaceAll(), insertBefore(), insertAfter()'],
    ['Обработчик событий', 'on-off', 'on(), off(), trigger()'],
    
  ], 'poleznoeJQ', 'JQuery'] 
  //)
 */
];
//returnHTML: Создаёмс/Сортируем(а-я) список меню/меню2 button + Добавим последние открытые разделы/Поиск
//html Кнопка назад
gl.M.cho.O.M.t = function() {
  let i = 0,
    t = this.T; //Запись сформированного меню
  
  if (!t) { //1 запуск и Сохраним меню(Для будущих открытий окна)
    //B(Название раздела, тэги, Цвет •(Кружка. для отмены вноса в 'последний нажатый раздел'))
    let C, B = (n, t, p) => '<button class="B-Ix-kr"><p' + (p ? ' class="all-c3"' : '') + '><s></s></p><b>' + n + '</b><b>' +(t || '-') + '</b></button>';
    t = '<div class="Mspis"><div class="MspisSM"></div><div class="MspisM">', /* .MspisSM результаты поиска */
      c = gl.f.db.chit(gl.M.cho.O.M.por.x.k); //Читаем запись(Список исключений). для `Последние открытые разделы`
    
    this.a.forEach((v, k) => { //Создаёмс/Сортируем(а-я) меню
      if (typeof v[1] != 'object') { //Меню1
        i++;
        t += '<div class="MspisMzvz"></div>' + B(v[0], //Название раздела
          v[2], //теги
          c != null && new RegExp('\\|' + v[0] + '\\||^' + v[0] + '$|^' + v[0] + '\\||\\|' + v[0] + '$').test(c) //для: Послед открытый раздел
        );
      } else { //Меню2
        C = new Intl.Collator();
        v[1] = v[1].sort((a, b) => C.compare(a[0], b[0])); //Сортируем по алфавиту
        //v[2] => Путь к Категории
        t += '<div class="Mspis2" zkatp="' + v[2] + '" zhid="1">' +
          '<button zhidb><p><s></s></p><b>' + v[0] + '</b></button>';
        
        v[1].forEach(v => {
          i++;
          t += B(v[0], v[2]);
        });
        
        t += '</div>'
      }
    });
    
    t += `</div>
            
            <div class="MspisS">
            
              <!-- scroll КОНТЕЙНЕРЫ: -->
              <div class="zScG all-c4">
                <div class="zScGr"><div>
                <!-- 1ый: -->
                <div zscg>
                  <!-- Последнии открытые: -->
                  <div class="MspisSv"><b>Последнии открытые разделы:</b></div>
                  <div class="MspisSpo">${this.por.t()}</div>
                </div>
                
                <!-- 2ой: -->
                <div>
                  <!-- Поиск: -->
                  <div class="MspisSv"><b>Всего:</b> <b>${i}</b><span><i>${i}</i> :Поиск</span></div>
                  <div class="B-i-Tx">
                    <input type="text" placeholder="Поиск" required="">
                    <div>
                      <button class="B-Ix-X" onclick="$(this).parent().prev().val('').focus()"><p><s></s><s></s></p></button>
                      <button class="B-I-src" disabled><p><s></s></p></button>
                    </div>
                  </div>
                  <div>...</div><!-- Время поиска 0.07мс -->
                  <!-- - -->
                </div>
                
                </div></div>
                <!-- КОНЕЦ 1-2! -->
                <div class="zScGb">
                  <button class="B-Ig-ist" disabled><p></p></button>
                  <button class="B-I-src"><p><s></s></p></button>
                  <div class="B-Ix-kr"><p><s></s></p></div>
                </div>
              </div>
              <!-- КОНЕЦ!!! scroll КОНТЕЙНЕРЫ! -->

            </div>`;
  }
  
  return t
};

//Последние открытые разделы:
gl.M.cho.O.M.por = {
  L: 3, //Всего записей 3 = 4записиl
  //gl.M.cho.O.M.por.$('Название раздела', 'Путь до категории', 'Название категории');
  $: function(n, K, N) { //Добавим в db `Последние открытые разделы`
    let s = gl.f.db.chit(this.x.k); //Читаем запись(Список исключений. Только для разделов без категорий). для `Последние открытые разделы`
    
    /*console.debug(//this.x.k//Ключь db Где список исключений (имя|имя2)
      '--- Название раздела n:', n.replace(new RegExp(',', 'g'), '&#44;'),
      '\n\tНазвание категории N:', N,
      '\n\tdb Список исключений:', gl.f.db.chit(this.x.k),
      '\n\tНе в чёрном списке:', '!/^(' + (s!=null?s:'') + ')$/.test('+n+'):',
         !new RegExp('^(' + (s!=null?s:'') + ')$').test(n)
    );*/
    
    if (n && (n = n.replace(new RegExp(',', 'g'), '&#44;')) && //Замена , (Убераем конфликт db.split(','))
      !new RegExp('^(' + (s != null ? s : '') + //Читаем запись(Список исключений. Только для разделов без категорий). для `Последние открытые разделы`
        ')$').test(n)) { //Не в списке исключений
      
      let L = 0,
        F = n + (K ? '~!~' + K + '~!~' + N : ''), //Название раздела || (Название раздела~!~Путь до категории~!~Название категории)
        db = this.ud(F); //Удалим запись из db(Без Записи) || null(db Пустой)
      
      if (db) { //не null
        L = db.split(',').length; //Узнаем сколько записей
      }
      
      //console.debug('L['+L+'] > ['+this.L+']this.L =>', L > this.L);
      if (L > this.L) {
        //console.debug('L:', L, ', Удалим последнию:', db.replace(new RegExp('(.+),.+'), '$1'));
        db = db.replace(new RegExp('(.+),.+'), '$1');
      }
      //console.debug('=== Сохраним db:', db? F + ',' + db : F);
      
      gl.f.db.pish('Mpor', db ? F + ',' + db : F); //Добавим новую запись и Пишим
    }
  },
  //★ Удалим запись из db(Без Записи)
  /** gl.M.cho.O.M.por.ud(n);//Удалим запись из db(Без Записи) || null(db Пустой)
   * 
   *  @param  { string } n - Название раздела || (Название раздела~!~Путь до категории~!~Название категории)
   * - - - -
   *  @return { string } - db(Запись) || null(db Пустой)
   */
  ud: F => { //Удаляем в por.$ || por.on
    let db = gl.f.db.chit('Mpor'); //Читаем с db
    
    if (db != null) { //Удалим одинаковую запись
      //console.debug('Удалим:', F);
      //console.debug('db было:', db);
      let f = F.replace(new RegExp('([\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[\\]\\\\\])', 'g'), '\\$1'); //Экранируем спец символы: [ ] \ ^ $ . | ? * + ( )
      //console.debug(db != db.replace(new RegExp('(?<=,)' + f + ',|^' + f + '$|^' + f + ',|,' + f + '$'), '')? 'Удалим одинаковую запись (x = 1)':undefined);
      //console.debug('db стало:', db.replace(new RegExp('(?<=,)' + f + ',|^' + f + '$|^' + f + ',|,' + f + '$'), ''));
      db = db.replace(new RegExp('(?<=,)' + f + ',|^' + f + '$|^' + f + ',|,' + f + '$'), '');
    }
    //console.debug('Читаем db:', db, 'Количество записей L:', db.split(',').length);
    
    return db
  },
  //gl.M.cho.O.M.por.on();//.on(click); Последние открытые разделы
  on: () => { //.on`click`; на открытие раздела
    $('#glPodskaz .MspisSpo').on('click.mSpisZscg', e => {
      let a, b = $(e.target),
        M = gl.M.cho.O.M;
      //console.debug('por.on');return;
      if (b[0].tagName[0] == 'B') { //<button || b>
        b = b[0].tagName != 'BUTTON' //Когда нажали на потомкам <p,s,b>
          ?
          b.closest('button') : b; //До button : Уже button
        
        /*console.debug('Название раздела:', b.find('b:eq(0)').text(),
          '\n\tПуть до категории:', b.attr('zporkatp'),
          '\n\tНазвание категории:', b.attr('zporkat')
        );*/
        if (a = M.u(b.find('b:eq(0)').text(), b.attr('zporkatp'))) { //Открываем раздел (Название раздела, Путь до категории)
          //console.debug('[Название раздела, Путь до категории]:', a);
          //.ud( Название раздела || (Название раздела~!~Путь до категории~!~Название категории) )
          db = M.por.ud(a[0] + (a[1] ? '~!~' + a[1] + '~!~' + b.attr('zporkat') : '')); //Удалим запись из db(Без Записи) || null(db Пустой)
          
          if (db) {
            gl.f.db.pish('Mpor', db); //Перезапишим
            
            $(b).parent().animate({ height: 0, opacity: 0 }, 600, e => { //Удалим Кнопку
              $(e).remove()
            });
          }
        }
      }
    });
  },
  t: function() { //Покажем список
    let t = '', //a = [Название раздела, Путь к категории, Название категории]
      B = a => '<div><button class="B-"' + (a[1] ? ' zporkatp="' + a[1] + '" zporkat="' + a[2] + '"' : '') + '><b>' + a[0] + '</b>' + (a[2] ? '<b>' + a[2] + '</b>' : '') + '</button></div>',
      db = gl.f.db.chit('Mpor');
    
    (db //Есть запись
      ?
      db.split(',') //В array
      :
      []).forEach(v => {
      t += B(v.split('~!~')) //[Название раздела, Путь к категории, Название категории]
    });
    
    return t || '<i>Список пуст!</i>'
  },
  //Список исключения(Добавить/Убрать). Название раздела которое не добавим в `Последние открытые разделы`
  x: { //!!!Только для разделов без категорий
    k: 'MspisMzvz', //Ключь db Где список исключений (имя|имя2)
    $: function(b) {
      b = b.next();
      
      let t, k = this.k,
        x, db = gl.f.db,
        p = b.find('p'), //•
        n = b.find('b:eq(0)').text(), //Название раздела
        C = db.chit(k); //Читаем запись (имя1|имя2)
      //console.debug('--- "Список исключений":', n);
      
      if (p.is('.all-c3')) { //• Уберём из списка:
        x = 1;
        if (C != null) { //Есть запись!(Есть список в db):
          //console.debug('Уберём из списка!');
          db.pish(k, C.replace(new RegExp('(?<=\\|)' + n + '\\||^' + n + '$|^' + n + '\\||\\|' + n + '$'), ''));
        }
        if (db.chit(k) == '') {
          //console.debug('Удалим всю запись!');
          db.udal(k);
        }
      } else { //• Добавим:
        if (C != null) { //Есть запись!(Есть список в db):
          //console.debug('Есть запись! Ищим совпадение в списке:', !new RegExp('\\|' + n + '\\||^' + n + '$|^' + n + '\\||\\|' + n + '$').test(C));
          if (!new RegExp('\\|' + n + '\\||^' + n + '$|^' + n + '\\||\\|' + n + '$').test(C)) { //Нету совпадения
            db.pish(k, C + '|' + n);
          }
        } else { //• Добавим!(Нету списка в db):
          db.pish(k, n);
        }
        //console.debug('Добавим! db:', C);
      }
      //console.debug('=== db:', db.chit(k));
      p.toggleClass('all-c3');
      
      Oinf.$({ //✓ Покажем сообщение 'Хорошо':
        id: k,
        x: 3, //Оповещение
        t: 'Раздел <i>' + n + '</i> ' + (x ? '' : 'не ') + 'будет добавляться в `<b>Последние открытые разделы</b>`'
      });
    }
  }
};
//Поиск / Вешаем обработчик Поиск
gl.M.cho.O.M.src = {
  //T:0,//setTimeout
  $: function() { //Сортируем по поиску input,paste
    clearTimeout(gl.M.cho.O.M.src.T);
    let i, I, v, b = $(this), //input/button
      s = gl.f.Ot(), //мс от начала
      O = gl.M.cho.O.M.src; /* Вместо this */
    
    //console.debug('- - - Старт:', b[0].tagName, ', v.length:', b.val().length);
    if (b[0].tagName != 'INPUT') { //Нажали button
      b = b.parent().prev(); //Выбераем input
    }
    
    v = b.val().replace(/ {2,}/g, ' ') //Убераем двайные пробелы и больше
      .replace(new RegExp(' {2,}|^ ', 'g'), ''); //Начальный пробел
    b.val(v); //Убрав двайные пробелы заменим input
    
    I = $('.MspisSv:eq(1) b:eq(1)').text(); //Всего записей
    i = $('.MspisSv:eq(1) i').text(); //После поиска записей
    
    //console.debug('if(v.length['+v.length+'] == 0 && I['+I+']==['+i+']i) => '+(v.length == 0 && I==i));
    if ((v.length == 0 && I == i) || v == ' ' || v === '') { //Остановим! (Пусто && нету скрытых) || Только пробелы
      O.X(1); //Вернём меню
      $('.MspisSM').html('');//Очистим найденое поиском в прошлый раз.
      return
    }
    O.X(); //Покажем поиск
    
    O.T = setTimeout(() => { //Покажем/Скроем Категории:
      v = v.replace(new RegExp('([\\^\\$\\.\\|\\?\\*\\+\\(\\)\\[\\]\\\\\])', 'g'), '\\$1')//Экранируем спец символы
        .replace(new RegExp('&', 'gi'), '(&amp;|&(?![#a-z0-9]{2,5};))')//Для выделения &amp;lt;
        .replace(new RegExp('<', 'g'), '&lt;')
        .replace(/ $/,'')//Пробел в конце(Для split(' '))
        .split(' ');//Для тчательного поиска разабьём на слова
      //console.debug('v.split(\' \'):', v);
      //console.debug('v.join(\'|\'):', v.join('|'));
      
      let T = '', t = '', r,
        //B(Название раздела, тэги:
        B = (n, t) => '<button class="B-Ix-kr"><p><s></s></p><b>' + n + '</b><b>' + (t || '-') + '</b></button>',
        //Rp = t => t.replace(new RegExp('\\&[lg]t;', 'g'), v => v[1] == 'l' ? '<' : '>'),
          //.replace(new RegExp('&amp;', 'g'), '&'),
        R = new RegExp(v.join('|'), 'ig'),//Для подсветки
        R2 = t => //Rp(t)//&lt; в <
          t.replace(R, '<i>$&</i>'),//Установим подсветку
          //.replace(new RegExp('(?<=<i>)\\&', 'g'), '&amp;')
          //.replace(new RegExp('<(?!\\/?i)', 'g'), '&lt;'),//Вернём в подсветке < в &lt;
        //★ Поиск совпадений:
        /** p(N, T, D);//Поиск совпадений:
        *  
        *  @param  { string } N - Название матерьяла
        *  @param  { string } T - теги/описание
        *  @param  { string } D - Для всех разделов (Доп инфа для поиска)
        *       ! * - - - - 
        *  @return { array } - ['Название матерьяла', 'теги/описание'] с подсветкой по поиску
        */ 
        p = (N, T='', D='') => {
          //ntd = Rp(N+' '+T+' '+D);
          //v = ['слова', 'для', 'поиска'];
          for(let i=0; i < v.length; i++) {//Перебераем все слова на совпадения
            /*console.debug('i:', i, ', v:', v,
              '\n\tv['+i+']: new RegExp('+v[i]+').test('+(N+' '+T+' '+D)+') =>',
              new RegExp(v[i]).test(N+' '+T+' '+D)
            );*/
              
            if(new RegExp(v[i], 'i').test(N+' '+T+' '+D)) {//У одного из списка слов из запросов есть совпадение:
              //console.debug('i['+i+'] == ['+(v.length - 1)+']v.length =>', i == v.length - 1);
                
              if(i == v.length - 1) {//Если все слова совпали, выводим его:
                /*console.debug('v:', v,
                  '\n\tПоиск('+v.length+'):', String(R),
                  '\n\tЗаголовок до:', N,
                  '\n\tЗаголовок:', R2(N),
                  '\n\tТеги до:', T,
                  '\n\tТеги:', R2(T)
                ); */
                return [R2(N), R2(T)];
              }
            } else {
              //console.debug('break;');
              break;//Остановим!!! одно из слов совпало
            }
          }
        };
      
      i = 0; //Обнулить
      gl.M.cho.O.M.a.forEach(V => {
        //console.debug('V:', V[0]);
        
        if (typeof V[1] == 'object') { //Категории(список)
          V[1].forEach(K => { //Идём по списку в категории
            //console.debug(K[2], ': ', K[2] || '');
            
            if (r = p(K[0], K[2], V[3])){//Название матерьяла, Теги, Для всех разделов (Доп инфа для поиска)
              t += B(r[0], r[1]);
              ++i;
            }
          });
          
          if (t) {
            T += '<div class="Mspis2" zkatp="' + V[2] + '">' +
              '<div zhidb><b>' + V[0] + ':</b></div>' +
              t + '</div>';
          }
          t = '';
        } else if(r = p(V[0], V[2])){//Название матерьяла, Теги
          T += B(r[0], r[1]);
          ++i;
        }
      });
      //console.debug(A.length, A);
      
      $('.MspisSv:eq(1) i').css('color', i > 0 ?
        i < I ? '#0b0' : '' //Сколько нашли : меню без изменений
        : 'red').html(i); //Нашли
      
      $('.MspisS .B-i-Tx').removeClass('B-L'); //Уберём загрузку
      
      /*console.debug('gl.f.Ot()['+gl.f.Ot()+'] - ['+s+']s - 300 =>', gl.f.Ot() - s - 300,
        '\n\t', (gl.f.Ot() - s - 300) / 1000); */
      $('.MspisS .B-i-Tx + div').text(((gl.f.Ot() - s - 200) / 1000) + 'мс'); //Скорость сортировки в мс
      $('.MspisSM').html(T);//Выводим найденое
      //console.debug('= = = Конец');
    }, 200); //Задержка для анимации
  },
  X: x => { //x=1 Вернём меню, x=undefined покажем поиск
    if (x) { //Вернём меню
      $('.MspisSM').removeClass('MspisSx'); //Вернём меню
      $('.MspisSv:eq(1) i').removeAttr('style')//.text($('.MspisSv:eq(1) b:eq(1)').text());
      $('.MspisS .B-i-Tx').removeClass('B-L') //Загрузка
        .next('div').text('...');
    } else { //Покажем поиск  .MspisSM.MspisSx
      $('.MspisS .B-i-Tx').addClass('B-L'); //Загрузка
      $('.MspisSM').addClass('MspisSx'); //Уберём список меню
    }
  },
  //Tc:0,//setTimeout
  //gl.M.cho.O.M.src.c();//Вешаем обработчик Поиск
  c: () => {
    let O = gl.M.cho.O.M.src; //Сортируем по поиску
    
    $('.MspisS .B-i-Tx input').on('input.mSpisSrc focus paste', O.$);
    $('.MspisS .B-i-Tx .B-I-src').on('click', O.$);
    
    //Следим за scroll Горизонт меню:
    $('.MspisS .zScGr > div').scroll(e => {
      clearTimeout(O.Tc);
      O.Tc = setTimeout(() => {
        if ($('.MspisS .zScGb > .B-I-src[disabled]')[0]) { //Открыли поиск
          //O.X()//!!!Не добавляем при открытии поиска сразу сработает спрятать
          $('.MspisS .B-i-Tx input').trigger('input')
        } else { //Открыли меню
          O.X(1);
        }
      }, 200);
    })
  }
};


var zTab = { //zTab установлено в shablo gl.js
  //★ zTab.buf.$();//Установим на все <table class="zTabC". click по <td> = Скопировать
  buf: {
    $: q => { //Запуск
      $('.zTabC').each((i, e) => {
        if (gl.f.proNS(e, 'zTabC', 'click')) { //.on не установлен
          $(e).on('click.zTabC', e => {
            let b = $(e.target).closest('td:not([tdno])');
            
            if (b[0]) {
              //console.debug(b.text());
              gl.f.buf.$(b.text(), b); //Скопировать в буфер обмена
            }
          });
        }
      });
    }
  }
};
