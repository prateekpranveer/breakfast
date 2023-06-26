
import withAuth from '@/middlewares/authMiddleware'
import React from 'react'

const profile = () => {
  return (
    <div>Hi I am Profile Page</div>
  )
}

export default withAuth(profile)