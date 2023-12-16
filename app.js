function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.mision');
for (let elm of elements) {
  observer.observe(elm);
}


let options1 = { threshold: [0.5] };
let observer1 = new IntersectionObserver(onEntry, options);
let elements1 = document.querySelectorAll('.icons-bk');
for (let elm of elements1) {
  observer.observe(elm);
}

let options3 = { threshold: [0.5] };
let observer3 = new IntersectionObserver(onEntry, options);
let elements3 = document.querySelectorAll('.map');
for (let elm of elements3) {
  observer.observe(elm);
}

let options4 = { threshold: [0.5] };
let observer4 = new IntersectionObserver(onEntry, options);
let elements4 = document.querySelectorAll('.down');
for (let elm of elements4) {
  observer.observe(elm);
}

