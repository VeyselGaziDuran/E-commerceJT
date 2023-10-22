import { cart } from "/src/js/products.js";



function displayCardProduct(){
    const cardWrapper = document.querySelector('.card-wrapper');
    const uniqueCartItems = {};
    cart.forEach((item) => {
        if (uniqueCartItems[item.id]) {
            uniqueCartItems[item.id].quantity += 1;
        } else {
            uniqueCartItems[item.id] = { ...item, quantity: 1 };
        }
    });
    let result = "";
    for (const itemId in uniqueCartItems) {
        const item = uniqueCartItems[itemId];
        result += 
        `
        <tr class="cart-item border-b">
            <td></td>
            <!-- cart image -->
            <td class="relative">
                <img class="w-16" src="${item.img.singleImage}" alt="">
                <!-- delete-cart -->
                <i class="bi bi-x absolute top-1 -left-2 bg-vege-red cursor-pointer w-4 h-4 rounded-full grid text-vege-white text-center"></i>
            </td>
            <td class="py-2 text-xs">${item.name}</td>
            <td class="py-2 text-xs">$${item.price.newPrice}</td>
            <td class="py-2 text-xs text-center">${item.quantity}</td>
            <td class="py-2 text-xs text-center">$${item.quantity * item.price.newPrice}</td>
        </tr>
        `;
    }

    cardWrapper.innerHTML = result;
}

displayCardProduct();