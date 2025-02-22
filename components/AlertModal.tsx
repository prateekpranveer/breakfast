import React from 'react'
import { X } from 'react-feather';

const AlertModal = ({ isOpen, onClose, message }:any) => {
    const isopen = false;
    if (!isopen) {
      return null; // Don't render anything if modal is closed
    }
  
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white font-jost-300 px-4 py-4">
              
              {

                message && <div className='flex items-center justify-between '>
                <h1>The email Id you entered is already registered!</h1>
                <button className='p-2 bg-gray-200 rounded-full'><X size={20} color='gray'/></button>
                </div>
              }


            </div> 
          </div>
        </div>
      </div>
    );
  };

  export default AlertModal;
  