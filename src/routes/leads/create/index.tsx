import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/leads/create/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /leads/create/!'
}
