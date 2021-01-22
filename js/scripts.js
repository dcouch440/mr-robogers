const robogersTalk = (arg) => {
  const returnArray = [];
  for (let i = 0; i <= arg; i++) {
    const iterateSplit = arg > 9 ? `${i}`.split('') : `${i}`.split('')
    if (iterateSplit.includes('3')) {
      returnArray.push('Won\'t you be my neighbor?');
    }else if (iterateSplit.includes('2')) {
      returnArray.push('Boop!');
    }else if (iterateSplit.includes('1')) {
      returnArray.push('Beep!');
    }
    else {
      returnArray.push(i)
    }
  }
  return returnArray;
};
robogersTalk(3)