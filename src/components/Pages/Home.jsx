import React from 'react'
import Header from './Header'
import CartPage from './CartPage'
import MenuPage from './MenuPage'

const Home = () => {
    return (
        <div className='w-screen h-screen'>
            <Header />
            {/* <CartPage /> */}
            <MenuPage />
        </div>
    )
}

export default Home