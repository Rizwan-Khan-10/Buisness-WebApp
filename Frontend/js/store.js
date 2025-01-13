const storeForm = document.getElementById("store-form");
const addCoadmin = document.getElementById("add-coadmin");
const addMember = document.getElementById("add-member");
const form = document.getElementById("user-form")
const addCharge = document.getElementById("add-charge");
const addCard = document.getElementById("add-card");
const addProCharge = document.getElementById("add-product-charge");
const newCharge = document.getElementById("new-charge");
const newCard = document.getElementById("new-card");
const newProCharge = document.getElementById("new-product-charge");
const canCharge = document.getElementById("cancel-new-charge");
const canCard = document.getElementById("cancel-new-card");
const canProCharge = document.getElementById("cancel-new-product-charge");

document.addEventListener("DOMContentLoaded", function () {
    const storeData = [
        {
            name: "Tech Hub Store",
            address: "123 Main Street, Tech City",
            email: "store@example.com",
            phone: "+987 654 3210",
            id: "ST001",
            photo: "../assets/images/logo.png"
        },
        {
            name: "Gizmo World",
            address: "456 Tech Lane, Innovate City",
            email: "gizmo@example.com",
            phone: "+123 987 6543",
            id: "ST002",
            photo: "../assets/images/logo.png"
        },
        {
            name: "Gadget Hub",
            address: "789 Innovation Rd, Smart City",
            email: "gadget@example.com",
            phone: "+222 333 4444",
            id: "ST003",
            photo: "../assets/images/logo.png"
        }
    ];

    const adminData = [
        {
            name: "John Doe",
            role: "Administrator of the website",
            email: "admin@example.com",
            phone: "+123 456 7890",
            id: "AD001",
            photo: "../assets/images/profile.png"
        }
    ];

    const coAdminData = [
        {
            name: "Jane Smith",
            role: "Co-Admin",
            email: "jane@example.com",
            phone: "+111 222 3333",
            id: "CA001",
            photo: "../assets/images/profile.png"
        },
        {
            name: "Emily Green",
            role: "Co-Admin",
            email: "emily@example.com",
            phone: "+444 555 6666",
            id: "CA002",
            photo: "../assets/images/profile.png"
        }
    ];

    const memberData = [
        {
            name: "Michael Brown",
            role: "Member",
            email: "michael@example.com",
            phone: "+444 555 6666",
            id: "M001",
            photo: "../assets/images/profile.png"
        },
        {
            name: "Lucas Gray",
            role: "Member",
            email: "lucas@example.com",
            phone: "+555 666 7777",
            id: "M002",
            photo: "../assets/images/profile.png"
        }
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
            `;

            tableBody.appendChild(newRow);
        });
    }

    function displayStoreDetails(container, data) {
        const info = document.getElementById(`${container}-details`);
        data.forEach(element => {
            const newDiv = document.createElement("div");
            newDiv.classList.add(
                "flex", "items-center", "justify-start", "space-x-6",
                "p-2", "bg-white", "shadow-md", "rounded-lg", "mb-4",
                "hover:bg-cyan-500", "group", "transition-all", "duration-300", "border-2", "border-cyan-500", "hover:border-black"
            );
            let img = `${element.photo}`;
            newDiv.innerHTML = `
                <div class="flex-shrink-0">
                    <img src="${img}" 
                         alt="Co-Admin Photo" 
                         class="w-24 h-24 sm:w-28 sm:h-28 rounded-full">
                </div>
                <div>
                    <h3 class="block text-lg font-semibold text-black group-hover:text-white">${element.name}</h3>
                    <p class="text-gray-500 group-hover:text-white">${element.address}</p>
                    <span class="block text-sm text-gray-600 group-hover:text-white">${element.email}</span>
                    <span class="block text-sm text-gray-600 group-hover:text-white">${element.phone}</span>
                    <span class="block text-sm text-gray-600 group-hover:text-white">${element.id}</span>
                </div>
                <div class="absolute top-1 right-1 text-xs sm:right-2 sm:text-sm">
                    <i class="fa-solid fa-user-edit text-cyan-500 group-hover:text-white edit-${container}"></i>
                </div>
            `;
            newDiv.style.position = 'relative';

            info.appendChild(newDiv);
        });
    }


    displayProducts(products);
    displayStoreDetails('store', storeData);
    displayStoreDetails('admin', adminData);
    displayStoreDetails('coadmin', coAdminData);
    displayStoreDetails('member', memberData);
});

function hide(element) {
    element.classList.remove("hidden");
    element.classList.add("flex");
    document.getElementById("user-info").classList.add("hidden");
    document.getElementById("inventory-details").classList.add("hidden");
    document.getElementById("charges-section").classList.remove("flex");
    document.getElementById("charges-section").classList.add("hidden");
}

function unhide(element) {
    element.classList.remove("flex");
    element.classList.add("hidden");
    document.getElementById("user-info").classList.remove("hidden");
    document.getElementById("inventory-details").classList.remove("hidden");
    document.getElementById("charges-section").classList.remove("hidden");
    document.getElementById("charges-section").classList.add("flex");
}

document.getElementById("add-store").addEventListener('click', () => {
    hide(storeForm);
});
addCoadmin.addEventListener('click', () => {
    hide(form);
});
addMember.addEventListener('click', () => {
    hide(form);
});
document.getElementById("cancel-store-form").addEventListener('click', () => {
    unhide(storeForm);
});
document.getElementById("cancel-form").addEventListener('click', () => {
    unhide(form);
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

addCard.addEventListener('click',()=>{
    newCard.classList.remove("hidden");
    newCard.classList.add("flex");
    addCard.classList.add("hidden");
});

addCharge.addEventListener('click',()=>{
    newCharge.classList.remove("hidden");
    newCharge.classList.add("flex");
    addCharge.classList.add("hidden");
});

addProCharge.addEventListener('click',()=>{
    newProCharge.classList.remove("hidden");
    newProCharge.classList.add("flex");
    addProCharge.classList.add("hidden");
});

canCharge.addEventListener('click',()=>{
    newCharge.classList.remove("flex");
    newCharge.classList.add("hidden");
    addCharge.classList.remove("hidden");
});

canCard.addEventListener('click',()=>{
    newCard.classList.remove("flex");
    newCard.classList.add("hidden");
    addCard.classList.remove("hidden");
});

canProCharge.addEventListener('click',()=>{
    newProCharge.classList.remove("flex");
    newProCharge.classList.add("hidden");
    addProCharge.classList.remove("hidden");
});