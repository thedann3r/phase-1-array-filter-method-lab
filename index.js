
function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase() === name.toLowerCase();
    });
  }
  
  
  const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
  
  console.log(findMatching(drivers, "Bobby")); 
  console.log(findMatching(drivers, "bobby"));  
  console.log(findMatching(drivers, "Jonathan")); 
  
const driverss= [
    { name: "Bobby" },
    { name: "Sammy" },
    { name: "Sally" },
    { name: "Annette" },
    { name: "Sarah" },
    { name: "Bobby" }
  ]

  function fuzzyMatch(driverss, letters) {
    return driverss.filter(function(driver) {
      return driver.startsWith(letters)
    });
  }
  
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah"], "B"))
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah"], "Sa"))
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah"], "Ann"))
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah"], "y"))
  
  function matchName(driverss, name) {
    return driverss.filter(function(driver) {
      return driver.name === name
    });
  }
  console.log(matchName(driverss, "Bobby"))
  console.log(matchName(driverss, "Annette"))
  console.log(matchName(driverss, "Sarah"))
  console.log(matchName(driverss, "John"))