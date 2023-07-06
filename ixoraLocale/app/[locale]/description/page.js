import Description from "./Description";

import { metaData } from "@/utils/metadata";
export function generateStaticParams() {
  const paths = [ 'bg', 'en']

  return paths.map((path) => {
    return {
      locale: path
    }
  })
}

export const metadata = metaData('За сградата')

export default function Page() {
  return (
    <Description></Description>
  )
}