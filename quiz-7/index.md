## 문제 7: 한 번에 하나씩

김토스는 웹 서비스와 백엔드 API를 연동하고 있으며, 외부 API 호출 시 특정 규칙을 준수하여 안전하게 데이터를 전송해야 합니다.

**다음은 API 연동 규칙입니다**

- 첫 번째 API 요청은 무조건 성공합니다. 응답으로 result와 token을 반환합니다.
- 두 번째 요청은 첫 번째 요청에서 반환된 token을 요청에 실어 전송합니다. 마찬가지로 result와 token을 반환합니다.
- 세 번째, 네 번째 요청을 포함한 이후 모든 요청은 직전 요청의 응답에 대한 token을 전송해야 합니다.
- 첫 번째 요청을 제외하면, 직전 요청에 반환된 token을 전송하지 않은 경우 오류가 발생합니다.

### 동시에 여러 번 호출되어도 규칙에 따라 토큰과 함께 순차적으로 요청하는 solution 함수를 작성하세요.

#### 조건

- solution 함수의 인자로 API를 호출하는 callAPI 함수가 주어집니다.
- solution 함수는 다음과 같은 규칙을 만족해야 합니다:
  - 첫 번째 요청 시, callAPI를 호출하여 응답으로 받은 token을 저장합니다.
  - 이후 요청은 항상 이전 요청의 token을 사용하여 callAPI를 호출합니다.
  - 모든 요청은 순차적으로 진행되어야 하며, 중복 요청이 발생하지 않도록 해야 합니다.

**API 함수 예시**
아래와 같은 구조로 API 호출 함수를 정의하여 사용합니다:

```js
function callAPI(token = "") {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        result: "응답 데이터",
        token: token ? `${token}-UPDATED` : "INITIAL-TOKEN",
      });
    }, 1000);
  });
}
```

**입출력 예시**

```js
const response1 = await solution(callAPI);
// -> 응답 데이터 1회차 (첫 번째 요청)

const response2 = await solution(callAPI);
// -> 응답 데이터 2회차 (두 번째 요청, 첫 번째 요청의 token 사용)

const response3 = await solution(callAPI);
// -> 응답 데이터 3회차 (두 번째 요청의 token 사용)
```

**유의 사항**

- callAPI 함수를 직접 변경할 수 없습니다.
- callAPI 함수가 실패하는 경우는 고려하지 않습니다.
- solution 함수가 호출되는 순서와 간격은 임의로 설정될 수 있습니다.

**문제를 풀고 결과를 알려주세요! 👨‍💻**
