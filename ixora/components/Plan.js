import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/utils/imgLoader";

const Plan = ({penthouse, thirdF, secondF, firstF, parking}) => {
    return(
        <div className="relative">

            <Link href={`/apartments${penthouse}`}><div className="absolute penthouse cursor-pointer h-full w-full z-10 hover:bg-ixora-orange" ></div></Link>
            <Link href={`/apartments${thirdF}`}><div className="absolute thirdFloor cursor-pointer h-full w-full z-10 hover:bg-ixora-orange" ></div></Link>
            <Link href={`/apartments${secondF}`}><div className="absolute secondFloor cursor-pointer  h-full w-full z-10 hover:bg-ixora-orange"></div></Link>
            <Link href={`/apartments${firstF}`}><div className="absolute firstFloor cursor-pointer h-full w-full z-10 hover:bg-ixora-orange" ></div></Link>
            <Link href={`/apartments${parking}`}><div className="absolute parking cursor-pointer h-full w-full z-10 hover:bg-ixora-orange" ></div></Link>
            {/* <div className='absolute outside cursor-pointer h-full w-full bg-white opacity-50 z-10'  ></div> */}
            {/* <img src="/ixora-apartments-plan.webp" alt="Ixora Plan" className="relative" /> */}
                
            <div className='relative'>
            <Image 
                loader={imageLoader}
                src='/ixora-apartments.webp'
                alt="Ixora Plan"
                width={5000}
                height={2813} 
            ></Image>
            </div>
        

        </div>
    )
}
export default Plan;