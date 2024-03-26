import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {


  const {page, handlePageChange, totalPages} = useContext(AppContext)

  return (
    <div className='flex justify-center w-full items-center border-2 mt-[1rem] fixed bottom-0 bg-white '>
      <div className='flex justify-between items-center w-11/12 max-w-[670px] py-2 '> 
      <div className='flex gap-x-2'>
        {
          page > 1 &&
          <button 
            className='rounded-md border px-4 py-2'
            onClick={() => (handlePageChange(page-1))}>
            Previous
          </button>
        }

        {
          page < totalPages &&
          <button 
            className='rounded-md border px-4 py-2'
            onClick={() => (handlePageChange(page+1))}>
            Next
          </button>
        }
        </div>
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination