/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    for(let i = 0; i < board.length; i++) {
        const rows = new Set();
        const cols = new Set();
        // row 체크"
        for(let j = 0; j < 9; j++) {
            if(board[i][j] !== ".") {
            if(rows[board[i][j]]) {
                return false;
            }
            rows[board[i][j]] = true;
            }
            // cols 체크
            if(board[j][i] !== ".") {
                if(cols[board[j][i]]) {
                    return false;
                }
                cols[board[j][i]] = true;
            }
        }
    }
    // 3*3 box 체크

    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            let box = new Set();
            // 각 3x3 박스 내부를 순회
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < 3; j++) {
                    const value = board[row * 3 + i][col * 3 + j];
                    if(value !== ".") {
                        if(box.has(value)) {
                            return false;
                        }
                        box.add(value);
                    }
                }
            }
        }
    }
    
    
    return true;
    
};