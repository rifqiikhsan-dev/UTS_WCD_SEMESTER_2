function dateDifference(date1: string, date2: string): number {
    var d1 = new Date(date1);
    var d2 = new Date(date2);

    var diffTime = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);
    
    if (diffTime < 0) {
        diffTime = -diffTime;
    }

    var roundedDiff = (diffTime % 1 === 0) ? diffTime : (diffTime + 1);
    
    return roundedDiff;
}

console.log(dateDifference("2024-03-19", "2024-03-21")); // Output: 2