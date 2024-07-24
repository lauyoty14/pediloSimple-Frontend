export const load = ({ params, fetch }) => {
    //console.log('Params:', params);

    const fetchProduct = async (companyID) => {
        const res = await fetch(`http://localhost:8081/v1/products/${companyID}/admin`);
        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.statusText}`);
        }
        const data = res.json();
        return data
    };

    try {
        const products = fetchProduct(params.companyId);
        const companyID = params.companyId;
        return {
            products, 
            companyID,
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                products: [], // En caso de error, aseguramos que sea un array
                companyID: params.companyId
            }
        };
    }
}
