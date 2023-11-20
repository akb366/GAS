'use server'

let score = 0;
let start = 0;
let end = 0;

export async function getScore() {
    return score;
}

export async function getStart() {
    return start;
}

export async function getEnd() {
    return end;
}

export async function raiseScore() {
    return ++score;
}

export async function resetScore() {
    score = 0;
}

export async function setStart(id: number) {
    start = id;
}

export async function setEnd(id: number) {
    end = id;
}

