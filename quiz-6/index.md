## 문제 6: Safe Access - No More Errors [2022 토스 기출문제 변형]

김토스는 복잡한 데이터 객체에서 안전하게 값을 추출하는 함수를 만들려고 합니다. 외부 API를 사용할 때, 데이터 객체의 중첩된 프로퍼티가 undefined이거나, 중간에 특정 값이 존재하지 않는 경우가 있어, TypeError가 발생할 수 있습니다. 이를 해결하기 위해 안전하게 객체 속성을 추출하는 함수를 구현해 보려고 합니다.

### 다음 요구사항을 만족하는 safeAccess 함수를 구현하세요.

#### 조건

- 함수명: safeAccess
- 매개변수:
  - 첫 번째 매개변수 object: 확인할 대상 객체.
  - 두 번째 매개변수 path: 점(.)으로 구분된 경로 문자열.
- 반환값: 경로를 따라 해당 프로퍼티 값을 반환합니다. 만약 경로 중간에 undefined 또는 값이 존재하지 않는 경우, undefined를 반환합니다.
- 추가 요구사항:
  - safeAccess 함수는 중첩된 경로의 값을 안전하게 추출할 수 있어야 합니다.
  - 중간 경로가 undefined 또는 null인 경우, undefined를 반환합니다.
  - 함수는 반드시 재귀나 반복문을 사용하여 구현해야 합니다.

**예시 데이터**

```js
// profile 객체의 address가 undefined인 경우
const object1 = {
  profile: undefined,
};

// profile 객체가 존재하지만 city가 없는 경우
const object2 = {
  profile: {
    address: undefined,
  },
};

// 모든 경로가 존재하는 경우
const object3 = {
  profile: {
    address: {
      city: "Seoul",
      zipCode: "12345",
    },
  },
};
```

**입출력 예시**

```js
safeAccess(object1, "profile.address.city"); // -> 반환 값: undefined
safeAccess(object2, "profile.address.city"); // -> 반환 값: undefined
safeAccess(object3, "profile.address.city"); // -> 반환 값: "Seoul"
safeAccess(object3, "profile.address.zipCode"); // -> 반환 값: "12345"
safeAccess(object1, "profile.address"); // -> 반환 값: undefined
safeAccess(object1, "profile"); // -> 반환 값: undefined
```

**참고 사항**

- 객체의 중첩된 속성을 안전하게 탐색하기 위해 split() 메서드와 반복문 또는 재귀를 사용할 수 있습니다.
- typeof와 !== undefined를 사용하여 프로퍼티가 존재하는지 확인하세요.

**문제를 풀고 결과를 알려주세요! 👨‍💻**
