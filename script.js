// Array of time zones and labels
const timeZones = [
    { offset: -5, label: "EST (UTC-5)" },
    { offset: 0, label: "UTC (UTC+0)" },
    { offset: 1, label: "CET (UTC+1)" },
    { offset: 3, label: "MSK (UTC+3)" },
    { offset: 5.5, label: "IST (UTC+5:30)" },
    { offset: 8, label: "CST (UTC+8)" },
    { offset: 10, label: "AEST (UTC+10)" },
    { offset: -8, label: "PST (UTC-8)" },
    { offset: -4, label: "AST (UTC-4)" },
    { offset: 9, label: "JST (UTC+9)" },
];

// Update each clock's time
function updateClocks() {
    const clocks = document.querySelectorAll(".clock");

    clocks.forEach((clock, index) => {
        const timeZone = timeZones[index];
        const now = new Date();

        // Convert current time to the specific time zone
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const localTime = new Date(utc + timeZone.offset * 3600000);

        const hours = String(localTime.getHours()).padStart(2, "0");
        const minutes = String(localTime.getMinutes()).padStart(2, "0");
        const seconds = String(localTime.getSeconds()).padStart(2, "0");

        // Display the time in HH:MM:SS format
        clock.querySelector(".time").textContent = `${hours}:${minutes}:${seconds}`;
    });
}

// Update clocks every second
setInterval(updateClocks, 1000);

// Initialize clocks on page load
updateClocks();

