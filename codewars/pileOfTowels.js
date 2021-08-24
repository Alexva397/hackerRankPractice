

const towelStack = ['red', 'blue', 'blue', 'red', 'blue', 'red', 'red', 'blue'];
const towelsUsed = [4, 2, 4, 1, 5];

const towelSorting = (stack, count) => {
    let newStack = [];
    for (let j =0; j < count.length; j++) {
        console.log('hey')
        let used = [];
        for (let i = 0; i < count[i]; i++) {
            used.push(stack.pop());
        }
        console.log('before sort:', used)
        used.sort(function compare(a, b) {
            if (a < b) {
              return 1;
            }
            if (a > b) {
              return -1;
            }
            return 0;
          });
        console.log('after sort:', used)
        newStack = stack;
        console.log('before added:', newStack);
        for (let x = 0; x < used.length; x++) {
            newStack.push(used[x]);
        }
        console.log('after added:', newStack);
    }
    return newStack;
} 


towelSorting(towelStack, towelsUsed);
