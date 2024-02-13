import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react'

// Define an array of pizzas with different sizes and attributes
const pizzas = [
    { name: 'Margherita', size: 'Large', price: '$12', image: 'margherita_large.jpg', type: 'Veg' },
    { name: 'Pepperoni', size: 'Medium', price: '$14', image: 'pepperoni_medium.jpg', type: 'Non-Veg' },
    // Add more pizzas as needed
]

export default function MenuPage() {
    // Function to handle adding a pizza to the cart
    const addToCart = (pizza) => {
        // Implement logic to add the pizza to the cart
        console.log(`Added ${pizza.name} to cart`);
    }

    // Function to handle buying a pizza
    const buyNow = (pizza) => {
        // Implement logic to buy the pizza
        console.log(`Bought ${pizza.name}`);
    }

    return (
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Menu</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {pizzas.map((pizza, index) => (
                    <Fragment key={index}>
                        <div className="overflow-hidden bg-white rounded-md shadow-md">
                            <img src={`/assets/${pizza.image}`} alt={pizza.name} className="object-cover w-full h-48" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-900">{pizza.name}</h2>
                                <p className="text-sm text-gray-500">{pizza.size}</p>
                                <div className="flex items-center">
                                    <p className="mt-2 text-lg font-bold">{pizza.price}</p>
                                    <div className="ml-auto">
                                        {/* Display Veg or Non-Veg icon based on pizza type */}
                                        {pizza.type === 'Veg' ? (
                                            <img src="/assets/veg-icon.png" alt="Veg" className="w-6 h-6" />
                                        ) : (
                                            <img src="/assets/nonveg-icon.png" alt="Non-Veg" className="w-6 h-6" />
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-4">
                                    {/* Cart icon to add pizza to cart */}
                                    {/* <button className="flex items-center px-4 py-2 mr-4 text-white bg-green-500 rounded hover:bg-green-600" onClick={() => addToCart(pizza)}> */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1H5v14a2 2 0 002 2h6a2 2 0 002-2V4h-4V3a1 1 0 00-1-1zm4 4H6v12h8V6zm-3 5a1 1 0 00-1-1H8a1 1 0 000 2h2a1 1 0 001-1z" clipRule="evenodd" />
                                        </svg> */}
                                    {/* Add to Cart */}


                                    {/* </button> */}
                                    {/* Button to buy pizza */}
                                    <button className="px-4 py-2 text-white bg-indigo-500 rounded-xl hover:bg-indigo-600" onClick={() => buyNow(pizza)}>
                                        Buy Now
                                    </button>
                                    <div className="flex items-center justify-center flex-none w-10 h-10 ml-1 text-gray-400 transition-colors duration-300 border border-gray-400 rounded-lg hover:border-purple-600">
                                        <ShoppingCartIcon className="w-6 h-6 rounded-sm" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
