let base = 2;

module.exports = {
    multiplicar: function (value) {
        return value * base
    },

    cambiarBase: function (value) {
        base = value
    },

    consultarBase: function () {
        return base
    }
};