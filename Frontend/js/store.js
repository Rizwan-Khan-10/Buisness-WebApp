const storeForm = document.getElementById("store-form");
const removeStore = document.getElementById("remove-store");
const addStore = document.getElementById("add-store");
const addCoadmin = document.getElementById("add-coadmin");
const addMember = document.getElementById("add-member");
const adminDetails = document.getElementById("admin-details");
const form = document.getElementById("user-form");
const addCharge = document.getElementById("add-charge");
const addCard = document.getElementById("add-card");
const addProCharge = document.getElementById("add-product-charge");
const newCharge = document.getElementById("new-charge");
const newCard = document.getElementById("new-card");
const newProCharge = document.getElementById("new-product-charge");
const canCharge = document.getElementById("cancel-new-charge");
const canCard = document.getElementById("cancel-new-card");
const canProCharge = document.getElementById("cancel-new-product-charge");
const userRole = document.getElementById("user");
const permissionsDiv = document.getElementById("permissions");
const editPermissionsDiv = document.getElementById("edit-permissions");
const addBuyXGetY = document.getElementById("add-buyXgetY");
const buyXgetYForm = document.getElementById("buyXgetY-form");
const canBuyXGetY = document.getElementById("cancel-buyXgetY");
const addFlatDiscount = document.getElementById("add-flatDiscount");
const flatDiscountForm = document.getElementById("flatDiscount-form");
const canFlatDiscount = document.getElementById("cancel-flatDiscount");
const addCashback = document.getElementById("add-cashback");
const cashbackForm = document.getElementById("cashback-form");
const canCashback = document.getElementById("cancel-cashback");
const addChargeDiscount = document.getElementById("add-chargesDiscount");
const chargeDiscountForm = document.getElementById("chargeDiscount-form");
const canChargeDiscount = document.getElementById("cancel-chargeDiscount");
const addBulkDiscount = document.getElementById("add-bulkDiscount");
const bulkDiscountForm = document.getElementById("bulkDiscount-form");
const canBulkDiscount = document.getElementById("cancel-bulkDiscount");
const onSelect = document.getElementById('on');
const productDiv = document.getElementById('product-div');
const categoryDiv = document.getElementById('category-div');
const removeDiv = document.getElementById('remove-div');
const removedProductDiv = document.getElementById('removed-product-div');
const removeInput = document.getElementById('remove');
const removeProductButton = document.getElementById('remove-product');
const removedProductList = document.getElementById('removed-product');
const bulkOnSelect = document.getElementById('bulk-on');
const bulkProductDiv = document.getElementById('bulk-product-div');
const bulkCategoryDiv = document.getElementById('bulk-category-div');
const bulkRemoveDiv = document.getElementById('bulk-remove-div');
const bulkRemovedProductDiv = document.getElementById('bulk-removed-product-div');
const bulkRemoveInput = document.getElementById('bulk-remove');
const bulkRemoveProductButton = document.getElementById('bulk-remove-product');
const bulkRemovedProductList = document.getElementById('bulk-removed-product');
const addNewStore = document.getElementById("add-new-store");
const generatedIds = new Set();

const permissions = [
    { value: "manage-member", label: "Manage Member", allow: "coadmin" },
    { value: "manage-charges", label: "Manage Charges", allow: "coadmin" },
    { value: "manage-discount", label: "Manage Discount", allow: "coadmin" },
    { value: "view-purchased", label: "View Purchased Price", allow: "coadmin" },
    { value: "view-revenue", label: "View Revenue", allow: "coadmin" },
    { value: "manage-bill", label: "Manage Bill", allow: "member" },
];


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
    displayProducts(products);
    displayStoreDetails('store', storeData);
    displayStoreDetails('admin', adminData);
    displayStoreDetails('coadmin', coAdminData);
    displayStoreDetails('member', memberData);
    setupEventListeners();
});

function setupEventListeners() {
    document.querySelector(".edit-admin").addEventListener("click", () => {
        toggleVisibility(form, true, "admin", "edit");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.querySelectorAll(".edit-store").forEach(editButton => {
        editButton.addEventListener("click", () => {
            toggleVisibility(storeForm, true, "store", "edit");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });


    document.querySelectorAll(".edit-coadmin").forEach(editButton => {
        editButton.addEventListener("click", () => {
            toggleVisibility(form, true, "coadmin", "edit");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    document.querySelectorAll(".edit-member").forEach(editButton => {
        editButton.addEventListener("click", () => {
            toggleVisibility(form, true, "member", "edit");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
}

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
    const dataArray = Array.isArray(data) ? data : [data];
    dataArray.forEach(element => {
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
        newDiv.setAttribute("data-aid", element.aid);
        info.appendChild(newDiv);
    });
}


function toggleVisibility(element, show, info, type) {
    if (show) {
        element.classList.remove("hidden");
        element.classList.add("flex");
        document.getElementById("user-info").classList.add("hidden");
        document.getElementById("inventory-details").classList.add("hidden");
        document.getElementById("charges-section").classList.remove("flex");
        document.getElementById("charges-section").classList.add("hidden");
        document.getElementById("discount-section").classList.remove("flex");
        document.getElementById("discount-section").classList.add("hidden");
        if (type === "new" && info === "store") {
            document.getElementById("store").innerHTML = "Add Store Details";
            // removeStore.classList.add("hidden");
            storeForm.firstElementChild.method = "POST";
        } else if (type === "edit" && info === "store") {
            document.getElementById("store").innerHTML = "Edit Store Details";
            // removeStore.classList.remove("hidden");
            storeForm.firstElementChild.method = "PUT";
        } else if (type === "new" && info === "coadmin") {
            document.getElementById("user").innerHTML = "Add Co-Admin Details";
            form.firstElementChild.method = "POST";
            renderPermissions(userRole.innerText);
        } else if (type === "new" && info === "member") {
            document.getElementById("user").innerHTML = "Add Member Details";
            form.firstElementChild.method = "POST";
            renderPermissions(userRole.innerText);
        } else if (type === "edit" && info === "coadmin") {
            document.getElementById("user").innerHTML = "Edit Co-Admin Details";
            form.firstElementChild.method = "PUT";
            renderPermissions(userRole.innerText,);
        } else if (type === "edit" && info === "member") {
            document.getElementById("user").innerHTML = "Edit Member Details";
            form.firstElementChild.method = "PUT";
            renderPermissions(userRole.innerText,);
        } else if (type === "edit" && info === "admin") {
            document.getElementById("user").innerHTML = "Edit Admin Details";
            form.firstElementChild.method = "PUT";
            renderPermissions(userRole.innerText,);
        }
    } else {
        element.classList.remove("flex");
        element.classList.add("hidden");
        document.getElementById("user-info").classList.remove("hidden");
        document.getElementById("inventory-details").classList.remove("hidden");
        document.getElementById("charges-section").classList.remove("hidden");
        document.getElementById("charges-section").classList.add("flex");
        document.getElementById("discount-section").classList.remove("hidden");
        document.getElementById("discount-section").classList.add("flex");
    }
}

addStore.addEventListener("click", (e) => {
    toggleVisibility(storeForm, true, "store", "new");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

addCoadmin.addEventListener("click", (e) => {
    toggleVisibility(form, true, "coadmin", "new");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

addMember.addEventListener("click", (e) => {
    toggleVisibility(form, true, "member", "new");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("cancel-store-form").addEventListener("click", (e) => {
    toggleVisibility(storeForm, false);
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("cancel-form").addEventListener("click", (e) => {
    toggleVisibility(form, false);
    const btnText = document.getElementById("user").innerHTML.trim();
    if (btnText === "Add Member Details" || btnText === "Edit Member Details") {
        scrollToElement("member-heading");
    } else if (btnText === "Add Co-Admin Details" || btnText === "Edit Co-Admin Details") {
        scrollToElement("coadmin-heading")
    }
});

function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}

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

function toggleCharges(form, btn, show) {
    form.classList.toggle("hidden", !show);
    form.classList.toggle("flex", show);
    btn.classList.toggle("hidden", show);
    const charge = btn.parentElement.parentElement.parentElement;
    const discount = btn.parentElement.parentElement;
    if (show) {
        window.scrollTo({ top: form.offsetTop, behavior: "smooth" });
    } else if (form === canCard || form === canCharge || form === canProCharge) {
        window.scrollTo({ top: charge.offsetTop, behavior: "smooth" });
    } else {
        window.scrollTo({ top: discount.offsetTop, behavior: "smooth" });
    }
}

[
    { button: addCard, form: newCard },
    { button: addCharge, form: newCharge },
    { button: addProCharge, form: newProCharge },
    { button: addBuyXGetY, form: buyXgetYForm },
    { button: addFlatDiscount, form: flatDiscountForm },
    { button: addCashback, form: cashbackForm },
    { button: addChargeDiscount, form: chargeDiscountForm },
    { button: addBulkDiscount, form: bulkDiscountForm },
].forEach(({ button, form }) => {
    button.addEventListener("click", () => toggleCharges(form, button, true));
});

[
    { button: canCard, form: newCard, trigger: addCard },
    { button: canCharge, form: newCharge, trigger: addCharge },
    { button: canProCharge, form: newProCharge, trigger: addProCharge },
    { button: canBuyXGetY, form: buyXgetYForm, trigger: addBuyXGetY },
    { button: canFlatDiscount, form: flatDiscountForm, trigger: addFlatDiscount },
    { button: canCashback, form: cashbackForm, trigger: addCashback },
    { button: canChargeDiscount, form: chargeDiscountForm, trigger: addChargeDiscount },
    { button: canBulkDiscount, form: bulkDiscountForm, trigger: addBulkDiscount },
].forEach(({ button, form, trigger }) => {
    button.addEventListener("click", () => toggleCharges(form, trigger, false));
});

function renderPermissions(role) {
    permissionsDiv.innerHTML = "";
    const permissionDiv = document.getElementById("permission-div");
    if (role === "Add Co-Admin Details" || role === "Edit Co-Admin Details") {
        const allowedPermissions = permissions.filter(permission => permission.allow === "coadmin");
        if (permissionDiv.classList.contains("hidden")) {
            permissionDiv.classList.remove("hidden");
            permissionDiv.classList.add("flex");
        }
        allowedPermissions.forEach(permission => {
            const label = document.createElement("label");
            label.classList.add("flex", "items-center", "space-x-2");
            label.style.width = "200px";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "permissions";
            checkbox.value = permission.value;
            checkbox.classList.add("w-5", "h-5");
            const span = document.createElement("span");
            span.textContent = permission.label;
            label.appendChild(checkbox);
            label.appendChild(span);
            permissionsDiv.appendChild(label);
        });
    }
    else if (role === "Add Member Details" || role === "Edit Member Details") {
        const allowedPermissions = permissions.filter(permission => permission.allow === "member");
        if (permissionDiv.classList.contains("hidden")) {
            permissionDiv.classList.remove("hidden");
            permissionDiv.classList.add("flex");
        }
        allowedPermissions.forEach(permission => {
            const label = document.createElement("label");
            label.classList.add("flex", "items-center", "space-x-2");
            label.style.width = "200px";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "permissions";
            checkbox.value = permission.value;
            checkbox.classList.add("w-5", "h-5");
            const span = document.createElement("span");
            span.textContent = permission.label;
            label.appendChild(checkbox);
            label.appendChild(span);
            permissionsDiv.appendChild(label);
        });
    } else if (role === "Edit Admin Details") {
        permissionDiv.classList.remove("flex");
        permissionDiv.classList.add("hidden");
    }
}

onSelect.addEventListener('change', function () {
    if (this.value === 'category') {
        productDiv.classList.remove('flex');
        productDiv.classList.add('hidden');
        categoryDiv.classList.remove('hidden');
        categoryDiv.classList.add('flex');
        removeDiv.classList.remove('hidden');
        removeDiv.classList.add('flex');
        removedProductDiv.classList.remove('hidden');
        removedProductDiv.classList.add('flex');
    } else {
        productDiv.classList.remove('hidden');
        productDiv.classList.add('flex');
        categoryDiv.classList.remove('flex');
        categoryDiv.classList.add('hidden');
        removeDiv.classList.remove('flex');
        removeDiv.classList.add('hidden');
        removedProductDiv.classList.remove('flex');
        removedProductDiv.classList.add('hidden');
    }
});

function addProduct() {
    const value = removeInput.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.classList.add('border', 'py-2', 'px-5', 'text-xl', 'relative', 'rounded');
        li.textContent = value;
        const removeIcon = document.createElement('i');
        removeIcon.classList.add('fa-solid', 'fa-times', 'text-sm', 'absolute', 'top-1', 'right-1', 'cursor-pointer', 'text-red-500');
        removeIcon.title = 'Remove item';
        removeIcon.addEventListener('click', function () {
            li.remove();
        });
        li.appendChild(removeIcon);
        removedProductList.appendChild(li);
        removeInput.value = '';
    }
}

removeProductButton.addEventListener('click', addProduct);
removeInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addProduct();
    }
});

bulkOnSelect.addEventListener('change', function () {
    if (this.value === 'category') {
        bulkProductDiv.classList.remove('flex');
        bulkProductDiv.classList.add('hidden');
        bulkCategoryDiv.classList.remove('hidden');
        bulkCategoryDiv.classList.add('flex');
        bulkRemoveDiv.classList.remove('hidden');
        bulkRemoveDiv.classList.add('flex');
        bulkRemovedProductDiv.classList.remove('hidden');
        bulkRemovedProductDiv.classList.add('flex');
    } else {
        bulkProductDiv.classList.remove('hidden');
        bulkProductDiv.classList.add('flex');
        bulkCategoryDiv.classList.remove('flex');
        bulkCategoryDiv.classList.add('hidden');
        bulkRemoveDiv.classList.remove('flex');
        bulkRemoveDiv.classList.add('hidden');
        bulkRemovedProductDiv.classList.remove('flex');
        bulkRemovedProductDiv.classList.add('hidden');
    }
});

function addBulkProduct() {
    const value = bulkRemoveInput.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.classList.add('border', 'py-2', 'px-5', 'text-xl', 'relative', 'rounded');
        li.textContent = value;

        const removeIcon = document.createElement('i');
        removeIcon.classList.add('fa-solid', 'fa-times', 'text-sm', 'absolute', 'top-1', 'right-1', 'cursor-pointer', 'text-red-500');
        removeIcon.title = 'Remove item';
        removeIcon.addEventListener('click', function () {
            li.remove();
        });
        li.appendChild(removeIcon);
        bulkRemovedProductList.appendChild(li);
        bulkRemoveInput.value = '';
    }
}

bulkRemoveProductButton.addEventListener('click', addBulkProduct);
bulkRemoveInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addBulkProduct();
    }
});

function generateUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    do {
        result = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
    } while (generatedIds.has(result));
    generatedIds.add(result);
    return result;
}

function validateAndGetFormData(formElement, requiredFieldsSelector) {
    const requiredFields = formElement.querySelectorAll(requiredFieldsSelector);
    let isValid = true;
    const emptyFields = [];
    const formData = {};
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            emptyFields.push(field.name || 'Unnamed Field');
        } else {
            field.classList.remove('error');
        }
    });
    if (!isValid) {
        alert(`Please fill in the following required fields:\n- ${emptyFields.join('\n- ')}`);
        return null;
    }
    const inputs = formElement.querySelectorAll('input, select, textarea');
    inputs.forEach(field => {
        if (field.name) {
            formData[field.name] = field.value.trim() || 'Not Available';
        }
    });
    return formData;
}

addNewStore.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = validateAndGetFormData(storeForm, '[required]');
    if (formData) {
        formData.aid = generateUniqueId();
        formData.id = formData.id || formData.aid;
        formData.email = formData.email || 'NaN';
        formData.phone = formData.phone || 'NaN';
        formData.photo = formData.photo || '../assets/images/logo.png';
        displayStoreDetails('store', formData);
        toggleVisibility(storeForm, false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setupEventListeners();
    }
});
