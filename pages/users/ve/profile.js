import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
  } from '@chakra-ui/react'

export default function Profile() {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='w-96'>
                <FormControl >
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input isDisabled id='username' value='tp' placeholder='username' />
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input isDisabled type='password' id='password' value="123" placeholder='password' />
                    <div className='flex flex-col'>
                    <Button
                        mt={4}
                        width={'full'}
                        colorScheme='teal'
                        bg='yellow.400'
                    >
                        Change username
                    </Button>
                    <Button
                        mt={4}
                        width={'full'}
                        colorScheme='teal'
                        bg='yellow.400'
                    >
                        Change password
                    </Button>
                    <Button
                        mt={4}
                        width={'full'}
                        colorScheme='teal'
                    >
                        Submit
                    </Button>
                    <Button
                        mt={8}
                        width={'full'}
                        colorScheme='teal'
                        bg='red.400'
                    >
                        Delete account
                    </Button>
                    </div>
                </FormControl>
            </div>
            
        </div>
    )
}
