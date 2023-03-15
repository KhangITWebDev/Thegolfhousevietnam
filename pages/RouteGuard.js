import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import SignIn from "../components/Modal/SignIn";

export default function RouteGuard({ children }) {
  const token = Cookies.get("access_token");
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.pathname);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const privatePaths = ["/booking", "/cart"];
    const path = url.split("?")[0];

    if (!token && privatePaths.includes(path)) {
      setAuthorized(false);
      setOpen(true);
    } else {
      setAuthorized(true);
      setOpen(false);
    }
  }

  const handleClose = () => router.back();

  return !authorized ? (
    <SignIn handleClose={handleClose} setOpen={setOpen} />
  ) : (
    <>{children}</>
  );
}
