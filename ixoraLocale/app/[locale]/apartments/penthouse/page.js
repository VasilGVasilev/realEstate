import Penthouse from "./Penthouse";

import { metaData } from "@/utils/metadata";
export function generateStaticParams() {
  const paths = [ 'bg', 'en']

  return paths.map((path) => {
    return {
      locale: path
    }
  })
}

export const metadata = metaData('Пентхаус')

export default function Page () {
  return (
    <Penthouse></Penthouse>
  )
}
