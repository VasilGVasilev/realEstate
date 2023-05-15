import Link from 'next/link';


export default function Page() {

  return (
    <>
      <div>Apartments:</div>
      <Link href={'/apartments/1'}>Apartment One</Link>
    </>
  )
}