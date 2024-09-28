// 예시 데이터
const customersData = [
  { name: "Kim", email: "kim@example.com" },
  { name: "Lee", email: "lee@example.com" },
  { name: "Park", email: "park@example.com" },
];

export function App() {
  return (
    <div>
      <CustomerList customers={customersData} />
    </div>
  );
}

export function CustomerList({ customers }) {
  const [filter, setFilter] = useState("");

  // 고객 목록 필터링 함수
  const memoizedFilteredCustomers = useMemo(() => {
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [customers, filter]);

  const handleChange = useCallback((e) => setFilter(e.target.value), []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={handleChange}
      />
      <ul>
        {memoizedFilteredCustomers.map((customer) => (
          <MemoizedCustomerItem key={customer.email} customer={customer} />
        ))}
      </ul>
    </div>
  );
}

// 사용자 정의 비교 함수 작성
const areEqual = (prevProps, nextProps) => {
  // `customer` 객체의 각 속성을 비교하여 동일할 경우 true 반환
  return (
    prevProps.customer.name === nextProps.customer.name &&
    prevProps.customer.email === nextProps.customer.email
  );
};

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

const MemoizedCustomerItem = React.memo(CustomerItem, areEqual);
