$(function() {
  $('.fancy_title').lettering();
  $('#calendar').fullCalendar({
    dayClick: function(date, jsEvent, view) {
      console.log('Day Clicked');
      console.log(date);
      console.log(jsEvent);
      console.log(view);
    },
    eventClick: function(calEvent, jsEvent, view) {
      console.log('Event Clicked');
      console.log(calEvent);
      console.log(jsEvent);
      console.log(view);
    },
    events: [
      {
        title: 'Fun Day!',
        start: '2014-07-02'
      },
      {
        title: 'Hump Day!',
        start: '2014-07-02'
      },
      {
        title: 'Fireworks Day',
        start: '2014-07-04'
      }
    ]
  });
});
