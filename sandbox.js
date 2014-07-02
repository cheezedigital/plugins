$(document).ready(function() {
  // this runs when the document is ready
  console.log('document now ready');
  var sandbox = $('#sandbox'); //find element and store to variable
  console.log(sandbox.text()); //text function by calling it
  sandbox.css({  //changing the style element
    'color': '#ff0000',
    'border': '1px solid #ff0000',
    'padding': '10px',
    'background-color': '#ffeeee'
  });
  window.setTimeout(function() {
    console.log('timeout fired');
    sandbox.text('ZOMG!');
    var bigText = $('<h1></h1>'); //pass a string of html allowing us to create a new elemet
    bigText.text('BOOM!');
    sandbox.append(bigText); //insert brand new created
    sandbox.animate({ //different types of animation
      'width': '50%'
    }, 1500);
  }, 2500);

  var light = $('<div></div>');
  light.css({
    'width': '40px',
    'height': '40px',
    'padding': '10px',
    'border-radius': '50%',
    'background-color': 'green'

  });
  sandbox.after(light);
  light.data('switch', 'on');

  light.click(function() { //help set metadata onto the function
    var switchState = $(this).data('switch');
    if(switchState == 'on') {
      $(this).data('switch', 'off');
      $(this).css('background-color', 'red');
    } else {
      $(this).data('switch', 'on');
      $(this).css('background-color', 'green');
    }
  });

  $(':text').blur(function() { //go ahead and reset the placeholder
    sandbox.text($(this).val()); //clicking out
  });

  $(':text').focus(function() { //clicking into
    $(this).val('');
  });

  $('#linkarea a').click(function(event) { //wanting to know what the value of the href attr is
    console.log($(this).attr('href'));//preventing the browser from redirecting
    return false;
  });

  //$('a.switch').click(function() { //only binds clicking event to new element
  //  light.click();
  //  return false;
  //});
  //bind a click to all a.switch even future ones
  //appended to DOM.

  $(document).on('click', 'a.switch', function(){
    light.click();
    return false;
  }); //binding event to entire document

  var newSwitch = $('<a href="#" class="switch">Switch</a>'); //creating a new element with a class of swtich
  sandbox.after(newSwitch); //then append to sandbox

  //$('#language').change(function(){
  //  alert($(this).find('option:selected').attr('rel'));
  //});

  $('select#langs').change(function() {
    sandbox.text($(this).val()); //this is the select m
  });



});

//planning out what i want to do. how would I do this manually. third. writing out what it is
//we want to do.
