import {useEffect, useState, FormEvent} from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useNavigate , useParams, useSearch} from '@tanstack/react-router'
import { createLead, fetchUsers } from '../../../services'
import { Form, Button } from 'react-bootstrap'
import {  User, createFollowUpParams, Lead } from '../../../types'
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export const Route = createFileRoute('/followups/create/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [users, setUsers] = useState<User[]>([])
  // const [lead, setLead] = useState<Lead>()
  const [user,setUser] = useState<User>()
  const [scheduleAt, setScheduleAt] = useState(new Date())

  // const lead = useSearch<{ lead: string }>();

  const params = useParams( {id});
  // console.log('the lead',lead)

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

async function storeNewFollowUp(e : FormEvent) {
  e.preventDefault()
  const newFollow: createFollowUpParams = {
    leadId: lead!.id,
    userId: user!.id,
    scheduledAt: moment(scheduleAt).format('YYYY-MM-DD HH:mm:ss')
  }
  await createLead(newLead)
  navigate({ to: '/leads/' })
}


function handleOnDateChange(e : FormEvent){
  const value = e.target.value
  setScheduleAt(value)
}
  return (
    <div className='container border p-3 col-md-5 col-sm-12'>

    <Form onSubmit={storeNewFollowUp}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <DateTimePicker onChange={setScheduleAt} value={scheduleAt}  minDate={new Date()}/>
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>
  )
}
