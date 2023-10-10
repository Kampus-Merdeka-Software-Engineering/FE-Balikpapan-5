const featuresBox = document.getElementById('featuresBox');

const fetchfeatures = async ( ) => {
    try {
        const response = await fetch("https://be-balikpapan-5-production.up.railway.app/", {
            method: "GET" , 
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};