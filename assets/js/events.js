// Keeps event lists correct between site rebuilds.
//
// The site is built with events already split into upcoming and past (see
// _includes/events-list.html), but it is only rebuilt when someone edits it.
// This script re-checks every upcoming event against the current time in the
// browser, so an event moves to "Past events" as soon as it ends.
// Each event carries data-start and data-end as Unix timestamps (seconds),
// worked out in UK time when the site was built, so the visitor's own time
// zone makes no difference.
(function () {
  var now = Date.now() / 1000;

  function cards(list) {
    return Array.prototype.slice.call(list.querySelectorAll('.event'));
  }

  function toggleEmpty(list, count) {
    var empty = list.querySelector('.events__empty');
    if (empty) empty.hidden = count > 0;
  }

  document.querySelectorAll('[data-events="upcoming"]').forEach(function (list) {
    var past = list.dataset.pastTarget ? document.querySelector(list.dataset.pastTarget) : null;
    var limit = parseInt(list.dataset.limit || '0', 10);

    // Move or drop anything that has finished since the last build.
    cards(list).forEach(function (ev) {
      if (parseFloat(ev.dataset.end) < now) {
        if (past) {
          var reg = ev.querySelector('.event__register');
          if (reg) reg.remove(); // registration closes once an event is over
          ev.hidden = false;
          past.appendChild(ev);
        } else {
          ev.remove();
        }
      }
    });

    // Soonest first, then apply the limit (e.g. three on the homepage).
    var remaining = cards(list).sort(function (a, b) {
      return parseFloat(a.dataset.start) - parseFloat(b.dataset.start);
    });
    var empty = list.querySelector('.events__empty');
    remaining.forEach(function (ev, i) {
      ev.hidden = limit > 0 && i >= limit;
      list.insertBefore(ev, empty);
    });
    toggleEmpty(list, remaining.length);

    if (past) {
      // Most recent first.
      var pastEmpty = past.querySelector('.events__empty');
      var done = cards(past).sort(function (a, b) {
        return parseFloat(b.dataset.start) - parseFloat(a.dataset.start);
      });
      done.forEach(function (ev) { past.insertBefore(ev, pastEmpty); });
      toggleEmpty(past, done.length);
    }
  });
})();
