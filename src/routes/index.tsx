import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import Card from 'react-bootstrap/Card';
// import { Users } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

const homePageLinks = [
  'leads',
  'followups',
]

function HomeCards( {link} : { link: string }) {
  const svgIcons: { [key in 'leads' | 'followups']: JSX.Element } = {
    leads: (
      <svg className='justify-center ml-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    followups: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
    ),
  };
  return (
    

    <Link to={`/${link}`} >
      <Card style={{ width: '18rem' }} className='col-sm-6 border m-2'>
      {svgIcons[link as 'leads' | 'followups']}
        <Card.Body>
          <Card.Title>{link}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
    
  );
}

function HomeComponent() {
  return (
    <div className='container border p-3 col-md-5 col-sm-12 grid'>
      {homePageLinks.map((link, idx) => (
         <HomeCards key={idx} link={link} />  
      ))}
    </div>
  )
}
