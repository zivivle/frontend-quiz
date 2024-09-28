## 문제 3: 비동기 API 요청 중복 방지

김조이는 사용자에게 검색어 자동완성 기능을 제공하는 입력창을 개발하고 있습니다. 사용자가 입력할 때마다 API 요청을 보내는 기능을 구현했는데, 사용자가 빠르게 여러 번 입력을 하면 중복된 요청이 서버로 보내지는 문제가 발생했습니다. 또한, 이전 요청의 응답이 늦게 도착하면, 오래된 응답 데이터가 최신 데이터로 덮어써지는 상황도 발생하고 있습니다.

### 이를 해결하기 위해 다음 fetchAutocompleteResults 함수를 구현하세요.

#### 조건

- 함수명: fetchAutocompleteResults
- 매개변수:
  - 첫 번째 매개변수 query: 사용자가 입력한 검색어 (문자열)
  - 두 번째 매개변수 setResults: 검색 결과를 저장하는 함수 (타입: 함수)
- 함수는 query가 변경될 때마다 새로운 API 요청을 보내지만, 이전 요청을 취소해야 합니다.
- 이전 요청이 취소되었는지 확인하는 방법으로, 가장 최근 요청의 응답만 setResults 함수에 전달하여 저장합니다.
- API 요청 시에는 다음과 같은 가짜 API 호출 함수를 사용해주세요:

```js
// 가짜 API 함수 예시 (실제 구현 X)
function fetchFromAPI(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${query}에 대한 자동완성 결과`);
    }, Math.random() * 1000); // 0~1000ms의 랜덤한 지연 시간
  });
}
```

**입출력 예시**

```js
let latestResults = "";

// 검색 결과를 저장하는 함수
function setResults(results) {
  latestResults = results;
  console.log("검색 결과:", latestResults);
}

// `fetchAutocompleteResults` 함수 호출 예시
fetchAutocompleteResults("김", setResults); // "김에 대한 자동완성 결과" 출력
fetchAutocompleteResults("김토", setResults); // "김조에 대한 자동완성 결과" 출력
fetchAutocompleteResults("김토스", setResults); // "김조이에 대한 자동완성 결과" 출력 (이전 요청은 취소됨)
```

**추가 설명**

- 이 문제는 비동기 처리를 안전하게 다루는 능력을 평가하기 위해 출제되었습니다.
- 실제 검색 기능에서 사용자의 빠른 입력에 따라 API 요청이 계속 발생하는 경우, 최신 요청에 대한 응답만 처리하고 이전 요청은 무시해야 합니다.
- 구현 시 AbortController 또는 토큰을 이용한 요청 관리 방법을 사용할 수 있습니다.

**문제를 풀고 결과를 알려주세요! 👨‍💻**
