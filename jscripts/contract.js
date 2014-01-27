function getCurrentTime() 
{
	var currentTime = new Date();
	document.write(currentTime.toLocaleTimeString());
}

function getCurrentDate() 
{
	var todaysDate = new Date();
	document.write(todaysDate.toDateString());
}