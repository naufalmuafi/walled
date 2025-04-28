import React from "react";

function PageNavButton() {
    return (
        <div className="container-fluid p-5 pt-3">
            <div className="btn-group shadow" role="group">
                <button type="button" className="btn btn-outline px-4 disabled">
                    First
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary px-3 active"
                >
                    1
                </button>
                <button type="button" className="btn btn-outline-primary px-3">
                    2
                </button>
                <button type="button" className="btn btn-outline-primary px-3">
                    3
                </button>
                <button type="button" className="btn btn-outline-primary px-4">
                    Next
                </button>
            </div>
        </div>
    );
}

export default PageNavButton;
