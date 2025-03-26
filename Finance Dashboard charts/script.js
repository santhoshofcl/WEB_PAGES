// Navigation functionality
document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".nav-item.active").classList.remove("active");
      item.classList.add("active");
    });
  });
  
  // Revenue Chart
  const revenueCtx = document.getElementById("revenueChart").getContext("2d");
  new Chart(revenueCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue",
          data: [65, 59, 80, 81, 56, 55],
          borderColor: "#4361ee",
          tension: 0.4,
          fill: false,
        },
        {
          label: "Profit",
          data: [28, 48, 40, 19, 86, 27],
          borderColor: "#4cc9f0",
          tension: 0.4,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  
  // User Distribution Chart
  const userCtx = document.getElementById("userChart").getContext("2d");
  new Chart(userCtx, {
    type: "doughnut",
    data: {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [
        {
          data: [45, 35, 20],
          backgroundColor: ["#4361ee", "#4cc9f0", "#f72585"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
  
  // Search functionality
  const searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Add your search logic here
  });
  