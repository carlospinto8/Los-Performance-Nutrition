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