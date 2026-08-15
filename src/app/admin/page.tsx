import { createMetadata } from "@/lib/seo";
import AdminDashboard from "./AdminDashboard";

export const metadata = createMetadata({
  title: "Admin",
  description: "Admin CMS for The Aviary Guide",
  path: "/admin",
});

export default function AdminPage() {
  return <AdminDashboard />;
}
