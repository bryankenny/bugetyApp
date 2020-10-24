// BUDGET CONTROLLER
var budgetController = (function() {


})();

// UI CONTROLLER
var UIController = (function() {



})();

// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  document.querySelector('.add__btn').addEventListener('click', function() {
    console.log('clicked')
  });


})(budgetController, UIController);