angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,localWords,rawWords) {
  $scope.point={
    now:Number(localStorage.point)
  };
  $scope.myWord=localWords.getword();
  $scope.simple=function (){
    localStorage.point=Number(localStorage.point)+1;
    $scope.point.now=Number(localStorage.point);
    $scope.myWord=localWords.getword();
  };
  $scope.hardd=function (){

    var raws=rawWords.allRaw();
    raws.push($scope.myWord);
    rawWords.save(raws);

    $scope.myWord=localWords.getword();
  };
})

.controller('ChatsCtrl', function($scope,$ionicPopup,localWords,rawWords) {
  $scope.myWord=localWords.getword();
  $scope.data={
    tip:false,
    inLetter:''
  };
  $scope.showTip=function(){
    $scope.data.tip=true;
  };
  $scope.submit=function(){
    console.log($scope.data.inLetter);
    console.log($scope.myWord.letter);
    if($scope.data.inLetter==$scope.myWord.letter){
      var alertPopup=$ionicPopup.alert({
        title:'恭喜你',
        template:'继续加油'
      });
      $scope.myWord=localWords.getword();
      $scope.data.inLetter='';
    }
    else{
      var alertPopup=$ionicPopup.alert({
        title:'错了',
        template:'再想想吧'
      });
      $scope.data.inLetter='';
    }
  };

  $scope.pass=function(){

    var raws=rawWords.allRaw();
    raws.push($scope.myWord);
    rawWords.save(raws);

    $scope.myWord=localWords.getword();

  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams) {

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('NotesCtrl', function ($scope,rawWords) {
  $scope.words=rawWords.allRaw();
})

.controller('WelcomeCtrl',function ($scope,$state) {
  $scope.goOn=function () {
    $state.go('tab.dash');
  };
  localStorage.setItem('point',0)
});
