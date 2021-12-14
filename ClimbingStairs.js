const minimum = (amount) => {
    for (var i = amount.length - 3; i >= -1; i--){
        amount[i] += Math.min(amount[i+1], amount[i+2]);
    }
    console.log(Math.min(amount[0], amount[1]));
}

minimum([0,2,2,1]);