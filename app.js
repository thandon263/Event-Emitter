var Emitter = require('./emitter');

var emitr = new Emmitter();

emitr.on('greet', function () {
    console.log('Somewhere someone said Hello.');
});

emitr.on('greet', function() {
    console.log('A greeting occured!');
});

console.log('Hello!');
emitr.emit('greet');