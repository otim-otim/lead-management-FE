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
          const { leads: leadz} = await fetchLeads();
          // console.log('leads res',res)
          setLeads(leadz)
        }
        // const leads = await fetchLeads();
        // dispatch({ type: 'SET_LEADS', payload: leads });
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchAndSetLeads();
  }, []);

  function handleScheduleFollowUp(lead: Lead) {
    
    navigate({ to: `/followups/create/` , params: { lead: lead } });
  }

  
  return (
    <>
      <h1>Leads</h1>
      <Button variant="primary" onClick={() => navigate({ to: `/leads/create/` })}>Create Lead</Button>
      <ListGroup>
      {leads.map((lead : Lead) => (
        <ListGroup.Item key={lead.id}>
          <h2>{lead.name}</h2>
          <p>{lead.email}</p>
          <p>{lead.phone}</p>
          <Button variant="primary" onClick={() => handleScheduleFollowUp(lead)}>schedule Follow up</Button>
        </ListGroup.Item>
      ))}
      </ListGroup>
    </>
  )
}
