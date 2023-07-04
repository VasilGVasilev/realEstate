import Home from "./Home"
import { metaData } from '@/utils/metadata'
 
export async function generateStaticParams() {
  return [{locale: 'apartments'}, {locale: 'contacts'}, {locale: 'description'}, {locale: 'investor'}, {locale: 'apartments/first-floor'}, {locale: 'apartments/second-floor'}, {locale: 'apartments/third-floor'}, {locale: 'apartments/penthouse'}, {locale: 'apartments/parking'}]
}

export const metadata = metaData('Начало')

export default function Page() {
  return (<Home></Home>)
}

