
<?php
// Get data from form 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$service_label_design = $_POST['service_label_design'];
$service_distribution = $_POST['service_distribution'];
$service_receiving = $_POST['service_receiving'];
$service_strategy_consulting = $_POST['service_strategy_consulting'];
$service_prepping = $_POST['service_prepping'];
$service_other = $_POST['service_other'];
 
$to = "matt.ph.kam@gmail.com";
// $to = "info@fulfillmentx.com";
$subject = "Fulfillment-x website";
 
// The following text will be sent
$txt = "Name = ". $name 
      . "\r\n Email = " . $email 
      . "\r\n Message =" . $message 
      . "\r\n Design =" . $service_label_design
      . "\r\n Distribution =" . $service_distribution
      . "\r\n Receiving =" . $service_receiving
      . "\r\n Strategy & Consulting =" . $service_strategy_consulting
      . "\r\n Prepping =" . $service_prepping
      . "\r\n Other =" . $service_other;
 
$headers = "From: Fulfillment-x website";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:index.html");
?>