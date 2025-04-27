import React from "react";

function SetTransfer() {
    return (
        <div className="container pt-5">
            <h1 className="fw-semibold pb-3">Transfer</h1>
            <div className="card bg-white rounded-4 shadow p-5">
                <div className="input-group">
                    <div className="input-group-text shadow-sm">To</div>
                    <select
                        className="form-select shadow-sm"
                        id="inlineFormSelectSortBy"
                    >
                        <option defaultValue="900782139">
                            900782139 (Giz)
                        </option>
                        <option value="900782140">900782140 (Muafi)</option>
                    </select>
                </div>

                <div className="container rounded-3 bg-light mt-4 mb-3 p-4 pb-5">
                    <label className="form-label text-secondary">Amount</label>
                    <div className="input-group mt-4">
                        <h1 className="display-4 fw-normal me-4">IDR</h1>
                        <input
                            type="number"
                            className="form-control display-4 fw-normal"
                            placeholder="Enter amount..."
                        ></input>
                    </div>
                    <hr className="hr hr-blurry mt-4" />
                </div>
                <div className="form-text">
                    Balance:{" "}
                    <span style={{ color: "#219653" }}>IDR 10.000.000,00</span>
                </div>
                <div className="container rounded-3 bg-light mt-4 mb-5 p-4">
                    <div class="form-floating">
                        <textarea
                            name="notes"
                            className="form-control"
                            placeholder="Leave a note here"
                            style={{ height: "7rem" }}
                        ></textarea>
                        <label htmlFor="floatingTextarea2">Notes</label>
                    </div>
                </div>

                <button
                    type="button"
                    class="btn btn-primary btn-lg shadow fw-normal"
                >
                    Transfer
                </button>
            </div>
        </div>
    );
}

export default SetTransfer;
