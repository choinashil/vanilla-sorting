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
        data.push(inputVal);

        inputBar = document.createElement('div');
        inputBar.classList.add('inputBar', data[n]);
        inputBar.style.left = (n * 55) + 'px';
        inputBar.style.height = (data[n] * 15) + 'px';
        inputBar.textContent = inputVal;
        innerBox.appendChild(inputBar);

        console.log(data);
        n++;
      }
    } else {
      alert('모두 선택하셨습니다');
    }
  } else {
    alert_1();
  }
}

function addRandomNum(e) {
  var randomNum = Math.ceil(Math.random() * 20);
  readyToStart[1] = 'true';
  // console.log(readyToStart);

  if (limit) {
    if (data.length < limit) {
      if (!data.includes(randomNum)) {
        data.push(randomNum);

        inputBar = document.createElement('div');
        inputBar.classList.add('inputBar', data[n]);
        inputBar.style.left = (n * 55) + 'px';
        inputBar.style.height = (data[n] * 15) + 'px';
        inputBar.textContent = randomNum;
        innerBox.appendChild(inputBar);

        console.log(data);
        n++;
      }
    } else {
      alert('모두 선택하셨습니다');
    }
  }
}

var time = 1000;
var counter = 0;


function bubbleSort(data) {
  for (var i=data.length; i>0; i--){
    for(var j=0; j<i-1; j++) {
      if (data[j] > data[j+1]) {
        var temp = data[j];
        data[j] = data[j+1];
        data[j+1] = temp;

        (function(i, j) {
          setTimeout(function() {
            if (j > 0) {
              for(var k=j-1; k<j+1; k++){
                innerBox.children[k].style.backgroundColor = '#c7c7c7';
              }
            }

            innerBox.children[j].style.backgroundColor = '#cfc2f0';
            innerBox.children[j+1].style.backgroundColor = '#cfc2f0';

          }, time * counter);
          counter++;
        })(i, j);

        (function(data, i, j) {
          setTimeout(function() {
            console.log('현재 loop(if)', i, j, data[j+1], data[j]);

            innerBox.children[j].style.backgroundColor = '#cfc2f0';
            innerBox.children[j+1].style.backgroundColor = '#cfc2f0';

            var target = innerBox.children[j+1]; // biggest
            var target2 = innerBox.children[j]; // 비교대상
            innerBox.insertBefore(target, target2);

            // innerBox.children[j].style.left = '55px';
            // innerBox.children[j+1].style.left = '-55px';

          }, time * counter);
          counter++;
        })(data.slice(), i, j);

      } else {

        (function(i, j) {
          setTimeout(function() {
            console.log('현재 loop(el)', i, j)
            if (j > 0) {
              for(var k=j-1; k<j+1; k++){
                innerBox.children[k].style.backgroundColor = '#c7c7c7';
              }
            }
            innerBox.children[j].style.backgroundColor = '#cfc2f0';
            innerBox.children[j+1].style.backgroundColor = '#cfc2f0';
          }, time * counter);
          counter++;
        })(i, j);
      }
    }
  }
  return data;
}


function insertionSort(data) {
  for (var i = 1; i < data.length; i++) {
    var temp = data[i];
    for (var j = i - 1; j >= 0; j--) {
      if (temp < data[j]) {
        data[j+1] = data[j];
        data[j] = temp;

        (function(data, j) {
          setTimeout(function() {
            console.log(data[j+1], data[j]);
            console.log(data);
            showInsertionSort(j);

          }, time * counter);
          counter++;
        })(data.slice(), j);
      }
    }
  }
  return data;
}

function showInsertionSort(j){
  var target = innerBox.children[j]; // smallest
  var target2 = innerBox.children[j+1]; // 비교대상
  innerBox.insertBefore(target2, target);
}



function selectionSort(data){
  for (var i=0; i<data.length-1; i++) {
    var min = i;
    for (var j=i+1; j<data.length; j++) {
      if (data[j] < data[min]) {
        min = j;
      }
    }
    var temp = data[i];
    data[i] = data[min];
    data[min] = temp;

    (function(data, i, j, min, temp) {
      setTimeout(function() {
        console.log(data);
        console.log(data[j]);

        // showSelectionSort(j);

      }, time * counter);
      counter++;
    })(data.slice(), i, j, min, temp);

  }
  return data;
}


function alert_1() {
  alert1 = document.querySelector('.alert1');
  alert1.style.visibility = 'visible';
}
