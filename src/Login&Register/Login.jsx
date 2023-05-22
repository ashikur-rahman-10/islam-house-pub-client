import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
    const [error, setError] = useState("");
    const { user, login, loginWithGoogle } = useContext(AuthContext);
    // console.log(user);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then((result) => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                toast.success("Successfully Login!");
                setError("");
                event.target.reset();
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };
    const hangleGoogle = () => {
        loginWithGoogle()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast.success("Successfully Login!");
                setError("");
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };
    return (
        <div className="w-full flex items-center justify-center min-h-[91vh]">
            <form
                onSubmit={handleSubmit}
                className="border shadow-xl rounded-2xl py-10 px-8"
            >
                <h1 className="text-3xl text-center font-medium mb-8">Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        required
                        className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                        className="input input-bordered input-success  focus:outline-none  lg:w-[350px] w-[300px]"
                    />
                </div>
                <span className="w-full flex justify-center mt-4">
                    <small className="text-red-600">{error}</small>
                </span>
                <input
                    className="bg-[#149352] cursor-pointer text-white py-[10px] rounded-3xl mt-4 hover:bg-transparent hover:text-[#149352] hover:outline outline-[#149352] font-medium w-full"
                    type="submit"
                    value="Login"
                />
                <div className="divider">OR</div>
                <div className="w-full flex justify-center">
                    <span onClick={hangleGoogle}>
                        <img
                            className="w-10 p-[6px] border rounded-full hover:saturate-0 bg-slate-200 cursor-pointer"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt=""
                        />
                    </span>
                </div>
                <span className="flex w-full justify-center mt-3">
                    <small className="text-center">
                        Dont’t Have An Account?{" "}
                        <Link
                            to={"/register"}
                            className="text-warning underline"
                        >
                            Register
                        </Link>
                    </small>
                </span>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;
