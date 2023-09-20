<!-- JavaScript kodunu formun hemen üstüne ekleyin -->
<script>
    // Referans kodunu kontrol etmek için bir dizi oluşturun
    var allowedCodes = ["ahmet15", "jane25", "john10"]; // İzin verilen referans kodlarını burada listeleyin

    // Fiyat hesaplama fonksiyonu
    function calculatePrice() {
        // Get the potential customers input
        var potentialCustomersInput = document.getElementById("potentialCustomers");
        var potentialCustomers = potentialCustomersInput.value.trim();

        // Check if it contains only numbers
        if (!/^\d+$/.test(potentialCustomers)) {
            alert("Please enter a valid number for potential customers.");
            return;
        }

        // Convert the potentialCustomers to a numeric value
        potentialCustomers = parseInt(potentialCustomers);

        // Calculate the price based on the potential customers
        var price;
        if (potentialCustomers >= 1000 && potentialCustomers < 10000) {
            price = (potentialCustomers * 0.25).toFixed(2);
        } else if (potentialCustomers >= 10000 && potentialCustomers < 50000) {
            price = (potentialCustomers * 0.22).toFixed(2);
        } else if (potentialCustomers >= 50000 && potentialCustomers < 100000) {
            price = (potentialCustomers * 0.19).toFixed(2);
        } else if (potentialCustomers >= 100000 && potentialCustomers < 500000) {
            price = (potentialCustomers * 0.16).toFixed(2);
        } else if (potentialCustomers >= 500000 && potentialCustomers < 1000000) {
            price = (potentialCustomers * 0.13).toFixed(2);
        } else if (potentialCustomers >= 1000000 && potentialCustomers < 5000000) {
            price = (potentialCustomers * 0.10).toFixed(2);
        } else if (potentialCustomers >= 5000000 && potentialCustomers < 10000000) {
            price = (potentialCustomers * 0.06).toFixed(2);
        } else if (potentialCustomers >= 10000000 && potentialCustomers < 50000000) {
            price = (potentialCustomers * 0.03).toFixed(2);
        } else if (potentialCustomers >= 50000000 && potentialCustomers <= 100000000) {
            price = (potentialCustomers * 0.0009).toFixed(2);
        } else {
            price = "Invalid quantity";
        }

        // Get the reference code input
        var refCodeInput = document.getElementById("refCode");
        var refCode = refCodeInput.value.trim();

        // Check if the entered reference code is in the allowed codes array
        if (allowedCodes.includes(refCode)) {
            // Update the displayed price with a green checkmark
            var displayedPrice = document.getElementById("displayedPrice");
            displayedPrice.textContent = "$ " + price + "/TOTAL ✓";
            displayedPrice.style.color = "green";
        } else {
            // Display an error message if the reference code is not valid
            alert("Invalid reference code.");
        }
    }
  
    // Formu doğrulama fonksiyonu
    function validateForm() {
        // Get the job input
        var jobInput = document.getElementById("job");
        var job = jobInput.value.trim();

        // Check if the job field is empty
        if (job === "") {
            alert("Please enter your job.");
            return false;
        }

        // Devam etmek için true döndür
        return true;
    }
</script>
