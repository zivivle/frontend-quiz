let isRequesting = false; // 현재 요청이 진행 중인지 여부를 나타내는 변수
let currentToken = ""; // 현재 저장된 토큰

async function solution(callAPI) {
  // 중복 요청 방지
  if (isRequesting) {
    console.log("요청이 진행 중입니다. 대기 중입니다...");
    return;
  }

  try {
    isRequesting = true;
    // API 호출 및 토큰 저장
    const response = await callAPI(currentToken);
    console.log("응답 결과:", response.result);

    // 토큰 갱신
    currentToken = response.token;
  } catch {
    console.error("API 호출중 오류 발생", error);
  } finally {
    isRequesting = false;
  }
}
