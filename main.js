let Cheese = 2500;
let ChocoCheese = 0;
let Milk = 50;
let ChocoMilk = 0;
let Cows = 1;
let PriceCow = 10;
let Time = 6000;
let CheeseMakers = 0;
let ChocoCheeseMakers = 0;
let PriceCheeseMaker = 10;
let PriceChocoCheeseMaker = 30;
let ChocoCows = 0;
let PriceChocoCow = 100;
let SpecCows = 0;

let ChocoCowUnlocked = false;
let SpecCowUnlocked = false;
let CheeseMakerUnlocked = false;
let StocksUnlocked = false;

document.addEventListener("DOMContentLoaded", () => {
    ShowUnlocks();
	Frame();
});

function ShowUnlocks() {
    let elements = document.querySelectorAll("#ChocoCowDiv");
    elements.forEach(element => {
        if (!ChocoCowUnlocked) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });

    elements = document.querySelectorAll("SpecCowDiv");
    elements.forEach(element => {
        if (!SpecCowUnlocked) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });

	elements = document.querySelectorAll("#CheeseMakerDiv");
    elements.forEach(element => {
        if (!CheeseMakerUnlocked) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });

	elements = document.querySelectorAll("#StocksDiv");
    elements.forEach(element => {
        if (!StocksUnlocked) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}

function Get(Id) {
    return document.getElementById(Id);
}

function GetAll(Selector, Callback) {
    document.querySelectorAll(Selector).forEach(Callback(Element));
}

function MakeCheeseFunc() {
    if (Math.round(Milk) > 0) {
        Cheese++;
        Milk--;
        Get("CheeseCount").innerText = Math.round(Cheese);
        Get("MilkCount").innerText = Math.round(Milk);
    }
}

function MakeChocoCheeseFunc() {
    if (Math.round(ChocoMilk) > 0) {
        ChocoCheese++;
        ChocoMilk--;
        Get("ChocoCheeseCount").innerText = Math.round(ChocoCheese);
        Get("ChocoMilkCount").innerText = Math.round(ChocoMilk);
    }
}

function MilkCowFunc() {
	Milk += Cows;
	Get("MilkCount").innerText = Math.round(Milk);
}

function BuyCowFunc() {
    if (Math.round(Cheese) >= PriceCow) {
        Cows++;
        Cheese -= PriceCow;
        PriceCow += 10;
        Get("CowCount").innerText = Cows;
        Get("PriceCow").innerText = PriceCow;
    }
}

function MilkChocoCowFunc() {
	ChocoMilk += ChocoCows;
	Get("ChocoMilkCount").innerText = Math.round(ChocoMilk);
}

function BuyChocoCowFunc() {
    if (Math.round(Cheese) >= PriceChocoCow) {
        ChocoCows++;
        Cheese -= PriceChocoCow;
        PriceChocoCow += 20;
        Get("ChocoCowCount").innerText = ChocoCows;
        Get("PriceChocoCow").innerText = PriceChocoCow;
    }
}

function BuyCheeseMakerFunc() {
	if (Math.round(Cheese) >= PriceCheeseMaker) {
		CheeseMakers++;
		Cheese -= PriceCheeseMaker;
		PriceCheeseMaker = Math.round(PriceCheeseMaker * 1.05);
		Get("CheeseCount").innerText = Math.round(Cheese);
		Get("CheeseMakerCount").innerText = CheeseMakers;
		Get("PriceCheeseMaker").innerText = PriceCheeseMaker;
	}
}

function BuyChocoCheeseMakerFunc() {
	if (Math.round(ChocoCheese) >= PriceChocoCheeseMaker) {
		ChocoCheeseMakers++;
		ChocoCheese -= PriceChocoCheeseMaker;
		PriceChocoCheeseMaker = Math.round(PriceChocoCheeseMaker * 1.05);
		Get("ChocoCheeseCount").innerText = Math.round(ChocoCheese);
		Get("ChocoCheeseMakerCount").innerText = ChocoCheeseMakers;
		Get("PriceChocoCheeseMaker").innerText = PriceChocoCheeseMaker;
	}
}

function FeedSpecCowFunc() {
	if (ChocoMilk >= SpecCows * 2) { 
		ChocoMilk -= SpecCows;
		SpecCows = Math.max(SpecCows, 1) * 2;
	}
	Get("SpecCowCount").innerText = SpecCows;
	Get("PriceSpecCow").innerText = SpecCows * 2;
	Get("ChocoMilkCount").innerText = Math.round(ChocoMilk);
}

function KillSpecCowFunc() {
	SpecCows--;
	if (SpecCows <= 0) {
		SpecCowUnlocked = false;
		SpecCows = 1;
	}
	Get("SpecCowCount").innerText = SpecCows;
	Get("PriceSpecCow").innerText = SpecCows * 2;
	Get("ChocoMilkCount").innerText = Math.round(ChocoMilk);
}

setInterval(() => {
    Get("CheeseCount").innerText = Math.round(Cheese);
	Get("ChocoCheeseCount").innerText = Math.round(ChocoCheese);
    Get("MilkCount").innerText = Math.round(Milk);
	Get("ChocoMilkCount").innerText = Math.round(ChocoMilk);

	if (SpecCowUnlocked == true) {
		Cheese += SpecCows / 32;
		if (SpecCows > 1) { 
			SpecCows -= Math.round(Math.random() * SpecCows / 32 - .5);
		}
		Get("SpecCowCount").innerText = SpecCows;
		Get("PriceSpecCow").innerText = SpecCows * 2;
		Get("ChocoMilkCount").innerText = Math.round(ChocoMilk);
	}

    if (Math.round(Cheese) >= 100)
        ChocoCowUnlocked = true;
	if (Math.round(Cheese) >= 20)
		CheeseMakerUnlocked = true;
	if (Math.round(ChocoCheese) == 69)
		SpecCowUnlocked = true;
	if (Math.round(Cheese) >= 250)
		StocksUnlocked = true;
    ShowUnlocks()

	if (Milk >= CheeseMakers / 10 / 2) {
		Cheese += CheeseMakers / 10 / 2;
		Milk -= CheeseMakers / 10 / 2;
		Get("CheesePerSecond").innerText = Math.round(CheeseMakers / 2 * 10) / 10 + Math.round(SpecCows / 32 * 100) / 10;
	} else {
		Get("CheesePerSecond").innerText = Milk;
		Cheese += Milk;
		Milk = 0;
	}
	if (ChocoMilk >= ChocoCheeseMakers / 10 / 2) {
		ChocoCheese += ChocoCheeseMakers / 10 / 2;
		ChocoMilk -= ChocoCheeseMakers / 10 / 2;
		Get("ChocoCheesePerSecond").innerText = Math.round(ChocoCheeseMakers / 2 * 10) / 10;
	} else {
		Get("ChocoCheesePerSecond").innerText = ChocoMilk;
		ChocoCheese += ChocoMilk;
		ChocoMilk = 0;
	}

    Time--;
    Get("TimeLeft").innerText = Math.round(Time / 10);
}, 100);

function Frame() {
	if (Get("AdhdMode").checked) {
		GetAll("body").forEach(body => {
			body.style.color = "#808080";
		});
		GetAll("button").forEach(button => {
			button.style.color = "#808080";
		});
        GetAll("div:hover button").forEach(button => {
			button.style.color = "#fff";
		});
	} else {
		GetAll("body").forEach(body => {
			body.style.color = "#fff";
		});
		GetAll("button").forEach(button => {
			button.style.color = "#fff";
		});
	}

	requestAnimationFrame(Frame);
}