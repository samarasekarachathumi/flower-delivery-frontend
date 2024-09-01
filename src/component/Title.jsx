import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3'>
    <p className='text-gray-400'> {text1} <span className='font-medium text-gray-400'> {text2}</span></p>
    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-slate-600'></p>
    </div>
  )
}

export default Title