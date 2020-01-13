function analyze(arrIn) {
  if (arrIn.length > 0) {
    return {
      average:
        arrIn.reduce((total, curr) => {
          return total + curr;
        }) / arrIn.length,
      min: Math.min(...arrIn),
      max: Math.max(...arrIn),
      length: arrIn.length,
    };
  }
  return {};
}

module.exports = analyze;
