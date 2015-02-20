Quotes = new Mongo.Collection("quotes");

if (Meteor.isClient) {

  Template.quotes.helpers({
    quote: function() {
      var randomNum = Math.floor(Math.random()*10+1);
      var quoteObj = Quotes.findOne({quote_id: randomNum});
      var randomQuote = quoteObj.quote;
      Session.set('quote', randomQuote);
      return Session.get('quote');
    }
  });

  Template.quotes.events({
    "click .btn": function() {
      var randomNum = Math.floor(Math.random()*10+1);
      var quoteObj = Quotes.findOne({quote_id: randomNum});
      var newQuote = quoteObj.quote;
      Session.set('quote', newQuote);
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

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    Quotes.remove({});
    Quotes.insert({quote_id: 1, quote: "The repo pattern is my favorite pattern."});
    Quotes.insert({quote_id: 2, quote: "I like bunions!"});
    Quotes.insert({quote_id: 3, quote: "Do you smell what the Shehzan is cooking?"});
    Quotes.insert({quote_id: 4, quote: "Algorithms are the pizza of the intergalactic thought processes."});
    Quotes.insert({quote_id: 5, quote: "Lucere was a well managed project."});
    Quotes.insert({quote_id: 6, quote: "I always thought Ronald Regean would smell like cheese."});
    Quotes.insert({quote_id: 7, quote: "I don't believe in love after love."});
    Quotes.insert({quote_id: 8, quote: "I'm really good at ping pong because I pretend the paddle is a lightsaber."});
    Quotes.insert({quote_id: 9, quote: "Before MakerSquare, I was teaching programming to fish."});
    Quotes.insert({quote_id: 10, quote: "If man was monkey, what was before monkey?"});
  });

}
