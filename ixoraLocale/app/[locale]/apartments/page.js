import Apartments from "./Apartments";

import { metaData } from "@/utils/metadata";

export const metadata = metaData('Свободни Апартаменти')
export function generateStaticParams() {
  const paths = [ 'bg', 'en']

  return paths.map((path) => {
    return {
      locale: path
    }
  })
}

export default function Page () {
  return(
    <Apartments></Apartments>
  )
}