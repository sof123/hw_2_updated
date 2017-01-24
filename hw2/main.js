var numPics = 3;
var bballArray = ["bball1.png","bball2.png","bball3.jpg"];
var appleArray = ["apple1.png","apple2.png","apple3.png"];
var moneyArray = ["money1.jpg","money2.jpg", "money3.jpg"];
var pizzaArray = ["pizza1.png", "pizza2.png", "pizza3.jpg"];

//init count of index in array of pics for each thing
var bballCounter = 0;
var appleCounter = 0;
var moneyCounter = 0;
var pizzaCounter = 0;

//begin changing pics
changePics("pizza");
changePics("bball");
changePics("apple");
changePics("money");

//intervals for each pic
var bballInterval;
var appleInterval;
var moneyInterval;
var pizzaInterval;



function changePics(imageType)
{
	if (imageType == "pizza")
	{
		var interval = (Math.random() * 4000) + 1000;
		pizzaInterval = setInterval(changePic,interval,imageType);
	}
	else if (imageType == "bball")
	{
		var interval = (Math.random() * 4000) + 1000;
		bballInterval = setInterval(changePic,interval,imageType);
	}
	else if (imageType == "money")
	{
		var interval = (Math.random() * 4000) + 1000;
		moneyInterval = setInterval(changePic,interval,imageType);
	}
	else if (imageType == "apple")
	{
		var interval = (Math.random() * 4000) + 1000;
		appleInterval = setInterval(changePic,interval,imageType);
	}
}

function changePic(imageType)
{
	if (imageType == "money")
	{
		document.getElementById("money").src = moneyArray[(moneyCounter+1) % numPics];
		moneyCounter+=1;
	}
	else if (imageType == "pizza")
	{
		document.getElementById("pizza").src = pizzaArray[(pizzaCounter+1) % numPics];
		pizzaCounter+=1;
	}
	else if (imageType == "bball")
	{
		document.getElementById("bball").src = bballArray[(bballCounter+1) % numPics];
		bballCounter+=1;
	}
	else if (imageType == "apple")
	{
		document.getElementById("apple").src = appleArray[(appleCounter+1) % numPics];
		appleCounter+=1;
	}
}

function timer(buttonType)
{
	if (buttonType == "apple")
	{
		if (document.getElementById("appleButton").value == "Stop")
		{
			document.getElementById("appleButton").value = "Start";
			clearInterval(appleInterval);
		}
		else
		{
			document.getElementById("appleButton").value = "Stop";
			var interval = (Math.random() * 4000) + 1000;
			appleInterval = setInterval(changePic,interval,buttonType);

		}
	}
	else if (buttonType == "pizza")
	{
		if (document.getElementById("pizzaButton").value == "Stop")
		{
			document.getElementById("pizzaButton").value = "Start";
			clearInterval(pizzaInterval);
		}
		else
		{
			document.getElementById("pizzaButton").value = "Stop";
			var interval = (Math.random() * 4000) + 1000;
			pizzaInterval = setInterval(changePic,interval,buttonType);

		}
	}
	else if (buttonType == "money")
	{
		if (document.getElementById("moneyButton").value == "Stop")
		{
			document.getElementById("moneyButton").value = "Start";
			clearInterval(moneyInterval);
		}
		else
		{
			document.getElementById("moneyButton").value = "Stop";
			var interval = (Math.random() * 4000) + 1000;
			moneyInterval = setInterval(changePic,interval,buttonType);

		}
	}
	else if (buttonType == "bball")
	{
		if (document.getElementById("bballButton").value == "Stop")
		{
			document.getElementById("bballButton").value = "Start";
			clearInterval(bballInterval);
		}
		else
		{
			document.getElementById("bballButton").value = "Stop";
			var interval = (Math.random() * 4000) + 1000;
			bballInterval = setInterval(changePic,interval,buttonType);

		}
	}


}
