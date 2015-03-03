var getQuote = function() {
  var randomNum = Math.floor(Math.random()*11+1);
  var quoteObj = Quotes.findOne({quote_id: randomNum});
  var quote = quoteObj.quote;
  console.log(quote);
  return quote;
};

setTimeout(function() {
  Session.set('quote', "Lucere was a well managed project.");
}, 2000);


Template.quotes.helpers({
  quote: function() {
    return Session.get('quote');
  }
});

Template.quotes.events({
  "click .btn": function() {
    var qq = getQuote();
    Session.set('quote', qq);
  }
});

Template.quotes.rendered = function(){
  setTimeout(function(){
    $('.main-pic').css('visibility', 'visible');
  }, 3000);

  setTimeout(function(){
    $('.main-pic').animate({
      opacity: 0.1
    }, 1500);
  }, 4500);

  setTimeout(function(){
    $('.something').css('visibility', 'visible');
  }, 6000);
};