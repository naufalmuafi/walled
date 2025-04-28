import React, { useState } from "react";
import plusIcon from "../assets/plus_icon.svg";
import sendIcon from "../assets/send_icon.svg";

function Account(userData, isLoading) {
    const [showBalance, setShowBalance] = useState(true);

    const accountNumber = userData.userData.accountNumber;
    const balance = userData.userData.balance;
    const currency = userData.userData.currency;

    const loading = <div class="spinner-border" role="status"></div>;

    return (
        <div className="account container-fluid px-5">
            <div className="row">
                {/* Left Side */}
                <div className="col-12 col-md-auto bg-primary text-white rounded-4 p-5 align-content-center shadow-sm mb-4 mb-md-0">
                    <h5 className="fw-normal mb-3">Account No.</h5>
                    <h2 className="fw-bold">
                        {isLoading ? loading : accountNumber}
                    </h2>
                </div>

                {/* Right Side */}
                <div className="col-12 col-md bg-white rounded-4 ms-md-5 p-5 shadow-sm">
                    <h5 className="fw-normal text-secondary">Balance</h5>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                        {/* Balance Information */}
                        <div className="d-flex align-items-center gap-5">
                            {showBalance ? (
                                <h2 className="fw-semibold mb-0">
                                    {isLoading ? (
                                        loading
                                    ) : (
                                        <>
                                            {currency} {balance}
                                        </>
                                    )}
                                </h2>
                            ) : (
                                <h2 className="fw-semibold mb-0">
                                    Rp**********
                                </h2>
                            )}
                            <button
                                className={
                                    showBalance
                                        ? "btn bi bi-eye-slash text-secondary mb-0 fs-3"
                                        : "btn bi bi-eye text-secondary mb-0 fs-3"
                                }
                                onClick={() => setShowBalance(!showBalance)}
                            ></button>
                        </div>

                        {/* Icons Section */}
                        <div className="d-flex gap-4">
                            <button className="btn btn-primary rounded-3 shadow p-3">
                                <img
                                    src={plusIcon}
                                    alt="plus icon"
                                    style={{ width: "2rem", height: "2rem" }}
                                />
                            </button>
                            <button className="btn btn-primary rounded-3 shadow p-3">
                                <img
                                    src={sendIcon}
                                    alt="send icon"
                                    style={{ width: "2rem", height: "2rem" }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
