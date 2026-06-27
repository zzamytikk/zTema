gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  <style>/* Корекция под окно: */
  #glPodskaz .ram-n1-1 > div {/* Презентация */
    color: var(--Ct)
  }
  </style>
  
  <!-- Object.keys(), Object.values(): -->
  <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <u>Object.keys(), Object.values()</u>:
      <ul class="ram-V0 all-c8">
        <li><b>Object.keys()</b> метод возвращает массив имен свойств заданного объекта, являющихся перечислимыми и имеющих строковые ключи.</li>
        <li><b>Object.values()</b> метод возвращает массив значений свойств заданного объекта, представленных в виде перечисляемых строковых ключей.</li>
      </ul>
    </div></div>
    
    <!-- Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          Object.keys({ foo: "bar", baz: 42 }); //['foo', 'baz']
          Object.values({ foo: "bar", baz: 42 })//['bar', 42]
          // || Или: - - - - - - -
          Object.keys(['foo', 'baz']);  //{0: 0, 1: 1}
          Object.values(['foo', 'baz']);//{0:'foo', 1:'baz'}
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  </div>
  
  <!-- Array.isArray() -->
  <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>Array.isArray()</b> метод определяет, является ли переданное значение Array.
    </div></div>
    
    <!-- Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          // Все следующие вызовы вернут true:
          Array.isArray([]);
          Array.isArray([1]);
          Array.isArray(new Array());
          // Малоизвестный факт: Array.prototype сам является массивом:
          Array.isArray(Array.prototype);
          
          // Все следующие вызовы вернут false:
          Array.isArray();
          Array.isArray({});
          Array.isArray(null);
          Array.isArray(undefined);
          Array.isArray(17);
          Array.isArray("Array");
          Array.isArray(true);
          Array.isArray(false);
          Array.isArray({ __proto__: Array.prototype });
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  </div>
  
  <!-- .indexOf() -->
  <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.indexOf()</b> возвращает первый индекс, по которому можно найти данный элемент в массиве, или -1, если он отсутствует.
    </div></div>
    
    <!-- Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          ['x','ra'].indexOf('r');//return 1 (index)
          ['x','ra'].indexOf('r');//return -1
          
          let ok = [1,2,3,4,5].indexOf(1) > -1 ? 1 : 0;//+Быстрее! на 20%
          let ok = Object.keys([1,2,3,4,5])[1];
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  </div>
  
  <!-- .split(), .join(), new Array() -->
  <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <u>.split(), .join(), new Array()</u>:
      <ul class="ram-V0 all-c8">
        <li><b>.split()</b> метод возвращает массив имен свойств заданного объекта, являющихся перечислимыми и имеющих строковые ключи.</li>
        <li><b>.join()</b> создает и возвращает новую строку, объединяя все элементы этого массива, разделенные запятыми или указанным разделителем. Если массив содержит только один элемент, то этот элемент будет возвращен без использования разделителя.</li>
        <li><b>new Array()</b> создает Array объекты.</li>
      </ul>
    </div></div>
    
    <!-- Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          //В отсутствии переменной t !Вызывает ошибку
                    
          //в array:
          t = 'a,b,v-1';
          (t || '').split(',');// ['a','b','v-1']
               t.split(',', 2);//['a','b']
               t.split(/[,-]/);//["a", "b", "v", "1"]
          
          //в string:
          t = [1, 2, 3];
          t.join();   //1,2,3
          t.join('-');//1-2-3
          
          new Array(1000)//Создали 1000 array [undefined, undefined,..]
            .join('text')//Делаем длинный текст (texttext...)
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  </div>

  <!-- .reverse(), .toReversed() -->
  <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <u>.reverse(), .toReversed()</u>:
      <ul class="ram-V0 all-c8">
        <li><b>.reverse()</b> переворачивает массив на месте и возвращает ссылку на тот же массив, при этом первый элемент массива становится последним, а последний элемент массива — первым. Другими словами, порядок элементов в массиве будет изменен в направлении, противоположном ранее указанному.</li>
        <li><b>.toReversed()</b> является аналогом метода reverse(). Он возвращает новый массив с элементами в обратном порядке.</li>
      </ul>
    </div></div>
    
    <!-- Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          let a = [1, 2, 3];
          a.reverse();
          
          console.log(myArray) //[3, 2, 1]
          
          
          const newA = a.toReversed();//Вернёт новый [], не меняя a
          console.log(newA); //[3, 2, 1]
          console.log(a);    //[1, 2, 3]
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  </div>
  
  <!-- .push(), .unshift() -->
  <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <u>.push(), .unshift()</u>:
      <ul class="ram-V0 all-c8">
        <li><b>.push()</b> добавляет указанные элементы в конец массива и возвращает новую длину массива.</li>
        <li><b>.unshift()</b> добавляет указанные элементы в начало массива и возвращает новую длину массива.</li>
      </ul>
    </div></div>
    
    <!-- Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          let a = [1, 2, 3];
          
          a.push('kon');   //[1,2,3,'kon'] return 4 (length)
          a.push({ 1: 7 });//[1,2,3,{1:7}] return 4 (length)
          
          a.unshift('nac');//['nac',1,2,3] return 4 (length)
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  </div>
  
  <!-- .splice(), .toSpliced(), .pop() -->
  <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <u>.splice(), .toSpliced(), .pop()</u>:
      <ul class="ram-V0 all-c8">
        <li><b>.splice()</b> изменяет содержимое массива, удаляя или заменяя существующие элементы и/или добавляя новые элементы.</li>
        <li><b>.toSpliced()</b> является копирующей версией метода splice(). Он возвращает новый массив, в котором некоторые элементы удалены и/или заменены по заданному индексу.</li>
        <li><b>.pop()</b> добавляет указанные элементы в начало массива и возвращает новую длину массива.</li>
      </ul>
    </div></div>
    
    <!-- Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          let a = ["Я", "изучаю", "JavaScript"];
          
          a.splice(1, 1);//["Я", "JavaScript"] //Начиная с позиции 1, удалить 1 элемент
          a.splice(1, 2);//[ "изучаю", "JavaScript" ] //! данный метод будет возвращать удаленные значения.
          console.error(a);//['Я']
          
          //Удаляем по value:
          a.splice(a.indexOf('изучаю'), 1);//indexOf нашли index по value
          
          const arr = [1, , 3, 4, , 6];
          //Создаёт новый обьект:
          console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]
          
          a.pop()//удаляет последний элемент ["Я", "JavaScript"]
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  </div>
  
  <!-- .concat() -->
  <div style="--zHidH:5ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>.concat()</b> используется для объединения двух или более массивов. Он не изменяет существующие массивы, а возвращает новый массив.
    </div></div>
    
    <!-- Без просмотра: -->
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="0">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;script>
          let x=[];
          
          x = x.concat([4, 5, 6]);//[ 4, 5, 6 ]
          
          let a = [1, 2, 3];
          a = a.concat([4, 5, 6],'7');//[1,2,3,4,5,6,"7"]
          
          let a1= '123 ';
          a1 = a1.concat('T', [4, 5, 6],'7');//123 T4,5,67
          
          // || Или: - - - - - - -
          
          const students1 = ['Иванов', 'Сидоров'];
          const students2 = ['Петров', 'Курочкина'];
          
          const all2 = [...students1, ...students2];// =  ['Иванов', 'Сидоров', 'Петров', 'Курочкина']
          &lt;/script>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
  </div>
  

  <script>
    zCod.$();//Подсветка HTML кода
    zHid.$();//Скрыть/Показать
    //zPrez.razC.$(); //Вешаем click 'Цветовые варианты'
    //zTab.buf.$();//Установим на все <table class="zTabC". click по <td>(Скопировать)
    
    gl.POD = {//Временная подгоузка скриптов из открытие страниц gl.cho. 'Подсказки'
      $: () => {
      
      }
    };
  </script>
`};