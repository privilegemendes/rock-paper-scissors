document.getElementById("heading").style.color = "green";

console.log("Hello!");

function handleClick() {
    // document.getElementById("container2").style.display = "block";

    // document.getElementById("container3").style.display = "none";

    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");

    if (container2.style.display === "block") {
        container2.style.display = "none";
        container3.style.display = "block";
    } else {
        container2.style.display = "block";
        container3.style.display = "none";
    }
}

// Anonymous arrow functions differences

const handleClick2 = () => {
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");

    if (container2.style.display === "block") {
        container2.style.display = "none";
        container3.style.display = "block";
    } else {
        container2.style.display = "block";
        container3.style.display = "none";
    }
};
