let parent=document.querySelector("#parent");
let url="https://dummyjson.com/products";

async function getData(){
    let response = await fetch(url);
    let data=await response.json();
    let products =data.products;
    products.forEach(product=>{
        let div=document.createElement("div");

        div.classList.add(
            "bg-white","rounded-lg","m-4","w-64","shadow-lg","p-4",
            "flex","flex-col","item-center","transition","transform",
            "hover:scale-105","hover:shadow-2xl"
        );
        div.innerHTML=`
        <img src="${product.thumbnail}" alt="product Image" class="h-40 w-full rounded-md object-cover">
        <h1 class="text-lg font-bold mt-2 text-gray-800">${product.brand}</h1>
        <p class="text-gray-600 text-sm mt-1">${product.title}</p
        <p class="text-green-600 font-semibold mt-1">$${product.price}</p>
        <div class="flex gap-2 mt-3">
        <button class="w-1/2 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition">Buy Now</button>
        <button class="w-1/2 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-blue-700 transition">Cart</button>
    </div>
    `
    parent.append(div);
    });
}
getData();

// contact form

document.getElementById('contactForm').addEventListener('submit', async (e) => { 
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
    };

    const res = await fetch("http://localhost:5000/contact", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });

    const data = await res.json();
    document.getElementById('responseMessage').innerText = data.message;
    e.target.reset();
});
