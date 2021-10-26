function lifeInWeeks(age) {
    var daysLeft = (90 * 365) - (365 * age);
    var weeksLeft = (90 * 52) - (52 * age);
    var monthsLeft = (90 * 12) - (12 * age);
    return "You have " + daysLeft + " days, " + weeksLeft + " weeks" + " and " + monthsLeft + " months left." ;
}

console.log(lifeInWeeks(56));