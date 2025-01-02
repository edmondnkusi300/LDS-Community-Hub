// Dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const dashboardSection = document.getElementById('dashboardSection');

    const loadDashboardData = async () => {
        try {
            const response = await fetch('/api/dashboard');
            const data = await response.json();

            if (response.ok) {
                dashboardSection.innerHTML = `
                    <h1>Welcome to Your Dashboard</h1>
                    <p>${data.message}</p>
                `;
            } else {
                dashboardSection.innerHTML = '<p>Error loading dashboard data. Please try again later.</p>';
            }
        } catch (error) {
            console.error('Error:', error);
            dashboardSection.innerHTML = '<p>An error occurred. Please try again later.</p>';
        }
    };

    loadDashboardData();
});