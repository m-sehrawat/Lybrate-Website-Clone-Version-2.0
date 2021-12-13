async function cartPageHTML() {
    return `<div class="row">
    <div class="col-8">
        <div id="productBox" class="bg-white"></div>
        <div class="bg-white shadow d-flex flex-row-reverse">
            <button id="proceedBtn" class="btn btn-danger rounded-0 fw-bold m-3">Proceed To Checkout</button>
            <button id="addMoreBtn" class="btn btn-outline-danger rounded-0 fw-bold m-3">Add More Products</button>
        </div>
    </div>
    <div class="col-4">
        <div class="bg-white">
            <div class="row">
                <div class="col-12">
                    <p class="px-4 pt-3">ORDER SUMMARY</p>
                </div>
                <hr class="col-11 ms-3">
                <div class="col-12 px-2 pt-2">
                    <div class="row">
                        <div class="col-8">
                            <p class="px-4">Total MRP</p>
                        </div>
                        <div id="totalMRP" class="col-4"></div>
                        <div class="col-8 ">
                            <p class="px-4">Shipping Charges</p>
                        </div>
                        <div class="col-4 ">
                            <p class="px-4 text-end">₹0</p>
                        </div>
                        <div class="col-8">
                            <p class="px-4">Discount</p>
                        </div>
                        <div id="totalDiscount" class="col-4"></div>
                    </div>
                </div>
                <hr class="col-10 offset-1">
                <div class="col-12 px-2 pt-2">
                    <div class="row">
                        <div class="col-8">
                            <p class="px-4">Quantity</p>
                        </div>
                        <div id="totalQuantity" class="col-4 text-end"></div>
                        <div class="col-8">
                            <p class="px-4">Cart Total</p>
                        </div>
                        <div id="cartTotalAmount" class="col-4"></div>
                    </div>
                </div>
                <hr class="col-10 offset-1">
                <div class="col-12 px-2 pt-2">
                    <div class="row fs-5">
                        <div class="col-8">
                            <p class="px-4">Amount Payable</p>
                        </div>
                        <div id="amountPayable" class="col-4"></div>
                    </div>
                </div>
                <hr class="col-10 offset-1">
            </div>
        </div>
    </div>
</div>`
}


async function orderSummary(sumMRP, sumDiscount, count, sumCartTotal) {

    let totalMRP = document.getElementById('totalMRP');
    let totalDiscount = document.getElementById('totalDiscount');
    let totalQuantity = document.getElementById('totalQuantity');
    let cartTotalAmount = document.getElementById('cartTotalAmount');
    let amountPayable = document.getElementById('amountPayable');


    let MRP = document.createElement('p');
    MRP.textContent = "₹" + sumMRP;
    MRP.setAttribute('class', 'pe-4 text-end');

    let discount = document.createElement('p');
    discount.textContent = "-₹" + sumDiscount;
    discount.setAttribute('class', 'pe-4 text-end');

    let quantity = document.createElement('span');
    quantity.textContent = "(" + count + " items)";
    quantity.setAttribute('class', 'pe-4 text-end text-danger ');

    let cartTotal = document.createElement('p');
    cartTotal.textContent = "₹" + sumCartTotal;
    cartTotal.setAttribute('class', 'pe-4 text-end');

    let payable = document.createElement('p');
    payable.textContent = "₹" + sumCartTotal;
    payable.setAttribute('class', 'pe-4 text-end');

    totalMRP.append(MRP);
    totalDiscount.append(discount);
    totalQuantity.append(quantity);
    cartTotalAmount.append(cartTotal);
    amountPayable.append(payable);

}


export { cartPageHTML, orderSummary };