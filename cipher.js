function isAlpha(c) {
    return /[a-zA-Z]/.test(c);
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

function modInverse(a, m) {
    a = mod(a, m);
    for (let x = 1; x < m; x++)
        if ((a * x) % m === 1)
            return x;
    return -1;
}

function atbashCipher(text, decrypt) {
    let result = '';
    for (let c of text) {
        if (isAlpha(c)) {
            let isUpper = c === c.toUpperCase();
            let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            c = String.fromCharCode(base + (25 - (c.charCodeAt(0) - base)));
            result += c;
        } else {
            result += c;
        }
    }
    return result;
}

function caesarCipher(text, shift, decrypt) {
    shift = decrypt ? -shift : shift;
    shift = mod(shift, 26);
    let result = '';
    for (let c of text) {
        if (isAlpha(c)) {
            let isUpper = c === c.toUpperCase();
            let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            c = String.fromCharCode(base + mod(c.charCodeAt(0) - base + shift, 26));
            result += c;
        } else {
            result += c;
        }
    }
    return result;
}

function affineCipher(text, a, b, decrypt) {
    let result = '';
    if (decrypt) {
        let a_inv = modInverse(a, 26);
        if (a_inv === -1) {
            alert('Invalid key: a has no modular inverse');
            return '';
        }
        for (let c of text) {
            if (isAlpha(c)) {
                let isUpper = c === c.toUpperCase();
                let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                let y = c.charCodeAt(0) - base;
                let x = mod(a_inv * (y - b), 26);
                c = String.fromCharCode(base + x);
                result += c;
            } else {
                result += c;
            }
        }
    } else {
        for (let c of text) {
            if (isAlpha(c)) {
                let isUpper = c === c.toUpperCase();
                let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                let x = c.charCodeAt(0) - base;
                let y = mod(a * x + b, 26);
                c = String.fromCharCode(base + y);
                result += c;
            } else {
                result += c;
            }
        }
    }
    return result;
}

function vigenereCipher(text, key, decrypt) {
    let result = '';
    let j = 0;
    key = key.toUpperCase();
    for (let c of text) {
        if (isAlpha(c)) {
            let isUpper = c === c.toUpperCase();
            let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let k = key.charCodeAt(j % key.length) - 'A'.charCodeAt(0);
            let shift = decrypt ? -k : k;
            c = String.fromCharCode(base + mod(c.charCodeAt(0) - base + shift, 26));
            j++;
            result += c;
        } else {
            result += c;
        }
    }
    return result;
}

function gronsfeldCipher(text, key, decrypt) {
    let result = '';
    let j = 0;
    for (let c of text) {
        if (isAlpha(c)) {
            let isUpper = c === c.toUpperCase();
            let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let k = parseInt(key[j % key.length]);
            let shift = decrypt ? -k : k;
            c = String.fromCharCode(base + mod(c.charCodeAt(0) - base + shift, 26));
            j++;
            result += c;
        } else {
            result += c;
        }
    }
    return result;
}

function beaufortCipher(text, key, decrypt) {
    let result = '';
    let j = 0;
    key = key.toUpperCase();
    for (let c of text) {
        if (isAlpha(c)) {
            let isUpper = c === c.toUpperCase();
            let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let k = key.charCodeAt(j % key.length) - 'A'.charCodeAt(0);
            c = String.fromCharCode(base + mod(k - (c.charCodeAt(0) - base), 26));
            j++;
            result += c;
        } else {
            result += c;
        }
    }
    return result;
}

function autoKeyCipher(text, key, decrypt) {
    let result = '';
    let fullKey = key;
    let j = 0;
    if (decrypt) {
        let tempResult = '';
        for (let c of text) {
            if (isAlpha(c)) {
                let isUpper = c === c.toUpperCase();
                let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                let k = fullKey.charCodeAt(j) - 'A'.charCodeAt(0);
                let p = mod(c.charCodeAt(0) - base - k, 26);
                let newC = String.fromCharCode(base + p);
                tempResult += newC;
                fullKey += newC.toUpperCase();
                j++;
            } else {
                tempResult += c;
            }
        }
        result = tempResult;
    } else {
        fullKey += text.toUpperCase();
        for (let c of text) {
            if (isAlpha(c)) {
                let isUpper = c === c.toUpperCase();
                let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                let k = fullKey.charCodeAt(j) - 'A'.charCodeAt(0);
                c = String.fromCharCode(base + mod(c.charCodeAt(0) - base + k, 26));
                j++;
                result += c;
            } else {
                result += c;
            }
        }
    }
    return result;
}

function runningKeyCipher(text, key, decrypt) {
    let result = '';
    let j = 0;
    key = key.toUpperCase();
    for (let c of text) {
        if (isAlpha(c)) {
            let isUpper = c === c.toUpperCase();
            let base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let k = key.charCodeAt(j % key.length) - 'A'.charCodeAt(0);
            let shift = decrypt ? -k : k;
            c = String.fromCharCode(base + mod(c.charCodeAt(0) - base + shift, 26));
            j++;
            result += c;
        } else {
            result += c;
        }
    }
    return result;
}

function hillCipher(text, key, decrypt) {
    let result = '';
    let len = text.length;
    if (decrypt) {
        let det = mod(key[0][0] * key[1][1] - key[0][1] * key[1][0], 26);
        let det_inv = modInverse(det, 26);
        if (det_inv === -1) {
            alert('Invalid key: matrix has no modular inverse');
            return '';
        }
        let adj = [[key[1][1], -key[0][1]], [-key[1][0], key[0][0]]];
        let inv = [[0, 0], [0, 0]];
        for (let i = 0; i < 2; i++)
            for (let j = 0; j < 2; j++)
                inv[i][j] = mod((adj[i][j] % 26) * det_inv, 26);
        for (let i = 0; i < len - 1; i += 2) {
            if (isAlpha(text[i]) && isAlpha(text[i + 1])) {
                let x = text[i].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
                let y = text[i + 1].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
                let a = mod(inv[0][0] * x + inv[0][1] * y, 26);
                let b = mod(inv[1][0] * x + inv[1][1] * y, 26);
                result += String.fromCharCode('A'.charCodeAt(0) + a);
                result += String.fromCharCode('A'.charCodeAt(0) + b);
                i++;
            } else {
                result += text[i];
            }
        }
        if (len % 2 === 1) result += text[len - 1];
    } else {
        for (let i = 0; i < len - 1; i += 2) {
            if (isAlpha(text[i]) && isAlpha(text[i + 1])) {
                let x = text[i].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
                let y = text[i + 1].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
                let a = mod(key[0][0] * x + key[0][1] * y, 26);
                let b = mod(key[1][0] * x + key[1][1] * y, 26);
                result += String.fromCharCode('A'.charCodeAt(0) + a);
                result += String.fromCharCode('A'.charCodeAt(0) + b);
                i++;
            } else {
                result += text[i];
            }
        }
        if (len % 2 === 1) result += text[len - 1];
    }
    return result;
}

function railFenceCipher(text, rails, decrypt) {
    let len = text.length;
    if (decrypt) {
        let rail = Array(rails).fill().map(() => Array(len).fill(null));
        let row = 0, dir = 1;
        for (let i = 0; i < len; i++) {
            rail[row][i] = '*';
            row += dir;
            if (row === rails - 1 || row === 0) dir = -dir;
        }
        let k = 0;
        for (let i = 0; i < rails; i++)
            for (let j = 0; j < len; j++)
                if (rail[i][j] === '*') rail[i][j] = text[k++];
        let result = '';
        row = 0; dir = 1;
        for (let i = 0; i < len; i++) {
            if (rail[row][i]) result += rail[row][i];
            row += dir;
            if (row === rails - 1 || row === 0) dir = -dir;
        }
        return result;
    } else {
        let rail = Array(rails).fill().map(() => Array(len).fill(null));
        let row = 0, dir = 1;
        for (let i = 0; i < len; i++) {
            rail[row][i] = text[i];
            row += dir;
            if (row === rails - 1 || row === 0) dir = -dir;
        }
        let result = '';
        for (let i = 0; i < rails; i++)
            for (let j = 0; j < len; j++)
                if (rail[i][j]) result += rail[i][j];
        return result;
    }
}

function routeCipher(text, rows, cols, decrypt) {
    let len = text.length;
    let grid = Array(rows).fill().map(() => Array(cols).fill(' '));
    if (decrypt) {
        let k = 0;
        for (let j = 0; j < cols && k < len; j++)
            for (let i = 0; i < rows && k < len; i++)
                grid[i][j] = text[k++];
        let result = '';
        k = 0;
        for (let i = 0; i < rows; i++)
            for (let j = 0; j < cols; j++)
                if (k < len) result += grid[i][j];
        return result;
    } else {
        let k = 0;
        for (let i = 0; i < rows && k < len; i++)
            for (let j = 0; j < cols && k < len; j++)
                grid[i][j] = text[k++];
        let result = '';
        for (let j = 0; j < cols; j++)
            for (let i = 0; i < rows; i++)
                if (grid[i][j] !== ' ') result += grid[i][j];
        return result;
    }
}

function columnarCipher(text, key, decrypt) {
    let len = text.length;
    let keyLen = key.length;
    let rows = Math.ceil(len / keyLen);
    let grid = Array(rows).fill().map(() => Array(keyLen).fill(' '));
    if (decrypt) {
        let order = Array(keyLen).fill().map((_, i) => i);
        order.sort((a, b) => key[a].localeCompare(key[b]));
        let k = 0;
        for (let col of order)
            for (let row = 0; row < rows && k < len; row++)
                grid[row][col] = text[k++];
        let result = '';
        for (let i = 0; i < rows; i++)
            for (let j = 0; j < keyLen; j++)
                if (grid[i][j] !== ' ') result += grid[i][j];
        return result;
    } else {
        let k = 0;
        for (let i = 0; i < rows; i++)
            for (let j = 0; j < keyLen && k < len; j++)
                grid[i][j] = text[k++];
        let result = '';
        let order = Array(keyLen).fill().map((_, i) => i);
        order.sort((a, b) => key[a].localeCompare(key[b]));
        for (let col of order)
            for (let row = 0; row < rows; row++)
                if (grid[row][col] !== ' ') result += grid[row][col];
        return result;
    }
}

function doubleTransCipher(text, key1, key2, decrypt) {
    if (decrypt) {
        text = columnarCipher(text, key2, true);
        return columnarCipher(text, key1, true);
    } else {
        text = columnarCipher(text, key1, false);
        return columnarCipher(text, key2, false);
    }
}

function myszkowskiCipher(text, key, decrypt) {
    let len = text.length;
    let keyLen = key.length;
    let rows = Math.ceil(len / keyLen);
    let grid = Array(rows).fill().map(() => Array(keyLen).fill(' '));
    if (decrypt) {
        let k = 0;
        for (let c = 'A'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c = c + 1) {
            let char = String.fromCharCode(c);
            for (let j = 0; j < keyLen; j++)
                if (key[j].toUpperCase() === char)
                    for (let i = 0; i < rows && k < len; i++)
                        grid[i][j] = text[k++];
        }
        let result = '';
        for (let i = 0; i < rows; i++)
            for (let j = 0; j < keyLen; j++)
                if (grid[i][j] !== ' ') result += grid[i][j];
        return result;
    } else {
        let k = 0;
        for (let i = 0; i < rows; i++)
            for (let j = 0; j < keyLen && k < len; j++)
                grid[i][j] = text[k++];
        let result = '';
        for (let c = 'A'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c = c + 1) {
            let char = String.fromCharCode(c);
            for (let j = 0; j < keyLen; j++)
                if (key[j].toUpperCase() === char)
                    for (let i = 0; i < rows; i++)
                        if (grid[i][j] !== ' ') result += grid[i][j];
        }
        return result;
    }
}
