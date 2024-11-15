import { useEffect, useState, FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useNavigate, useParams, useSearch } from '@tanstack/react-router'
import { createLead, fetchUsers, createFollowUp } from '../../../services'
import { Form, Button } from 'react-bootstrap'
import { User, createFollowUpParams, Lead } from '../../../types'
import moment from 'moment'
import DateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'

export const Route = createFileRoute('/followups/create/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [users, setUsers] = useState<User[]>([])
  // const [lead, setLead] = useState<Lead>()
  const [user, setUser] = useState<User>()
  const [scheduleAt, setScheduleAt] = useState(new Date())
  const navigate = useNavigate()

  // const lead = useSearch<{ lead: string }>();

  const params = useParams({ id })
  // console.log('the lead',lead)

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      try {
        const { users: userz } = await fetchUsers()
        setUsers(userz)
      } catch (error) {
        console.error('Error fetching leads:', error)
      }
    }
    fetchAndSetUsers()
  }, [])

  async function storeNewFollowUp(e: FormEvent) {
    e.preventDefault()
    const newFollow: createFollowUpParams = {
      leadId: lead!.id,
      userId: user!.id,
      scheduledAt: moment(scheduleAt).format('YYYY-MM-DD HH:mm:ss'),
    }
    await createFollowUp(newFollow)
    navigate({ to: '/followups/' })
  }

  return (
    <div className="container border p-3 col-md-5 col-sm-12">
      <Form onSubmit={storeNewFollowUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Select aria-label="select sales representative">
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

       

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <DateTimePicker
            onChange={setScheduleAt}
            value={scheduleAt}
            minDate={new Date()}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
