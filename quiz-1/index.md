## 문제 1: Custom Filter

Zoey는 고객 데이터를 정제하고 있습니다. 고객 데이터를 필터링하는 함수를 작성하려고 합니다. 하지만 각 필터링 조건이 독립적이며, 고객 데이터의 구조가 복잡해 조건을 관리하기가 쉽지 않습니다.

### 다음 filterCustomers 함수를 구현하세요:

#### 조건

- 함수명: filterCustomers
- 매개변수:
  - 첫 번째 매개변수 customers: 고객 데이터 배열 (각 객체는 name, age, email 프로퍼티를 가짐)
  - 두 번째 매개변수 filters: 객체 형태의 필터 조건 (예: { age: 25 } 또는 { name: "Kim", age: 30 })
- 출력:
  - filters 객체의 모든 조건을 만족하는 고객 데이터를 필터링한 배열을 반환합니다.
  - 필터 조건에 포함되지 않은 프로퍼티는 무시합니다.
  - 필터 조건에 undefined 또는 빈 값이 들어오면 해당 조건을 무시합니다.

**입출력 예시**

```js
const customers = [
  { name: "Kim", age: 30, email: "kim@example.com" },
  { name: "Lee", age: 25, email: "lee@example.com" },
  { name: "Park", age: 30, email: "park@example.com" },
];

filterCustomers(customers, { age: 30 });
// -> [{ name: "Kim", age: 30, email: "kim@example.com" }, { name: "Park", age: 30, email: "park@example.com" }]

filterCustomers(customers, { name: "Lee", email: "lee@example.com" });
// -> [{ name: "Lee", age: 25, email: "lee@example.com" }]

filterCustomers(customers, { age: undefined, email: "" });
// -> [{ name: "Kim", age: 30, email: "kim@example.com" }, { name: "Lee", age: 25, email: "lee@example.com" }, { name: "Park", age: 30, email: "park@example.com" }]
```

**제한 사항**

- 고객 객체의 프로퍼티는 항상 문자열 또는 숫자입니다.
- 필터 객체는 최대 3개의 프로퍼티를 가질 수 있습니다.
- 추가 설명: 필터 조건이 undefined 또는 빈 값이면 무시되기 때문에, 입력된 조건들 중 유효한 조건만을 사용해 데이터를 필터링해야 합니다.

**문제를 풀고 결과를 알려주세요! 👨‍💻**
