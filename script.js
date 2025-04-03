document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  function incrementCount() {
      let count = getCookie("count");

      if (count === null) {
          count = 0; // Initialize if cookie doesn't exist
      } else {
          count = parseInt(count, 10);
      }

      count++; // Increment the count

      setCookie("count", count, 7); // Save the updated count for 7 days

      // Ensure the count display element exists
      let countElement = document.getElementById("countDisplay");
      if (countElement) {
          countElement.textContent = count;
      } else {
          console.error("Element with ID 'countDisplay' not found.");
      }
  }

  // Call the function when the page loads
  incrementCount();
});
