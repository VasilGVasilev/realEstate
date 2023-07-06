import Contacts from "./Contacts";

import { metaData } from "@/utils/metadata";
export function generateStaticParams() {
  const paths = [ 'bg', 'en']

  return paths.map((path) => {
    return {
      locale: path
    }
  })
}

export const metadata = metaData('Контакти')

export default function Page () {
  return(
    <Contacts></Contacts>
  )
}