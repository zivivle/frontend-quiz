## 문제 4: React 컴포넌트 렌더링 최적화

김조이는 고객 지원팀을 위해 대규모 데이터 목록을 관리하는 React 애플리케이션을 개발하고 있습니다. 하지만 데이터가 많아질수록 렌더링 성능이 저하되는 문제가 발생하고 있습니다. 특히, 사용자가 필터를 적용할 때마다 전체 리스트가 다시 렌더링되고 있어, 성능 저하가 더욱 두드러지고 있습니다.

김조이는 이 문제를 해결하기 위해 React.memo와 useMemo, useCallback 훅을 활용하여 불필요한 렌더링을 최소화하고자 합니다.

### 다음 CustomerList 컴포넌트가 불필요한 렌더링 없이 최적화되도록 코드를 수정하세요.

#### 조건

- 컴포넌트 구조:
  - CustomerList 컴포넌트는 customers 배열을 CustomerItem 컴포넌트 리스트로 렌더링합니다.
  - CustomerItem 컴포넌트는 customer 객체의 name과 email을 표시합니다.
- 렌더링 최적화:
  - CustomerList 컴포넌트는 customers 배열이 변경되지 않는 한 다시 렌더링되지 않아야 합니다.
  - 각 CustomerItem 컴포넌트는 해당 customer 객체가 변경된 경우에만 다시 렌더링되어야 합니다.
- 함수 최적화:
  - CustomerList의 필터 함수와 이벤트 핸들러도 최적화해야 합니다.

**입출력 예시**

```js
import React, { useState, useEffect } from "react";

// 고객 리스트를 렌더링하는 컴포넌트
function CustomerList({ customers }) {
  const [filter, setFilter] = useState("");

  // 고객 목록 필터링 함수
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredCustomers.map((customer) => (
          <CustomerItem key={customer.email} customer={customer} />
        ))}
      </ul>
    </div>
  );
}

// 고객 항목을 렌더링하는 컴포넌트
function CustomerItem({ customer }) {
  console.log("렌더링된 고객:", customer.name);
  return (
    <li>
      <h3>{customer.name}</h3>
      <p>{customer.email}</p>
    </li>
  );
}

// 예시 데이터
const customersData = [
  { name: "Kim", email: "kim@example.com" },
  { name: "Lee", email: "lee@example.com" },
  { name: "Park", email: "park@example.com" },
];

function App() {
  return (
    <div>
      <CustomerList customers={customersData} />
    </div>
  );
}

export default App;
```

**요구 사항**

1. CustomerList가 customers가 변경되지 않으면 재렌더링되지 않도록 React.memo를 사용하여 최적화하세요.
2. CustomerItem이 해당 customer 객체가 변경된 경우에만 재렌더링되도록 React.memo와 props 비교 함수를 사용하세요.
3. CustomerList의 필터 함수는 useMemo를 사용하여 filter가 변경될 때만 다시 계산되도록 최적화하세요.
4. setFilter를 호출하는 onChange 핸들러는 useCallback을 사용하여 최적화하세요.

**문제를 풀고 결과를 알려주세요! 👨‍💻**
