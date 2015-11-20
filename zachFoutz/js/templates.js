var source   = $("#body-template").html();
var template = Handlebars.compile(source);
var homeSource   = $("#home-template").html();
var homeTemplate = Handlebars.compile(homeSource);
var selectBoxSource = $("#select-box").html();
var selectBoxTemplate = Handlebars.compile(selectBoxSource);

$(function(){
  link1();





});

function link1(){

  var homeContext = {
    title: "Hello World"
  };
  var homeHTML = homeTemplate(homeContext);
  $("body").html(homeHTML);


  var context = { movieTITLE: "Ender's Game", buy:"BUY NOW"};
  var selectHTML = selectBoxTemplate(context);
  $(".tg").append(selectHTML);

  var context = { movieTITLE: "The Martian", buy: "N/A"};
  var selectHTML = selectBoxTemplate(context);
  $(".tg").append(selectHTML);

  var context = { movieTITLE: "Interstellar", buy: "BUY NOW"};
  var selectHTML = selectBoxTemplate(context);
  $(".tg").append(selectHTML);
}

function link2(){
  var context = {
    title: "Enders Game",
    rating: "6.7",
    synopsisParagraph:"(Spoilers!) In the near future, a hostile alien race (called the Formics) have attacked Earth. If not for the legendary heroics of International Fleet Commander, Mazer Rackham (Ben Kingsley), all would have been lost. In preparation for the next attack, the highly esteemed Colonel Graff (Harrison Ford) and the International Military are training only the best young children to find the future Mazer. Ender Wiggin (Asa Butterfield), a shy, but strategically brilliant boy is pulled out of his school to join the elite.",
    synopsisFooter: "Written by Summit Entertainment",
    video: "videos/ender.mp4",
    poster: "images/ender-poster.jpg"
  };
  var html    = template(context);
  $("body").html(html);
}

function link3(){
  var context = {
    title: "The Martian",
    rating: "8.2",
    synopsisParagraph:"During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive. Millions of miles away, NASA and a team of international scientists work tirelessly to bring 'the Martian' home, while his crewmates concurrently plot a daring, if not impossible, rescue mission. As these stories of incredible bravery unfold, the world comes together to root for Watney's safe return.",
    synopsisFooter: "Written by 20th Century Fox",
    video: "videos/martian.mp4",
    poster: "images/martian-poster.jpg"
  };
  var html    = template(context);
  $("body").html(html);
}

function link4(){
  var context = {
    title: "Interstellar",
    rating: "8.7",
    synopsisParagraph:"In the near future, Earth has been devastated by drought and famine, causing a scarcity in food and extreme changes in climate. When humanity is facing extinction, a mysterious rip in the space-time continuum is discovered, giving mankind the opportunity to widen its lifespan. A group of explorers must travel beyond our solar system in search of a planet that can sustain life. The crew of the Endurance are required to think bigger and go further than any human in history as they embark on an interstellar voyage into the unknown. Coop, the pilot of the Endurance, must decide between seeing his children again and the future of the human race.",
    synopsisFooter: "Written by Warren D'Souza",
    video: "videos/interstellar.mp4",
    poster: "images/interstellar-poster.jpg"
  };
  var html    = template(context);
  $("body").html(html);
}
