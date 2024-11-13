/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t === "") return "";
    let countT = {};
    let window = {};
    for (let c=0; c<t.length; c++) {
        countT[t[c]] = 1 + (countT[t[c]] || 0);
    }
    
    let have = 0;
    let need = Object.keys(countT).length;
    let res = [-1, -1];
    let resLen = Infinity;
    let l = 0;

    for (let r=0; r<s.length; r++) {
        let c = s[r];
        window[c] = 1 + (window[c] || 0);
        if (countT[c] && window[c] === countT[c]) {
            have++;
        }
        while (have === need) {
            if ((r-l+1) < resLen) {
                res = [l, r];
                resLen = r-l+1;
            }
            window[s[l]] -= 1;
            if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                have--;
            } 
            l++;
        }
    }
    return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
};