import Spinner from "@/components/Spinner";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REQUEST_AUTHENTICATION } from "@/store/authentication";
import bfs from "@/axios";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setloading] = useState(true);
    const isAuthed = useSelector((state) => state.auth);

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const token = localStorage.getItem("token");
          if (token) {
            const response = await bfs.get("/auth/isloggedin", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            const { userId } = response.data;
            await bfs.get(`/auth/getuserdetails/${userId}`).then((res) => {
              dispatch({
                type: REQUEST_AUTHENTICATION,
                payload: {
                  token: token,
                  prevPath: router.pathname,
                  userId: userId,
                  userName: res.data.userName,
                  userAddress: res.data.address,
                },
              });
            });
            setloading(false);
          } else {
            // User is not authenticated, redirect to the login page or a public route
            router.replace("/auth");
          }
        } catch (error) {
          console.log("Error authenticating user:", error);
          // Handle error scenario, e.g., redirect to an error page
        }
      };

      checkAuthentication();
    }, []);

    if (loading) return <Spinner />;

    return <WrappedComponent {...props} />;
  };
  return AuthComponent;
};
export default withAuth;
