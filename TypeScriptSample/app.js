var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
* SuperClass Animals
*/
var Animal = (function () {
    /** Constructor **/
    function Animal(name) {
        this._name = name;
    }
    Object.defineProperty(Animal.prototype, "name", {
        /** Getters & Setters **/
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });

    /** Methods **/
    Animal.prototype.move = function (meters) {
        alert(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();

/*
* Class Snake herits from Animals
*/
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Snake.prototype, "Name", {
        /** Getters & Setters **/
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });

    Snake.prototype.move = function () {
        alert("Slithering...");
        _super.prototype.move.call(this, 5);
    };
    return Snake;
})(Animal);

/*
* Class Horse herits from Animals
*/
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        _super.apply(this, arguments);
    }
    Horse.prototype.move = function () {
        alert("Galloping...");
        _super.prototype.move.call(this, 45);
    };
    return Horse;
})(Animal);

window.onload = function () {
    var myDiv = document.getElementById('content');

    console.log('***** Create Snake*****');
    var sam = new Snake("Sammy the Python");
    console.log(sam.Name);

    // Text
    myDiv.innerHTML = sam.Name;

    // Image
    var image = document.createElement('img');
    image.setAttribute('src', 'snake.png');
    image.setAttribute('height', '100px');
    image.setAttribute('width', '100px');
    myDiv.appendChild(image);

    // Action
    var button = document.createElement('button');
    button.textContent = "Move";
    button.onclick = function () {
        sam.move();
    };
    myDiv.appendChild(button);

    console.log('***** Create Horse*****');
    var tom = new Horse("Tom");
    "Tommy the Palomino";
    tom.move();
};
//# sourceMappingURL=app.js.map
