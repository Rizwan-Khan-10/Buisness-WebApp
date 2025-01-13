const stockOption = document.getElementById("stock-options");
const selectElement = document.getElementById("category-options");
const quantityUnit = document.getElementById("quantity-unit");
const sellingUnit = document.getElementById("selling-unit");

const categories = [
    "Electronics",
    "Fashion",
    "Home Appliances",
    "Sports",
    "Books",
    "Toys",
    "Beauty",
    "Food"
];

const products = [
    {
        name: "Product 1",
        image: "../assets/images/product.png",
        code: "P001",
        quantity: 50,
        Location: "Aisle 1",
        LocationImage: "../assets/images/location.png",
        rprice: "30.00",
        sprice: "25.00"
    },
    {
        name: "Product 2",
        image: "../assets/images/product.png",
        code: "P002",
        quantity: 60,
        Location: "Aisle 2",
        LocationImage: "../assets/images/location.png",
        rprice: "40.00",
        sprice: "35.00"
    },
    {
        name: "Product 3",
        image: "../assets/images/product.png",
        code: "P003",
        quantity: 75,
        Location: "Aisle 3",
        LocationImage: "../assets/images/location.png",
        rprice: "50.00",
        sprice: "45.00"
    }
];

function displayProducts(products) {
    const tableBody = document.getElementById("stock-details");

    products.forEach(product => {
        const newRow = document.createElement("tr");
        newRow.classList.add("hover:bg-cyan-500", "hover:text-white");

        newRow.innerHTML = `
        <td class="px-4 py-2 border-b border-gray-300">${product.name}</td>
        <td class="w-[122px] px-4 py-2 border-b border-gray-300 flex justify-center items-center">
        <img src="${product.image}" alt="${product.name}" class="h-[90px] object-contain rounded-full img">
        </td>
        <td class="px-4 py-2 border-b border-gray-300">${product.code}</td>
        <td class="px-4 py-2 border-b border-gray-300">${product.quantity}</td>
        <td class="px-4 py-2 border-b border-gray-300">Category</td>
        <td class="px-4 py-2 border-b border-gray-300">${product.Location}</td>
        <td class="w-[122px] px-4 py-2 border-b border-gray-300 flex justify-center items-center">
        <img src="${product.LocationImage}" alt="Location Image" class="h-[90px] object-contain rounded-full loc-img">
        </td>
            <td class="px-4 py-2 border-b border-gray-300">${product.rprice}</td>
            <td class="px-4 py-2 border-b border-gray-300">${product.sprice}</td>
            <td class="px-4 py-2 border-b border-gray-300">0</td>
            <td class="px-4 py-2 border-b border-gray-300">0</td>
            <td class="px-4 py-2 border-b border-gray-300">0</td>
            <td class="px-4 py-2 border-b border-gray-300">28-12-2024</td>
            <td class="px-4 py-2 border-b border-gray-300"><i class="fa-regular fa-pen-to-square edit-product"></i></td>
        `;

        tableBody.appendChild(newRow);
    });
}

function hide(element) {
    element.classList.remove("hidden");
    element.classList.add("flex");
    document.getElementById("inventory").classList.add("hidden");
    document.getElementById("display-stock").classList.add("hidden");
}

function unhide(element) {
    element.classList.remove("flex");
    element.classList.add("hidden");
    document.getElementById("inventory").classList.remove("hidden");
    document.getElementById("display-stock").classList.remove("hidden");
}

document.getElementById("add-product").addEventListener('click', () => {
    hide(document.getElementById("product-form"));
});
document.getElementById("cancel-product-form").addEventListener('click', () => {
    unhide(document.getElementById("product-form"));
});
document.getElementById("add-category").addEventListener('click', () => {
    hide(document.getElementById("category-form"));
});
document.getElementById("cancel-category-form").addEventListener('click', () => {
    unhide(document.getElementById("category-form"));
});
document.getElementById("edit-category").addEventListener('click', () => {
    hide(document.getElementById("edit-category-form"));
});
document.getElementById("cancel-edit-category").addEventListener('click', () => {
    unhide(document.getElementById("edit-category-form"));
});
document.getElementById("stock-details").addEventListener('click', (event) => {
    if (event.target.classList.contains("edit-product")) {
        hide(document.getElementById("edit-product-form"));
    }
});
document.getElementById("cancel-edit-product").addEventListener('click', () => {
    unhide(document.getElementById("edit-product-form"));
});

stockOption.addEventListener("change", displayStock);

function displayStock() {
    document.getElementById("stock-details").innerHTML = "";
    const selected = stockOption.value;
    if (selected === "all") {
        document.getElementById("stock-heading").innerText = "";
        document.getElementById("stock-heading").innerText = "Complete Inventory";
        document.getElementById("display-stock").classList.remove("hidden");
        displayProducts(products);
    } else if (selected === "low") {
        document.getElementById("stock-heading").innerText = "";
        document.getElementById("stock-heading").innerText = "Limited Stock";
        document.getElementById("display-stock").classList.remove("hidden");
        displayProducts(products);
    } else if (selected === "old") {
        document.getElementById("stock-heading").innerText = "";
        document.getElementById("stock-heading").innerText = "Long-Stored Items";
        document.getElementById("display-stock").classList.remove("hidden");
        displayProducts(products);
    } else if (selected === "new") {
        document.getElementById("stock-heading").innerText = "";
        document.getElementById("stock-heading").innerText = "Freshly Added";
        document.getElementById("display-stock").classList.remove("hidden");
        displayProducts(products);
    }
}

displayStock();

const option = document.createElement("option");
categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    selectElement.appendChild(option);
});

document.querySelectorAll('.edit-btn').forEach(icon => {
    icon.addEventListener('click', () => {
        const container = icon.closest('div');
        const input = container.querySelector('.change-input');

        if (input) {
            if (input.hasAttribute('readonly') || input.hasAttribute('disabled')) {
                input.readOnly = false;
                input.disabled = false;
                icon.classList.remove("fa-pen-to-square", "fa-regular");
                icon.classList.add("fa-solid", "fa-check");
            } else {
                input.readOnly = true;
                input.disabled = true;
                icon.classList.remove("fa-solid", "fa-check");
                icon.classList.add("fa-pen-to-square", "fa-regular");
            }

            if (!input.readOnly && !input.disabled) {
                input.focus();
            }
        }
    });
});

quantityUnit.addEventListener('change', () => {
    const unit = quantityUnit.value;
    if (unit === "carton") {
        convertToPiece("Carton");
    } else if (unit === "bundle") {
        convertToPiece("Bundle");
    } else if (unit === "roll") {
        convertToPiece("Roll");
    } else if (unit === "packet") {
        convertToPiece("Packet");
    } else if (unit === "tray") {
        convertToPiece("Tray");
    } else if (unit === "box") {
        convertToPiece("Box");
    } else {
        const container = document.querySelector("#convert-piece");
        container.classList.remove("flex");
        container.classList.add("hidden");
    }
    convertValue();
});

sellingUnit.addEventListener("change", () => {
    convertValue();
});

function convertToPiece(element) {
    const container = document.querySelector("#convert-piece");
    container.classList.remove("hidden");
    container.classList.add("flex");
    container.firstElementChild.innerHTML = "";
    container.firstElementChild.innerHTML = `Enter total number of pieces in one ${element} <span class="text-red-500">*</span>`;
}

function convertValue() {
    const container = document.querySelector("#value-selection");
    const unit = document.getElementById("quantity-unit").value;
    const anotherUnit = sellingUnit.value;
    if ((unit === "kg" || unit === "l") && anotherUnit === "pc") {
        container.classList.remove("hidden");
        container.classList.add("flex");
    } else {
        container.classList.remove("flex");
        container.classList.add("hidden");
    }
}