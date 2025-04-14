const h = document.getElementById("clock_h");
const m = document.getElementById("clock_m");
const s = document.getElementById("clock_s");
let cur_time = new Date();
setInterval(() => {
  cur_time = new Date();
  h.innerHTML = cur_time.getHours();
  m.innerHTML = cur_time.getMinutes();
  s.innerHTML = cur_time.getSeconds();
}, 1000);
console.log(cur_time);
