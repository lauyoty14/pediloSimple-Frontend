// @ts-ignore
export const load = async ({ fetch }) => {
    //console.log('Params:', params);
    // @ts-ignore
    const fetchCompany = async () => {
      const res = await fetch(`http://localhost:8081/v1/clients/companies`);
      if (!res.ok) {
          throw new Error(`Failed to fetch company: ${res.statusText}`);
      }
      const companyData = res.json();
      return companyData
  };

    try {
        const companies = await fetchCompany()
        console.log('companias:', companies)
        return {
            companies    
        };
    } catch (error) {
        console.error(error);
    }
}
