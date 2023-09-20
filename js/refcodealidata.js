<script>
    // Function to display an approval checkmark
    function showCheckmark() {
        var refCodeInput = document.getElementById("refCode");
        var refCode = refCodeInput.value.trim();

        // Check against your predefined valid reference codes
        var validRefCodes = ["ahmet15", "mehmet15", "ali15"]; // Add your own codes here

        if (validRefCodes.includes(refCode)) {
            alert("Your discount has been activated.");
            // You can add the code to display the approval checkmark here.
        } else {
            alert("Invalid reference code. Please enter the correct reference code.");
            // You can add the code to display the error message here.
        }
    }
</script>
