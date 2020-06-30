
/*


                    NORTH

        5|-------------------------
         |  4                     |
        4|    +    +    +    +    |
         |  3                     |
        3|    +    +    +    +    |
 West    |  2                     |   EAST
        2|    +    +    +    +    |
         |  1                     |
        1|    +    +    +    +    |
         |  0    1    2    3    4 |
        0|-------------------------
         0    1    2    3    4    5
    
                    SOUTH

 */


//Global Env
const facing = ["NORTH", "EAST", "SOUTH", "WEST"];
const maxX = 5;
const minX = 0;
const maxY = 5;
const minY = 0;


function isOnBoard(x, y) {
    if (x < maxX && x >= minX && y < maxY && y >= minY) {
        return true;
    }

    return false;
}

function isValidParameters(parameters) {
    
    if (!Array.isArray(parameters)) {
        return false;
    }
    else if (parameters.length != 3) {
        return false;
    }
    else if (isNaN(parameters[0]) || isNaN(parameters[1]) || !isNaN(parameters[2])) {
        return false;
    }
    else if (!isOnBoard(Number(parameters[0]), Number(parameters[1]))) {
        return false;
    }
    else if(!facing.includes(parameters[2].toUpperCase()))
    {
        return false;
    }

    return true;
}

class Robot {
    constructor(x, y, f) {
        this.X = x;
        this.Y = y;
        this.F = f;
    }

    turnLeft90() {
        this.F--;
        if (this.F < 0) {
            this.F = facing.length - 1;
        }
    }

    turnRight90() {
        this.F++;
        if (this.F >= facing.length) {
            this.F = 0;
        }
    }

    move() {
        var tempX = this.X;
        var tempY = this.Y;

        switch (this.F) {
            case 0: // face North
                tempX++;
                break;
            case 1: // face East
                tempY++
                break;
            case 2: // face South
                tempX--;
                break;
            case 3: // face West
                tempY--;
                break;
            default:
        }

        //condition check
        if (isOnBoard(tempX, tempY)) {
            this.X = tempX;
            this.Y = tempY;
        }
    }

    report() {
        console.log("Output:", this.X, ",", this.Y, ",", facing[this.F]);
    }
}



//Main
var robot1 = null;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Please Enter Commands:");

//Standard inpiut Line Events
rl.on('line', (line) => {

    var inputs = line.split(" ");

    var currentIdx;
    for (currentIdx = 0; currentIdx < inputs.length; currentIdx++) {

        switch (inputs[currentIdx].toUpperCase()) {
            case "PLACE":
                if (currentIdx >= inputs.length - 1) { break; }

                var parameters = inputs[currentIdx + 1].split(",");
                if (!isValidParameters(parameters)) {
                    // console.log("invalid parameters");
                    break;
                }

                currentIdx++;

                if (robot1 != null) {
                    delete robot1;
                }
                robot1 = new Robot(Number(parameters[0]), Number(parameters[1]), facing.indexOf(parameters[2].toUpperCase()));
                break;

            case "MOVE":
                if (robot1 == null) { break; }
                robot1.move();
                break;
            case "LEFT":
                if (robot1 == null) { break; }
                robot1.turnLeft90();
                break;
            case "RIGHT":
                if (robot1 == null) { break; }
                robot1.turnRight90();
                break;
            case "REPORT":
                if (robot1 == null) { break; }
                robot1.report();
                break;
            default:
                // console.log("invalid commads");
                break;

        }
    }

});
