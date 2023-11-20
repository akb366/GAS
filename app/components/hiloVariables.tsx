'use server'

let score = 0;
let earnings1 = 0;
let earnings2 = 0;

export async function getScore() {
    return score;
}

export async function raiseScore() {
    return ++score;
}

export async function resetScore() {
    score = 0;
}

export async function getEarings1() {
    return earnings1;
}

export async function setEarings1(input: number) {
    earnings1 = input;
}

export async function getEarings2() {
    return earnings2;
}

export async function setEarings2(input: number) {
    earnings2 = input;
}