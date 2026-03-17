export default function Tag({tag , children}: {tag: string , children: React.ReactNode}) {
    return (
        <div>
            <div className="flex items-center gap-x-[16px]">
                <div className="aspect-1/2 bg-[#DB4444] w-[20px]  rounded-[4px]"></div>
                <p className="text-[16px] font-poppins font-semibold text-[#DB4444]">{tag}</p>
            </div>
            <div className="mt-[24px]">
                {children}
            </div>
        </div>
    );
}
