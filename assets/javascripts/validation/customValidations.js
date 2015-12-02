require('jquery');

module.exports = function() {

  jQuery.validator.addMethod('nino', function(value, element) {
    return /^[A-Za-z]{2}\d{6}[A-Za-z]$/.test(value);
  });


  // Check if value of input is correctly contained in suggestion data
  jQuery.validator.addMethod('suggestion', function (value, element) {
    var suggestions;
    var validSuggestion = false;

    try {
      suggestions = JSON.parse($('#suggestions').html())
    } catch (e) {
      //TODO add reporting?
    }

    $(suggestions).each(function (index, suggestion) {
        if (value.toLowerCase() === suggestion.title.toLowerCase() || value === suggestion.value) {
          validSuggestion = true;
          return false;
        }
    });

    return validSuggestion;
  });
};
