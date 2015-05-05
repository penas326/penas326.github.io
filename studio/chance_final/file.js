Fortune = {
  selected : 0
}

$('.fortune-wrapper').click(function() {
  if (Fortune.selected < 5) {
    $(this).addClass('keep');
  }
  Fortune.selected += 1;
});

$('.go-button').click(function(event) {
  event.preventDefault();
  
  if (Fortune.selected > 4) {
    
    open('fortune_page.html');
    
  }
});