
var result = '';

function loop(){
    for(var i = 1; i < 1000; i++){
        if(i%2 == 0){
            result += '<p>' + i + '</p>';
        }
    }
}
loop();

module.exports = result;