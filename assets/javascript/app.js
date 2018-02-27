
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
     ["Which city is in southern California?", "Los Angeles", "San Francisco", "Santa Cruz", "Eureka", "A"],
     ["Which album was recorded in the 90's?", "The Dark Side of the Moon", "The Rise and Fall of Ziggy Stardust", "Amnesiac", "Remain in Light", "C"],
     ["Where do plums grow?", "moon rocks", "sea weed", "mud", "trees", "D"],
     ["Which US city is credited as the cultural origin of Techno?", "Denver", "Detroit", "Austin", "Seattle", "B"],
     ["Which brand does not make cameras?", "Nikon", "tin man can", "Canon", "Leica", "B"]
     ];
 
function get(x){
  return document.getElementById(x);
}
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("test_status").innerHTML = "Test completed";
   
    pos = 0;
    correct = 0;
    
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i = 0; i < choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  
  if(choice == questions[pos][5]){
   
    correct++;
  }
  
  pos++;
  
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

// timer -- trouble getting it to start counting down from 10 seconds
var countDown
var timeLeft = 10;
var elem = document.getElementById('#timer');

var timerId = setInterval(countdown, 1000);

function countDown() {
    
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    document.getElementById('#timer');
    
  }
}
function SubmitFunction(){
    $('#submitted').html('Time is up!');
      document.getElementById('mcQuestion').submit();
     }
 
      countDown(10,$('#display'));

      //var interVal=  setInterval(function () {
          //seconds = parseInt(timer % 60, 10);
          //seconds = seconds < 10 ? "0" + seconds : seconds;
          //$(display).html("<b>" " + seconds + "s" + "</b>");
 


