// @ts-ignore
export const load = async ({ params, fetch }) => {
    console.log('Params:', params);

    // @ts-ignore
    const fetchProduct = async (companyID) => {
        const res = await fetch(`http://localhost:8081/v1/products/${companyID}/admin`);
        if (!res.ok) {
            if (res.status === 404) {
                console.log('No products found');
                return []; // Retorna un array vacío si no se encuentran productos
            }
            throw new Error(`Failed to fetch products: ${res.statusText}`);
        }
        const productData = await res.json();
        return productData;
    };

    // @ts-ignore
    const fetchCompany = async (companyID) => {
        const res = await fetch(`http://localhost:8081/v1/clients/${companyID}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch company: ${res.statusText}`);
        }
        const companyData = await res.json();
        return companyData;
    };

    try {
        const company = await fetchCompany(params.companyId);
        const products = await fetchProduct(params.companyId);
        const companyID = params.companyId;

        return { 
                products,
                companyID,
                company
        
        };
    } catch (error) {
        console.error('Error:', error);
        return {
                products: [], // En caso de error, aseguramos que sea un array
                companyID: params.companyId,
                company: {} // Retorna un objeto vacío en caso de error
        };
    }
};
