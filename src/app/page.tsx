import { redirect } from "next/navigation";

export default function Redirect() {
  const authenticated = true; // Replace with actual authentication logic
  if (!authenticated) {
    redirect("/login");
  }
  redirect("/dashboard");
}
