step = 0
function next(){
    step++
    if (step == 1) {
        document.getElementById('myImage').src = "TrashPark1.png"
        document.getElementById('myButton').textContent = "Add River"
    } else if (step == 2) {
        document.getElementById('myImage').src = "TrashPark2.png"
        document.getElementById('myButton').textContent = "Add Path"
    } else if (step == 3) {
        document.getElementById('myImage').src = "TrashPark3.png"
        document.getElementById('myButton').textContent = "Add Trees"
    } else if (step == 4) {
        document.getElementById('myImage').src = "TrashPark4.png"
        document.getElementById('myButton').textContent = "Add Benches"
    } else if (step == 5) {
        document.getElementById('myImage').src = "TrashPark5.png"
        document.getElementById('myButton').textContent = "Add Play Structure"
    } else if (step == 6) {
        document.getElementById('myImage').src = "TrashPark6.png"
        document.getElementById('myButton').textContent = "Add Trash Cans"
    } else if (step == 7) {
        document.getElementById('myImage').src = "TrashPark7.png"
        document.getElementById('myButton').textContent = "Add People"
    } else if (step == 8) {
        document.getElementById('myImage').src = "TrashPark8.png"
        document.getElementById('myButton').textContent = "Reset"
    } else {
        document.getElementById('myImage').src = "TrashPark.png"
        document.getElementById('myButton').textContent = "Pickup Trash"
        step = 0
    }


}