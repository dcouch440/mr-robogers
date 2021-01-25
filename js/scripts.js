const robogersTalk = (arg) => {
  let returnArray = [];
  if (!/^[0-9]*$/gm.test(arg)) {
    returnArray = ['Please Enter A Number']
  } else if (parseInt(arg) > 5000) {
    returnArray = ['BZZZTTTTTTT ERROR... NUMBER TO LARGE']
  } else {
    for (let i = 0; i <= arg; i++) {
      const iterateSplit = `${i}`.split('')
      if (iterateSplit.includes('3')) {
        returnArray.push('Won\'t you be my neighbor?');
      } else if (iterateSplit.includes('2')) {
        returnArray.push('Boop!');
      } else if (iterateSplit.includes('1')) {
        returnArray.push('Beep!');
      }
      else {
        returnArray.push(i);
      }
    }
  }
  return returnArray
};
$(document).ready(function() {
  $('#submit-button').click(function(event) {
    event.preventDefault();
    const userInput = document.getElementById('user-input').value;
    const userReturn = robogersTalk(userInput).join(' ');
    document.getElementById('robogres-says-text').innerHTML = userReturn;
  });
});