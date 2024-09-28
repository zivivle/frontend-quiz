function debounce({ func, wait }) {
  let timeoutId; // 클로저로 타이머 ID 저장

  return function (...args) {
    // 반환된 함수는 호출될 때마다 debounce가 적용됨
    clearTimeout(timeoutId); // 이전 타이머를 취소
    timeoutId = setTimeout(() => {
      func(...args); // 지정된 시간 후에 func 호출
    }, wait);
  };
}

// 왜 debounce 함수에서 ...args를 사용하나요?
// debounce 함수는 원래 함수(func)가 몇 개의 인자를 받을지 알 수 없기 때문에, 전달된 인자를 모두 수집하여 그대로 전달해야 합니다.

// 예를 들어, greet("Alice", 25)처럼 인자가 여러 개일 수 있고, 인자가 없는 경우도 있을 수 있습니다. 따라서 debounce 함수가
// 반환한 함수에서는 ...args를 사용하여 다음과 같이 인자를 모두 받아서 전달할 수 있도록 구현한 것입니다:
