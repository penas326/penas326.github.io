Fortune = {
  selected : 0
}

var responses0 = ['I drank about 700 bottles of wine to handle the rejection.', 'Cooking by newly-married wife. Husband called 911 for murder attempt.','Fight for what you believe in.', 'The days that followed were a chain of struggle.', 'Test me, test me...'];
var responses1 = ['Born a twin; Graduated only child.', '"How long is forever.” she asked. “Sometimes just a second.” he said.','She came. She went. My life was never the same again.','We never really grow up, we only learn how to act in public.','Some people are like Slinkies … not really good for anything, but you can’t help smiling when you see one tumble down the stairs.']
var responses2 = ['Torched the haystack. Found the needle.', 'Apple fell down – pull of gravity. I fell down – full of insanity.', 'From torched skyscrapers, men grew wings.', 'As my wife told our daughter we could not get a puppy because they pee all over the place, my son peed on the carpet.', 'Whistle while you work. ']
var responses3 = ['I didn’t just fall in love. I fell and shattered.', '“Its been an ugly day.” she said and continued. “Tell me something beautiful.” He said her name.', 'Love begins with a smile, grows with a kiss and ends with a tear.', 'd.	Then the story was just like every beautiful love story, the princess married to the prince, then they were living the happy life...', 'To be trustworthy, a man must know when not to listen, when to remain silent and when to speak out.']
var responses4 = ['Sorry soldier, shoes sold in pairs.', 'That night, our game of fugitive ended in an actual cop chase.', 'I fell in love with a teacher once in high school. I would google his license plate to see what information I would get.', '"My God," said the Queen, "I am pregnant. I wonder who did it!"', 'She asked why I was breathing so heavily. I wasnt.']
var responses5 = ['Hospitality: making your guests feel like they’re at home, even if you wish they were.']

$('.fortune-wrapper').click(function() {
  if (Fortune.selected < 5) {
    $(this).addClass('keep');
    $(this).data("selectorder", Fortune.selected);
  }
  Fortune.selected += 1;
});

$('.go-button').click(function(event) {
  event.preventDefault();
  var pullFrom = $('.slide-link[data-selectorder="0"]').data("answers"));
  //var firstresponse = responses + $('.slide-link[data-selectorder="0"]')[Math.floor(Math.random()*)]
  $(".response-one").html(pullFrom[Math.floor(Math.random()*pullFrom.length)]);
  
  if (Fortune.selected > 4) {
    
  }
});