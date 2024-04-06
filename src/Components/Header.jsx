
import propTypes from 'prop-types';
import { useMemo } from 'react';

Header.propTypes = {
    cart: propTypes.array.isRequired,
    };


export default function Header({ cart, setCart }) {


        const cleanCart = () => {
            setCart([]);
        }

    const isEmpty = () => cart.length === 0;

    const total = useMemo(() => 
                cart.reduce((acc, guitar) => acc + guitar.price * guitar.quantity, 0), 
    [cart]);
return (
    <header className="py-5 header">
    <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                            <a href="index.html">
                                    <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                            </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div 
                                    className="carrito"
                            >
                                    <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                                    <div id="carrito" className="bg-white p-3">

                                        {isEmpty() ?  (<p>El carrito esta vacio</p>) : (<p>Productos en el carrito: {cart.length}</p>)
                                        }
                                            <table className="w-100 table">
                                                    <thead>
                                                            <tr>
                                                                    <th>Imagen</th>
                                                                    <th>Nombre</th>
                                                                    <th>Precio</th>
                                                                    <th>Cantidad</th>
                                                                    <th></th>
                                                            </tr>
                                                    </thead>


                                                    <tbody >

                                                    {isEmpty() ?  (<p>El carrito esta vacio</p>) : (<p></p>)
                                        }
                                                            {cart.map((guitar) => (
                                                                    <tr key={guitar.name}>
                                                                            {console.log(guitar)}
                                                                            <td>
                                                                                    <img className="img-fluid" src={`./public/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                                            </td>
                                                                            <td>{guitar.name}</td>
                                                                            <td>${guitar.price}</td>
                                                                            <td>{guitar.quantity}</td>
                                                                            <td>
                                                                                    <button className="btn btn-danger"
                                                                                        onClick={() => {
                                                                                            const newCart = cart.filter((product) => product.name !== guitar.name);
                                                                                            setCart(newCart);
                                                                                        }}

                                                                                    

                                                                                    >X</button>

                                                                                    <button className="btn btn-dark" onClick={() => {
                                                                                        const newCart = cart.map((product) => {
                                                                                            if (product.name === guitar.name) {
                                                                                                product.quantity = product.quantity + 1;
                                                                                            }

                                                                                            return product;
                                                                                        }
                                                                                        );
                                                                                        setCart(newCart);
                                                                                    }
                                                                                    }>+</button>

                                                                                    <button className="btn btn-dark" onClick={() => {
                                                                                        const newCart = cart.map((product) => {
                                                                                            if (product.name === guitar.name) {
                                                                                                product.quantity = product.quantity - 1;
                                                                                            }

                                                                                            return product;
                                                                                        }
                                                                                        ).filter((product) => product.quantity > 0);
                                                                                        setCart(newCart);
                                                                                    }
                                                                                    }>-</button>
                                                                                    
                                                                            </td>
                                                                    </tr>
                                                            ))}

                                                                    
                                                    </tbody>
                                            </table>
                                            

                                            <p className="fw-bold">Total: ${total}</p>
                                            
                                            <button className="btn btn-dark w-100 mt-3 p-2"
                                                onClick={cleanCart}
                                            >Vaciar Carrito</button>
                                    </div>
                            </div>
                    </nav>
            </div>
    </div>
</header>
)
}
