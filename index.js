let events = require('events')

let myEmit = new events.EventEmitter();


//пример срабатывания и отслеживания когда событие произошло
//('само событие', 'функция, отрабатывающая при событии' )
myEmit.on('someEvent',function(text){
    console.log(text)
});

//создать действие
myEmit.emit('someEvent','Обработчик событий сработал!' )

// модуль унаследования событий
let util = require('util')
var Cars = function(model){
    this.model = model;
};

//наследование из конструктора и создание события
util.inherits(Cars, events.EventEmitter);

let bmw = new Cars('BMW');
let audi = new Cars('Audi');

//перебор машин и вывод текста если событие произошло
let cars = [bmw, audi];
cars.forEach(function(car){
    car.on('speed', function(text){
        console.log(car.model + ' speed is - '+ text)
    });
});

//иммитация события и текст
bmw.emit('speed', '245,5 km' )
audi.emit('speed', '150km')