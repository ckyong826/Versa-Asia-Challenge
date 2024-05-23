const fs = require('fs');
function BigBang() {
    var answer = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("BigBang");
        }
        else if (i % 3 === 0) {
            answer.push("Big");
        }
        else if (i % 5 === 0) {
            answer.push("Bang");
        }
        else {
            answer.push(i.toString());
        }
    }
    return answer;
}
var output = BigBang();

fs.writeFileSync('output.json', JSON.stringify(output));
