Quotes = new Mongo.Collection("quotes");

if (Meteor.isClient) {

  Template.quotes.helpers({
    quote: function() {
      // var num = Quotes.count(); //errors out
      var randomNum = Math.floor(Math.random()*6+1);
      var quoteObj = Quotes.findOne({quote_id: randomNum});
      var randomQuote = quoteObj.quote;
      return randomQuote;
    }
  });

  Template.quotes.events({
    "click button": function() {
      console.log('new quote');
      // Session.set('quote', newQuote);
    }
  });
}

if (Meteor.isServer) {

  Meteor.methods({
  });

  Meteor.startup(function () {
    Quotes.remove({});
    Quotes.insert({quote_id: 1, quote: "What is that?"});
    Quotes.insert({quote_id: 2, quote: "I like bunions!"});
    Quotes.insert({quote_id: 3, quote: "Do you smell what the Shehzan is cooking?"});
    Quotes.insert({quote_id: 4, quote: "Algorithms are the pizza of the intergalactics domain."});
    Quotes.insert({quote_id: 5, quote: "Lucere was a well managed project."});
    Quotes.insert({quote_id: 6, quote: "I always thought Ronald Regean would smell like cheese."});
  });
}
