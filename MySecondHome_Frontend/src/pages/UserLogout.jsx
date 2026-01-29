import { useEffect, useState } from "react";

const UserLogout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Clear all login related session data
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");

    sessionStorage.removeItem("active-owner");
    sessionStorage.removeItem("owner-jwtToken");

    sessionStorage.removeItem("active-guest");
    sessionStorage.removeItem("guest-jwtToken");

    // (Optional but safe)
    sessionStorage.removeItem("active-user");

    // ⏳ Show loading briefly then redirect
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/home"; // refreshes sidebar correctly
    }, 800);
  }, []);

  return (
    <div className="container my-5 text-center">
      {loading ? (
        <>
          <p>Logging out...</p>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
      ) : (
        <p>Redirecting...</p>
      )}
    </div>
  );
};

export default UserLogout;
