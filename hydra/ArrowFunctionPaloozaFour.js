// ArrowFunctionPaloozaTwo
// domj // @domjancik
const pi = Math.PI

const speed = () =>
  Math.sin(time) * 0.001

const scene1 = () => {
  return osc(30, 0.1, 4)
    .rotate([0.8, 2])
    .kaleid([4,2])
    .modulate(osc(12).rotate(()=>{return Math.sin(time*2*speed())}))
    .saturate(10000000000000000000)
    .invert(1)
}

const scene2 = () => {
  return osc(10)
    .modulate(noise(10,0.1))
    .pixelate(200,20)
    .mult(gradient(1))
    .modulate(osc(10), 0.01)
    .thresh(0.1)
}



// Scene 3 - Manual animation

const scene3 = () => osc()

// Scene 4 - Access previous frame
// feedback
const fb = (first, next) => {
  let prev = first;
  return () => 1
  return () => {
    const cur = next(prev)
    prev = cur
    return cur
  }
}

const func = fb(0, x => x + 0.1)

const zeropointtwo = () => 0.2

const capture = x => () => x

// const grow = seed => cycle => () => cycle(seed)
const grow = seed => cycle => {let plant = seed; return () => { plant = cycle(plant); return plant }}

// const scene4 = () => solid(zeropointtwo)
const scene4 = () => solid(capture(0.5))

// const scenes = [scene1, scene2];
const scenes = [scene4];

shape(2,0.09,0.1)
.rotate(pi * 0.05)
.modulate(solid(1,0,0), 1.4)
.modulate(osc(5).invert())
// .shift(0.4,0.4,0.2)
.out(o1)

let counter = 0;
const stepCounter = () => {counter = (counter + 1) % scenes.length}
const updateScene = () => scenes[counter]()
  .kaleid(4)
  // .color([0,0,0,0,0,1].fast(100),[1,0].fast(4),[1,0])
  .mult(o1)
  // .add(o0.mask(noise(10)))
  // .mask(voronoi(100))
  .out()



if (window.myInterval) window.clearInterval(window.myInterval)
window.myInterval = setInterval(() => {Math.sin(time) > 0 ? stepCounter() : null; updateScene()}, 50)
