import Investor from "./Investor";

import { metaData } from "@/utils/metadata";
export function generateStaticParams() {
  const paths = [ 'en', 'bg']

  return paths.map((path) => {
    return {
      locale: path
    }
  })
}

export const metadata = metaData('Инвеститор')


export default function Page() {

    return (
      <Investor></Investor>
    )
}
  