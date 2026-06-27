gl.M.cho.O.U = {
  //js:['/poleznoeCSS/cvetaVse/cveta.js']//Подгруз функций
  //!!! В HTML = "\,`" необхадимо экранировать(\\,\`):
  html: `
  <!-- <link href="https://zam.usite.pro/db/Primery/1/minF/m.css" rel="stylesheet"> -->
  
  <!-- animation: -->
  <div style="--zHidH:7ex;" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>animation</b> позволяет анимировать элементы HTML без использования JavaScript!.
    </div></div>
    
    <div class="zHid2" style="--zHidH:8ex;" zhid="1">
      <div class="ram-V0 ram-V2 gI-inf all-c7"><div><button zhidb="2"><p><s></s></p></button>
        <u>Подробно</u>:
        <ul class="ram-V0 all-c8">
          <ol><b>animation-name: imja;</b> название.
            <br><b>animation-duration: 3s;</b> продолжительность.
            <br><b>animation-delay: 5s;</b> задержка.
            <br><b>animation-fill-mode: forwards;</b> поведение.
          </ol>
          <li><b>forwards</b> Остоновит на 100%.</li>
          <li><b>infinite</b> Анимация проигрывается бесконечно.</li>
          <li><b>linear</b> Без колебаний в скорости.</li>
          <li><b>ease</b> Функция по умолчанию, анимация начинается медленно, разгоняется быстро и замедляется в конце.</li>
          <li><b>ease-in</b> Анимация начинается медленно, а затем плавно ускоряется в конце.</li>
          <li><b>ease-out</b> Анимация начинается быстро и плавно замедляется в конце.</li>
          <li><b>ease-in-out</b> Анимация медленно начинается и медленно заканчивается.</li>
          <li><b>cubic-bezier(x1, y1, x2, y2)</b> cubic-bezier(.18,.89,.32,1.28);</li>
          <li><b>step-start</b> .</li>
          <li><b>step-end</b> .</li>
          <li><b>steps(количество шагов,положение шага)</b> .</li>
          <li><b>initial</b> Устанавливает значение свойства в значение по умолчанию.</li>
        </ul>
      </div></div>
    </div>

    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Движение в право</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          #preTest {
            position:relative;
            width: min-content;
            padding: 9px;
            color: #999;
            --b-col: #fff5;/* цвет линии */
            background: linear-gradient(-45deg, #0000 30%, var(--b-col) 50%, #0000 80%);
            background-repeat: no-repeat;
            background-size: 15% 100%;
            background-position: -20% 0;
            animation: bg-dviz-r linear 2s infinite;
          }
          
          @keyframes bg-dviz-r {
            to {
              background-position: 120% 0;
            }
          }
          &lt;/style>
            
          &lt;div id="preTest">Предосмотр&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>

    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Зебра</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          #preTest::after {
            content: attr(data-shadow);
            position: absolute;
            top: .06em; left: .06em;
            z-index: -1;
            text-shadow: none;
            background-image:
              linear-gradient(
                45deg,
                transparent 45%,
                hsla(48,20%,90%,1) 45%,
                hsla(48,20%,90%,1) 55%,
                transparent 0
              );
            background-size: .05em .05em;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        
            animation: shad-anim 15s linear infinite;/* ! хз */
          }
          
          @keyframes shad-anim {
            0% {background-position: 0 0}
            0% {background-position: 100% -100%}
          }
          &lt;/style>
            
          &lt;h1 id="preTest" data-shadow="Заголовок">&lt;/h1>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
  <hr class="hr-1"></div>
  
  <!-- transition: -->
  <div style="--zHidH:7ex;" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>transition</b> выполняет поиск сопоставления регулярного выражения в указанной строке. Возвращает массив с результатами или null.
    </div></div>
    
    <div class="zHid2" style="--zHidH:8ex;" zhid="1">
      <div class="ram-V0 ram-V2 gI-inf all-c7"><div><button zhidb="2"><p><s></s></p></button>
        <u>Подробно</u>:
        <ul class="ram-V0 all-c8">
          <ol><b>transition-property</b> какие свойства анимировать.
            <br><b>transition-duration</b> длительность перехода.
            <br><b>transition-timing-function</b> скорость перехода.
            <br><b>transition-delay</b> задержка перед началом перехода.
          </ol>
          <li><b>ease</b> по умолчанию — замедление в начале и конце.</li>
          <li><b>linear</b> постоянная скорость.</li>
          <li><b>ease-in</b> замедление в конце.</li>
          <li><b>ease-out</b> замедление в начале.</li>
          <li><b>ease-in-out</b> замедление в начале и конце.</li>
          <li><b>step-start и step-end</b> моментальный скачок в начале/конце.</li>
          <li><b>steps() и cubic-bezier()</b> для более точной настройки.</li>
          <li><b>steps(число, расположение)</b>
            <br>&nbsp; • число: Целое число, определяющее количество шагов.
            <br>&nbsp; • расположение: start или end, определяющее, где начинается анимация (в начале первого шага или в конце)..
          </li>
          <li><b>cubic-bezier(x1, y1, x2, y2)</b> Позволяет задать собственную кривую анимации с помощью четырех координат, определяющих форму кривой Безье.</li>
        </ul>
      </div></div>
    </div>
    
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Примеры</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;style>
          * {
            transition: .2s;
      
            transition: color 1s ease-in 0s,
              background-color .5s step-end 0s,
              letter-spacing 2s ease-out 2s;
      
            transition: opacity 1s ease-in 0s,
              all .5s step-end 0s;
          }
          &lt;/style>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Телек Помехи надписи</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;style>
          #telekPomexi {
            display: inline-block;
          }
          #telekPomexi:hover {
            animation: telekPomexi 0.3s linear;
          }
          @keyframes telekPomexi {
            0% {
              transform: skewX(0deg);
              color: initial;
            }
            25% {
              transform: skewX(80deg);
              color: initial;
            }
            75% {
              transform: skewX(-20deg);
            }
            90% {
              transform: skewX(0deg);
            }
            100% {
              transform: skewX(0deg);
            }
          }
          &lt;/style>
            
          &lt;div id="telekPomexi">Спасибо, буду аккуратнее&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
    
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Свечение кнопки</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          #svetKnopki {
            position: relative;
            margin:10px;
            width:150px;
            height:70px;
            background:#f00;
            border-radius:5px
          }
          #svetKnopki::after {z-index: -1;
            content: "";
            position: absolute;
            left:0;
            width: 100%;
            height:100%;
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            filter: blur(5px);
            animation: B-load-img 20s linear;
          }
          @keyframes B-load-img {
            0% { background-size: 0; }
            50% { background-size: 400%; }
            100% { background-size: 0; }
          }
          &lt;/style>
            
          &lt;div id="svetKnopki">&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
    
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>clip (Маски)</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
              &lt;style>
              /* + Можно скрывать содержимое и за пределами clip: rect(top, right ,left , bottom);
                  position: clip или fixed;
              */
              #clipOn {
                position: absolute;/* Для clip или fixed */
                margin: 9px;
                clip: rect(0px, 100px, 100px, 0px);
                transition: 1s; /* Для плавной анимации clip: rect(0px, 0px, 100px, 0px); */
              }
              &lt;/style>
              
              &lt;button id="clipOn">Предосмотр&lt;/button>
              
              &lt;script>
                $('#clipOn').on('click', e => {
                  console.debug('click');
                  let b = $(e.currentTarget);
                  
                  b.attr('style')
                    ? b.removeAttr('style')
                    : b.css({clip: 'rect(0px, 0px, 100px, 0px)'})
                });
              &lt;/script>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
  <hr class="hr-1"></div>
  
  <!-- transform: -->
  <div style="--zHidH:7ex" zhid="1">
    <div class="ram-V0 ram-V2 gI-inf all-c1"><div><button zhidb><p><s></s></p></button>
      <b>transform</b> позволяет вращать, масштабировать, наклонять или перемещать элемент. Оно изменяет координатное пространство модели визуального форматирования.
    </div></div>
    
    <div class="zHid2" style="--zHidH:8ex;" zhid="1">
      <div class="ram-V0 ram-V2 gI-inf all-c7"><div><button zhidb="2"><p><s></s></p></button>
        <u>Подробно</u>:
        <ul class="ram-V0 all-c8">
          <ol>
            <b>transform-origin:</b> Устанавливает координаты точки, относительно которой будет происходить трансформация элемента.
          </ol>
          <li><b>skew()</b> функция трансформирует элемент, наклоняя его в 2D-пространстве.</li>
          <li><b>rotate()</b> вращает элемент вокруг фиксированной точки на двумерной плоскости, не деформируя его.</li>
          <li><b>scale()</b> масштабирует элемент.</li>
          <li><b>translate()</b> переместить элемент с его начальной точки.</li>
          <li><b>rotate3d()</b> определяет трехмерное вращение элемента.</li>
          <li><b>perspective()</b> свойство определяет расстояние между объектом и пользователем. Таким образом, меньшее значение приведёт к более интенсивному 3D-эффекту, чем большее.</li>
        </ul>
      </div></div>
    </div>
    
    <div class="zCodR3 ram-n3 all-c5 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>Полезное</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div>
          <code class="v-BG0">
          &lt;style>
        * {/* transform: translate(0, 0); При старте уберает дёрганье! */
        
            transform: skew(-20deg); /* функция трансформирует элемент, наклоняя его в 2D-пространстве. */
            transform: skewY(-20deg);
        
            transform:rotate(180deg); /* поворот круг */
            transform:rotateY(180deg); /* поворот горизонт */
            transform:rotateX(180deg); /* поворот вертикаль */
        
            transform: rotate(360deg); /* left: 0; top: 0; Уберёт смешение */
        
            transform-origin: 100% 0; /* Устанавливает координаты точки, относительно которой будет происходить трансформация элемента.
              x - длина
              y - Верх низ
              z - Может задаваться только в любых корректных единицах для измерения длины (исключая проценты).
              transform-origin: left top;
            */
        
            transform: scaleX(2.5);   /* Масштабирует элемент по горизонтальной оси X  (соответствует scale(s, 1)) */
            /* зеркально отразить */
            transform: scale(-1, 1);  /* — отражение по горизонтали; */
            transform: scale(1, -1);  /* — отражение по вертикали; */
            transform: scale(-1, -1); /* (или просто scale(-1)) — одновременное отражение по горизонтали и вертикали. */
        
            transform: scaleY(0); /* Закрыть вертикально */
            transform-origin: top;/* Верх фиксируем */
        
            transform: translate(0, 1px) /* переместить элемент с его начальной точки. */
              translateY(0, 0)
              translateX(0, 0);
        
            transform: perspective(1000px) rotate3d(1, 0, 0, 90deg);
        
            transform-origin: top;/* Верх фиксируем */
            transform: translate(0, -7px) perspective(1000px) rotate3d(1, 0, 0, 90deg);
        
            transform: perspective(1000px) rotate3d(1, 0, 0, 0deg);
          }
          
          * {
            position: absolute; /* По центру */
            left: 50%; top: 50%;
            transform: translate(-50%, -50%);
            
            position: absolute; /* Вертикально */
            top: 50%;
            transform: translateY(-50%);
            
            position: absolute;/* Горизонт */
            left: 50%;
            transform: translateX(-50%); 
          }
          &lt;/style>
          </code></div></pre>
        </div><div></div>
      </div>
    </div>
    
    <div class="zCodR3 ram-n3 all-c0 zHid2" style="--zHidH:8ex" zhid="1">
      <div class="zCodR3z"><div><button zhidb="2"><p><s></s></p><b>skew(10deg)</b></button></div></div>
      <div class="zCodR3s">
        <div>
          <pre id="zCod"><div><div></div><code class="v-BG0">
          &lt;style>
          body {padding: 20px}
          
          #test3Div {
            margin: 15px;
            width: 80px;
            height: 80px;
            background-color: skyblue;
          }
          
          .skewed {
            transform: skew(10deg);
            background-color: pink;
          }
          &lt;/style>
          
          &lt;div id="test3Div">Обычный&lt;/div>
          &lt;div id="test3Div" class="skewed">Skewed&lt;/div>
          </code></div></pre>
        </div>
        <div><iframe></iframe></div>
      </div>
    </div>
    <hr class="hr-1"></div>

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