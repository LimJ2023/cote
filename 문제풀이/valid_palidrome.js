/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const mid = Math.ceil(s.length / 2);
    let forward = 0;
    let backward = s.length - 1;
    const num = filterString(s);
    while(forward <= mid) {
        if(forward != backward) {
            return false;
        }
        forward++;
        backward--;
    }
};

function filterString(s) {
    const result = s.toLowerCase(s).split("").filter((c) => c.match(/[a-z0-9]/));
    return result;
}