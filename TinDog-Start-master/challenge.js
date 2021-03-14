function rpsGame(yourChoice) {
    // console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
     results = decideWinner(humanChoice, botChoice);
     console.log(results);
    // message = Finalmessage(results);
    // rpsFrontEnd(HumanChoice.id, botChoice, message);
    }
    
    
    function randToRpsInt() {
     return Math.floor(Math.random() * 3);
    }
    
    
    function numberToChoice(number) {
        return ['rock', 'paper', 'scissors'] [number];
    }
    
    function decideWinner(yourChoice, computerChoice) {
    var RpsDatabase = {
         'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
      }
    var yourScore = RpsDatabase[yourChoice][computerChoice]
    var computerScore = RpsDatabase[computerChoice][yourChoice]
    
    return [yourScore, computerScore]
    }
    
    
    function Finalmessage([yourScore, computerScore]) {
    if (yourScore === 0) {
    return {'message': 'You Lost!'}
      }
    }