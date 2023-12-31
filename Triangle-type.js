/*
You should calculate the type of triangle with 
three given sides a, b and c (given in any order).

If each angle is less than 90°, 
this triangle is acute and the function should return 1.

If one angle is strictly 90°, 
this triangle is right and the function should return 2.

If one angle is more than 90°, 
this triangle is obtuse and the function should return 3.

If three sides cannot form a triangle, or one angle is 180° 
(which turns the triangle into a segment) - the function should return 0.

Three input parameters are sides of given triangle. 
All input values are non-negative floating point or integer numbers 
(or both, depending on the language).

Examples:
  (2, 4, 6) ---> return 0 (Not triangle)
  (8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
  (3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
  (7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
*/


// Solution

function triangleType(a, b, c){
  let result = triangleType.ACUTE,
      sides = [a,b,c].sort(function(a,b){return a-b});
  
  a = sides[0], b = sides[1], c = sides[2];
  
  if(a <= c - b) {
    result = triangleType.INVALID;
    
  } else if(c*c === a*a + b*b) {
    result = triangleType.RIGHT;
    
  } else if(c*c > a*a + b*b) {
    result = triangleType.OBTUSE;
  }
  
  return result;
}

triangleType.INVALID = 0;
triangleType.ACUTE = 1;
triangleType.RIGHT = 2;
triangleType.OBTUSE = 3;

// or

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
let NO_TRIANGLE = 0;
let ACUTE = 1;
let RIGHT = 2;
let OBTUSE = 3;

function triangleType(a, b, c){
  let sides = [a,b,c].sort(function(x1,x2){return x1-x2;});
  a = sides[0]; b = sides[1]; c = sides[2];
  
  if (a + b <= c) return NO_TRIANGLE;
  let a2 = a*a, b2 = b*b, c2 = c*c;
  
  if (a2 + b2 == c2) return RIGHT;
  if (a2 + b2 > c2) return ACUTE;
  return OBTUSE;
}