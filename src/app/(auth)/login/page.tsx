'use client'
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ emailPhone?: string; password?: string }>({});

  const validate = () => {
    let newErrors: { emailPhone?: string; password?: string } = {};
    if (!emailPhone) {
      newErrors.emailPhone = "Email or Phone is required";
    } else if (!/\S+@\S+\.\S+/.test(emailPhone) && !/^\d{10}$/.test(emailPhone)) {
      newErrors.emailPhone = "Invalid email or phone format";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle login logic here
      console.log("Login successful", { emailPhone, password });
      // Redirect or show success message
    }
  };

  return (
    <section className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[28rem] mx-auto text-center bg-color-primary shadow  text-color-primary-fg rounded-2xl p-8">
        <h3 className="font-bold text-3xl py-4">BadRock Login</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email / Phone */}
          <div className="flex flex-col items-center gap-2">
            <label className="w-28 text-right">Email / Phone</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              type="text"
              value={emailPhone}
              onChange={(e) => setEmailPhone(e.target.value)}
            />
            {errors.emailPhone && <p className="text-color-error text-sm">{errors.emailPhone}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col items-center gap-2">
            <label className="w-28 text-right">Password</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-color-error text-sm">{errors.password}</p>}
          </div>

          {/* Submit */}
          <button type="submit" className="mt-6 w-full py-2 cursor-pointer rounded-lg bg-color-secondary-fg text-color-accent-fg font-semibold hover:opacity-90">
            Login
          </button>

          {/* Extras */}
          <div className="flex justify-between text-sm mt-4 px-2">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
            <Link href="/register" className="hover:underline">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

