// Мин/макс элемент (безопасный способ):
function getArrayMin(array){ return Math.min.apply(null, array); }
function getArrayMax(array){ return Math.max.apply(null, array); }

// Мин/макс элемент (может конфликтовать):
Array.prototype.max = function() { return Math.max.apply(null, this); };
Array.prototype.min = function() { return Math.min.apply(null, this); };

// Число в диапазоне:
Number.prototype.isBetween = function(min, max) { return ((this <= max) && (this >= min)); }