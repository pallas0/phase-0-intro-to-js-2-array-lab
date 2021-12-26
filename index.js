// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCat = [...cats, name];
    return newCat;
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}

function prependCat(name) {
    return [name, ...cats];
}

function removeFirstCat() {
    return cats.slice(1);
}