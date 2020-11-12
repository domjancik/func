const logthru = x => {console.log(x); return x} // logcept

const l = logthru;
const logcept = logthru;
const logt = logthru;

const c = logthru; // see
const peek = logthru;
const look = logthru;

logthru(4 + logthru(5))
l(4 + l(5))
peek(4 + peek(5))