import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, UserPlus, LogOut, Menu, X, ArrowLeft } from "lucide-react";

const MasterAdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("welcome");

  const handleLogout = () => {
    navigate("/masterAdminYahaHoga");
  };

  const menuItems = [
    { id: "addAdmin", label: "Add Admin", icon: UserPlus },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-row-reverse">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-card border-l border-border transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                <Crown className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Master Admin</h2>
                <p className="text-xs text-muted-foreground">Control Panel</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors duration-200 ${
                  activeTab === item.id
                    ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Back & Logout Buttons */}
          <div className="p-4 border-t border-border space-y-2">
            <button
              onClick={() => {
                setActiveTab("welcome");
                setSidebarOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-colors duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-foreground">
              Welcome, Master Admin 👋
            </h1>
            {/* Menu Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {activeTab === "welcome" && (
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <Crown className="w-10 h-10 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Welcome to Master Admin Panel
              </h2>
            </div>
          )}

          {activeTab === "addAdmin" && (
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Add New Admin</h2>
              <form className="space-y-5 max-w-md">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Admin Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter admin name"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter admin email"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Admin Type
                  </label>
                  <select className="input-field">
                    <option value="" disabled selected>Select admin type</option>
                    <option value="super">Super Admin</option>
                    <option value="regional">Regional Admin</option>
                    <option value="support">Support Admin</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition-colors duration-200 mt-4"
                >
                  Create Admin
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MasterAdminDashboard;
