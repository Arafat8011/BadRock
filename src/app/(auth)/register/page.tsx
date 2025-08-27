import Link from "next/link";

export default function Register() {
  return (
    <section className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[32rem] mx-auto text-center bg-primary shadow-lg shadow-accent text-primary-fg rounded-2xl p-8">
        <h3 className="font-bold text-3xl py-4">Join FlashDeals</h3>

        <div className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex gap-2 items-center justify-between">
            <label className="w-32 text-right">Full Name</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-input-focus border border-input-bg focus:ring-2 focus:ring-accent focus:outline-none"
              type="text"
            />
          </div>

          {/* Email */}
          <div className="flex gap-2 items-center justify-between">
            <label className="w-32 text-right">Email</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-input-focus border border-input-bg focus:ring-2 focus:ring-accent focus:outline-none"
              type="email"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex gap-2 items-center justify-between">
            <label className="w-32 text-right">Phone</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-input-focus border border-input-bg focus:ring-2 focus:ring-accent focus:outline-none"
              type="tel"
              required
            />
          </div>

          {/* Password */}
          <div className="flex gap-2 items-center justify-between">
            <label className="w-32 text-right">Password</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-input-focus border border-input-bg focus:ring-2 focus:ring-accent focus:outline-none"
              type="password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex gap-2 items-center justify-between">
            <label className="w-32 text-right">Confirm</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-input-focus border border-input-bg focus:ring-2 focus:ring-accent focus:outline-none"
              type="password"
              required
            />
          </div>

          {/* Register Button */}
          <button className="mt-6 w-full py-2 cursor-pointer rounded-lg bg-secondary-fg text-accent-fg font-semibold hover:opacity-90">
          <Link href="/login">
               Create Account
          </Link> 
          </button>

          {/* Extras */}
          <div className="flex justify-center text-sm mt-4">
            <a href="/login" className="hover:underline">
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

