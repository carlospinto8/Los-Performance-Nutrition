const imageListWhey = ["vanilla", "chocolate", "cookiecream", "bdaycake", "strawberry"];


function switchWheyProteinProductImage() {
    let selectedImage = document.myForm.wheyProteinFlavors.options[document.myForm.wheyProteinFlavors.selectedIndex].value;
    if(selectedImage == "vanilla") {
        document.getElementById("wheyprotein-image").src =
            "images/wheyprotein-vanilla-lg.jpg";
    } else if(selectedImage === "chocolate") {
        document.getElementById("wheyprotein-image").src =
            "images/wheyprotein-chocolate-lg.jpg";
    } else if(selectedImage === "cookies") {
        document.getElementById("wheyprotein-image").src =
            "images/wheyprotein-cookiecream-lg.jpg";
    }else if(selectedImage === "bday") {
        document.getElementById("wheyprotein-image").src =
            "images/wheyprotein-bdaycake-lg.jpg";
    }else if(selectedImage === "strawberry") {
        document.getElementById("wheyprotein-image").src =
            "images/wheyprotein-strawberry-lg.jpg";
    } else {
        return;
    }
}

function switchVeganProteinProductImage() {
    let selectedImage = document.myForm.veganProteinFlavors.options[document.myForm.veganProteinFlavors.selectedIndex].value;
    if(selectedImage == "vanilla") {
        document.getElementById("veganprotein-image").src =
            "images/veganprotein-vanilla-lg.jpg";
    } else if(selectedImage === "chocolate") {
        document.getElementById("veganprotein-image").src =
            "images/veganprotein-chocolate-lg.jpg";
    } else if(selectedImage === "pb") {
        document.getElementById("veganprotein-image").src =
            "images/veganprotein-peanutbutter-lg.jpg";
    } else if(selectedImage === "pumpkin") {
        document.getElementById("veganprotein-image").src =
            "images/veganprotein-pumpkinpie-lg.jpg";
    } else {
        return;
    }
}

function switchPreworkoutProductImage() {
    let selectedImage = document.myForm.preworkoutFlavors.options[document.myForm.preworkoutFlavors.selectedIndex].value;
    if(selectedImage == "blue") {
        document.getElementById("preworkout-image").src =
            "images/preworkout-blueras-lg.png";
    } else if(selectedImage === "watermelon") {
        document.getElementById("preworkout-image").src =
            "images/preworkout-watermelon-lg.jpg";
    } else if(selectedImage === "lemonade") {
        document.getElementById("preworkout-image").src =
            "images/preworkout-pinklemonade-lg.jpg";
    } else {
        return;
    }
}

function switchBcaaProductImage() {
    let selectedImage = document.myForm.bcaaFlavors.options[document.myForm.bcaaFlavors.selectedIndex].value;
    if(selectedImage == "apple") {
        document.getElementById("bcaa-image").src =
            "images/bcaa-sourapple-lg.png";
    } else if(selectedImage === "lemon") {
        document.getElementById("bcaa-image").src =
            "images/bcaa-lemonlime-lg.png";
    } else if(selectedImage === "lemonade") {
        document.getElementById("bcaa-image").src =
            "images/bcaa-raslemonade-lg.png";
    } else {
        return;
    }
}

function switchElectrolyteProductImage() {
    let selectedImage = document.myForm.electrolyteFlavors.options[document.myForm.electrolyteFlavors.selectedIndex].value;
    if(selectedImage == "punch") {
        document.getElementById("electrolyte-image").src =
            "images/electrolytes-punch-lg.png";
    } else if(selectedImage === "sour") {
        document.getElementById("electrolyte-image").src =
            "images/electrolytes-watermelon-lg.png";
    } else if(selectedImage === "lemonade") {
        document.getElementById("electrolyte-image").src =
            "images/electrolytes-lemonade-lg.png";
    } else {
        return;
    }
}

function switchGreensProductImage() {
    let selectedImage = document.myForm.greensFlavors.options[document.myForm.greensFlavors.selectedIndex].value;
    if(selectedImage == "lemon") {
        document.getElementById("greens-image").src =
            "images/Greens-lemonlime-lg.png";
    } else if(selectedImage === "berry") {
        document.getElementById("greens-image").src =
            "images/Greens-berry-lg.png";
    } else {
        return;
    }
}

function switchSleepProductImage() {
    let selectedImage = document.myForm.sleepFlavors.options[document.myForm.sleepFlavors.selectedIndex].value;
    if(selectedImage == "orange") {
        document.getElementById("sleep-image").src =
            "images/sleep-orange-lg.jpg";
    } else if(selectedImage === "chocolate") {
        document.getElementById("sleep-image").src =
            "images/sleep-chocolate-lg.jpg";
    } else if(selectedImage === "vanilla") {
        document.getElementById("sleep-image").src =
            "images/sleep-vanilla-lg.jpg";
    } else {
        return;
    }
}