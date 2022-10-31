// function takes in array with emojis
// look through all the emojis to see if theres raisins 
// if theres raisins return raisin alert
// if no raisins return all good! 

const raisinAlarm = function(cookie) {
  let answer = '';

  for (let type of cookie) {
    if (type === '🍇') {
      return 'raisin bullshit';
    } else {
      answer = 'all good';
    }
  } return answer;

};

console.log(raisinAlarm(["🍫", "🍫", "🍫", "🍇"]));

console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));