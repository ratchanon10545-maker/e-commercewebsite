import { signInAction } from "./action";

export default async function Signin(props: {searchParams: Promise<{error?: string, callbackUrl?: string}>}) {
    const searchParams = await props.searchParams;
    console.log(searchParams?.error);
  return (
    <form action={signInAction} className="flex flex-col gap-y-[48px] ">
      <input type="hidden" name="callbackUrl" value={searchParams.callbackUrl ?? "/"} />
      <div className="flex flex-col gap-[24px]">
        <p className="text-[36px] font-medium font-inter">
          Log in to Exclusive
        </p>
        {searchParams?.error && (
        <p className="text-red-500 font-poppins text-[16px] font-normal">
          Email or Password is not correct
        </p>
      )}
        <p className="text-[16px] font-normal font-poppins">Enter your details below</p>
      </div>
      <div className="flex flex-col gap-y-[40px] text-[16px] font-normal font-poppins">
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email or Phone Number"
            className="w-full border-b border-black/50 pb-[8px]  focus:outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border-b border-black/50 pb-[8px]  focus:outline-none"
          />
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <button
        type="submit"
          className="text-white bg-[#DB4444] font-medium py-[16px] rounded-[4px] cursor-pointer w-1/2
                    hover:bg-[#DB4444]/80 "
        >
          Log In
        </button>
        <p
          className="text-[16px] font-normal font-poppins text-[#DB4444] w-1/2 flex justify-end
            hover:text-black hover:underline cursor-pointer"
        >
          Forget Password?
        </p>
      </div>
    </form>
  );
}
