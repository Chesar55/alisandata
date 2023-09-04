<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $phoneNumber = $_POST["phoneNumber"];
    $job = $_POST["job"];
    $potentialCustomers = $_POST["potentialCustomers"];
    $message = $_POST["message"];

    // You can write your form data processing code here.
    // For example, you can send this data via email or save it to a database.

    // Example: Sending form data via email
    $to = "alisangul123@gmail.com";
    $subject = "New Contact Form Submission";
    $messageBody = "Full Name: $fullName\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Phone Number: $phoneNumber\n";
    $messageBody .= "Occupation: $job\n";
    $messageBody .= "Potential Customers: $potentialCustomers\n";
    $messageBody .= "Message:\n$message";
    
    $headers = "From: $email";

    if (mail($to, $subject, $messageBody, $headers)) {
        echo "<script>alert('Your message has been successfully sent. We will get back to you as soon as possible.');</script>";
    } else {
        echo "<script>alert('There was an error while sending your message. Please try again later.');</script>";
    }
}
?>
