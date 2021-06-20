var fizzBuzzResult = '';

function fizzBuzz(){
    for(var i = 1; i < 100; i++){
        if(i%3 == 0){
            fizzBuzzResult += '<p>' + i + ' fizz' + '</p>';
        } if(i%5 == 0){
            fizzBuzzResult += '<p>' + i + ' buzz' + '</p>';
        } if(i%3 == 0 && i%5 == 0){
            fizzBuzzResult += '<p>' + i + ' fizz buzz' + '</p>';
        }
    }
}
fizzBuzz();

module.exports = fizzBuzzResult;