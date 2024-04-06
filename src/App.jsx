import Guitar from "./Components/Guitar"
import Header from "./Components/Header"
import { useState, useEffect } from "react"
import { db } from "./data/db"



function App() {
    const [cart, setCart] = useState([]);
  

    const [data, setData] = useState(db);
    useEffect(() => {
        setData(db);
    }, []);


    const addToCart = (guitar) => {
        setCart([]);

        console.log(guitar);

        const guitarExist = cart.findIndex((g) => g.name === guitar.name);

        if (guitarExist>=0) {
            const newCart = [...cart];
            
            newCart[guitarExist].quantity++;

            setCart(newCart);
        }
        else {
            setCart([...cart, { ...guitar, quantity: 1 }]);

        }
        console.log(cart);

        

    }


    
    

  return (
    <>
    
      
    <Header 

    cart={cart}
    setCart={setCart}

     />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

        
        {data.map((guitar) => (
            <Guitar
                key={guitar.id}
                name={guitar.name}
                image={guitar.image}
                description={guitar.description}
                price={guitar.price}
                addToCart={addToCart}

            />
        ))}
          


            
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
