// Load application styles
import 'styles/index.less';

// ================================
// START YOUR APP HERE
// ================================
var limit;
var inputBar;
var executeFunction;

var n = 0;
var data = [];
var setRange = false;
var setNum = false;
var selectSortType = false;
var started = false;

var arraySize = document.querySelector('.arraySize');
for (var i = 0; i < 6; i++) {
  var count = document.createElement('div');
  count.classList.add('count', 'lightGreen');
  count.textContent = i + 5;
  count.addEventListener('click', setArraySize);
  arraySize.appendChild(count);
}

var inputNum = document.getElementById('inputNum');
var addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addNum);

var randomBtn = document.querySelector('.randomBtn');
randomBtn.addEventListener('click', addRandomNum);

var selectSort = document.querySelector('.selectSort');

var bubble = document.querySelector('.bubble');
bubble.addEventListener('click', setSorting.bind(null,bubbleSort));

var insertion = document.querySelector('.insertion');
insertion.addEventListener('click', setSorting.bind(null, insertionSort));

var selection = document.querySelector('.selection');
selection.addEventListener('click', setSorting.bind(null, selectionSort));

var merge = document.querySelector('.merge');
merge.addEventListener('click', setSorting.bind(null, mergeSort));

  // sizeControlForMergeSort();
// function sizeControlForMergeSort() {
//   innerBox.style.width = (limit * 31) + 'px';
//   innerBox.classList.remove('innerBoxHeight');
//   innerBox.classList.add('innerBoxHeightForMergeSort');
//   for (var i = 0; i < innerBox.childElementCount; i++) {
//     innerBox.children[i].classList.remove('left' + i);
//     innerBox.children[i].classList.add('mergeLeft' + i);
//     innerBox.children[i].classList.remove('inputBarWidth');
//     innerBox.children[i].classList.add('inputBarWidthForMergeSort');
//     innerBox.children[i].height = (data[i] * 5) + 'px';
//   }
// }

var content = document.querySelector('.content');
var innerBox = document.querySelector('.innerBox');
var inputNumBox = document.querySelector('.inputNumBox');

var start = document.querySelector('.start');
start.addEventListener('click', startSorting);


function setArraySize(e) {
  if (!innerBox.childElementCount) {
    for(var i = 0; i < arraySize.childElementCount; i++) {
      if (arraySize.children[i].classList.contains('green')) {
        arraySize.children[i].classList.remove('green');
        arraySize.children[i].classList.add('lightGreen');
      }
    }
    e.target.classList.remove('lightGreen');
    e.target.classList.add('green');
    limit = e.target.textContent;
    console.log(limit);
    setRange = true;
    innerBox.style.width = (limit * 56) + 'px';
  }
}

function addNum(e) {
  if (!started) {
    setNum = true;
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
      alert('입력할 숫자 갯수를 먼저 선택해주세요');
    }
  }
}

function addRandomNum(e) {
  if (!started) {
    if (limit) {
      setNum = true;

      pushRandomNum();

      function pushRandomNum(){
        var randomNum = Math.ceil(Math.random() * 20);
        while(innerBox.childElementCount < limit) {
          if (data.includes(randomNum)) {
            pushRandomNum();
          } else {
            addNumToBar(randomNum);
          }
        }
      }
    } else {
      alert('입력할 숫자 갯수를 먼저 선택해주세요');
    }
  }
}

function addNumToBar(num){
  data.push(num);
  inputBar = document.createElement('div');
  inputBar.classList.add('inputBar', 'inputBarWidth', 'grey', 'left' + n);
  inputBar.style.height = (data[n] * 10) + 'px';
  inputNumBox = document.createElement('div');
  inputNumBox.classList.add('inputNumBox');
  inputNumBox.textContent = num;
  inputBar.appendChild(inputNumBox);
  innerBox.appendChild(inputBar);
  n++;
}

function setSorting(sort, e) {
  if (!started) {
    for(var i = 0; i < selectSort.childElementCount; i++) {
      if (selectSort.children[i].classList.contains('deepBlue')) {
        selectSort.children[i].classList.remove('deepBlue');
        selectSort.children[i].classList.add('lightBlue');
      }
    }
    e.target.classList.remove('lightBlue');
    e.target.classList.add('deepBlue');
    executeFunction = sort;
    selectSortType = true;
  }
}

function startSorting(){
  if (setRange === true && setNum === true && selectSortType === true) {
    started = true;
    executeFunction(data);
  } else {
    alert('조건을 모두 선택하세요');
  }
}


var time = 350;
var counter = 0;

function bubbleSort(data) {
  for (var i = data.length; i > 0; i--){
    for (var j = 0; j < i - 1; j++) {
      if (data[j] > data[j + 1]) {
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;

        (function(j) {
          setTimeout(function() {
            addColorInBubbleSort(j);
          }, time * counter);
          counter++;
        })(j);

        (function(j) {
          setTimeout(function() {
            switchBars(j);
            addJumpEffect(j);
          }, time * counter);
          counter++;
        })(j);

      } else {

        (function(j) {
          setTimeout(function() {
            addColorInBubbleSort(j);
          }, time * counter);
          counter++;
        })(j);

        (function(j) {
          setTimeout(function() {
            doNotSwitch(j);
          }, time * counter);
          counter++;
        })(j);

      }

      (function(j) {
        setTimeout(function() {
          resetForNextComparison(j);
        }, time * counter);
        counter++;
      })(j);

    }

    (function(j) {
      setTimeout(function() {
        changeColorOfMax(j);
      }, time * counter);
      counter++;
    })(j);

  }

  (function(j) {
    setTimeout(function() {
      addEffectToMin(j);
    }, time * counter);
    counter++;
  })(j);

  (function(j) {
    setTimeout(function() {
      removeEffectFromMin(j);
    }, time * counter);
    counter++;
  })(j);

  return data;
}

function addColorInBubbleSort(j) {
  innerBox.children[j].classList.remove('grey');
  innerBox.children[j + 1].classList.remove('grey');
  innerBox.children[j].classList.add('purple');
  innerBox.children[j + 1].classList.add('purple');
}

function switchBars(j) {
  var k = j + 1;
  innerBox.children[j].classList.remove('left' + j);
  innerBox.children[j + 1].classList.remove('left' + k);
  innerBox.children[j].classList.add('left' + k);
  innerBox.children[j + 1].classList.add('left' + j);
}

function addJumpEffect(j) {
  innerBox.children[j].classList.add('jump');
  innerBox.children[j + 1].classList.add('jump');
}

function doNotSwitch(j) {
  innerBox.children[j].classList.add('bounce');
  innerBox.children[j + 1].classList.add('bounce');
}

function resetForNextComparison(j) {
  if(innerBox.children[j].classList.contains('bounce')) {
    innerBox.children[j].classList.remove('bounce');
    innerBox.children[j + 1].classList.remove('bounce');
  } else {
    innerBox.children[j].classList.remove('jump');
    innerBox.children[j + 1].classList.remove('jump');
    var target = innerBox.children[j + 1];
    var valueToCompare = innerBox.children[j];
    innerBox.insertBefore(target, valueToCompare);
  }
  innerBox.children[j].classList.remove('purple');
  innerBox.children[j].classList.add('grey');
}

function changeColorOfMax(j) {
  innerBox.children[j].classList.remove('purple');
  innerBox.children[j].classList.add('yellow');
}

function addEffectToMin(j) {
  innerBox.children[j].classList.add('bounce');
  innerBox.children[j].classList.remove('grey');
  innerBox.children[j].classList.add('yellow');
}

function removeEffectFromMin(j) {
  innerBox.children[j].classList.remove('bounce');
}


function insertionSort(data) {
  var time = 300;
  for (var i = 1; i < data.length; i++) {
    var temp = data[i];
    for (var j = i - 1; j >= 0; j--) {

      if (data[j] > temp) {
        data[j + 1] = data[j];
        data[j] = temp;

        (function(j) {
          setTimeout(function() {
            addColorInInsertionSort(j);
          }, time * counter);
          counter++;
        })(j);

        (function(j) {
          setTimeout(function() {
            addPutDownEffect(j);
          }, time * counter);
          counter++;
        })(j);

        (function(j) {
          setTimeout(function() {
            switchBars(j);
          }, time * counter);
          counter++;
        })(j);

        (function(j) {
          setTimeout(function() {
            resetComparedBar(j);
          }, time * counter);
          counter++;
        })(j);

      } else {

        (function(j) {
          setTimeout(function() {
            addColorInInsertionSort(j);
          }, time * counter);
          counter++;
        })(j);

        (function(j) {
          setTimeout(function() {
            addPutDownEffect(j);
          }, time * counter);
          counter++;
        })(j);

        (function(j) {
          setTimeout(function() {
            removePutDownEffect(j);
          }, time * counter);
          counter++;
        })(j);

        break;
      }
    }

    (function(j) {
      setTimeout(function() {
        resetAll(j);
      }, time * counter);
      counter++;
    })(j);

  }

  (function(j) {
    setTimeout(function() {
      finishInsertionSort(j);
    }, time * counter);
    counter++;
  })(j);

  return data;
}

function addColorInInsertionSort(j) {
  if (innerBox.children[j].classList.contains('grey')) {
    innerBox.children[j].classList.remove('grey');
  } else if (innerBox.children[j].classList.contains('purple')) {
    innerBox.children[j].classList.remove('purple');
  } else {
    innerBox.children[j].classList.remove('yellow');
  }
  innerBox.children[j].classList.add('deepYellow');

  if(innerBox.children[j + 1].classList.contains('grey')) {
    innerBox.children[j + 1].classList.remove('grey');
    innerBox.children[j + 1].classList.add('purple');
  }
}

function addPutDownEffect(j) {
  if (!innerBox.children[j + 1].classList.contains('putDown')) {
    innerBox.children[j + 1].classList.add('putDown');
  }
}

function resetComparedBar(j) {
  var target = innerBox.children[j + 1];
  var valueToCompare = innerBox.children[j];
  innerBox.insertBefore(target, valueToCompare);

  innerBox.children[j + 1].classList.remove('deepYellow');
  innerBox.children[j + 1].classList.add('yellow');
}

function removePutDownEffect(j) {
  innerBox.children[j + 1].classList.remove('putDown');
}

function resetAll(j) {
  if (innerBox.children[j + 1].classList.contains('purple')) {
    innerBox.children[j + 1].classList.remove('purple');
    innerBox.children[j + 1].classList.add('yellow');
  }

  if (innerBox.children[j + 1].classList.contains('putDown')) {
    innerBox.children[j + 1].classList.remove('putDown');
  }

  var k = j + 2;
  if (innerBox.children[j + 1].classList.contains('left' + k)) {
    var target = innerBox.children[j + 2];
    var valueToCompare = innerBox.children[j + 1];
    innerBox.insertBefore(target, valueToCompare);

    innerBox.children[j + 1].classList.remove('purple');
    innerBox.children[j + 1].classList.add('yellow');

  } else if (j === -1) {
    innerBox.children[j + 1].classList.remove('purple');
    innerBox.children[j + 1].classList.add('yellow');
  } else {
    innerBox.children[j].classList.remove('deepYellow');
    innerBox.children[j].classList.add('yellow');
  }
}

function finishInsertionSort(j) {
  innerBox.children[j + 1].classList.remove('purple');
  innerBox.children[j + 1].classList.add('yellow');
}


function selectionSort(data){
  for (var i = 0; i < data.length - 1; i++) {

    (function(i) {
      setTimeout(function() {
        startTraversal(i);
      }, time * counter);
      counter++;
    })(i);

    var min = i;
    for (var j = i + 1; j < data.length; j++) {

      (function(j, min, data) {
        setTimeout(function() {
          searchForMin(j, min, data);
        }, time * counter);
        counter++;
      })(j, min, data.slice());

      if (data[j] < data[min]) {
        min = j;
      }
    }

    (function(i, min) {
      setTimeout(function() {
        addColorForComparison(i, min);
      }, time * counter);
      counter++;
    })(i, min);

    var temp = data[i];
    data[i] = data[min];
    data[min] = temp;

    (function(i, min) {
      setTimeout(function() {
        switchInSelectionSort(i, min);
      }, time * counter);
      counter++;
    })(i, min);

    (function(i, min) {
      setTimeout(function() {
        resetForNextStep(i, min);
      }, time * counter);
      counter++;
    })(i, min);

    (function(i) {
      setTimeout(function() {
        changeColorOfMin(i);
      }, time * counter);
      counter++;
    })(i);

  }

  (function(i, min) {
    setTimeout(function() {
      addEffect(i, min);
    }, time * counter);
    counter++;
  })(i, min);

  (function(i) {
    setTimeout(function() {
      removeEffect(i);
    }, time * counter);
    counter++;
  })(i);

  return data;
}

function startTraversal(i) {
  innerBox.children[i].classList.add('upDown');
  innerBox.children[i].classList.add('purple');
}

function searchForMin(j, min, data) {
  if (data[j] < data[min]) {
    innerBox.children[min].classList.remove('purple');
    innerBox.children[min].classList.add('grey');
    innerBox.children[j].classList.remove('grey');
    innerBox.children[j].classList.add('purple');
    innerBox.children[j].classList.add('upDown');
    j = min;
  }
  innerBox.children[j].classList.add('upDown');
}

function addColorForComparison(i, min) {
  if (min !== i) {
    innerBox.children[i].classList.remove('grey');
    innerBox.children[i].classList.add('darkgrey');
  }
}

function switchInSelectionSort(i, min) {
  for(var k = i; k < limit; k++){
    innerBox.children[k].classList.remove('upDown');
  }
  innerBox.children[min].classList.remove('left' + min);
  innerBox.children[i].classList.remove('left' + i);
  innerBox.children[min].classList.add('left' + i);
  innerBox.children[min].classList.add('jump');
  innerBox.children[i].classList.add('left' + min);
  innerBox.children[i].classList.add('jump');
}

function resetForNextStep(i, min) {
  innerBox.children[i].classList.remove('jump');
  innerBox.children[min].classList.remove('jump');

  var target = innerBox.children[min];
  var valueToChange = innerBox.children[i];
  var valueToHelpChange = innerBox.children[min + 1];
  innerBox.insertBefore(target, valueToChange);
  innerBox.insertBefore(valueToChange, valueToHelpChange);

  if (i === min) {
    innerBox.children[min].classList.remove('darkgrey');
    innerBox.children[min].classList.add('yellow');
  } else {
    innerBox.children[min].classList.remove('darkgrey');
    innerBox.children[min].classList.add('grey');
  }
}

function changeColorOfMin(i) {
  innerBox.children[i].classList.remove('purple');
  innerBox.children[i].classList.add('yellow');
}

function addEffect(i, min) {
  innerBox.children[min].classList.remove('grey');
  innerBox.children[i].classList.remove('grey');
  innerBox.children[i].classList.add('yellow');
  innerBox.children[i].classList.add('jump');
}

function removeEffect(i) {
  innerBox.children[i].classList.remove('jump');
}


var queue = [];

function mergeSort(data) {
  // console.log('0. ', '시작')
  if (data.length === 1) {

  //   (function(data, start, middle, end) {
  //     setTimeout(function() {
  //       console.log('1. 하나만 남았을때', 'data:'+data, 'start:'+start, 'middle:'+middle, 'end:'+end);
  //       debugger
  //     }, time * counter);
  //     counter++;
  //   })(data.slice(), start, middle, end);
  //
  //   return data;
  // }


  var start = 0;
  var end = data.length;
  var middle = Math.ceil((start + end) / 2);

  (function(data, start, middle, end) {
    setTimeout(function() {
      console.log('2. ', 'data:'+data, 'start:'+start, 'middle:'+middle, 'end:'+end, 'data.length:'+data.length, 'limit:'+limit);
      debugger
      if (data.length > 2){
        for (var i = middle; i < end; i++) {
          if (innerBox.children[i].classList.contains('yellow')) {
            innerBox.children[i].classList.remove('yellow');
            innerBox.children[i].classList.add('grey');
          }
        }
      }
    }, time * counter);
    counter++;
  })(data.slice(), start, middle, end);


  if (data.length > 1) {

    (function(data, start, middle, end) {
      setTimeout(function() {
        console.log('3. ', 'data:'+data, 'start:'+start, 'middle:'+middle, 'end:'+end, 'data.length:'+data.length, 'limit:'+limit);
        debugger
        if (data.length > 2){
          for (var i = start; i < middle; i++) {
            if (innerBox.children[i].classList.contains('grey')) {
              innerBox.children[i].classList.remove('grey');
              innerBox.children[i].classList.add('yellow');
            }
          }
        }
      }, time * counter);
      counter++;
    })(data.slice(), start, middle, end);

    (function(data, start, middle, end) {
      setTimeout(function() {
        console.log('3-2. ', 'data:'+data, 'start:'+start, 'middle:'+middle, 'end:'+end, 'data.length:'+data.length, 'limit:'+limit);
        debugger
        if (data.length > 2) {
          for (var i = start; i < middle; i++) {
            if (innerBox.children[i].classList.contains('moveLeftForMerge2')) {
              innerBox.children[i].classList.remove('moveLeftForMerge2');
              innerBox.children[i].classList.add('moveLeftForMerge3');
            } else if (innerBox.children[i].classList.contains('moveLeftForMerge1')) {
              innerBox.children[i].classList.remove('moveLeftForMerge1');
              innerBox.children[i].classList.add('moveLeftForMerge2');
            } else {
              innerBox.children[i].classList.add('moveLeftForMerge1');
            }
          }
        }
      }, time * counter);
      counter++;
    })(data.slice(), start, middle, end);

    var left = mergeSort(data.slice(start, middle));

    (function(data, start, middle, end) {
      setTimeout(function() {
        console.log('4. ', 'data:'+data, 'start:'+start, 'middle:'+middle, 'end:'+end);
        debugger
      }, time * counter);
      counter++;
    })(data.slice(), start, middle, end);


    var right = mergeSort(data.slice(middle, end));

    (function(data, start, middle, end) {
      setTimeout(function() {
        console.log('5. ', 'data:'+data, 'start:'+start, 'middle:'+middle, 'end:'+end);
        debugger
      }, time * counter);
      counter++;
    })(data.slice(), start, middle, end);


    return combine(left, right);

  }

  (function(data, start, end) {
    setTimeout(function() {
      console.log('6. ', 'data:'+data, 'start:'+start, 'middle:'+middle, 'end:'+end);
      debugger
    }, time * counter);
    counter++;
  })(data.slice(), start, end);


}

function combine(left, right) {
  var temp = [];

  (function(data, temp, left, right) {
    setTimeout(function() {
      console.log('7. ', 'data:'+data, 'left:'+left, 'right:'+right, 'temp:'+temp);
      debugger
      // for (var i = 0; i < data.length; i++) {
      //   for (var j = 0; j < left.length; j++) {
      //     if (data[i] === left[j]) {
      //       innerBox.children[i].classList.add('combineLeft');
      //     } else if (data[i] === right[j]) {
      //       innerBox.children[i].classList.add('combineRight');
      //     }
      //   }
      // }
    }, time * counter);
    counter++;
  })(data.slice(), temp.slice(), left.slice(), right.slice());


  while (left.length >= 1 && right.length >= 1 ) {

    (function(data, temp, left, right) {
      setTimeout(function() {
        console.log('8. left,right[0] 하이라이트', 'data:'+data, 'temp:'+temp, 'left:'+left, 'right:'+right);
        debugger
        for (var i = 0; i < data.length; i++) {
          if (data[i] === left[0]) {
            innerBox.children[i].classList.remove('yellow');
            innerBox.children[i].classList.add('deepYellow');
          }
          if (data[i] === right[0]) {
            innerBox.children[i].classList.remove('yellow');
            innerBox.children[i].classList.add('deepYellow');
          }
        }
      }, time * counter);
      counter++;
    })(data.slice(), temp.slice(), left.slice(), right.slice());



    if (left[0] < right[0]) {

      (function(data, temp, left, right) {
        setTimeout(function() {
          console.log('9. left가 작으면 left 이동', 'data:'+data, 'left:'+left, 'right:'+right, 'temp:'+temp);
          debugger
        }, time * counter);
        counter++;
      })(data.slice(), temp.slice(), left.slice(), right.slice());

      temp.push(left.shift());

    } else {

      (function(data, temp, left, right) {
        setTimeout(function() {
          console.log('10. right가 작으면 right 이동', 'data:'+data, 'left:'+left, 'right:'+right, 'temp:'+temp);
          debugger
        }, time * counter);
        counter++;
      })(data.slice(), temp.slice(), left.slice(), right.slice());

      temp.push(right.shift());
    }
  }
  if (left.length) {
    temp = temp.concat(left);

    (function(data, temp, left, right) {
      setTimeout(function() {
        debugger
        console.log('11. 맨처음엔 10이나11', 'data:'+data, 'left:'+left, 'right:'+right, 'temp:'+temp);
      }, time * counter);
      counter++;
    })(data.slice(), temp.slice(), left.slice(), right.slice());

  } else if (right.length) {
    temp = temp.concat(right);

    (function(data, temp, left, right) {
      setTimeout(function() {
        debugger
        console.log('12. 맨처음엔 10이나11', 'data:'+data, 'left:'+left, 'right:'+right, 'temp:'+temp);
      }, time * counter);
      counter++;
    })(data.slice(), temp.slice(), left.slice(), right.slice());

  }

  (function(data, temp, left, right) {
    setTimeout(function() {
      debugger
      console.log('13. ', 'temp:'+temp);
    }, time * counter);
    counter++;
  })(data.slice(), temp.slice(), left.slice(), right.slice());

  return temp;

}

// while (queue.length) {
//   var data = queue.shift();
//
//   (function (data) {
//     setTimeout(function() {
//       visualizeMergeSort(data);
//     }, time * counter);
//   })(data);
//
//   count++;
// }
//
// function visualizeMergeSort(data) {
//   switch (data.type) {
//     case '쪼개기':
//       divideData(data.target);
//       break;
//     default:
//       break;
//   }
// }
//
// function divideData(data) {
//   for (var i = 0; i < data.length; i++) {
//     innerBox.children[i].classList.add('jump');
//   }
// }
