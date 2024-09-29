function safeAccess(object, path) {
  // 경로를 점(.)으로 구분하여 배열로 변환
  const keys = path.split(".");

  const current = object;

  for (const key of keys) {
    // 객체의 속성이 존재하지 않거나 undefined일 경우 undefined 반환
    if (current === undefined) {
      return undefined;
    }
    // 다음 객체로 이동
    current = current[key];
  }

  return current;
}
