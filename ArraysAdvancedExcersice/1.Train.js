// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). 
// Each number inside the string represents the number of passengers that are currently in a wagon. 
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// •	Add {passengers} – add a wagon to the end with the given number of passengers.
// •	{passengers} -  find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end print the final state of the train (all the wagons separated by a space)

function train(arr){
    let wagons = arr.shift().split(" ").map(Number);
    let maxPassengers = arr.shift();


    for (let j = 0; j<arr.length; j++) {
        let commands = arr[j].split(" ");


        if(commands[0] === "Add"){
            wagons.push(Number(commands[1]));
        }else{
            for(let i = 0; i<wagons.length; i++){
                if(Number(commands[0]) + wagons[i] <= Number(maxPassengers)){
                    wagons[i] += Number(commands);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));

}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

);
