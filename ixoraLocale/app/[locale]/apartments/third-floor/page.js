import ThirdFloor from "./ThirdFloor";

import { metaData } from "@/utils/metadata";
export function generateStaticParams() {
  const paths = [ 'bg', 'en']

  return paths.map((path) => {
    return {
      locale: path
    }
  })
}

export const metadata = metaData('Трети етаж')

export default function Page () {
  return (
    <ThirdFloor></ThirdFloor>
  )
}