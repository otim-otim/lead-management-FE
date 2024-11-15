import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import { fetchFollowups } from '../../services'
import { FollowUp } from '../../types'
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

export const Route = createFileRoute('/followups/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ followUps, setFollowUps ] = useState<FollowUp[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAndSetFollowUps = async () => {
      try {
        const { followUps: followUpsz } = await fetchFollowups();
        setFollowUps(followUpsz)
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchAndSetFollowUps();
  }, []);

  return (
    <>
      <h1>Follow Ups</h1>
      <ListGroup>
      {followUps.map((follow : FollowUp) => (
        <ListGroup.Item key={follow.id}>
          <h2>{follow.status}</h2>
          <p>
            <span>Lead: {follow.lead.name}</span>
            </p>
            <p>
            <span>Sales Rep: {follow.user.name}</span>
            </p>
          {/* <Button variant="primary" onClick={() => handleScheduleFollowUp(lead)}>schedule Follow up</Button> */}
        </ListGroup.Item>
      ))}
      </ListGroup>
    </>
  )
}
