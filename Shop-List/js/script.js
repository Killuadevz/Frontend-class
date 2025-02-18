document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("itemInput");
    const quantityInput = document.getElementById("quantityInput");
    const priceInput = document.getElementById("priceInput");
    const addItemBtn = document.getElementById("addItemBtn");
    const shoppingList = document.getElementById("shoppingList");
    const totalPriceEl = document.getElementById("totalPrice");

    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".item-total").forEach(item => {
            total += parseFloat(item.textContent.replace("R$ ", ""));
        });
        totalPriceEl.textContent = total.toFixed(2);
    }

    function addItem() {
        const name = itemInput.value.trim();
        const quantity = parseInt(quantityInput.value);
        const price = parseFloat(priceInput.value);

        if (name === "" || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
            alert("Por favor, preencha os campos corretamente.");
            return;
        }

        const totalItemPrice = (quantity * price).toFixed(2);

        const li = document.createElement("li");
        li.innerHTML = `
            ${name} (${quantity}x) - R$ ${price.toFixed(2)}
            <strong class="item-total">R$ ${totalItemPrice}</strong>
            <button class="delete-btn">x</button>
        `;

        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
            updateTotal();
        });

        shoppingList.appendChild(li);
        updateTotal();

        itemInput.value = "";
        quantityInput.value = "1";
        priceInput.value = "";
        itemInput.focus();
    }

    addItemBtn.addEventListener("click", addItem);
    itemInput.addEventListener("keypress", (e) => { if (e.key === "Enter") addItem(); });
    quantityInput.addEventListener("keypress", (e) => { if (e.key === "Enter") addItem(); });
    priceInput.addEventListener("keypress", (e) => { if (e.key === "Enter") addItem(); });
});
