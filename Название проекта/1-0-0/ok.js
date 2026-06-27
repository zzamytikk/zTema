/*  ✪ https://zam.usite.pro/publ/...
    ✫ Версия 1.0.0
    © Copyright Плюшки для сайтов 2024
*/
var pro = { //Начинаем проект
  //q:{},//временная база
  //T:0,//clearTimeout(T)
  O: {//Настройки
    id: 'body',// id = /#|\./.replace(O.O.id,'');
    ms: 1000,//ms задержка на повторное нажатие
    cfg: {
      maxlength: 30000
    }
  },
  //on: 0,//0 = Функция не работает || 1 = функция работает.            // Открывается/Закрывается
  $:function(x) {//★ Запуск function
    if(!this.on && (this.on = 1)) {//1~> Нету && Добавим +1 (Включаем)
      console.log('Работает', this.on);

      this.on=0;//† Отключаем
    }
  },
  t: {//return html
    $: q => {
      
    }
  },
  f: { //funk pro.db.chit
    db: {
      /* 
        .f.db.chit('ключь');//Читаем
        .f.db.pish('ключь', '');//Пишим
        .f.db.udal('ключь');//Удалим
      */
      k: 'gl_', //Начало уникального ключа
      chit: function(k) { //Читаем
        return localStorage.getItem(this.k + k)
      },
      pish: function(k, v) { //Пишим
        localStorage.setItem(this.k + k, v)
      },
      udal: function(k) { //Удалим
        localStorage.removeItem(this.k + k)
      }
    }
  },
  xo: {//Закрыть/Открыть
    $: () => {//Открыть
      
    },
    X: () => {//Закрыть

    }
  }
};

/* {number}, {string}, {Integer}, {Array}, {Object}, {function}, {type}
  {boolean} - true, false
*/
/** Описание переменной. var param = null;
 * 
 *  @type { [type] } опис
 */

/** 
 * 
 *  @param  { [type] } a описание
 *  @return { number } - описание
 *  @class juh Название пути к функции juh()
 *  @link xz
 * 
 *  @var b = $(e.target) Элемент куда нажали
 */

//Примеры:

//★ Обрезаем дроби без округления!
/** Dr(c, d);
 * 
 *  @param  { number } c - Число для обработки
 *  @param  { number } d - Сколько оставим дробей
 *       ! Предупреждение
 * - - - -
 *
 *  Dr(5.745788876, 3);
 *  @return { number } - 5.745
 *        ||
 *  Dr(5.745788876);
 *  @return { number } - 5
 */

//★ название
/** gl.f.db.chit(k);//Читаем
 *  @return { string } || @return { null }
 *       ! Читаем if(gl.f.db.chit('ключь') != null) = Есть запись
 *       ! Можно сразу .val(gl.f.db.chit('ключь')
 *
 *  gl.f.db.pish(k, v);//Пишим
 *  gl.f.db.udal(k);//Удалим
 * 
 *  @param  { string } k - Уникальный ключь
 *  @param  { string } v - Что запишим
 */

//★ название
/** gl.f.Odr.r(1.234, -2); round @return { number } 1.23    //• В центр
 *  gl.f.Odr.f(1.234, -2); floor @return { number } 1.23    //• В низ
 *  gl.f.Odr.c(1.234, -2); ceil  @return { number } 1.24    //• В верх
 * 
 *  @param  { number }
 *  @return { number }
 */