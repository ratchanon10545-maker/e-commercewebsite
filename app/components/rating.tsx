import Star from "./icons/star"

type StarRatingProps = {
  rating: number // ค่าเฉลี่ย เช่น 3.7
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-x-1 text-[#FFD700]">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          // ⭐ เต็ม
          return <Star key={star} w={15} h={15} />
        }

        if (rating >= star - 0.5) {
          // ⭐ ครึ่ง
          return (
            <div key={star} className="relative w-[15px] h-[15px]">
                <div className="absolute text-gray-300">
                    <Star w={15} h={15}  />
                </div>
              
              <div className="absolute overflow-hidden w-1/2">
                <Star w={15} h={15}  />
              </div>
            </div>
          )
        }

        // ⭐ ว่าง
        return <div key={star} className="text-gray-300"><Star w={15} h={15} /></div>
      })}
    </div>
  )
}
