'use client'

import { useEffect } from "react";

export const metadata = {
  title: 'Гаражи - Ixora Residence',
};

export default function parking() {
    
    // autoscroll to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
      <div className="p-4 ">

      </div>
    )
}
  
