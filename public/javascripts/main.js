$(document).ready(function(){
	$('#submit').click(function () {
    var twit = $('#twit').val();
    if (twit) {
      $.post("/tweets", { "twit": twit },
        function(data){
            if (!data.err){
              $('#twit').val('');
            }
        }, 'json');
    }
  });

  setInterval(twitFeed, 2000);
});

var twitFeed = function(){
  $.get('/index/update', function(data){
    $('#twits').html(data);
  });
}