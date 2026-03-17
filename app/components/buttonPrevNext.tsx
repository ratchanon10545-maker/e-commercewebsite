
import Left_Arrow from "./icons/left_arrow";
import Right_Arrow from "./icons/right_arrow";

export default function ButtonPrevNext({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
    return (
        <div className="flex gap-x-[8px] [&>button]:cursor-pointer">
            <button className=" rounded-full py-[16px] px-[15px] bg-[#F5F5F5]" onClick={onPrev}><Left_Arrow width="16" height="14" /></button>
            <button className="rounded-full py-[16px] px-[15px] bg-[#F5F5F5]" onClick={onNext}><Right_Arrow width="16" height="14" /></button>
        </div>
    );
}