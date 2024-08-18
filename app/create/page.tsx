import React from 'react'
import Navbar from '../_components/Navbar'
import CreateFormSection from '../_components/Home/CreateFormSection'
import Footer from '../_components/Footer'
import Link from 'next/link'

export default function page() {
  return (
    <section>
        
        <Navbar button='Get Code'/>
        
        <CreateFormSection/>
        <Footer/>
    </section>
  )
}
