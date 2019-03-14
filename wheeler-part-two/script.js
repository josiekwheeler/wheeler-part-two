var getSuggestionByEventType = function(eventType) {
  if (eventType === 'casual') {
    return 'something comfy';
  } else if (eventType === 'semi-formal') {
    return 'a polo';
  } else if (eventType === 'formal') {
    return 'a suit';
  }
};

var getSuggestionByTemp = function(tempFahr) {
  if (tempFahr <= 54) {
    return 'a coat.';
  } else if (tempFahr <= 70) {
    return 'a jacket.';
  } else if (tempFahr > 71) {
    return 'no jacket.';
  }
};

var eventType = prompt('What kind of even are you going to?');
var tempFahr = prompt('What is the temperature today?');
var result = 'Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear ' + getSuggestionByEventType(eventType) + ' and ' + getSuggestionByTemp(tempFahr);

document.write(result);
