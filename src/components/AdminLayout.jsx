import('../styles/admin.css');
import AdminHeader from "../components/AdminHeader";
import AdminNav from "../components/AdminNav"


function AdminLayout({ children }) {
  return (
    <section className="flex flex-row bg-gray-100 min-h-screen" x-data="{panel:false, menu:true}">
      <div className="basis-1/6">
        <AdminNav />
      </div>
      <div className="basis-5/6">
        <AdminHeader />
        <main className="p-6 sm:p-10 space-y-6">
          {children}
        </main>
      </div>
    </section >
  )
}

export default AdminLayout;

