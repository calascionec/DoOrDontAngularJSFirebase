DoOrDont.factory('AdviceFactory', function AdviceFactory($firebaseArray){
  var factory = {};
  factory.questions_1 = [];
  var ref = new Firebase("https://doordont.firebaseio.com/");
  factory.questions = $firebaseArray(ref);

  factory.addQuestion = function () {
    var time
    var new_question = factory.questions.$add({ text: factory.question, Do: 0, Dont: 0, time: new Date().getTime()});
    factory.question = null;
    var time = null;
  };





  return factory;
});
