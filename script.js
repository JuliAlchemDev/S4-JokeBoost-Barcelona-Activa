const world = 'world';
export function hello(who = world) {
    return `Hello ${who}! `;
}
console.log(hello());
