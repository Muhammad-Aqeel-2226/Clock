var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var heading = document.getElementById('heading');
var ampm = document.getElementById('ampm'); // Assuming there's an element to show AM/PM

function clock() {
    var d = new Date();
    var currentHour = d.getHours(); // Get the current hour in 24-hour format
    var currentMinute = d.getMinutes();
    var currentSecond = d.getSeconds();

  // Determine AM/PM
    var period = currentHour >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
    currentHour = currentHour % 12;
    currentHour = currentHour ? currentHour : 12; // The hour '0' should be '12'

  // Display the time with leading zeros if necessary
    hour.innerText = String(currentHour).padStart(2, '0');
    minute.innerText = String(currentMinute).padStart(2, '0');
    second.innerText = String(currentSecond).padStart(2, '0');
    ampm.innerText = period;

    // Adjust the greeting based on the current hour
    if (currentHour >= 4 && currentHour < 10 && period === 'AM') {
        heading.innerText = 'Good Morning';
    } else if (currentHour >= 10 && currentHour < 12 && period === 'AM') {
        heading.innerText = 'Good Morning';
    } else if (period === 'PM' && currentHour < 3) {
        heading.innerText = 'Good Afternoon';
    } else if (period === 'PM' && currentHour >= 3 && currentHour < 6) {
        heading.innerText = 'Good Evening';
    } else {
        heading.innerText = 'Good Night';
    }
}

setInterval(clock, 1000);