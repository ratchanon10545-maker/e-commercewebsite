export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-[60px] mb-[140px] mr-[135px] flex gap-x-[129px] items-center">
      <div className="aspect-805/781 w-2/3">
        <img
          src="/images/signup/Side Image.png"
          alt="Side Image"
          className="w-full h-full object-contain"
        />
      </div>

        <div className="w-1/3">
            {children}
        </div>
    </div>
    );
}