var express = require('express');
var router = express.Router();
const math = require('mathjs');

let func = ''
let varinc = ''
const parser = math.parser()

router.post('/func', function (req, res, next) {
    let arrayx = req.body.data.x
    func = req.body.data.func
    varinc = req.body.data.varinc
    let arrayry = []
    for (let i = 0; i < arrayx.length; i++) {
        arrayry.push(g(arrayx[i]))
    }
    let response = {
        y: arrayry
    }
    res.send(response);
});

router.post('/resolve', function (req, res, next) {
    let func = req.body.data.func
    let response = math.evaluate(func)
    let responseR = {
        res: response
    }
    res.send(responseR);
});


function g(varinc_value) {
    parser.set(varinc, varinc_value)
    return parser.evaluate(func)
}

/*function monteCarlo(min, max, n) {
    let yList = [];
    for (let i = 0; i < n; i++) {
        vars.x = min + (max - min) * Math.random();
        let y = g();
        yList.push(y);
    }
    let f_max = maxN(yList);
    let x_rand = [];
    let y_rand = [];
    for (let i = 0; i < n; i++) {
        x_rand.push(min + Math.random() * (max - min));
        y_rand.push(Math.random() * f_max);

    }
    let ind_debajo = 0;
    let int_encima = 0;

    for (let i = 0; i < n; i++) {
        vars.x = x_rand[i];
        if (y_rand[i] < g()) {
            ind_debajo++;
        } else if (y_rand[i] >= g()) {
            int_encima++;
        }
    }
    return f_max * (max - min) * ind_debajo / n;
}*/

function maxN(yList) {
    let max = yList[0];
    for (let i = 1; i < yList.length; i++) {
        if (max < yList[i]) {
            max = yList[i];
        }
    }
    return max;
}

module.exports = router;
