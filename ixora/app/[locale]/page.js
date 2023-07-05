import Home from "./Home"
import { metaData } from '@/utils/metadata'

export function generateStaticParams() {
  const paths = [ 'bg', 'en']

  return paths.map((path) => {
    return {
      locale: path
    }
  })
}

export const metadata = metaData('Начало')

export default function Page() {
  return (<Home></Home>)
}

