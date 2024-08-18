import React from 'react';
import Logo from '../Assets/logo';
import Link from 'next/link';

interface NavbarProps {
  button: string;
}

const Navbar: React.FC<NavbarProps> = ({ button }) => {
  return (
    <div className='w-full px-[90px] py-[16px] flex items-center justify-between'>
      <Logo color={"#09090B"} />
      
      <div className='flex flex-row gap-[64px]'>
        <h2 className='text-[16px] text-[#71717A] font-semibold'>Pricing</h2>
        <h2 className='text-[16px] text-[#71717A] font-semibold'>Why Us</h2>
        <h2 className='text-[16px] text-[#71717A] font-semibold'>Templates</h2>
      </div>
      <button className='w-[145px] h-[44px] bg-[#09090B] text-[16px] font-semibold text-[#FAFAFA] rounded-[9px]'>
        {button === "Get Code" ? <Link href="/getCode">{button}</Link> : <Link href="/create">{button}</Link>}
      </button>
    </div>
  );
};

export default Navbar;
