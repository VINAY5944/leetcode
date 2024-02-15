const calPoints = ops => {
  return ops.reduce((score, op, idx) => {
    if (op === 'C') score.pop()
    else if (op === 'D') score.push(score[score.length - 1] * 2)
    else if (op === '+') score.push(score[score.length - 1] + score[score.length - 2])
    else score.push(+op)
    return score
  }, []).reduce((sum, num) => sum += num, 0)
}