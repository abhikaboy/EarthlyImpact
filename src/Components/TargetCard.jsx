import { Box, Divider } from '@chakra-ui/react';
import React, {useState} from 'react'

export default function TargetCard({props}) {
  let {note, string} = props;
  let noteStyle = "font-bold text-4xl p-4 px-8 text-white w-32 text-center"
  return (
    <div className='flex flex-row bg-white bg-opacity-20 w-64 rounded-xl drop-shadow-lg'
    style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
        <div className={noteStyle}>{note}</div>
        <Divider orientation="vertical" colorScheme="white" size="2xl"/>
        <Box w="2px" color={'white'} bgColor={'white'} opacity={'10%'}/>
        <div className={noteStyle}>{string}</div>
    </div>
  )
}
