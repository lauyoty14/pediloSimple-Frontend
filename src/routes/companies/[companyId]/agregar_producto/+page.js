export const load = ({ params }) => {
    //console.log('Params:', params);
    try {
        const companyID = params.companyId;
        return { 
            companyID,
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                companyID: params.companyId
            }
        };
    }
}
