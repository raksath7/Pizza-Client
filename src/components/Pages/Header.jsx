import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, ShoppingCartIcon } from '@heroicons/react/20/solid' // Added cart icon
import { Switch } from '@headlessui/react' // Added switch component

const pizzas = [
    { name: 'Margherita', description: 'Classic tomato, mozzarella, basil', price: '$12', href: '#', icon: "",/* Add icon for Margherita pizza */ },
    { name: 'Pepperoni', description: 'Pepperoni, mozzarella, tomato, peppers, onions', price: '$14', href: '#', icon: "",/* Add icon for Pepperoni pizza */ },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('dinner') // State for selected option (dinner or takeaway)
    const [cartItems, setCartItems] = useState([]) // State for cart items

    const addToCart = (item) => {
        setCartItems([...cartItems, item])
    }

    return (
        <header className="bg-white">
            <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button
                            className="flex items-center h-full leading-6 text-gray-900 nt-semibold h-text-sm"
                            onClick={() => console.log("Go to cart page")} // Implement functionality to navigate to cart page
                        >
                            Home
                            {/* ({cartItems.length})
                            <ShoppingCartIcon className="flex-none w-5 h-5 ml-1 text-gray-400" aria-hidden="true" /> */}
                        </button>
                    </div>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
                            Menu
                            <ChevronDownIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {pizzas.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                        >
                                            <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                                                {/* Display pizza icon */}
                                                {item.icon}
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                                <p className="mt-1 text-gray-600">{item.price}</p>
                                            </div>
                                            <button className="absolute top-1 right-1" onClick={() => addToCart(item)}>
                                                <ShoppingCartIcon className="w-5 h-5 text-gray-600" aria-hidden="true" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    {/* Add more navigation items as needed */}

                    {/* Cart */}
                    <div className="relative">
                        <button
                            className="flex items-center text-sm font-semibold leading-6 text-gray-900"
                            onClick={() => console.log("Go to cart page")} // Implement functionality to navigate to cart page
                        >
                            Cart ({cartItems.length})
                            <ShoppingCartIcon className="flex-none w-5 h-5 ml-1 text-gray-400" aria-hidden="true" />
                        </button>
                    </div>
                </Popover.Group>

                {/* Switch for selecting between dinner or takeaway */}
                <div className="items-center hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
                    <p className="text-sm font-semibold leading-6 text-gray-900">Dinner</p>
                    <Switch
                        checked={selectedOption === 'takeaway'}
                        onChange={() => setSelectedOption(selectedOption === 'dinner' ? 'takeaway' : 'dinner')}
                        className={classNames(
                            selectedOption === 'dinner' ? 'bg-gray-600' : 'bg-green-600',
                            'relative inline-flex flex-shrink-0 h-6 rounded-full w-11 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                        )}
                    >
                        <span className="sr-only">Toggle dinner/takeaway</span>
                        <span
                            aria-hidden="true"
                            className={classNames(
                                selectedOption === 'dinner' ? 'translate-x-0' : 'translate-x-5',
                                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                        />
                    </Switch>
                    <p className="text-sm font-semibold leading-6 text-gray-900">Takeaway</p>
                </div>
            </nav>
        </header>
    )
}
