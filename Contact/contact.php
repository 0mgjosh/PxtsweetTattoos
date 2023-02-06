<!DOCTYPE html>
<html>
    <head>
        <title>Contact</title>
        <link rel="stylesheet" href="cstyles.css">
        <script src="cscript.js"></script>
    </head>

        <body>
            <img class="logo" src="assets\LogoTransparent.png">

            <div id="formdiv">
                <form action="obwan.php" method="post" >
                    <h1>Contact Form</h1>

                    <label for="reason">I am looking to:</label>
                    <select id="reason" name="reason" required>
                        <option disabled="" selected="">--choose one--</option>
                        <option value="Appointment Request" onclick="bookingselected()">Book Appointment</option>
                        <option value="Client Question">Ask A Question</option>
                        <option value="Other">Other</option>
                    </select> <br><br>

                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" placeholder="  First Name" required><br><br>
    
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" placeholder="  Last Name" required><br><br>

                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="  123-123-1234"
                    required><br><br>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="  example@email.com"> <br><br>

                    <input id="subbutton" type="submit" value="submit">
                </form>
        </div>
    </body>
</html>