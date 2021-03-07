
    /**
    *   Every JavaScript function has a prototype property that is used to attach properties and methods
    */
    function Rectangle(length, breadth) {
         this._length = length;
         this._breadth = breadth;
    }

    // the prototype property points to the object’s parent

    Rectangle.prototype.getDimensions = function () {
         return { length : this._length, breadth : this._breadth };
    };

    // JavaScript supports inheritance only through the prototype property

    Rectangle.prototype.setDimensions = function (length, breadth) {
         this._length = length;
         this._breadth = breadth;
    };