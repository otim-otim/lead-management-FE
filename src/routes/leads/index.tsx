import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useContext } from 'react';
import { LeadsContext } from '../../contexts/leadsContext';
import { fetchLeads } from '../../services';
import ListGroup from 'react-bootstrap/ListGroup';
import { Lead } from '../../types';
import { Button } from 'react-bootstrap';
import { useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/leads/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ leads, setLeads] = useState<Lead[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAndSetLeads = async () => {
      try {
        if(!leads.length){
          const {data, status, error} = await fetchLeads();
          if(status !== 200)
            throw error         

          setLeads(data.data)
        }
      } catch (error) {
        if(error.status === 401){
          navigate({ to:'/login'})
        }
        console.error('Error fetching leads:', error);
      }
    };

    fetchAndSetLeads();
  }, []);

  function handleScheduleFollowUp(lead: Lead) {
    
    navigate({ to: `/followups/create/` , params: { ...lead } });
  }

  
  return (
    <>
      <div className='container'>

      <h1 className='p-5'>Leads</h1>
      <Button className='m-4' variant="primary" onClick={() => navigate({ to: `/leads/create/` })}>Create Lead</Button>
      <ListGroup className='m-4 border'>
      {leads.map((lead : Lead) => (
        <ListGroup.Item className='m-3 border-top ' key={lead.id}>
          <h2>{lead.name}</h2>
          <p>{lead.email}</p>
          <p>{lead.phone}</p>
          <Button variant="primary" onClick={() => handleScheduleFollowUp(lead)}>schedule Follow up</Button>
        </ListGroup.Item>
      ))}
      </ListGroup>
      </div>
    </>
  )
}
