import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useNavigate , useParams} from '@tanstack/react-router'
import { createLead, fetchUsers } from '../../../services'
import { Form, Button } from 'react-bootstrap'
import {  User, CreateLeadParams } from '../../../types'

export const Route = createFileRoute('/leads/create/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User>()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  
  useEffect(() => {
        const fetchAndSetUsers = async() =>{
            try {
                const { users: userz } = await fetchUsers();
                setUsers(userz)
            } catch (error) {
                console.error('Error fetching leads:', error);
            }
        }
        fetchAndSetUsers()
  },[])

  async function storeNewLead(e : FormEvent) {
    e.preventDefault()
    const newLead: CreateLeadParams = {
      name,
      email,
      phone
    }
    await createLead(newLead)
    navigate({ to: '/leads/' })
  }
  return (
    <Form onSubmit={storeNewLead}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter lead's name" onChange={(e) => setName(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter lead's email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="Enter lead's phone" onChange={(e) => setPhone(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
