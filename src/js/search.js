function search() {
    document.addEventListener("DOMContentLoaded", function () {
      fetch("/src/js/data.json")
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(function (products) {
          createProductList(products);

          let searchInput = document.querySelector("#modal-search input");
          let productList = document.querySelector(".grid");
  
          searchInput.addEventListener("input", function () {
            let searchQuery = searchInput.value.toLowerCase();
            let filteredProducts = products.filter(function (product) {
              return product.name.toLowerCase().includes(searchQuery);
            });
            createProductList(filteredProducts);
          });
        })
        .catch(function (error) {
          console.error("There was a problem with the fetch operation:", error);
        });

      function createProductList(products) {
        let productList = document.querySelector(".grid");
        productList.innerHTML = "";
 
        const numToShow = Math.min(4, products.length);
        const productsToDisplay = products.slice(0, numToShow);
  
        productsToDisplay.forEach(function (product) {
          let productItem = document.createElement("a");
          productItem.href = "single-product.html?id=" + product.id;
  
          productItem.className = "flex text-center truncate h-28 justify-center items-center p-4 w-full border hover:bg-vege-grey duration-300";
          productItem.innerHTML = `
            <img class="h-24 w-auto left-0 pt-2 pb-2 pr-6" src="${product.img.singleImage}" alt="">
            <div class="pt-7 flex flex-col text-left truncate">
              <h4 class="max-w[30px] md:max-w[65px] w-full">${product.name}</h4>
              <span class="text-xs md:text-sm opacity-50">SKU: PD${product.id.toString().padStart(4, '0')}</span>
              <span class="text-vege-red font-medium md:font-bold text-md pb-3">$${product.price.newPrice.toFixed(2)}</span>
            </div>
          `;
  
          productItem.addEventListener("click", function () {
            redirectToSingleProduct(product.id);
          });
  
          productList.appendChild(productItem);
        });
      }
  
      let modalSearch = document.getElementById("modal-search");
      let btnModalSearchClose = document.getElementById("btn-modal-search-close");
  
      function openModal() {
        modalSearch.classList.remove("invisible");
      }
  
      function closeModal() {
        modalSearch.classList.add("invisible");
      }
  
      let openModalButton = document.querySelector("#open-modal-search");
  
      if (openModalButton) {
        openModalButton.addEventListener("click", openModal);
      }
  
      btnModalSearchClose.addEventListener("click", closeModal);
    });
  }
  
  export default search();
  
  function redirectToSingleProduct(productId) {
    const singleProductURL = `single-product.html?id=${productId}`;
  
    window.location.href = singleProductURL;
  }
  