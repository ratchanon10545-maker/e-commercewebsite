export default function Twodot({height , width}: {height: string , width: string}) {
    return (
        <div className="flex flex-col gap-y-[8px]">
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="currentColor" />
            </svg>
            <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="currentColor" />
            </svg>
        </div>
    );
}