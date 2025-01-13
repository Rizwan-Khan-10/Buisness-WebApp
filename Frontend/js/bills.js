const paymentThrough = document.getElementById("payment-through");
const card = document.getElementById("card");
const newCard = document.getElementById("new-card");
const hideCharge = document.getElementById("hide-charge");
const addCard = document.getElementById("add-card");
const chargeBtn= document.getElementById("charge-btn");
const newCharge = document.getElementById("new-charge");
const newChargeBtn = document.getElementById("new-charge-btn");
const newChargeCancel = document.getElementById("new-charge-cancel");
const generateBill = document.getElementById("generateBill");
const paymentSection= document.getElementById("paymentSection");
const form = document.getElementById("form1");
const back = document.getElementById("back");

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

paymentThrough.addEventListener('change', () => {
    if (paymentThrough.value === 'card') {
        card.classList.remove('hidden');
        card.classList.add('flex');
    } else {
        card.classList.remove('flex');
        card.classList.add('hidden');
        addCard.classList.remove('flex');
        addCard.classList.add('hidden');
    }
});

newCard.addEventListener('change', () => {
    if (newCard.value==='add-card') {
        addCard.classList.remove('hidden');
        hideCharge.classList.remove('flex');
        addCard.classList.add('flex');
        hideCharge.classList.add('hidden');
    } else {
        addCard.classList.remove('flex');
        hideCharge.classList.remove('hidden');
        addCard.classList.add('hidden');
        hideCharge.classList.add('flex');
    }
});

chargeBtn.addEventListener('click', () => {
    newCharge.classList.remove('hidden');
    newChargeBtn.classList.remove('hidden');
    newCharge.classList.add('flex');
    newChargeBtn.classList.add('flex');
    chargeBtn.classList.add('hidden');
});

newChargeCancel.addEventListener('click', () => {
    newCharge.classList.remove('flex');
    newChargeBtn.classList.remove('flex');
    newCharge.classList.add('hidden');
    newChargeBtn.classList.add('hidden');
    chargeBtn.classList.remove('hidden');
});

generateBill.addEventListener('click', () => {
    paymentSection.classList.remove('hidden');
    paymentSection.classList.add('flex');
    form.classList.add('hidden');
});

back.addEventListener('click', () => {
    paymentSection.classList.remove('flex');
    paymentSection.classList.add('hidden');
    form.classList.remove('hidden');
});