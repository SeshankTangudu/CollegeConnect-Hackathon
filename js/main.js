document.addEventListener("DOMContentLoaded", function () {
  const role = sessionStorage.getItem("role") || "student";
  const nav = document.getElementById("nav-links");

  let links = "";

  if (role === "superadmin") {
    links = `
      <a href="dashboard.html">Dashboard</a>
      <a href="view-events.html">View Events</a>
      <a href="not-authorized.html">Manage Bodies</a>
    `;
  } else if (role === "admin") {
    links = `
      <a href="dashboard.html">Dashboard</a>
      <a href="create-event.html">Create Event</a>
      <a href="venue-booking.html">Book Venue</a>
      <a href="upload-event-data.html">Upload Data</a>
      <a href="view-events.html">View Events</a>
    `;
  } else {
    links = `
      <a href="dashboard.html">Dashboard</a>
      <a href="view-events.html">Browse Events</a>
      <a href="team-formation.html">Join Team</a>
    `;
  }

  if (nav) {
    nav.innerHTML = links;
  }
});
