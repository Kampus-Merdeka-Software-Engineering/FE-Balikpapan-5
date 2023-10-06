const featuresBox = document.getElementById('featuresBox');

const fetchFeatures = async () => {
    try {
        const response = await fetch("http://localhost:3000/features", {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


const useFeatures = async () => {
    const data = await fetchFeatures();
    featuresBox.innerHTML = `
        ${data.map((feature) => (`
            <div class="features-box">
                <img class="features-image" src="${feature.img}" alt="${feature.title}">
                <div>
                    <h1 class="features-title">${feature.title}</h1>
                    <p class="features-desc">${feature.desc}</p>
                </div>
            </div>
        `)).join('')}
    `;
}


window.addEventListener("load", () => {
    useFeatures()
});

