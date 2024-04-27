import React from 'react'
import Image from 'next/image';
import dot from '@/app/assets/images/Ellipse 1.png';
function topDotLine() {
  return (
    <div className="flex items-center justify-center gap-1.5 shadow-dotLine border-2 border-dotLine rounded-full max-w-[332px] w-full mx-auto">
    <div className='max-w-[14px] h-auto'><Image src={dot} alt="dot" /></div>
    <p className='text-14 text-surface-white'>Deoxys&apos; state-of-the-art features blockchain</p>
  </div>
  )
}

export default topDotLine