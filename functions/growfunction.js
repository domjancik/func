const grow = seed => cycle => {let plant = seed; return () => { plant = cycle(plant); return plant }}

const g = grow(0)(x => x + 1)

console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())

// The plant variable is captured, each subsequent call to the function returns a modified value