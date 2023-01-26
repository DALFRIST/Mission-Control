function checkCreds()
{
    alert("Checking...")
    var eventname = document.getElementById("eventname").value;
    var theme = document.getElementById("theme").value;
    var Badgenumber = document.getElementById("IdNumber").value;
    var eventInfo = eventname + " " + theme;
    alert(eventInfo.length);
    // Checking if your first and last name is in between
    if (eventInfo.length > 20 || eventInfo.length <6)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid event name + theme";
    
    }
    // making sure that you have a badge number between the two #
    if (Badgenumber >999 || Badgenumber <99)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Badgenumber";

    }
    // Goes to the page
    else
    {
        location.replace("Assignment2.html")
    }
}