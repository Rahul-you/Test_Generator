// Function to set the current year in the footer
document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});
