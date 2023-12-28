function midChar(str) {
  const mid = str.length / 2;
  if (mid % 2 === 0) {
    return str[mid - 1] + str[mid];
  }
  return str[Math.floor(mid)];
}

console.log(midChar('nihal'))
