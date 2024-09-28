## 문제 2: Debounce 함수 구현

김조이는 사용자 입력에 따라 API 요청을 하는 기능을 개발하고 있습니다. 하지만 사용자가 빠르게 연속해서 입력할 때마다 API 요청이 발생하여 서버에 과부하가 걸릴 위험이 있습니다. 이를 해결하기 위해 Debounce 함수를 구현하려고 합니다.

#### 조건

- 함수명: debounce
- 매개변수:
  - 첫 번째 매개변수 func: 호출할 함수 (타입: 함수)
  - 두 번째 매개변수 wait: 지연 시간 (타입: 숫자, 단위: 밀리초)
- 반환값: debounce 처리된 새로운 함수
- debounce된 함수는 마지막 호출 후 지정된 wait 시간만큼 지연된 후에 실행됩니다.
- debounce된 함수가 호출되기 전 추가 호출이 있을 경우, 이전 호출은 모두 취소되고 새로 시작됩니다.

**입출력 예시**

```js
const log = () => console.log("Debounced!");

// 500ms 지연된 Debounce 함수 생성
const debouncedLog = debounce(log, 500);

debouncedLog(); // 500ms 후 "Debounced!" 출력
debouncedLog(); // 이전 호출 취소, 새로 500ms 후 "Debounced!" 출력

setTimeout(() => debouncedLog(), 300); // 300ms 후 호출, 기존 지연 취소, 새로 500ms 후 출력
```

**추가 설명**
이 문제는 JavaScript의 타이머(setTimeout)를 다루는 능력과 클로저(Closure)를 이해하는지 평가하기 위한 문제입니다. 함수를 지연 호출하는 debounce 함수는, 특히 사용자의 입력이 빈번히 발생할 수 있는 검색 기능이나 자동완성 기능 구현 시 필수적인 기술입니다

**문제를 풀고 결과를 알려주세요! 👨‍💻**
