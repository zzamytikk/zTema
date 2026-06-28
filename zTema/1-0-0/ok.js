/*  ✪ https://zam.usite.pro/publ/...
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/

//★ Тема сайта Авто/День/Ночь:
var zTema = {
//Обработка click
  /**
  *  @param  { object } e - event
  */
  $: function(e) {
    let b = $(e.currentTarget),//button
      d = b.parent();//div
      
    if (d.is('.zTemaX')) {//Открываем меню:
      this.H(d);//Вешаем клик вне элемента
      d.removeClass('zTemaX');//Открыли
    } else if(b.is('.zTemaO')) {//Нажали на старый button
      this.X(d);//Закроем + удалим click вне элемента
    } else {//Выбрали новый режим: (Закрываем меню)
      let i = b.index();//index: 0 - Всё, 1 - день, 2 - ночь
      
      //console.debug('index нажатой:', i);
      this.f.db.pish('zTema', i);//Сохраним выбор
      this.r.$(d, i);//Установим в button и :root Авто/День/Ночь
      
      this.X(d);//Закроем + удалим click вне элемента
    }
  },
//Установим в :root Авто/День/Ночь:
  r: {//0 - Всё, 1 - день, 2 - ночь
    a: ['light dark', 'only light', 'only dark'],
    /** this.r.$(d, i);//Установим в button и :root Авто/День/Ночь
     *  @param  { $('div[ztema]') } d - Внутри все button
     *  @param  { number }          i - id режима
     */
    $: function(d, i) {
      i = function(i){return i>=0 && i<3?i:0}(+i);//0 || 1 || 2
      
      $('.zTemaO', d).removeClass('zTemaO');//Удалим предыдущие нажатие
      $('.B-Ig-DN'+i, d).addClass('zTemaO');//Выберем нажаттый button
      
      $(':root').css('color-scheme', this.a[i]);
      d.attr('ztema', i);//Выберем нажатый режим
    }
  },
//zTema.on();//★ Вешаем click 'Темaа сайта Авто/День/Ночь':
  on: function() {
    let i = this.f.db.chit('zTema');//Проверим сохранения
    
    if (i) { //Была запись в db
      this.r.$($('[ztema]'), i);//Установим в button и :root Авто/День/Ночь
    }
    
    $('[ztema]').on('click', 'button', e => {
      zTema.$(e);
    });
  },
//Вешаем клик вне элемента:
  /**
  *  @param  { $('div[ztema]') } d - Внутри все button
  */
  H: d => {
    $(document).on('click.zTema', e => { //Вешаем клик вне элемента
      //если клик был не по нашему блоку
      if (!d.has(e.target)[0]) { //Клик вне элемента
        //console.debug('click. Вне элемента!');//† Закрываем
        zTema.X(d);//Закроем + удалим click вне элемента
      }
    });
  },
//Закроем + удалим click вне элемента:
  /**
  *  @param  { $('div[ztema]') } d - Внутри все button
  */
  X: d => {
    $(document).off('.zTema');//Уберём вне элемента
    d.addClass('zTemaX');//Закроем меню
  },
  f: { //funk zTema.db.chit
    //Сохранить в db браузера:
    db: {
      /* 
        .f.db.chit('ключь');//Читаем
        .f.db.pish('ключь', '');//Пишим
        .f.db.udal('ключь');//Удалим
      */
      k: 'root_', //Начало уникального ключа
      chit: function(k) { //Читаем
        return localStorage.getItem(this.k + k)
      },
      pish: function(k, v) { //Пишим
        localStorage.setItem(this.k + k, v)
      }
    }
  }
};
