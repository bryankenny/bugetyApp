// BUDGET CONTROLLER
var budgetController = (function() {


})();

// UI CONTROLLER
var UIController = (function() {

  return {
    getInput: function() {
      return {
        type : document.querySelector('.add__type').value, // will be either inc (income) or exp (expense).
        description : document.querySelector('.add__description').value,
        value : document.querySelector('.add__value').value
      }
    }
  };

})();

// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {

    }
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {

    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);