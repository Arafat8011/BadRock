import Link from "next/link";

export default function Login() {
  return (
    <section className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[28rem] mx-auto text-center bg-primary shadow-lg shadow-accent text-primary-fg rounded-2xl p-8">
        <h3 className="font-bold text-3xl py-4">FlashDeals Login</h3>

        <div className="flex flex-col gap-4">
          {/* Email / Phone */}
          <div className="flex gap-2 items-center justify-between">
            <label className="w-28 text-right">Email / Phone</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-input-focus border border-input-bg focus:ring-2 focus:ring-accent focus:outline-none"
              type="text"
            />
          </div>

          {/* Password */}
          <div className="flex gap-2 items-center justify-between">
            <label className="w-28 text-right">Password</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-input-focus border border-input-bg focus:ring-2 focus:ring-accent focus:outline-none"
              type="password"
            />
          </div>

          {/* Submit */}
          <button className="mt-6 w-full py-2 cursor-pointer rounded-lg bg-secondary-fg text-accent-fg font-semibold hover:opacity-90">
            <Link href="/products" >Login</Link>
          </button>

          {/* Extras */}
          <div className="flex justify-between text-sm mt-4 px-2">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
            <a href="/register" className="hover:underline">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

