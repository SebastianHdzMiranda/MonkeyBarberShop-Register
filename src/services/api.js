const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/68267341c0883333659c01ce"

    // Sebastian Api
    // 'https://api.steinhq.com/v1/storages/666889cf4d11fd04f0028679'
);

export async function addSale(data) {
    const { id, img, sale, price, nombre, fecha, hora, pago } = data;

    try {
        const respuesta = await     store
        .append("hoja1", [
            {
                'Nombre': nombre,
                'Venta': sale,
                'Precio': price,
                'Fecha': fecha,
                'Hora': hora,
                'Imagen': img,
                'Pago': pago,
                'Id': id
            }
        ]);
        return respuesta;
        
    } catch (error) {
        return error;   
    }



}

export async function addHorario(data) {
    const { nombre, access, fecha, hora } = data;

    try {
        const respuesta = await store
        .append(access.toLowerCase(), [
            {
                'Nombre': nombre,
                'Fecha' : fecha,
                [access] : hora,
            }
        ]);
        return respuesta;
        
    } catch (error) {
        return error;   
    }
}

export async function readSale() {   
    
    const respuesta =  await store.read("hoja1", { limit: 1000 })
    return respuesta;
    
}



// export function deleteSales() {
      
//     store
//     .delete("hoja1", {
//         search: { Nombre: "barbero1" },
//         limit: 80
//     })
//     .then(res => {
//         console.log(res);
//     });

//     store
//     .delete("hoja1", {
//         search: { Nombre: "barbero2" },
//         limit: 80
//     })
//     .then(res => {
//         console.log(res);
//     });
// }