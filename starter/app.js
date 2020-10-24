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

  document.addEventListener('keypress', function(event) {

    if(event.keyCode === 13 || event.which === 13) {
      console.log('enter was pressed')
    }

  });

})(budgetController, UIController);