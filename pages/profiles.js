// Profile.js

document.addEventListener('DOMContentLoaded', () => {
    const profileSection = document.getElementById('profileSection');

    const loadProfileData = async () => {
        try {
            const response = await fetch('/api/profile');
            const data = await response.json();

            if (response.ok) {
                profileSection.innerHTML = `
                    <h1>Your Profile</h1>
                    <p>Name: ${data.name}</p>
                    <p>Email: ${data.email}</p>
                `;
            } else {
                profileSection.innerHTML = '<p>Error loading profile data. Please try again later.</p>';
            }
        } catch (error) {
            console.error('Error:', error);
            profileSection.innerHTML = '<p>An error occurred. Please try again later.</p>';
        }
    };

    loadProfileData();
});
