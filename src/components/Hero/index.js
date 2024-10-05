import Link from 'next/link'
import React from 'react'
const id = 1;

const Hero = () => {
  return (
    <div>
      <Link href={`/Chat?id=${id}`} as={`/Chat/${id}`}>Chat</Link>
    </div>
  )
}

export default Hero
