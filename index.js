import { Container } from './src/containers/Container.js';

const ProductContainer = new Container("productos")

// ProductContainer.getAll().then((data) => console.log({data})).catch((error) => console.log({error}))

// ProductContainer.save({
//     title: "Producto 1",
//     price: 300, 
//     thumbnail: "http..."
// }).then(data => console.log({data})).catch(error => console.log({error}));

// ProductContainer.getById(2).then((Juan) => console.log({ Juan })).catch((error) => console.log({error}))

//ProductContainer.deleteById(6).then((data) => console.log({ data }));

ProductContainer.deleteAll();


// const probarMetodos = async () => {
//    try{
//     const obtenerProductos = await ProductContainer.getAll();
//    }
//     console.log({obtenerProductos});
    
//     } catch (error) {
        //console.log({error});
//      }
    
//     probarMetodos();









