const pi = Math.PI

shape(2,0.001,0.02)
.rotate(pi * 0.05)
.modulate(solid(1,0,0), 1.9)
// .modulate(osc(5).invert())
// .shift(0.4,0.4,0.2)
.out(o1)

// osc(20)
// .thresh(0.98)
// .out(o2)

// src(o2)
// osc(20)
// .thresh(0.98)
// .shift(0.4,0.4,0.2)
// .color(1,0,0)
// .mult(o1)
// .out()

render(o1)
