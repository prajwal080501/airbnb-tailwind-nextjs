import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const search = () => {
    return (
        <div>
            <Header />
            <main className="flex">
                <section className="mt-3">
                    <p className='text-xs'>300+ stays for 5 number of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
                    <div className="hidden lg:inline-flex">
                        <p>Cancellation Flexibility</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default search