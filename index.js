// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

const found = findMatching(drivers, 'Bobby')


function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}
