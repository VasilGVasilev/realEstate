'use client'
import { useEffect } from "react";

export const metadata = {
  title: 'Първи етаж - Ixora Residence',
};

export default function firstFloor() {

    // autoscroll to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
      <div className="p-4 ">

      </div>
    )
}
  
