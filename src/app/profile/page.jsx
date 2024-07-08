import { redirect } from "next/navigation";

export default function Profile() {
  const userProfile = null;

  if (userProfile === null) redirect("about");

  return <div>Profile</div>;
}
