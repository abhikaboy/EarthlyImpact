import { Button, Heading } from '@chakra-ui/react'
import bg from './bg.png';
import React from 'react'

export default function Home() {
  return (
<div className="hero min-h-screen place-items-start" style={{backgroundImage: 'url(https://cdn.discordapp.com/attachments/890066881866776616/1157929413036478474/bg.png?ex=651a654d&is=651913cd&hm=5a9b23039e462cded71c2e5ebdc73b969c06f9d33b08eb0d484894766d22c25e&)'}}>
  <div className="flex flex-col h-full w-full">
    <div className='ml-20  absolute top-1/2 -translate-y-1/2'>
      <h1 className="text-8xl font-bold text-white w-3/5 ">Learn the Fret board</h1>
      <button className="btn  bg-opacity-20 bg-red-500 text-white border-red-500 px-10 hover:scale-90 hover:bg-red-800 hover:bg-opacity-20" onClick={()=> {
        window.location.href = '/learn'
      }}>Learn for free</button>
    </div>
  </div>
</div>
  )
}
