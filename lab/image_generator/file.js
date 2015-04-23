var cats = ["http://hdwallpapersfit.com/wp-content/uploads/2015/02/national-geographic-wallpapers.jpg","http://proof.nationalgeographic.com/files/2014/02/NationalGeographic_1754277-web-2.jpg","http://images2.fanpop.com/images/photos/7000000/Nature-Around-the-World-national-geographic-7018225-1680-1050.jpg","http://ngm.nationalgeographic.com/2011/11/albertine-rift/img/13-rift-floor-queen-elizabeth-park_1600.jpg","http://images2.fanpop.com/images/photos/7000000/Nature-Around-the-World-national-geographic-7018212-1920-1200.jpg","http://images2.fanpop.com/images/photos/6700000/Landscape-national-geographic-6761356-1024-768.jpg","http://images2.fanpop.com/images/photos/6900000/Around-The-World-Amazing-Places-national-geographic-6970247-1920-1200.jpg","http://www.foresthdwallpaper.com/wp-content/uploads/2014/05/national-geographic-best-nature-photos-2012-4.jpg","http://image.desk7.net/Landscape%20Wallpapers/5525_1280x800.jpg","http://images2.fanpop.com/images/photos/6700000/Landscape-national-geographic-6761338-1600-1200.jpg","http://www.pxleyes.com/images/contests/national-geographic/fullsize/There-is-heaven-in-hell----50ca151a193fd_hires.jpg","http://img.wallpapergang.com/137processed/great%20landscape.jpg","http://assets.natgeotv.com/Photos/28/70868.jpg","http://photo.sf.co.ua/g/13/22.jpg","http://proof.nationalgeographic.com/files/2014/10/141024-best-pod-october-01.jpg"];

var poems = ["Somewhere over the rainbow", "Way up high", "And the dreams that you dreamed of", "Once in a lullaby", 
        "Somewhere over the rainbow", "Blue birds fly", "And the dreams that you dreamed of", "Dreams really do come true ooh oh", 
        "Someday I'll wish upon a star", "Wake up where the clouds are far behind me", "Where trouble melts like lemon drops",
        "High above the chimney tops", "That's where you'll find me", "Oh, somewhere over the rainbow bluebirds fly", "And the dream that you dare to,", 
        "Oh why, oh why can't I?", "Well I see trees of green and red roses too,", "I'll watch them bloom for me and you", "And I think to myself",
        "What a wonderful world", "Well I see skies of blue", "And I see clouds of white", "And the brightness of day", "I like the dark",
        "And I think to myself", "What a wonderful world","The colors of the rainbow so pretty in the sky", "Are also on the faces of people passing by", 
        "I see friends shaking hands", "Saying, 'How do you do?'", "They're really saying, I...I love you", "I hear babies cry and I watch them grow,", 
        "They'll learn much more than we'll know", "And I think to myself", "What a wonderful world world", "Someday I'll wish upon a star,","Wake up where the clouds are far behind me", 
        "Where trouble melts like lemon drops", "High above the chimney top", "That's where you'll find me","Oh, somewhere over the rainbow way up high", "And the dream that you dare to, why, oh why can't I? I?"  ];


var selectedpoem = false;

$(".go-button").click(function() {
  
  var nextpoem = poems[Math.floor(Math.random()*poems.length)];
  
  while (selectedpoem == nextpoem) {
    nextpoem = poems[Math.floor(Math.random()*poems.length)];
  }
  
  selectedpoem = nextpoem;
  
  $(".poem-holder").html(nextpoem);

  $(".cat-holder").html('<img src="' + cats[Math.floor(Math.random()*cats.length)]+ '">');
  
  var newheight = (Math.floor(Math.random() * 100) + 100) + "px";

$(".line").css("height", newheight);
  
  
for (var increment = 0; increment < 100; increment++) {
  $("body").append("<div class='dot'></div>"); 
}

$(".dot").each(function() {
  var newtop = Math.floor(Math.random()*100) + "%";
  var newleft = Math.floor(Math.random()*100) + "%";
  $(this).css("top",newtop);
  $(this).css("left",newleft);
});
  
  
});




