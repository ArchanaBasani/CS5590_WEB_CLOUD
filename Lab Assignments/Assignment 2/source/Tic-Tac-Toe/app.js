angular.module("TicTacToe", []).controller("TicTacToeCtrl", function($scope) {

    $scope.reset = function() {
        $scope.board = [
            [{value : "-"}, {value : "-"}, {value : "-"}],
            [{value : "-"}, {value : "-"}, {value : "-"}],
            [{value : "-"}, {value : "-"}, {value : "-"}]
        ];

        $scope.currentPlayer = "X";
        $scope.winner = null;
        document.getElementById("result").innerHTML = "";
    };

    $scope.reset();

    $scope.checkEndGame = function() {
        console.log($scope.board);
        var countXs = 0;
        var countOx = 0;
        var size = $scope.board.length;

        // Check horizontal
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var cell = $scope.board[i][j].value;
                if (cell != "-") {
                    if (cell == "X") {
                        countXs += 1;
                    } else {
                        countOx += 1;
                    }
                }
            }
            if (countOx == size) {
                $scope.winner = "O";
                return true;
            } else if (countXs == size) {
                $scope.winner = "X";
                return true;
            }
            countOx = 0;
            countXs = 0;
        }

        // Check vertical
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var cell = $scope.board[j][i].value;
                if (cell != "-") {
                    if (cell == "X") {
                        countXs += 1;
                    } else {
                        countOx += 1;
                    }
                }
            }
            if (countOx == size) {
                $scope.winner = "O";
                return true;
            } else if (countXs == size) {
                $scope.winner = "X";
                return true;
            }
            countOx = 0;
            countXs = 0;
        }

        // Check diagonal
        for (var i = 0; i < size; i++) {
            var cell = $scope.board[i][i].value;
            if (cell != "-") {
                if (cell == "X") {
                    countXs += 1;
                } else {
                    countOx += 1;
                }
            }
        }
        if (countOx == size) {
            $scope.winner = "O";
            return true;
        } else if (countXs == size) {
            $scope.winner = "X";
            return true;
        }
        countOx = 0;
        countXs = 0;

        // Check anti-diagonal
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                if (i + j == size - 1) {
                    var cell = $scope.board[i][j].value;
                    if (cell != "-") {
                        if (cell == "X") {
                            countXs += 1;
                        } else {
                            countOx += 1;
                        }
                    }
                }
            }
        }
        if (countOx == size) {
            $scope.winner = "O";
            return true;
        } else if (countXs == size) {
            $scope.winner = "X";
            return true;
        }
        countOx = 0;
        countXs = 0;

        // Check tie
        var hasEmptyCell = false;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var cell = $scope.board[i][j].value;
                if (cell == "-") {
                    hasEmptyCell = true;
                    break;
                }
            }
            if (hasEmptyCell == true) {
                break;
            }
        }

        if (hasEmptyCell == false) {
            $scope.winner = "T";
            return true;
        }

        return false;
    };

    $scope.empty = function(cell) {
        return cell.value == "-";
    };

    $scope.move = function(cell) {
        if (!$scope.checkEndGame()) {
            if ($scope.empty) {
                cell.value = $scope.currentPlayer;
                if ($scope.checkEndGame()) {
                    if ($scope.winner == "X") {
                        document.getElementById("result").innerHTML = "X won!!!";
                    } else if ($scope.winner == "O") {
                        document.getElementById("result").innerHTML = "O won!!!";
                    } else {
                        document.getElementById("result").innerHTML = "Tie. No winner.";
                    }
                } else {
                    if ($scope.currentPlayer == "X") {
                        $scope.currentPlayer = "O";
                    } else {
                        $scope.currentPlayer = "X";
                    }
                }
            }
        }
    };
});