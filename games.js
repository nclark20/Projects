var turn = 1;
var on = true;
var Squares = new Array(8);
for (var i = 0; i < 8; i++) {
    Squares[i] = new Array(8);
}
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        Squares[i][j] = 0;
    }
}

function changeColor(number, id) {
    if (!on)
        return;
    var numberString = "" + number;
    if (numberString.length < 2)
        numberString = "0" + numberString;
        var x = parseInt(number % 10);
        var y = parseInt(number / 10);
        while (y < Squares.length && Squares[y][x] == 0 ) 
		{
            y++;
           
        }
        y--;
    if (turn % 2 == 0) {
        document.getElementById("loc" + y+x).style.color ="#0055CC"; // forecolor
        document.getElementById("loc" + y+x).style.backgroundColor ="#f00"; // backcolor
        turn++
        Squares[y][x] = 2;
    } else {
        document.getElementById("loc" + y+x).style.color ="#000000"; // forecolor
        document.getElementById("loc" + y+x).style.backgroundColor ="#000000"; // backcolor
        turn++
        Squares[y][x] = 1;

    }
    checkAdjacent(y,x);
}


function checkAdjacent(x, y) {
    color = Squares[x][y];
    if (x + 3 < Squares.length) {
        var all = true;

        for (i = 0; i < 4; i++) {

            if (Squares[x + i][y] != color) {
                all = false;
            }
        }
    }
    if (all) {
        win(color)
        return;
    }

    if (y + 3 < Squares[0].length) {
        var all = true;

        for (i = 0; i < 4; i++) {

            if (Squares[x][y + i] != color) {
                all = false;
            }
        }
    }
    if (all) {
        win(color);
        return;
    }
    if (x - 3 >= 0) {
        var all = true;

        for (i = 0; i < 4; i++) {
            if (Squares[x - i][y] != color) {
                all = false;
            }
        }
    }
    if (all) {
        win(color)
        return;
    }
    if (y - 3 >= 0) {
        var all = true;

        for (i = 0; i < 4; i++) {
            if (Squares[x][y - i] != color) {
                all = false;
            }

        }
    }
    if (all) {
        win(color);
        return;
    }
    if (x + 3 < Squares.length && y + 3 < Squares[0].length) {
        var all = true;

        for (i = 0; i < 4; i++) {

            if (Squares[x + i][y + i] != color) {
                all = false;
            }
        }
    }
    if (all) {
        win(color)
        return;
    }

    if (x - 3 >= 0 && y - 3 >= 0) {
        var all = true;

        for (i = 0; i < 4; i++) {

            if (Squares[x - i][y - i] != color) {
                all = false;
            }
        }
    }
    if (all) {
        win(color)
        return;
    }

    if (x + 3 < Squares.length && y - 3 >= 0) {
        var all = true;

        for (i = 0; i < 4; i++) {

            if (Squares[x + i][y - i] != color) {
                all = false;
            }
        }
    }
    if (all) {
        win(color)
        return;
    }
    if (y + 3 < Squares[0].length && x - 3 >= 0) {
        var all = true;

        for (i = 0; i < 4; i++) {

            if (Squares[x - i][y + i] != color) {
                all = false;
            }
        }
    }
    if (all) {
        win(color)
        return;
    }
}

function checkSquares() {
    for (var i = 0; i < 8; i++) {
        var line = "";
        for (var j = 0; j < 8; j++) {
            line = line + Squares[i][j];
        }
        console.log(line);
    }
}

function win(mes) {

    var won = document.getElementById("winner");
    if (mes == 1)
        won.innerHTML = "Black won!";
    else
        won.innerHTML = "Red won!";
    on = false;
}