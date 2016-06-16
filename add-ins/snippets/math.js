// Мин/макс элемент (безопасный способ):
function getArrayMin(array){ return Math.min.apply(null, array); }
function getArrayMax(array){ return Math.max.apply(null, array); }

// Мин/макс элемент (может конфликтовать):
Array.prototype.max = function() { return Math.max.apply(null, this); };
Array.prototype.min = function() { return Math.min.apply(null, this); };

// Находится ли число в диапазоне:
Number.prototype.isBetween = function(min, max) { return ((this <= max) && (this >= min)); }

// Случайное число в диапазоне:
Math.rnd = function(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }