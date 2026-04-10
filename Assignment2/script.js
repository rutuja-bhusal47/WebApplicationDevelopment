// Show form
function showForm() {
    document.getElementById("userForm").style.display = "block";
}

// Handle form submit
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;

    // Create table row
    let row = `
        <tr>
            <td>${name}</td>
            <td>${city}</td>
            <td>${email}</td>
        </tr>
    `;

    // Add row to table
    document.getElementById("tableBody").innerHTML += row;

    // Reset form
    document.getElementById("form").reset();

    // Hide form (optional)
    document.getElementById("userForm").style.display = "none";
});