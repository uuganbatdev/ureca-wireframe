import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
  } from '@chakra-ui/react'

export default function registerNewContract() {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='w-96'>
                <FormControl >
                    <FormLabel htmlFor='contractId'>Contract id</FormLabel>
                    <Input  id='contractId' placeholder='contract id' />
                    <FormLabel htmlFor='contractItemOne'>Contract item 1</FormLabel>
                    <Input  id='contractItemOne' placeholder='Contract Item' />
                    <FormLabel htmlFor='contractItemTwo'>Contract item 2</FormLabel>
                    <Input  id='contractItemTwo' placeholder='Contract Item' />
                    <FormLabel htmlFor='contractItemThree'>Contract item 3</FormLabel>
                    <Input  id='contractItemThree' placeholder='Contract Item' />
                    <div className='flex flex-col'>
                    <Button
                        mt={4}
                        width={'full'}
                        colorScheme='teal'
                        bg='green.400'
                    >
                        Register (PDF) contract report
                    </Button>
                    <Button
                        mt={4}
                        width={'full'}
                        colorScheme='teal'
                    >
                        Send report to client
                    </Button>
                    </div>
                </FormControl>
            </div>
            
        </div>
    )
}
