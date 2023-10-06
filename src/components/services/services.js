const servicesBox = document.getElementById('servicesBox');

const fetchServices = async () => {
    try {
        const response = await fetch("http://localhost:3000/services", {
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


const useServices = async () => {
    const data = await fetchServices();
    servicesBox.innerHTML = `
        ${data.map((service) => (`   
        <div class="services-box">
            <h2 class="services-title">${service.title}</h2>
            <p class="services-desc">${service.desc}</p>
        </div>
        `)).join('')}
    `;
}


window.addEventListener("load", () => {
    useServices()
});

