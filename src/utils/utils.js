export default {
    pad: function pad(n, width, z = '0') {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    },

    randomNumber: function randomNumber(to = 0, from = 9999) {
        const r = Math.random();
        return Math.floor(r * (to - from) + from);
    }
};