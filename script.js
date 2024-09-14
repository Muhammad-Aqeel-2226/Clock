let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let heading = document.getElementById('heading');
let ampm = document.getElementById('ampm'); // Assuming there's an element to show AM/PM

function clock() {
    let d = new Date();
    let currentHour = d.getHours(); // Get the current hour in 24-hour format
    let currentMinute = d.getMinutes();
    let currentSecond = d.getSeconds();

    // Determine AM/PM
    let period = currentHour >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    currentHour = currentHour % 12;
    currentHour = currentHour ? currentHour : 12; // The hour '0' should be '12'

    // Adjust the greeting based on the current hour and period
    if (period === 'AM' && currentHour >= 4 && currentHour < 12) {
        heading.innerText = 'Good Morning';
    } else if (period === 'PM' && currentHour < 3) {
        heading.innerText = 'Good Afternoon';
    } else if (period === 'PM' && currentHour >= 3 && currentHour < 9) {
        heading.innerText = 'Good Evening';
    } else {
        heading.innerText = 'Good Night';
    }
}

setInterval(clock, 1000);
