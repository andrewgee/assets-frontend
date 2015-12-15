/**
 * Character Counter Module
 *
 * Usage:
 *
 *  <div data-char-counter>
 *
 *    <textarea data-field maxLength="250"></textarea>
 *
 *    <p><span data-counter></span> remaining <span data-text></span></p>
 *
 *  </div>
 *
 */



/**
 *
 * @param $counters
 */
var initCounters = function($counters) {

  $counters.each(function() {
    var $counter = $(this),
        $input   = $counter.find('[data-char-field]');

    // only proceed if max length is set
    if(!$input.attr('maxLength')) { return; }

    bindEvents($counter);

    setCounterText($counter);

  });

};

/**
 *
 * @param $counter
 */
var bindEvents = function($counter) {

  $counter.find('[data-char-field]').on('input', function() {
    setCounterText($counter);
  });

};

/**
 *
 * @param $counter
 */
var setCounterText = function($counter) {

  var $input    = $counter.find('[data-char-field]'),
      count     = $input.val().length,
      remaining = parseInt($input.attr('maxLength'), 10) - count;

  $counter.find('[data-counter]').text(remaining);
  $counter.find('[data-text]').text(count === 1 ? 'character' : 'characters');

};

/**
 * if any char counters on page, init
 */
var init = function() {

  var $counters = $('[data-char-counter]');

  // only run module if counter html exists
  if($counters.length) initCounters($counters);

};

module.exports = function() {
  return {
    init: init
  };
};
