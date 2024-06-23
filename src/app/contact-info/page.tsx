import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Section for my contact infos",
}

export default function Page() {
  return <h1 className='heading-7xl'>Get in touch</h1>
}