var codex=function(){"use strict";return{typeOf:function(t,e){var c=typeof t;return"object"!==c?e?c.charAt(0).toUpperCase()+c.slice(1,c.length)===e:c.charAt(0).toUpperCase()+c.slice(1,c.length):e?Object.prototype.toString.call(t).replace(/^\[object (\S+)]$/,"$1")===e:Object.prototype.toString.call(t).replace(/^\[object (\S+)]$/,"$1")}}}();
