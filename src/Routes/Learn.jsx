import React, { useState } from 'react'
import SettingsIcon from "./settings.svg"
import { Button, Card, CardBody, Center, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import TargetCard from '../Components/TargetCard'
export default function Learn() {
  const eString = ['F','F#','G','G#','A','A#','B','C','C#','D','D#', "E"]
  const aString = ['A#','B','C','C#','D','D#','E','F','F#','G','G#', "A"]
  const dString = ['D#','E','F','F#','G','G#','A','A#','B','C','C#', "D"]
  const gString = ['G#','A','A#','B','C','C#','D','D#','E','F','F#', "G"]
  const bString = ['C','C#','D','D#','E','F','F#','G','G#','A','A#', "B"]
  const highEString = ['F','F#','G','G#','A','A#','B','C','C#','D','D#', "E"]
  const combinedStrings = [highEString, bString, gString, dString, aString, eString];
  const fretMarkers = [{string: 2, fret: 3}, {string: 2, fret: 5}, {string: 2, fret: 7}, {string: 2, fret: 9}, {string: 2, fret: 3}, {string: 1, fret: 12},{string: 3, fret: 12}  ]
  const strings = ['e', 'B', 'G', 'D', 'A', 'E'];
  const [target, setTarget] = useState({note: 'A', string: 'E'});
  const [nextTarget, setNextTarget] = useState({note: 'G#', string: 'D'});

  const [singleStringMode, setSingleStringMode] = useState(true);
  const [string, setString] = useState(2);

  const generateNewTarget = () => {
    setTarget(nextTarget);
    let newString = singleStringMode  ? string - 1 :
    Math.floor(Math.random() * 6);
    let newNote = Math.floor(Math.random() * 12);
    setNextTarget({note: combinedStrings[newString][newNote], string:strings[newString]});
  }
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-full">
        <div class="navbar bg-dark">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-lg text-white">learnthefretboard.com</a>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
          <img src={SettingsIcon}></img>
          </button>
        </div>
      </div>
    </div>
    <div className='mt-8 justify-center place-content-center flex justify-content-center flex-col'>
        <Heading size={'xl'} className="text-center">Standard Tuning</Heading>
    <table className='border-none border-2 p-4 mx-16 mt-8'>
      <tbody>
       {combinedStrings.map((string, index) => {
          return (
            <tr>
              {string.map((note) => {
                return (
                  <td className={`border-solid w-24 h-8 border-black ${index != 5 ? "border-l-4 border-r-4":""}`}>
                    <button 
                    onClick={() => {
                      console.log(note)
                      let correctNote = note == target.note;
                      let correctString = strings[index] == target.string;
                      if(correctNote && correctString){
                        generateNewTarget();
                      } else {
                        if(!correctNote){
                          console.log("wrong note")
                        }
                        if(!correctString){
                          console.log("wrong string")
                        }
                      }
                    }}
                    
                    className="bg-black  w-full h-1 align-top bottom-0 p-0 mt-0 mb-8 hover:bg-red-500 transition-all duration-300"></button>
                    {
                      (fretMarkers.filter((marker) => {
                        return marker.string == index + 1 && marker.fret == string.indexOf(note) + 1
                      }) || []).length > 0 ? <div class="absolute text-center justify-center m-auto">
                        <button class=" rounded-full bg-slate-800 w-4 h-4 justify-center align-middle mt-4 ml-10"></button>
                      </div>:""
                    }
                  </td>
                )
              })}
            </tr>
          )
       })}

      </tbody>
    </table>
    </div>
    <div className='h-full'>
      <SimpleGrid columns={2} className="h-full">
        <div className=' w-full bg-dark h-full border-solid border-r-2 border-primary'>
            <div className='bg-primary mx-8 my-8 rounded-xl  space-y-4 h-96'>
                <h1 className='text-white text-4xl font-bold text-center pt-4'>Target</h1>
                <Center className='flex flex-col space-y-4'>
                <Center className='flex flex-row space-x-8'>
                  <Heading size='md' px="4" textColor={'white'}> Note </Heading>
                  <Heading  size='md'px="4"  textColor={'white'}> String </Heading>
                  </Center>
                <TargetCard props={target} />
                  <Divider w="80%" opacity={'20%'}/>
                <Heading textColor={'white'} size="lg">
                  Next Target
                </Heading>
                <TargetCard props={nextTarget} />
                </Center>
                  
            </div>
        </div>
        <div className='w-full bg-dark h-full border-solid border-r-2 border-primary'>
            <div className='bg-primary mx-8 my-8 rounded-xl  space-y-4 h-96'>

                <h1 className='text-white text-4xl font-bold text-center pt-4'>Session Stats</h1>
              <Button className='bg-primary mx-8 my-8 rounded-xl  space-y-4 h-96' onClick={() => {
                generateNewTarget();
              }}
              > skip </Button>
              </div>

        </div>
        {/* <Box w="100%" className='bg-dark h-full' /> */}
      </SimpleGrid>

    </div>
    </div>
  )
}
