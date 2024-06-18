// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (averageAstronautMassKg * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
 if (astronautCount > 7) {
  console.log("Security alert! Kick off" + (astronautCount -7) + "astronauts off to launch!" );
  preparedForLiftOff = false;
 }

// add logic below to verify all astronauts are ready
 if (astronautStatus !== "ready") {
  console.log("Somehow, one or more astronauts are not ready??");
  preparedForLiftOff = false;
 }

// add logic below to verify the total mass does not exceed the maximum limit of 850000
 if (totalMassKg > maximumMassLimit) {
  console.log("Mass exceeds maximum mass limit");
  preparedForLiftOff = false;
 }

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
 if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
  console.log("Fuel temperature is not in range - DO NOT LAUNCH!");
  preparedForLiftOff = false;
 }

// add logic below to verify the fuel level is at 100%
 if (fuelLevel !== "100%") {
  console.log("Please refuel befdore launch");
  preparedForLiftOff = false;
 }

// add logic below to verify the weather status is clear
 if (weatherStatus !== "clear") {
  console.log("Weather is not clear.");
  preparedForLiftOff = false;
 }

// Verify shuttle launch can proceed based on above conditions
 if (!preparedForLiftOff) {
  console.log("ABORT MISSION!");
 } else {
    console.log(`All systems are a go! Initiating space shuttle launch sequence.
      -----------------------------------------------------------------------------
      Date: ${date}
      Time: ${time}
      Astronaut Count: ${astronautCount}
      Crew Mass: ${crewMassKg} kg
      Fuel Mass: ${fuelMassKg} kg
      Shuttle Mass: ${shuttleMassKg} kg
      Total Mass: ${totalMassKg} kg
      Fuel Temperature: ${fuelTempCelsius} °C
      Weather Satus: ${weatherStatus}
      -----------------------------------------------------------------------------
      Have a safe trip astronauts!`)
 }
