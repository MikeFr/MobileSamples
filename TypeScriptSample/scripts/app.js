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
        this.name = name;
        this._name = name;
    }
    Object.defineProperty(Animal.prototype, "Name", {
        /** Getters & Setters **/
        get: function () {
            return this._name;
        },
        set: function (theName) {
            this._name = theName;
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

var sam = new Snake("Sammy the Python");

var r1_pic = document.getElementById('r1_photo');
var r1_name = document.getElementById('r1_name');
var r1_action = document.getElementById('r1_move');

// Image
var image = document.createElement('image');
image.setAttribute('src', 'img/snake.png');
image.setAttribute('alt', 'na');
image.setAttribute('height', '1px');
image.setAttribute('width', '1px');
r1_pic.appendChild(image);

// Action
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    sam.move();
};
r1_action.appendChild(button);

// Text
r1_name.innerHTML = this.sam.Name();

var tom = new Horse("Tommy the Palomino");
this.tom.move();
//# sourceMappingURL=app.js.map
