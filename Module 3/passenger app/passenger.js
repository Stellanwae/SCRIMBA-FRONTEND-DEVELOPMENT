let count = 0;
let countEl = document.getElementById("countEl");
console.log(countEl);

function increment() {
    count += 1;
    countEl.innertext = count;
}

increment();
increment();

console.log(count);  