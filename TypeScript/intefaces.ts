//interfaz
//Las interfaces son un contrato que se puede implementar en una clase
interface Hero {
  id: string,
  name: string,
  age: number
  saludar: () => void
}

//Un contrato que cuenta solamente con las propiedades y metodos que se definen en la interfaz
const hero : Hero = {
  id: '1',
  name: 'Spiderman',
  age: 30,
  saludar: () => {console.log('Hola')}
}

interface Producto{
  id: number,
  name: string,
  price: number,
  quantity: number
}
//Interfaz combinada con otra interfaz
interface CarritoCompras{
  totalPrice: number,
  products: (Producto | Zapatilla)[]
}

//Interfaz con metodos

// interface CarritoOps{
//   addProduct: (product: Producto) => void,
//   removeProduct: (id: number) => void,
//   clear: () => void
// }

interface CarritoOps{
  add(product: Producto): void,
  remove(id: number): void,
  clear(): void
}

//Interfac

interface Zapatilla extends Producto{
  marca: string
  talla: number
}

const carrito: CarritoCompras = {
  totalPrice: 100,
  products: [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      quantity: 1,
      talla: 42,
      marca: 'Adidas'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
      quantity: 2,
      talla: 43,
      marca: 'Nike'
    }
  ]
}