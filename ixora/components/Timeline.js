
const Timeline = () => {
    return (
        <>

            <div className="flex flex-col justify-around lg:flex-row items-center bg-ixora-yellow">
                <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-80% to-orange-500 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
                    <div className="text-center">
                        <div className="text-xl lg:text-2xl">
                            Юни 2021
                        </div>
                        <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                            Проектиране и регулация
                        </div>
                    </div>
                </div>
                <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-80% to-orange-500 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
                    <div className="text-center">
                        <div className="text-xl lg:text-2xl">
                            Юни 2022
                        </div>
                        <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                            РС, строителна площадка и <br />  първа копка
                        </div>
                    </div>
                </div>
                <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-80% to-orange-500 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
                    <div className="text-center">
                        <div className="text-xl lg:text-2xl">
                            Март 2023
                        </div>
                        <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300">
                            Груб строеж <br /> завършен <br /> Акт 14
                        </div>
                    </div>
                </div>
                <div className="group m-7 h-36 w-36 lg:m-10 lg:h-48 lg:w-48 bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-80% to-orange-500 to-100% text-white font-semibold rounded-full flex justify-center items-center hover:scale-125 duration-500 hover:opacity-100 active:opacity-100 opacity-75">
                    <div className="text-center">
                        <div className="text-xl lg:text-2xl">
                            Април 2024
                        </div>
                        <div className="text-sm lg:text-base group-hover:opacity-100 group-active:opacity-100 opacity-0 duration-300 text-orange-100 ">
                            Въвеждане в експлоатация <br /> Акт 16
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline
