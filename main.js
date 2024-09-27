let Cheese = 0;
let ChocoCheese = 0;
let Milk = 50;
let ChocoMilk = 0;
let Cows = 1;
let PriceCow = 10;
let Time = 6000;
let CheeseMakers = 0;
let PriceCheeseMaker = 20;
let ChocoCows = 0;
let PriceChocoCow = 100;

let ChocoCowUnlocked = false;

document.addEventListener("DOMContentLoaded", () => {
    ShowUnlocks()
});

function ShowUnlocks() {
    const elements = document.querySelectorAll("#ChocoCowDiv");
    elements.forEach(element => {
        if (!ChocoCowUnlocked) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    });
}

function Get(Id) {
    return document.getElementById(Id);
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
		PriceCheeseMaker = Math.round(PriceCheeseMaker * 1.15 / 5) * 5;
		Get("CheeseCount").innerText = Math.round(Cheese);
		Get("CheeseMakerCount").innerText = CheeseMakers;
		Get("PriceCheeseMaker").innerText = PriceCheeseMaker;
	}
}

setInterval(() => {
    Get("CheeseCount").innerText = Math.round(Cheese);
    Get("MilkCount").innerText = Math.round(Milk);
    if (Math.round(Cheese) == 3621)
        Get("CheeseCount").innerText = "E621";

    if (Math.round(Cheese) >= 100)
        ChocoCowUnlocked = true
    ShowUnlocks()

	if (Milk >= CheeseMakers / 10 / 2) {
		Cheese += CheeseMakers / 10 / 2;
		Milk -= CheeseMakers / 10 / 2;
		Get("CheesePerSecond").innerText = Math.round(CheeseMakers / 2 * 10) / 10;
	} else {
		Get("CheesePerSecond").innerText = Milk;
		Cheese += Milk;
		Milk = 0;
	}

    Time--;
    Get("TimeLeft").innerText = Math.round(Time / 10);
}, 100);
