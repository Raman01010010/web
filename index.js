function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    const offcanvasMenu = document.querySelector('.box1');
        offcanvasMenu.style.marginTop = (offcanvasMenu.style.marginTop === '0px') ? '0px' : '300px';
}

let selectedBox = null; // To keep track of the selected box
        const boxes = document.querySelectorAll(".box2");
        let clickIndex = 0; // To keep track of the click order

        // JavaScript function to change box color
        function ram(element) {
            clickIndex++;

            if (clickIndex === boxes.length) {
                // If all boxes have been clicked, reset clickIndex and restore colors
                clickIndex = 1;
                boxes.forEach(box => {
                    box.style.backgroundColor = "#00407A";// Restore original color
                });
            } else {
                // if (selectedBox !== null) {
                //     selectedBox.style.backgroundColor = "#3498db"; // Restore previous box color
                // }
                element.style.backgroundColor ="#7A0000";// Change the color of the clicked box
                selectedBox = element; // Update the selected box
            }
        }
        function ram2(){
            const boxes = document.querySelectorAll(".box2");
            boxes.forEach(box => {
                box.style.backgroundColor = "#00407A";// Restore original color
            });

        }