// 가짜 API 함수 (실제 구현 X)
function fetchFromAPI(query, options) {
  return new Promise((resolve, reject) => {
    const { signal } = options;
    const timeoutId = setTimeout(() => {
      resolve(`${query}에 대한 자동완성 결과`);
    }, Math.random() * 1000);

    // 요청이 중단되었을 때 타이머를 정리하고, 오류를 발생시킴
    signal.addEventListener("abort", () => {
      clearTimeout(timeoutId);
      reject(new DOMException("요청이 취소되었습니다.", "AbortError"));
    });
  });
}

let lastAbortController = null;

async function fetchAutocompleteResults({ query, setResults }) {
  // 이전 요청을 취소하기 위해 이전 AbortController를 중단
  if (lastAbortController) {
    lastAbortController.abort();
  }

  // 새로운 AbortController 생성
  const abortController = new AbortController();
  lastAbortController = abortController;

  try {
    // fetchFromAPI를 호출할 때, AbortSignal을 전달하여 취소 가능하도록 함
    const results = await fetchFromAPI(query, {
      signal: abortController.signal,
    });
    setResults(results);
  } catch (error) {
    // 요청이 중단되었을 때 발생하는 오류는 무시
    if (error.name === "AbortError") {
      console.log("이전 요청이 중단되었습니다.");
    } else {
      console.error("요청 중 오류 발생:", error);
    }
  }
}

let lastToken = 0;

async function fetchAutocompleteResults(query, setResults) {
  // 새로운 토큰 생성 // 고유한 값을 생성한다면 어떤 방법이든 상관없음
  const currentToken = ++lastToken;

  try {
    // 가짜 API 함수 호출 (토큰은 실제로 전달되지 않지만, 설명을 위해 사용)
    const results = await fetchFromAPIWithToken(query, currentToken);

    // 응답이 올 때, 현재 토큰이 마지막 토큰과 동일한지 확인
    if (currentToken === lastToken) {
      setResults(results); // 마지막 요청의 응답인 경우에만 결과를 저장
    } else {
      console.log("요청 무시: 오래된 요청입니다.");
    }
  } catch (error) {
    console.error("요청 중 오류 발생:", error);
  }
}
