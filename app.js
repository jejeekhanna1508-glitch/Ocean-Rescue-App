function analyzeEmergency() {

    const victim = document.getElementById("victim").value;
    const location = document.getElementById("location").value;
    const emergencyType =
        document.getElementById("emergencyType").value;

    if (victim === "" || location === "") {

        alert("Please enter Boat ID and GPS Location!");

        return;
    }


    let riskLevel = "";
    let recommendation = "";
    let rescueTeam = "";
    let weather = "";


    if (emergencyType === "Person Overboard") {

        riskLevel = "🔴 CRITICAL";

        recommendation =
            "Immediately dispatch the nearest rescue vessel. Start search operation and notify the rescue commander.";

        rescueTeam = "Team Alpha";

        weather = "Moderate Waves";
    }


    else if (emergencyType === "Boat Accident") {

        riskLevel = "🔴 HIGH";

        recommendation =
            "Deploy rescue vessel and medical support. Check nearby vessels and monitor communication.";

        rescueTeam = "Team Bravo";

        weather = "Strong Wind";
    }


    else if (emergencyType === "Medical Emergency") {

        riskLevel = "🟠 MEDIUM-HIGH";

        recommendation =
            "Prioritize medical support and dispatch the nearest available rescue team.";

        rescueTeam = "Team Charlie";

        weather = "Clear";
    }


    else {

        riskLevel = "🟡 MEDIUM";

        recommendation =
            "Monitor weather conditions and recommend a safe route or evacuation plan.";

        rescueTeam = "Team Delta";

        weather = "Heavy Rain";
    }


    document.getElementById("riskLevel").innerHTML =
        riskLevel;

    document.getElementById("recommendation").innerHTML =
        recommendation;


    // ADD NEW EMERGENCY TO LIVE DATA TABLE

    const table =
        document.getElementById("emergencyTable");

    const newRow =
        document.createElement("tr");


    newRow.innerHTML = `
        <td>${victim}</td>
        <td>${location}</td>
        <td>${emergencyType}</td>
        <td>${weather}</td>
        <td>${riskLevel}</td>
        <td>${rescueTeam}</td>
    `;


    table.prepend(newRow);


    // UPDATE ACTIVE EMERGENCY COUNT

    let count =
        parseInt(
            document.getElementById("emergencyCount").innerText
        );

    document.getElementById("emergencyCount").innerText =
        count + 1;


    alert(
        "AI ANALYSIS COMPLETED!\n\n" +
        "Risk: " + riskLevel +
        "\nAssigned Team: " + rescueTeam +
        "\nWeather: " + weather +
        "\n\nRecommendation generated successfully."
    );

}



function approveRescue() {

    const risk =
        document.getElementById("riskLevel").innerText;


    if (risk === "--") {

        alert("Please analyze an emergency first!");

        return;
    }


    document.getElementById("approvalStatus").innerHTML =
        "✅ APPROVED: Human rescue commander approved the AI recommendation. Rescue coordination has started.";


    alert(
        "RESCUE ACTION APPROVED!\n\n" +
        "AI recommendation reviewed.\n" +
        "Human operator approved the final rescue action.\n" +
        "Rescue team has been notified."
    );

}