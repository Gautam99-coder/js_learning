function trafficLightAction(color){
    switch(color){
        case'red':
            return "stop";
            break;
        case'yellow':
            return "slow down";
            break;
        case'green':
            return "go";
            break;
        default:
            return "invalid color";
            break;
    }
}
console.log(trafficLightAction('red')); // Output: stop
console.log(trafficLightAction('yellow')); // Output: slow down
console.log(trafficLightAction('green')); // Output: go
console.log(trafficLightAction('blue')); // Output: invalid color