

const fetchFeatures = async () => {
    try {
        const response = await fetch("https://be-balikpapan-5-production.up.railway.app/product");
        const data = await response.json();
        return data.data.slice(0, 3);
    } catch (error) {
        console.log(error);
    }
};

const fetchAndDisplayFeatures = async () => {
    try {
        const featuresBox = document.getElementById('featuresBox');
        const data = await fetchFeatures();
        const htmlContent = data.map(feature => `
                <div class="product-item">
                    <div class="product-image>
                        <img src="${feature.imageSrc}" alt="${feature.name}">
                    </div>
                    <p>${feature.price}</p>
                    <h4>${feature.name}</h4>
                    <button class="button-product">Add To Shopping bag</button>
                </div>
            `).join('');

        featuresBox.innerHTML = htmlContent;
    } catch (error) {
        console.log(error);
    }
};

// Call the function to fetch and display features

// Call the function to fetch and display features
window.addEventListener("load", () => {
    fetchAndDisplayFeatures();
});

