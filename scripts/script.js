// Memory Configuration Buttons
const memory8 = document.getElementById("8gb-memory");
const memory16 = document.getElementById("16gb-memory");

// Storage Configuration Buttons
const storage256gb = document.getElementById("256gb-storage");
const storage512gb = document.getElementById("512gb-storage");
const storage1tb = document.getElementById("1tb-storage");

// Delivery Option Buttons
const free = document.getElementById("free");
const express = document.getElementById("express");

// Pricing
const bestPrice = document.getElementById("best-price");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const shippingCost = document.getElementById("shipping-cost");
const totalCost = document.getElementById("total-cost");
const grandTotal = document.getElementById("grand-total");

// Promo
const promoInput = document.getElementById("promo-code");
const promoApplyButton = document.getElementById("promo-apply");
// Promo Messages
const promoSuccess = document.getElementById("message-success");
const promoDanger = document.getElementById("message-danger");
const promoWarning = document.getElementById("message-warning");

//Coupon Validation
var couponMatched = false;
// functions

// Show the Extra costs for addtional config
function displayPrice(cost, display) {
    display.innerText = cost;
}
// Calculate Total Price
function updateTotal() {
    // Converting Prices into Numbers
    const bestPriceNumber = Number(bestPrice.innerText);
    const memoryCostNumber = Number(memoryCost.innerText);
    const storageCostNumber = Number(storageCost.innerText);
    const shippingCostNumber = Number(shippingCost.innerText);
    // Updating Total
    totalCost.innerText =
        bestPriceNumber +
        memoryCostNumber +
        storageCostNumber +
        shippingCostNumber;
    // Updating Grand Total
    if (couponMatched == true) {
        const totalCostNumber = Number(totalCost.innerText);
        grandTotal.innerText = totalCostNumber - totalCostNumber * 0.2;
    } else {
        grandTotal.innerText = totalCost.innerText;
    }
}
// Coupon Checker
function checkPromo(coupon) {
    if (coupon.value == "stevekaku" && couponMatched == false) {
        couponMatched = true;
        updateTotal();

        // show success message
        promoSuccess.style.bottom = "0";
        setTimeout(function () {
            promoSuccess.style.bottom = "-50px";
        }, 1000);
    } else if (couponMatched == true) {
        // show warning message
        promoWarning.style.bottom = "0";
        setTimeout(function () {
            promoWarning.style.bottom = "-50px";
        }, 2000);
    } else {
        // show danger message
        promoDanger.style.bottom = "0";
        setTimeout(function () {
            promoDanger.style.bottom = "-50px";
        }, 1000);
    }
    coupon.value = "";
}

// Memory Buttons click handlers
memory8.addEventListener("click", function () {
    displayPrice(0, memoryCost);
    updateTotal();
});

memory16.addEventListener("click", function () {
    displayPrice(180, memoryCost);
    updateTotal();
});

// Storage Buttons click handlers
storage256gb.addEventListener("click", function () {
    displayPrice(0, storageCost);
    updateTotal();
});

storage512gb.addEventListener("click", function () {
    displayPrice(100, storageCost);
    updateTotal();
});

storage1tb.addEventListener("click", function () {
    displayPrice(180, storageCost);
    updateTotal();
});

// Shipping Buttons Click Handlers
free.addEventListener("click", function () {
    displayPrice(0, shippingCost);
    updateTotal();
});

express.addEventListener("click", function () {
    displayPrice(20, shippingCost);
    updateTotal();
});

// Promo Apply Button Click Handler
promoApplyButton.addEventListener("click", function () {
    checkPromo(promoInput);
});
