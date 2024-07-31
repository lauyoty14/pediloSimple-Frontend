// @ts-ignore
export async function load({ params, fetch }) {
    try {
        // Obtener companyID y cart de los parámetros de la URL
        const companyID = params.companyId;
        
        return {
            companyID,
        };
    } catch (error) {
        console.error('Error al cargar datos:', error);
        return {
            companyID: params.companyId, 
        };
    }
}
