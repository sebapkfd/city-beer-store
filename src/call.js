const call = async () => {
    try {
        const response = await fetch('https://60b9129080400f00177b619f.mockapi.io/api/v1/products')
        const data = await response.json();
        console.log(data);
        // return data;
    } catch (err) {
        console.log(err);
    }
}

export default call;