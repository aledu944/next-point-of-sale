export const createSlug = (text: string): string => {
    
    // Reemplazar caracteres especiales y espacios con guiones
    const slug = text
        .trim() // eliminar espacios al principio y al final
        .toLowerCase() // convertir a minúsculas
        .replace(/[^\w\s-]/g, '') // eliminar caracteres especiales excepto guiones y espacios
        .replace(/[\s_-]+/g, '-') // reemplazar espacios y guiones con un único guion
        .slice(0, 50); // limitar la longitud a 50 caracteres
    
    return slug;
}