var Fortune = {
  selected : 0
}

var responses0 = ['I drank about 700 bottles of wine to handle the rejection.', 'Cooking by newly-married wife. Husband called 911 for murder attempt.','Fight for what you believe in.', 'The days that followed were a chain of struggle.', 'Test me, test me...'];
var responses1 = ['Born a twin; Graduated only child.', '"How long is forever.” she asked. “Sometimes just a second.” he said.','She came. She went. My life was never the same again.','We never really grow up, we only learn how to act in public.','Some people are like Slinkies … not really good for anything, but you can’t help smiling when you see one tumble down the stairs.']
var responses2 = ['Torched the haystack. Found the needle.', 'Apple fell down – pull of gravity. I fell down – full of insanity.', 'From torched skyscrapers, men grew wings.', 'As my wife told our daughter we could not get a puppy because they pee all over the place, my son peed on the carpet.', 'Whistle while you work. ']
var responses3 = ['I didn’t just fall in love. I fell and shattered.', '“Its been an ugly day.” she said and continued. “Tell me something beautiful.” He said her name.', 'Love begins with a smile, grows with a kiss and ends with a tear.', 'Then the story was just like every beautiful love story, the princess married to the prince, then they were living the happy life...', 'To be trustworthy, a man must know when not to listen, when to remain silent and when to speak out.']
var responses4 = ['Sorry soldier, shoes sold in pairs.', 'That night, our game of fugitive ended in an actual cop chase.', 'I fell in love with a teacher once in high school. I would google his license plate to see what information I would get.', '"My God," said the Queen, "I am pregnant. I wonder who did it!"', 'She asked why I was breathing so heavily. I wasnt.']
var responses5 = ['Hospitality: making your guests feel like they’re at home, even if you wish they were.', 'Always stay in a company of a people who are loyal and trustworthy.', 'We are outlaws on the run', 'If that jubilee don’t come….maybe I’ll meet you on the run.', 'Side one or side two?']
var responses6 = ['They tried to bury us - They didnt realize we are seeds.', 'Nevertheless, he tried a third time.', 'I was on my third glass of whiskey when the stray cat I let in out of the rain began giving birth to kittens on my couch.', 'I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness.', 'If anyone ever tells you that your work is unprofessional, remember: amateurs built the Ark and professionals built the Titanic.']
var responses7 = ['Just remember…if the world didn’t suck, we’d all fall off.', 'And I have spent many hours with it over the years, never getting tired of it.', 'I loved them both, but it was all about the mood of the moment.', 'It’s a feeling that resonates with any of us who have lost a loved one, and especially a life partner.', 'Never the same again.']
var responses8 = ['It takes 6 months to build a Rolls-Royce and 13 hours to built a Toyota', 'Don’t discount the underdog.', 'Some people hear voices.. Some see invisible people.. Others have no imagination whatsoever.', 'Clean slate.', 'When the cold wind blows, it will ease your mind.']
var responses9 = ['For Sale, Baby Shoes, Never Worn', 'The poor man who finds the shoe lying on the track will now have a pair he can use.', 'Indeed. What an excellent question.', 'Wildflower seed on the sand and stone, may the four winds blow you safely home.', 'Each of us has our individual path, for our steps alone.']
var responses10 = ['My greatest inspiration was when I said I wanted to become a comedian and everyone laughed!!', 'I don’t really want to be an engineer but I REALLY don’t want to be a failure to my parents.', 'One day I woke up and the first thing I thought of was, it is not working anymore.', 'Throw out nonessential numbers. This includes age, weight and height. Let the doctors worry about them. That is why you pay them.', 'Cause, playing rock and roll...it’s fun!']
var responses11 = ['One of the worst feelings in the world is when you realize you weren’t really paranoid after all.', 'Worrying works! 90% of the things I worry about never happen.', 'An accident can take it all.', 'I will drink to your health, share your wealth, run your life, steal your wife.', 'I like your smile, but I am not your type, don not shake the tree when its fruit is not ripe.']
var responses12 = ['I traveled around the world for a year and only felt lost once I arrived “home”.', 'Do not count your chickens before they are hatched.', 'An idle mind is the devils workshop.', 'Ran into a rain-storm / Ducked into a bar door.', 'The turtle carries the earth on its back.']
var responses13 = ['Do you believe in love at first sight or do I have to walk past you again?', 'But the compass always points to…', 'In a “place” of imagination.', 'Do you feel connected?', 'Standing on the moon with nothing left to do. Lovely view of heaven, but I would rather be with you.']
var responses14 = ['She went to sleep feeling bored, unaware that half way across the city a guy went to sleep early just so that he could dream of her.', 'In the end, it was meant to be.', 'I just invent, then wait until man comes around to needing what I have invented.', 'It looks like water, but it tastes like wine.', 'Between lives']
var responses15 = ['A Mistake can cost you millions but a lesson learnt can bring back BILLIONS.', 'He cannot win for losin.','All he’s lost he shall regain', 'And the old man never was the same again.', 'You can’t close the door when the wall’s caved in.']
var responses16 = ['I threw away an opportunity because I was scared, now I’m scared I will never have an opportunity.', 'When in doubt, mumble.', 'Treasure your uniqueness. It is a gift given only to you. Enjoy it and share it!', 'The most important relationship you can have, is the one you have with yourself.', 'When you are sure of yourself, your confident level is steady and you are never shaky you do the things calmly and successfully.']
var responses17 = ['As parents, we sometimes go too far trying to help and protect our kids from lifes harsh realities and disappointments.', 'We don not want our kids to struggle like we did.', 'No point working so hard to provide for the people you have no time to spend with.', 'I love you more than words can tell.', 'Speaks his name for you were born to me.']
var responses18 = ['In my frustrated urgency I began pounding, trying to bust the lone port-o-potty door open. Amid all the commotion, I heard a deep drawl informatively resound, “Occupado.”', 'You can borrow from the devil, you can borrow from a friend, But the devil will give you twenty, when your friend got only ten.', 'Never trust a Prankster.', 'Women with brown eyes.', 'Roll away... the dew...']
var responses19 = ['Knowledge is knowing a tomato is a fruit; Wisdom is not putting it in a fruit salad.', 'How is it one careless match can start a forest fire, but it takes a whole box to start a campfire?', 'Reveal things as they are.', 'I am very curious to know about the experience of others who close their eyes to see.', 'Its meanings are endless.']
var responses20 = ['Paramedics finished her text, “…love you.”', 'It’s not the fall that kills you; it’s the sudden stop at the end.', 'Ice cream is good for the soul sometimes.', 'We are so concerned about what others are doing that we don not do anything ourselves.', 'Time and tide wait for no one.']
var responses21 = ['His confession made me wonder how many other chances I missed because I was too scared.', 'No one can reach out to others in the same way that you can.', 'If you really want to do something, start doing it now.', 'If you get confused just listen to the music play.', 'Maybe give them a second chance.']
var responses22 = ['I always take life with a grain of salt, …plus a slice of lemon, …and a shot of tequila.', 'Having "Peace of Mind" is not a strenuous job; it is an effortless process!', 'Live simply. Love generously. Care deeply. Speak kindly.', 'Don not put the key to your happiness in someone elses pocket but into your own.', 'Is the cup half empty or half full?']
var responses23 = ['But if you hold my hand, I know for sure that no matter what happens, you will never let my hand go.', 'Birth, death, and reincarnation.', 'The sun blinked. I mean, there was a moment of complete darkness, and then the sun came back on.', 'Note the wheel of fire in the air.', 'This must be heaven.']
var responses24 = ['Never test the depth of the water with both feet.', 'He jumped down and grabbed the branch just as the tiger reached the cliff. The tiger growled viciously as the man sighed a great sigh of relief.', 'One man gathers, but another man steals.', 'I asked him for mercy, he gave me a gun.', 'When life looks like easy street, there is danger at your door.']
var responses25 = ['Having successfully broken into his house, I fed his dog and did a load of laundry.', 'Change is inevitable, except from a vending machine.', 'If you keep your feet firmly on the ground, you’ll have trouble putting on your pants.', 'He didn’t know what he was capable of until he took a chance.', 'No time to hate, barely time to wait.']
var responses26 = ['If you did not exist, there would be a hole in creation, a gap in history, something missing from the plan for humankind.', 'Expect more from yourself.', 'I am not often right, but I have never been wrong.', 'Driving that train, high on cocaine', 'A leaf of all colors plays a golden-string fiddle']
var responses27 = ['I find fictional characters to be better than real people because fictional characters are whatever I want them to be.', 'Friends can come from anywhere.', 'Talk more often than you think.', 'With one breath we smiled.', 'May you always do for others and let others do for you.']
var responses28 = ['Finally, he had no more words.', 'My opinions may have changed, but not the fact that I am right.', 'You are such a good friend that if we were on a sinking ship together and there was only one life jacket… I’d miss you heaps and think of you often.', 'All night pouring, but not a drop on me.', '"You’re a clever man, Mr. James, and that is a good question, but I can answer it."']
var responses29 = ['The road between dawn and dark is no simple highway.', 'Drifting and dreaming.', 'It was the weirdest story ever told.', 'Until next time my friend.', 'Let your tracks be lost in the dark and snow.']


$('.fortune-wrapper').click(function() {
  if (Fortune.selected < 5) {
    $(this).addClass('keep');
    $(this).data("selectorder", Fortune.selected);
    console.log(Fortune.selected);
  }
  Fortune.selected += 1;
});

$('.go-button').click(function(event) {
  event.preventDefault();
  $('.keep').each(function() {
    // console.log($(this).data('answers'));
    var random_num = Math.floor(Math.random() * 5),
        answer     = eval($(this).data('answers'))[random_num],
        list       = '<ol>' + answer + '</ol>';
        
    $('.text-fortune').prepend(list);
    
  });

});