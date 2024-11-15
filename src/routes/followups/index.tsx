import { useEffect, useState, FormEvent, ChangeEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import { fetchFollowups } from '../../services'
import  { FollowUp, FollowUpStatusEnum  } from '../../types'
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap'
import { updateFollowUpStatus } from '../../services'

export const Route = createFileRoute('/followups/')({
  component: RouteComponent,
})

const  enum FollowUpStatusEnum {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
  MISSED = 'Missed'
}

const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

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

  function UpdateFollowUpStatusButton({ followup }: { followup: FollowUp }) {
    
    if(followup.status == FollowUpStatusEnum.MISSED || currentUser.role === 'sales_rep'){
      return ''
      
    }

    const newStatus = followup.status === FollowUpStatusEnum.PENDING ? { status: FollowUpStatusEnum.COMPLETED, action: 'Complete '} : {status: FollowUpStatusEnum.PENDING, action: 'Pend '} 
    return  <Button onClick={() => updateFollowUpStatus(followup.id, newStatus.status)} >
      {newStatus.action}follow up 
    </Button>
    
  }

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
          {UpdateFollowUpStatusButton({ followup: follow })}
        </ListGroup.Item>
      ))}
      </ListGroup>
    </>
  )
}
