// @ts-ignore
export const load = async ({ params, fetch }) => {
    //console.log('Params:', params);
    
    // @ts-ignore
    const fetchProduct = async (companyID) => {
        const res = await fetch(`http://localhost:8081/v1/products/${companyID}/admin`);
        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.statusText}`);
        }
        const productData = res.json();
        return productData
    };
    // @ts-ignore
    const fetchCompany = async (companyID) => {
      const res = await fetch(`http://localhost:8081/v1/clients/${companyID}`);
      if (!res.ok) {
          throw new Error(`Failed to fetch company: ${res.statusText}`);
      }
      const companyData = res.json();
      return companyData
  };

    try {
        const products = await fetchProduct(params.companyId);
        const company = await fetchCompany(params.companyId)
        const companyID = params.companyId;
        //console.log('compania:',company)
        return {
            products, 
            companyID,
            company
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                products: [], // En caso de error, aseguramos que sea un array
                companyID: params.companyId,
                company: {}
            }
        };
    }
}
