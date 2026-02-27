window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

let cartCount = 0;
let cartTotal = 0;

const cartPreview = document.createElement("div");
cartPreview.classList.add("cart-preview");
document.body.appendChild(cartPreview);

document.querySelectorAll(".add-to-cart").forEach(button => {

  button.addEventListener("click", () => {

    const productInfo = button.closest(".product-info");
    const quantity = parseInt(productInfo.querySelector("input").value);
    const price = parseInt(productInfo.querySelector(".price").innerText.replace("R",""));

    cartCount += quantity;
    cartTotal += quantity * price;

    cartPreview.innerHTML = `
      Cart: ${cartCount} items<br>
      Total: R${cartTotal}
    `;

    cartPreview.style.display = "block";

    button.textContent = `Added (${quantity}) ✓`;

    setTimeout(() => {
      button.textContent = "Add to Cart";
    }, 2000);
  });

});

/* Thumbnail Switch */
document.querySelectorAll(".thumbnail-row img").forEach(thumb=>{
  thumb.addEventListener("click",()=>{
    const mainImage = thumb.closest(".product-image").querySelector("img");
    mainImage.src = thumb.src;
  });
});