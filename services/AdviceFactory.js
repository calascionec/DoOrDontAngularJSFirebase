DoOrDont.factory('AdviceFactory', function AdviceFactory($firebaseArray){
  var factory = {};
  var ref = new Firebase("https://doordont.firebaseio.com/");
  factory.questions = $firebaseArray(ref);
  factory.question = '';
  factory.addQuestion = function () {
    factory.questions.$add({ text: factory.question});
    factory.question = null;
  };





  return factory;
});
