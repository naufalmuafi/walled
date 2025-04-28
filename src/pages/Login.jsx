import React from "react";
import loginImage from "../assets/login_image.svg";

function Login() {
    return (
        <div className="container-fluid">
            <div className="row align-content-center">
                <div className="col p-5">
                    <div className="container align-items-center">
                        <img
                            src="walled_logo.svg"
                            alt="Logo Walled"
                            className="login-image w-40 my-5 pt-5 pb-3"
                        />
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="inputEmail"
                                    className="visually-hidden"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control text-secondary bg-light py-2"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="inputPassword"
                                    className="visually-hidden"
                                >
                                    Email
                                </label>
                                <input
                                    type="password"
                                    className="form-control text-secondary bg-light py-2"
                                    placeholder="Password"
                                />
                            </div>
                        </form>

                        <button
                            type="button"
                            class="btn btn-primary btn-lg shadow fw-normal py-3 my-4"
                        >
                            Login
                        </button>

                        <p>
                            Belum punya akun?{" "}
                            <span className="text-primary">daftar disini</span>
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img
                        src={loginImage}
                        alt="Login Image"
                        className="img-fluid w-100"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
