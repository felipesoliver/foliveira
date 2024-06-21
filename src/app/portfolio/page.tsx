import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "This section shows my latest web developer's jobs",
}

export default function Page() {
  return <h1 className='heading-7xl'>Portfolio</h1>
}