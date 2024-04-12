document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get selected product
    var selectedProduct = document.getElementById('productName').value;
    
    // Display selected product
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<p>You selected: " + selectedProduct + "</p>";
  });
  
        const form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        const confirm_password = form.elements["confirm_password"].value;
        if("password !== confirm_password"){
            alert("Passwords do not match!");
            event.preventDefault();
        }
        else{
            alert("Account created successfully");
        }
        });
    