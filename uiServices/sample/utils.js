/**
 * Functions and variables that will be included as part of the endpoints JS interface
 *
 * Created by lefunes on 07/07/16.
 */
var s = function(a, b){
    return a+b;
};

maths = {};

maths.sum = s;

maths.rnd = function(){
    return Math.random();
};

maths.PI_VALUE = Math.PI;
