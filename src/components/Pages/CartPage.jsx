import { Fragment } from 'react'

// Define an array of pizzas with different sizes
const pizzas = [
    { name: 'Margherita', size: 'Large', price: '$12', image: 'margherita_large.jpg' },
    { name: 'Margherita', size: 'Medium', price: '$10', image: 'margherita_medium.jpg' },
    { name: 'Margherita', size: 'Small', price: '$8', image: 'margherita_small.jpg' },
    // Add more pizzas as needed
]

export default function CartPage() {
    return (
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Your Cart</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {pizzas.map((pizza, index) => (
                    <Fragment key={index}>
                        <div className="overflow-hidden bg-white rounded-md shadow-md">
                            <img src={`/assets/margareta.png`} alt={pizza.name} className="object-cover w-full h-48" />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-900">{pizza.name}</h2>
                                <p className="text-sm text-gray-500">{pizza.size}</p>
                                <p className="mt-2 text-lg font-bold">{pizza.price}</p>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
