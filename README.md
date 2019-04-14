# Vanilla Sorting

3가지 정렬 알고리즘을 시각적으로 구현한 과제입니다.

### Bubble Sort
<img src="./complete/BubbleSort.gif" alt="bubble">
<br />

### Insertion Sort
<img src="./complete/InsertionSort.gif" alt="insertion">
<br />

### Selection Sort
<img src="./complete/SelectionSort.gif" alt="selection">

## Setup

Install dependencies

```sh
$ yarn install (or npm install)
```

## Development

```sh
$ yarn dev (or npm run dev)
# visit http://localhost:8080
```

## Features

1. 정렬할 숫자는 최소 5개에서 최대 10개까지 선택할 수 있습니다.
2. 정렬할 숫자를 랜덤으로 선택할 수도 있습니다.
3. 정렬할 숫자 갯수와 정렬 방식을 선택한 후, start 버튼을 누르면 해당 로직의 작동 방식을 볼 수 있습니다.

## Challenges & Things to do 
- IIFE와 setTimeout을 사용해서 각 단계별 움직임을 구현하는 것이 가장 어려운 부분이었습니다. 
- classList로 style을 변경시키는 부분도 아직 익숙치 않아, 연습이 더 필요할 것 같습니다.
- 시간의 부족으로 merge sort와 quick sort는 구현하지 못해 아쉬움이 남습니다.

## Reference
#### 정렬 알고리즘 종류
(시간 복잡도 참고 링크: [Big-O Cheatsheet](http://bigocheatsheet.com/))

1. [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
2. [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)
3. [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort)
4. [Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)
