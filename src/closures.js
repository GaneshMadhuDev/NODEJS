

    // Private properties, using closures

    // The member functions that need access to private properties should be defined on the object itself.
    // You can make private properties using closures

    function Rectangle(_length, _breadth) {

         this.getDimensions = function () {
            return { length : _length, breadth : _breadth };
         };

         this.setDimension = function (length, bredth) {
             _length = length;
             _breadth = bredth;
         };

    }