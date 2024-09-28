const customers = [
  { name: "Kim", age: 30, email: "kim@example.com" },
  { name: "Lee", age: 25, email: "lee@example.com" },
  { name: "Park", age: 30, email: "park@example.com" },
];

filterCustomers(customers, { age: 30 });

function filterCustomers({ customers, filters }) {
  const filterKeys = Object.keys(filters);

  const filteredCustomers = customers.filter((customer) => {
    return filterKeys.map((key) => {
      if (customer[key]) {
        customer[key] === filters[key];
      }
    });
  });

  return filteredCustomers;
}

function filterCustomers(customers, filters) {
  const filterKeys = Object.keys(filters);

  // 필터 조건이 없는 경우 모든 고객 반환
  if (filterKeys.length === 0) return customers;

  return customers.filter((customer) => {
    // 모든 필터 조건을 만족해야 true를 반환
    return filterKeys.every((key) => {
      // filters[key]가 빈 값이거나 undefined면 조건을 무시하고 true를 반환
      if (filters[key] === undefined || filters[key] === "") {
        return true;
      }
      // 필터 조건을 만족해야 함
      return customer[key] === filters[key];
    });
  });
}
