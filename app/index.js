// Load application styles
import 'styles/index.less';

// ================================
// START YOUR APP HERE
// ================================
var data = [];
var n=0;
var limit;

var inputBar;
var alert1;

var executeFunction;

var readyToStart = [false, false, false];

// 맨 위 초록부분 세팅
var arraySize = document.querySelector('.arraySize');
for (var i=0; i<6; i++) {
  var count = document.createElement('div');
  count.classList.add('count');
  count.textContent = i+5;
  count.addEventListener('click', setArraySize);
  arraySize.appendChild(count);
}

var inputNum = document.getElementById('inputNum');
var addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addNum);

var randomBtn = document.querySelector('.randomBtn');
randomBtn.addEventListener('click', addRandomNum);

var bubble = document.querySelector('.bubble');
bubble.addEventListener('click', function(e){
  e.target.style.backgroundColor = '#22499f';
  executeFunction = bubbleSort.bind(null, data, data.length-1);
  readyToStart[2] = 'true';
  // console.log(readyToStart);
});

var insertion = document.querySelector('.insertion');
insertion.addEventListener('click', function(e){
  e.target.style.backgroundColor = '#22499f';
  executeFunction = insertionSort.bind(null, data);
  readyToStart[2] = 'true';
});

var merge = document.querySelector('.merge');

var selection = document.querySelector('.selection');
selection.addEventListener('click', function(e){
  e.target.style.backgroundColor = '#22499f';
  executeFunction = selectionSort.bind(null, data);
  readyToStart[2] = 'true';
});

var content = document.querySelector('.content');
var innerBox = document.querySelector('.innerBox');
var inputNumBox = document.querySelector('.inputNumBox');

var start = document.querySelector('.start');
start.addEventListener('click', function(){
  // if (readyToStart.every(function(flag){flag === true})) {
  executeFunction();
  // } else {
  //   alert('조건을 모두 선택하세요');
  // }

});





function setArraySize(e) {
  e.target.style.backgroundColor = '#228b62';
  limit = e.target.textContent;
  console.log(limit);
  readyToStart[0] = 'true';
  innerBox.style.width = (limit*56) + 'px';

  // for (var i = 0; i < limit; i++) {
  //   inputBar = document.createElement('div');
  //   inputBar.classList.add('inputBar', i);
  //   content.appendChild(inputBar);
  // }
}


function addNum(e) {
  readyToStart[1] = 'true';
  var inputVal = Number(inputNum.value);
  if (limit) {
    if (data.length < limit) {
      if (data.includes(inputVal)) {
        alert('중복되는 숫자는 입력하실 수 없습니다');
      } else if (inputVal > 20 || inputVal <= 0) {
        alert('1부터 20사이의 정수를 입력해주세요');
      } else {
        addNumToBar(inputVal);
      }
    } else {
      alert('모두 선택하셨습니다');
    }
  } else {
    alert_1();
  }
}

function addNumToBar(num){
  data.push(num);
  inputBar = document.createElement('div');
  inputBar.classList.add('inputBar', 'grey', 'left'+n);
  inputBar.style.height = (data[n] * 12) + 'px';
  // if (num < 4) {
    inputNumBox = document.createElement('div');
    inputNumBox.classList.add('inputNumBox');
    inputNumBox.textContent = num;
    inputBar.appendChild(inputNumBox);
  // } else {
  //   inputBar.textContent = num;
  // }
  innerBox.appendChild(inputBar);
  console.log(data);
  n++;
}

function addRandomNum(e) {
  var randomNum = Math.ceil(Math.random() * 20);
  readyToStart[1] = 'true';
  // console.log(readyToStart);

  if (limit) {
    if (data.length < limit) {
      if (!data.includes(randomNum)) {
        addNumToBar(randomNum);
      }
    } else {
      alert('모두 선택하셨습니다');
    }
  }
}

var time = 400;
var counter = 0;


function bubbleSort(data) {
  for (var i=data.length; i>0; i--){
    for(var j=0; j<i-1; j++) {
      if (data[j] > data[j+1]) {
        var temp = data[j];
        data[j] = data[j+1];
        data[j+1] = temp;

        // 1. 비교값(j, j+1) 색칠
        (function(i, j, data) {
          setTimeout(function() {
            debugger
            console.log('1. if일때 색칠', 'i:'+i, 'j:'+j, 'j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1])
            // console.log(data);
            innerBox.children[j].classList.remove('grey');
            innerBox.children[j+1].classList.remove('grey');
            innerBox.children[j].classList.add('purple');
            innerBox.children[j+1].classList.add('purple');

          }, time * counter);
          counter++;
        })(i, j, data.slice());

        // 2. 비교 후 자리바꾸기
        (function(data, i, j) {
          setTimeout(function() {
            console.log('2. if일때 자리바꾸기', 'i:'+i, 'j:'+j, 'j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            // console.log(data);
              debugger
              var k = j+1;
              innerBox.children[j].classList.remove('left'+j);
              innerBox.children[j+1].classList.remove('left'+k);
              innerBox.children[j].classList.add('left'+k);
              innerBox.children[j+1].classList.add('left'+j);
              innerBox.children[j].classList.add('jump');
              innerBox.children[j+1].classList.add('jump');

          }, time * counter);
          counter++;
        })(data.slice(), i, j);

      } else {

        // 3. j<j+1일때
        (function(i, j, data) {
          setTimeout(function() {
            console.log('3. else일때 색칠', 'i:'+i, 'j:'+j, 'j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            // console.log(data);
            debugger

            // else 경우 색칠
            innerBox.children[j].classList.remove('grey');
            innerBox.children[j+1].classList.remove('grey');
            innerBox.children[j].classList.add('purple');
            innerBox.children[j+1].classList.add('purple');

          }, time * counter);
          counter++;
        })(i, j, data.slice());

        // 4. j<j+1일때
        (function(i, j, data) {
          setTimeout(function() {
            console.log('4. else일때 안바꿈', 'i:'+i, 'j:'+j, 'j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            // console.log(data);
            debugger
            // else 경우 자리안바꿈
            innerBox.children[j].classList.add('bounce');
            innerBox.children[j+1].classList.add('bounce');

          }, time * counter);
          counter++;
        })(i, j, data.slice());

      }

      (function(i, j, data) {
        setTimeout(function() {
          console.log('5. 초기화', 'i:'+i, 'j:'+j, 'j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);

          if(innerBox.children[j].classList.contains('bounce')) {
            innerBox.children[j].classList.remove('bounce');
            innerBox.children[j+1].classList.remove('bounce');
          } else {
            innerBox.children[j].classList.remove('jump');
            innerBox.children[j+1].classList.remove('jump');
            var target = innerBox.children[j+1]; // biggest
            var target2 = innerBox.children[j]; // 비교대상
            innerBox.insertBefore(target, target2);
          }

          innerBox.children[j].classList.remove('purple');
          innerBox.children[j].classList.add('grey');


        }, time * counter);
        counter++;
      })(i, j, data.slice());

    }

    (function(i, j, data) {
      setTimeout(function() {
        console.log('6. ', 'i:'+i, 'j:'+j, 'j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);

        innerBox.children[j].classList.remove('purple');
        innerBox.children[j].classList.add('aqua');
      }, time * counter);
      counter++;
    })(i, j, data.slice());

  }

  (function(i, j, data) {
    setTimeout(function() {
      console.log('7.', 'i:'+i, 'j:'+j, 'j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
      innerBox.children[j].classList.add('bounce');
      innerBox.children[j].classList.remove('grey');
      innerBox.children[j].classList.add('aqua');
    }, time * counter);
    counter++;
  })(i, j, data.slice());

  (function(i, j, data) {
    setTimeout(function() {
      console.log('8.', 'i:'+i, 'j:'+j, 'j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
      innerBox.children[j].classList.remove('bounce');
    }, time * counter);
    counter++;
  })(i, j, data.slice());

  return data;
}


function insertionSort(data) {
  for (var i = 1; i < data.length; i++) {
    var temp = data[i];
    for (var j = i - 1; j >= 0; j--) {

      if (data[j] > temp) {
        data[j+1] = data[j];
        data[j] = temp;

      // case if
        // 1
        (function(i, j, data) {
          setTimeout(function() {
            console.log('1. if일때 색깔지정', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1])
            console.log(data);
            debugger
            // 맨처음 i =1일때
            // j는 비교대상 , j+1는 주인공 temp
            if (innerBox.children[j].classList.contains('grey')) {
              innerBox.children[j].classList.remove('grey');
            } else if (innerBox.children[j].classList.contains('purple')){
              innerBox.children[j].classList.remove('purple');
            } else {
              innerBox.children[j].classList.remove('aqua');
            }
            innerBox.children[j].classList.add('deepAqua');
            innerBox.children[j+1].classList.remove('grey');
            innerBox.children[j+1].classList.add('purple');

          }, time * counter);
          counter++;
        })(i, j, data.slice());

        // 2
        (function(i, j, data) {
          setTimeout(function() {
            console.log('2. 비교할값 내리기', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            console.log(data);
            debugger
            innerBox.children[j+1].classList.add('goDown');

          }, time * counter);
          counter++;
        })(i, j, data.slice());

        // 3
        (function(i, j, data) {
          setTimeout(function() {
            console.log('3. 들어갈곳 찾아 이동', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            console.log(data);
            debugger

            var k = j+1;
            innerBox.children[j].classList.remove('left'+j);
            innerBox.children[j+1].classList.remove('left'+k);
            innerBox.children[j].classList.add('left'+k);
            innerBox.children[j+1].classList.add('left'+j);


          }, time * counter);
          counter++;
        })(i, j, data.slice());

        // 3-2
        (function(i, j, data) {
          setTimeout(function() {
            console.log('3-2. 비교한값 올리기', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            console.log(data);
            debugger
            innerBox.children[j+1].classList.remove('goDown');

            innerBox.children[j].classList.remove('deepAqua');
            innerBox.children[j].classList.add('aqua');

          }, time * counter);
          counter++;
        })(i, j, data.slice());

      } else {
        // case else


        // 4
        (function(i, j, data) {
          setTimeout(function() {
            console.log('4. else일때 색깔넣기', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            console.log(data);
            debugger
            // 이미 색깔 되어있는 경우 패스 (if문에서 한번 넘어온 경우)

            // 처음에 바로 else 로 넘어온 경우 색깔 지정
            if (innerBox.children[j].classList.contains('grey')) {
              innerBox.children[j].classList.remove('grey');
            } else {
              innerBox.children[j].classList.remove('purple');
            }

            innerBox.children[j].classList.add('deepAqua');
            innerBox.children[j+1].classList.remove('grey');
            innerBox.children[j+1].classList.add('purple');

          }, time * counter);
          // counter++;
        })(i, j, data.slice());


        // 5
        (function(i, j, data) {
          setTimeout(function() {
            console.log('5. 비교할값 내리기', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            console.log(data);
            debugger
            // if문에서 넘어온 경우 필요없음 ... 옆으로 이동해야하나?

            // 처음에 바로 else로 넘어온 경우 내리기
            if (!innerBox.children[j+1].classList.contains('goDown')) {
              innerBox.children[j+1].classList.add('goDown');
            }

          }, time * counter);
          counter++;
        })(i, j, data.slice());

        // 6
        (function(i, j, data) {
          setTimeout(function() {
            console.log('6. else니까 자리안바꿈', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            console.log(data);
            debugger
            // innerBox.children[j].classList.add('bounce');
            // innerBox.children[j+1].classList.add('bounce');

          }, time * counter);
          counter++;
        })(i, j, data.slice());

        // 7
        (function(i, j, data) {
          setTimeout(function() {
            console.log('7. 원래대로 올리기', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
            console.log(data);
            debugger
            innerBox.children[j+1].classList.remove('goDown');

          }, time * counter);
          counter++;
        })(i, j, data.slice());
        break;

      }

    }
    // 8
    (function(i, j, data) {
      setTimeout(function() {
        console.log('8. 초기화', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
        console.log(data);
        debugger
        var k=j+2
        // 자리바꾼뒤 넘어왔을때 안보이게 요소 이동
        if (innerBox.children[j+1].classList.contains('left'+k)) {
          var target = innerBox.children[j+2]; // biggest
          var target2 = innerBox.children[j+1]; // 비교대상
          innerBox.insertBefore(target, target2);

          innerBox.children[j+1].classList.remove('purple');
          innerBox.children[j+1].classList.add('aqua');

        } else {

          innerBox.children[j].classList.remove('deepAqua');
          innerBox.children[j].classList.add('aqua');

        }

      }, time * counter);
      counter++;
    })(i, j, data.slice());
  }

  // 9
  (function(i, j, data) {
    setTimeout(function() {
      console.log('9. 맨마지막', '/i:'+i, '/j:'+j, '/j+1:'+(j+1), 'j값:'+data[j], 'j+1값:'+data[j+1]);
      console.log(data);
      debugger
    }, time * counter);
    counter++;
  })(i, j, data.slice());

  return data;
}



function selectionSort(data){
  for (var i=0; i<data.length-1; i++) {
    // 1. 맨첫요소 i 업다운
    (function(i, j) {
      setTimeout(function() {
        debugger
        console.log('1. i바뀜', 'i:'+i);
        innerBox.children[i].classList.add('upDown');
        innerBox.children[i].classList.add('purple');
      }, time * counter);
      counter++;
    })(i, j);

    var min = i;
    for (var j=i+1; j<data.length; j++) {
      // min = j;
      //2. 나머지 요소 업다운
      (function(i, j, min, data) {
        setTimeout(function() {
          debugger
          console.log('2. 순회', 'i:'+i, 'j:'+j, 'i값:'+data[i], 'j값:'+data[j], 'min값:'+data[min]);
          // console.log(data);
          if (data[j] < data[min]) {

            innerBox.children[min].classList.remove('purple');
            innerBox.children[min].classList.add('grey');
            innerBox.children[j].classList.remove('grey');
            innerBox.children[j].classList.add('purple');
            innerBox.children[j].classList.add('upDown');
            j = min;
          }

          innerBox.children[j].classList.add('upDown');

        }, time * counter);
        counter++;
      })(i, j, min, data.slice());

      if (data[j] < data[min]) {
        min = j;
      }
    }
    // 3. min값 색깔 표시
    // (function(i, j, min, data) {
    //   setTimeout(function() {
    //     debugger
    //     // innerBox.children[j].classList.add('selectionSwitchColor');
    //     console.log('3. min발견', 'i: '+i, 'j: '+j, 'min: '+min);
    //
    //     innerBox.children[min].classList.remove('grey');
    //     innerBox.children[min].classList.add('purple');
    //   }, time * counter);
    //   counter++;
    // })(i, j, min, data.slice());

    // 4. 바꿀아이 색깔 표시
    (function(i, j, min, data) {
      setTimeout(function() {
        debugger
        console.log('4. 자리바꿀아이 색깔', 'i: '+i, 'min: '+min);

        if (min !== i) {
          innerBox.children[i].classList.remove('grey');
          innerBox.children[i].classList.add('darkgrey');
        }

      }, time * counter);
      counter++;
    })(i, j, min, data.slice());

    // debugger
    var temp = data[i];
    data[i] = data[min];
    data[min] = temp;

    // 5. 자리 바꾸기
    // (function(i, j, min, data) {
    //   setTimeout(function() {
    //     // console.log('2. ', 'i: '+i, 'j: '+j, 'min: '+data[min]);
    //     // console.log(data);
    //     debugger
    //     console.log('5. 자리바꾸기', 'i: '+i, 'min: '+min);
    //
    //     for(var k=i; k<limit; k++){
    //       innerBox.children[k].classList.remove('upDown');
    //     }
    //
    //   }, time * counter);
    //   counter++;
    // })(i, j, min, data.slice());

    // 5-2. 자리 바꾸기
    (function(i, j, min, data) {
      setTimeout(function() {
        // console.log('2. ', 'i: '+i, 'j: '+j, 'min: '+data[min]);
        // console.log(data);
        debugger
        console.log('5. 자리바꾸기', 'i: '+i, 'min: '+min);

        for(var k=i; k<limit; k++){
          innerBox.children[k].classList.remove('upDown');
        }
        // innerBox.children[i].classList.add('switchAtBottom');
        // innerBox.children[min].classList.add('switchAtTop');
        innerBox.children[min].classList.remove('left'+min);
        innerBox.children[i].classList.remove('left'+i);
        innerBox.children[min].classList.add('left'+i);
        innerBox.children[min].classList.add('jump');
        innerBox.children[i].classList.add('left'+min);
        innerBox.children[i].classList.add('jump');



      }, time * counter);
      counter++;
    })(i, j, min, data.slice());


    // 6. 색깔 빼고 초기화
    (function(i, j, min, data) {
      setTimeout(function() {
        debugger
        console.log('6. 초기화', 'i: '+i, 'min: '+min);
        innerBox.children[i].classList.remove('jump');
        innerBox.children[min].classList.remove('jump');

        var target = innerBox.children[min]; // smallest
        var target2 = innerBox.children[i]; // 비교대상
        var target3 = innerBox.children[min+1]; // smallest
        innerBox.insertBefore(target, target2);
        innerBox.insertBefore(target2, target3);

        if (i === min) {
          innerBox.children[min].classList.remove('darkgrey');
          innerBox.children[min].classList.add('aqua');
        } else {
          innerBox.children[min].classList.remove('darkgrey');
          innerBox.children[min].classList.add('grey');
        }

      }, time * counter);
      counter++;
    })(i, j, min, data.slice());

    (function(i, j, min, data) {
      setTimeout(function() {
        debugger
        console.log('8. 마지막 바 색깔', 'i: '+i, 'min: '+min);

        innerBox.children[i].classList.remove('purple');
        innerBox.children[i].classList.add('aqua');

      }, time * counter);
      counter++;
    })(i, j, min, data.slice());

  }

  // 8. 마지막 바 색깔
  (function(i, j, min, data) {
    setTimeout(function() {
      debugger
      console.log('8. 마지막 바 색깔', 'i: '+i, 'min: '+min);

      innerBox.children[min].classList.remove('grey');
      innerBox.children[i].classList.remove('grey');
      innerBox.children[i].classList.add('aqua');
      innerBox.children[i].classList.add('jump');

    }, time * counter);
    counter++;
  })(i, j, min, data.slice());

  (function(i, j, min, data) {
    setTimeout(function() {
      debugger
      console.log('8. 마지막 바 색깔', 'i: '+i, 'min: '+min);
      innerBox.children[i].classList.remove('jump');

    }, time * counter);
    counter++;
  })(i, j, min, data.slice());

  return data;
}


function alert_1() {
  alert1 = document.querySelector('.alert1');
  alert1.style.visibility = 'visible';
}

function swap(j){
  var target = innerBox.children[j+1]; // biggest
  var target2 = innerBox.children[j]; // 비교대상
  innerBox.insertBefore(target, target2);
}
