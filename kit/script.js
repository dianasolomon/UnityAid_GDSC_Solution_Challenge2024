document.addEventListener('DOMContentLoaded', function() {
    const kitOptions = document.getElementById('kit-options');
    const kitInfo = document.getElementById('kit-info');
    const totalPriceDisplay = document.getElementById('total-price');
    let totalPrice = 0;

    const items = {
        "infants": [
            { name: "Baby clothes (onesies, socks, hats)", price: 10 },
            { name: "Baby blankets", price: 15 },
            { name: "Bottles and formula", price: 20 },
            { name: "Diapers and wipes", price: 12 }
        ],
        "students": [
            { name: "School supplies (notebooks, pens, pencils)", price: 18 },
            { name: "Textbooks or educational materials", price: 25 },
            { name: "Calculator", price: 30 },
            { name: "Backpack", price: 40 }
        ],
        "family": [
            { name: "Clothing (various sizes and styles)", price: 20 },
            { name: "Bedding and linens", price: 25 },
            { name: "Hygiene products (soap, shampoo, toothpaste)", price: 15 },
            { name: "Non-perishable food items", price: 10 }
        ],
        "adults": [
            { name: "Clothing (various sizes and styles)", price: 25 },
            { name: "Hygiene products (soap, shampoo, toothpaste)", price: 15 },
            { name: "Blankets or sleeping bags", price: 30 },
            { name: "Water bottles", price: 10 }
        ],
        "seniors": [
            { name: "Clothing (various sizes and styles)", price: 20 },
            { name: "Medications and medical supplies", price: 35 },
            { name: "Walking aids (canes, walkers)", price: 25 },
            { name: "Reading glasses", price: 20 }
        ]
    };

    function updateTotalPrice() {
        totalPriceDisplay.textContent = totalPrice.toFixed(2);
    }

    function updateKitOptions(selectedCategory) {
        kitOptions.innerHTML = ''; // Clear existing options
        totalPrice = 0;

        const categoryItems = items[selectedCategory];
        const header = document.createElement('h3');
        header.textContent = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1); // Capitalize first letter
        kitOptions.appendChild(header);

        for (const item of categoryItems) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = item.name;
            checkbox.value = item.price;
            checkbox.addEventListener('change', function() {
                const selectedItems = Array.from(kitOptions.querySelectorAll('input[type="checkbox"]:checked'))
                    .map(checkbox => ({ name: checkbox.name, price: parseFloat(checkbox.value) }));
                updateKitInfo(selectedItems);
            });

            const label = document.createElement('label');
            label.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            label.appendChild(checkbox);

            kitOptions.appendChild(label);
        }
    }

    function updateKitInfo(selectedItems) {
        let kitContent = '';
        totalPrice = 0;

        for (const item of selectedItems) {
            kitContent += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
            totalPrice += item.price;
        }

        kitInfo.innerHTML = `<ul>${kitContent}</ul>`;
        updateTotalPrice();
    }

    // Add event listeners to category buttons
    document.getElementById('infants').addEventListener('click', function() {
        updateKitOptions('infants');
    });

    document.getElementById('students').addEventListener('click', function() {
        updateKitOptions('students');
    });

    document.getElementById('family').addEventListener('click', function() {
        updateKitOptions('family');
    });
                                                                                                                                        
    document.getElementById('adults').addEventListener('click', function() {
        updateKitOptions('adults');
    });

    document.getElementById('seniors').addEventListener('click', function() {
        updateKitOptions('seniors');
    });

    // Initialize with default category
    updateKitOptions('infants');

    document.getElementById('kit-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedItems = Array.from(kitOptions.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => ({ name: checkbox.name, price: parseFloat(checkbox.value) }));
        console.log('Selected Items:', selectedItems);

        // Add code here to submit form data as needed (e.g., send to server)
    });
});
