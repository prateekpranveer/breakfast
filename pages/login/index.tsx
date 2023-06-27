import React, { useEffect } from "react";
import bfs from "../../axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { REQUEST_AUTHENTICATION } from "@/store/authentication";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


const Login = () => {
  const router = useRouter();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const authRoute = useSelector((state:RootState) => state.auth);
  console.log(authRoute)

  const makeAuthenticationAndShiftRouter = useDispatch();

  const handleLogin = async () => {
    const loginResponse = await bfs.post(
      "/auth/login",
      { email, password },  
    );
    localStorage.setItem('token', loginResponse.data.token)
    console.log(loginResponse.data);
    router.push(authRoute.routerPathName);
    makeAuthenticationAndShiftRouter({
      type: REQUEST_AUTHENTICATION,
      payload: {
        token: loginResponse.data.token,
        prevPath: authRoute.routerPathName,
        userId: loginResponse.data.user._id,
        userName: loginResponse.data.user.userName,
        userAddress: loginResponse.data.user.userAdress
      },
    });
    console.log(authRoute)
  };

  return (
    <div>  
        <>
          <div className="min-w-fit max-w-6xl flex justify-center mx-auto p-24">
            <div className="flex space-y-6 flex-col w-2/3 items-center rounded-lg">
              <div className="border border-gray-500 px-4 py-5 w-full">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  className="bg-transparent focus:outline-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="email id"
                />
              </div>
              <div className="border border-gray-500 px-4 py-5 w-full">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  className="bg-transparent focus:outline-none"
                  type="password"
                  name=""
                  id=""
                  placeholder="password"
                />
              </div>


              <div className="border-2 w-full items-center flex justify-center bg-pink-700  text-white font-rale-400 py-6">
                <button onClick={handleLogin} className="tracking-wide">
                  Submit
                </button>
              </div>
              <div className="font-jost-300">
                <h1>
                  New Here?{" "}
                  <span className="font-jost-400 border-b-2 border-blue-500 text-blue-600">
                    <Link href={"/register"}>Register!</Link>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </>
    </div>
  );
};

export default Login;
