(function () {
    var converter = function () {
        var _fromType = {};
        var _toType = {};
        var _amount = 0;
        var _types = [
            {
                name : "Cur",
                positionOf : 0,
                equivalents : [1, 10, 3, 6, 4, 6]
            },
            {
                name : "Aipha",
                positionOf : 1,
                equivalents : [1/10, 1, 3, 6, 4, 6]
            },
            {
                name : "Sa",
                positionOf : 2,
                equivalents : [1/10, 1/3, 1, 6, 4, 6]
            },
            {
                name : "Kav",
                positionOf : 3,
                equivalents : [1/10, 1/3, 1/6, 1, 4, 6]
            },
            {
                name : "Lug",
                positionOf : 4,
                equivalents : [1/10, 1/3, 1/6, 1/4, 1, 6]
            },
            {
                name : "Batzia",
                positionOf: 5,
                equivalents: [1/10, 1/3, 1/6, 1/4, 1/6, 1]
            }
        ];

        var from = function(amount, fromType) {
            _amount = amount;
            _fromType = fromType;
            return this;
        };

        var to = function(toType) {
            _toType = toType;
            return convert();
        };

        var convert = function () {
            if (_fromType.positionOf < _toType.positionOf) {
                return down();
            } else if (_fromType.positionOf > _toType.positionOf) {
                return up();
            }
            else return _amount;
        };

        var down = function () {
            var ac = _amount;
            for (var i = _fromType.positionOf; i <= _toType.positionOf; i++) {
                ac *= _fromType.equivalents[i];
            }
            return ac;
        };

        var up = function () {
            var ac = _amount;
            for (var i = _fromType.positionOf; i >= _toType.positionOf; i--) {
                ac *= _fromType.equivalents[i];
            }
            return ac;
        };

        return {
            from : from,
            to : to,
            types : _types
        };
    };

    var app = angular.module("casklvConverter");
    app.factory("converter", converter);
}());