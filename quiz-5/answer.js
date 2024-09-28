function CustomerLoader() {
  const [customer, setCustomer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadCustomerData = async () => {
    setIsLoading(true);
    setError(null); // 이전 오류 상태 초기화
    try {
      const result = await fetchCustomerData(); // 데이터 요청
      setCustomer(result); // 요청 성공 시 데이터 설정
    } catch (err) {
      setError(err); // 오류 발생 시 오류 상태 설정
    } finally {
      setIsLoading(false); // 로딩 상태 종료
    }
  };

  return (
    <div>
      <Button onClick={loadCustomerData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Load Customer Data"}
      </Button>

      {error && <p style={{ color: "red" }}>오류: {error}</p>}

      {customer && (
        <div>
          <h2>{customer.name}</h2>
          <p>나이: {customer.age}</p>
          <p>이메일: {customer.email}</p>
        </div>
      )}
    </div>
  );
}
