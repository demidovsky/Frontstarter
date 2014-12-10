// Безопасный способ:
function getArrayMin(array){ return Math.min.apply(null, array); }
function getArrayMax(array){ return Math.max.apply(null, array); }

// Может конфликтовать:
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};




Number.prototype.isBetween = function(min, max) {
        var between = false;

        
           if ((this <= max) && (this >= min)) between = true;

        return between;
    }