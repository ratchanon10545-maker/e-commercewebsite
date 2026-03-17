import Tag from "./tag";

export default function Featured() {
    return (
        <div className="flex flex-col gap-y-[60px]">
            <Tag tag="Featured">
                <div className="flex items-center ">
                    <div className="flex justify-start items-start w-full ">
                        <h1 className="text-[36px] font-inter font-semibold text-[#000000]  ">
                            New Arrival
                        </h1>
                    </div>
                </div>
            </Tag>

            <div className="flex gap-x-[30px] "> 
                <div className="w-full relative">
                    <img src="/images/Frame 684.png" alt="" className="aspect-570/600 w-full "/>
                    <div className="absolute bottom-[32px] left-[32px] text-white flex flex-col gap-y-[16px] ">
                        <p className="font-semibold fomt-inter text-[24px]">PlayStation 5</p>
                        <p className="font-poppins text-[14px]">Black and White version of the PS5 <br />coming out on sale.</p>
                        <p className="text-white font-poppins font-medium text-[16px] cursor-pointer underline underline-offset-8 hover:underline-offset-4 transition-all">Shop Now</p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-[32px]">
                    <div className="relative w-full">
                        <img src="/images/Frame 685.png" alt="" className="aspect-570/284 w-full "/>
                        <div className="absolute bottom-[32px] left-[32px] text-white flex flex-col gap-y-[16px] ">
                            <p className="font-semibold fomt-inter text-[24px]">Women’s Collections</p>
                            <p className="font-poppins text-[14px]">Featured woman collections that <br />give you another vibe.</p>
                            <p className="text-white font-poppins font-medium text-[16px] cursor-pointer underline underline-offset-8 hover:underline-offset-4 transition-all">Shop Now</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-x-[30px]">
                        <div className="w-full relative">
                            <img src="/images/Frame 686.png" alt="" className="aspect-270/284 w-full "/>
                            <div className="absolute bottom-[32px] left-[32px] text-white flex flex-col gap-y-[8px] ">
                                <p className="font-semibold fomt-inter text-[24px]">Speakers</p>
                                <p className="font-poppins text-[14px]">Amazon wireless speakers</p>
                                <p className="text-white font-poppins font-medium text-[16px] cursor-pointer underline underline-offset-8 hover:underline-offset-4 transition-all">Shop Now</p>
                            </div>
                        </div>
                        <div className="w-full relative">
                            <img src="/images/Frame 687.png" alt="" className="aspect-270/284 w-full "/>
                            <div className="absolute bottom-[32px] left-[32px] text-white flex flex-col gap-y-[8px] ">
                                <p className="font-semibold fomt-inter text-[24px]">Perfume</p>
                                <p className="font-poppins text-[14px]">GUCCI INTENSE OUD EDP</p>
                                <p className="text-white font-poppins font-medium text-[16px] cursor-pointer underline underline-offset-8 hover:underline-offset-4 transition-all">Shop Now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}