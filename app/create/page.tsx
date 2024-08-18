import React from 'react'
import Navbar from '../_components/Navbar'
import CreateFormSection from '../_components/Home/CreateFormSection'
import Footer from '../_components/Footer'

export default function page() {
  return (
    <section>
        <Navbar button='Get Code'/>
        <CreateFormSection/>
        <Footer/>
    </section>
  )
}
