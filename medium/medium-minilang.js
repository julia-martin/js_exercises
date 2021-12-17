// input: string of operations
// output: integer, or nothing
function checkEmptyStack(stack) {
  if (stack.length === 0) {
    console.log("Error: Stack is empty");
    return 1;
  }
  return undefined;
}
function minilang(program) {
  let commands = program.split(' ');
  let register = 0;
  let stack = [];
  commands.forEach(comm => {
    if ((/[0-9]+/).test(comm)) {
      register = Number(comm);
    } else {
      switch (comm) {
        case "PUSH":
          stack.push(register);
          break;
        case "ADD":
          if (!checkEmptyStack(stack)) register += stack.pop();
          break;
        case "SUB":
          if (!checkEmptyStack(stack)) register -= stack.pop();
          break;
        case "MULT":
          if (!checkEmptyStack(stack)) register *= stack.pop();
          break;
        case "DIV":
          if (!checkEmptyStack(stack)) register = Math.floor(register / stack.pop());
          break;
        case "REMAINDER":
          if (!checkEmptyStack(stack)) register = Math.floor(register % stack.pop());
          break;
        case "POP":
          if (!checkEmptyStack(stack)) register = stack.pop();
          break;
        case "PRINT":
          console.log(register);
          break;
        default:
          console.log("No Match");
      }
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)