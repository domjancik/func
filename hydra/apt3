const map = (from, to, x) => (to - from) * x + from
const sinbtwn = (from, to, x) => map(from, to, Math.sin(x))

const sinfast = () => sinbtwn(100, 110, Math.sin(time * 1))

voronoi(200)
// osc(10)
// .colorama(() => Math.sin(time * 0.4))
// .pixelate(40)
// .scrollX(time)
// .shift(5, 5, 0, 1)
.mult(gradient(4.2))
.color(1, 0, 0, 0)
.kaleid(20)
.rotate(() => time * 0.2)
.modulate(noise(() => Math.sin(time * 0.4) + 1))
// .mask(noise(1000).modulate(osc()))
// .repeat(1,2)
// .mask(noise(sinfast).modulate(osc(10)))
// .colorama(() => Math.random())

.out()
