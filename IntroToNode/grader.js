
function average(scores) {
    
    // add all the scores
    
    var total = 0;
    scores.forEach(function(score) {
        // total = total + score;
        total += score;
    });
    
    // take out the averagec
    
    var avg = total/scores.length;
    
    // round off the average
    
    return Math.round(avg);
    
}


var scores = [78, 45, 56, 67, 78, 98, 56, 95];
console.log("Your Percentage is : " + average(scores) + "%");