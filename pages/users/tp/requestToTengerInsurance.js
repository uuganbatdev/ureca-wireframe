import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
  } from '@chakra-ui/react'

const contracts = [
    {
        id: '22',
        date: '2022-6-25',
        status: 'active',
    },
    {
        id: '1',
        date: '2022-3-25',
        status: 'active'
    },
    {
        id: '15',
        date: '2022-2-25',
        status: 'offline'
    },
]

export default function requestToTengerInsurance() {
    return (
        <div>
            <TableContainer>
                <Table variant='simple'>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr>
                            <Th>contract id</Th>
                            <Th>start date</Th>
                            <Th>status</Th>
                            <Th>item</Th>
                            <Th>description</Th>
                            <Th>actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            contracts.map(project => (
                                <Tr>
                                    <Td>{project.id}</Td>
                                    <Td>{project.date}</Td>
                                    <Td>{project.status}</Td>
                                    <Td>item</Td>
                                    <Td>descriptions</Td>
                                    <Td>
                                        <div>
                                            <Button
                                                ml={4}
                                                colorScheme='teal'
                                                bg='green.400'
                                            >
                                                Reuqest to Tenter
                                            </Button>
                                        </div>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
