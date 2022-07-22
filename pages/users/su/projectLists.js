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
  } from '@chakra-ui/react'

const projects = [
    {
        name: 'Project one',
        date: '2022-6-25',
        status: 'active',
    },
    {
        name: 'Project two',
        date: '2022-3-25',
        status: 'active'
    },
    {
        name: 'Project three',
        date: '2022-2-25',
        status: 'offline'
    },
]

export default function projectLists() {
    return (
        <div>
        <TableContainer>
            <Table variant='simple'>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                    <Tr>
                        <Th>project name</Th>
                        <Th>start date</Th>
                        <Th>status</Th>
                        <Th>item</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        projects.map((project, index) => (
                            <Tr key={index}>
                                <Td>{project.name}</Td>
                                <Td>{project.date}</Td>
                                <Td>{project.status}</Td>
                                <Td>item</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
        </div>
    )
}
