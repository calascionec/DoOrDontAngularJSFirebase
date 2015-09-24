DoOrDont.factory('AdviceFactory', function AdviceFactory($firebaseObject){
  var factory = {};
  var ref = new Firebase("https://doordont.firebaseio.com/questions");
  factory.addQuestion = function () {
    ref.push({ text: factory.question,
                     answers: []});
    factory.question = null;
  };





  return factory;
});
