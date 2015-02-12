var calculate = 0;

$(".display .numbers").text(calculate);

var operation = function(input, action, inputTwo) {
  answer = input+action+inputTwo;
  return answer;
};

$(".display .numbers").on("click", "a", function(event){
      calculate = operation;
      });

$(".clear").on("click", "a", function(event){
      calculate = operation;
      });

$(".actions").on("click", "a", function(event){
      calculate = operation;
      });

$(".numbers .equals").on("click", "a", function(event){
      calculate = operation;
      });

// if number is clicked, number should appear in display
// if action is clicked, should apply to that number
// clicking equals displays the answer
// clicking c clears the display
