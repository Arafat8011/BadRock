'use client'
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validate = () => {
    let newErrors: {
      fullName?: string;
      email?: string;
      phone?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Invalid phone number format (10 digits)";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle registration logic here
      console.log("Registration successful", {
        fullName,
        email,
        phone,
        password,
      });
      // Redirect or show success message
    }
  };

  return (
    <section className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[32rem] mx-auto text-center bg-color-primary shadow-lg shadow-color-accent text-color-primary-fg rounded-2xl p-8">
        <h3 className="font-bold text-3xl py-4">Join BadRock</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-2 items-center">
            <label className="w-32 text-right">Full Name</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p className="text-color-error text-sm">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 items-center">
            <label className="w-32 text-right">Email</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-color-error text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2 items-center">
            <label className="w-32 text-right">Phone</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="text-color-error text-sm">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 items-center">
            <label className="w-32 text-right">Password</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-color-error text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2 items-center">
            <label className="w-32 text-right">Confirm</label>
            <input
              className="flex-1 px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="text-color-error text-sm">{errors.confirmPassword}</p>}
          </div>

          {/* Register Button */}
          <button type="submit" className="mt-6 w-full py-2 cursor-pointer rounded-lg bg-color-secondary-fg text-color-accent-fg font-semibold hover:opacity-90">
            Create Account
          </button>

          {/* Extras */}
          <div className="flex justify-center text-sm mt-4">
            <Link href="/login" className="hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

