import React from 'react'
import  withAuth  from '../../middlewares/authMiddleware'

const Redeem = () => {
  return (
    <div>Redeem</div>
  )
}

export default withAuth(Redeem)