// Завдання: https://shpp.gitbook.io/zero/tutorials/loops/christmas_tree
let s = +prompt("enter num");

for (let i = 0; i < s; i++) {
    for (let j = 0; j < s * 2 - 1; j++) {
        if (j < s - i - 1) {
            console.put(" ");
        } else if (j < s + i) {
            console.put("*");
        }
    }

    console.log();
}

// ножка
for (let n = 0; n < s - 1; n++) {
    console.put(" ");
}

console.put("*");
