// Sorts events into upcoming and past using today's date, so the lists stay
// correct without anyone having to edit the site after an event happens.
(function () {
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  document.querySelectorAll('[data-events="upcoming"]').forEach(function (list) {
    var past = list.dataset.pastTarget ? document.querySelector(list.dataset.pastTarget) : null;
    var limit = parseInt(list.dataset.limit || '0', 10);
    var shown = 0;

    list.querySelectorAll('.event').forEach(function (ev) {
      var d = new Date(ev.dataset.date + 'T00:00:00');
      if (d < today) {
        if (past) {
          var reg = ev.querySelector('.event__register');
          if (reg) reg.remove(); // registration is closed once an event has happened
          past.insertBefore(ev, past.firstChild); // newest past event first
        }
        else { ev.remove(); }
      } else if (limit && shown >= limit) {
        ev.remove();
      } else {
        shown++;
      }
    });

    if (shown === 0) {
      var empty = list.querySelector('.events__empty');
      if (empty) empty.hidden = false;
    }
  });
})();
