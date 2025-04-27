import React from "react";

function TableFilter() {
    return (
        <div className="Tablefilter container-fluid p-5">
            <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <label className="visually-hidden">Username</label>
                    <div className="input-group">
                        <div className="input-group-text shadow-sm border-end-0 bg-white">
                            <i className="bi bi-search text-secondary"></i>
                        </div>
                        <input
                            type="text"
                            className="form-control shadow-sm border-start-0"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div className="col-auto">
                    <label className="col-form-label text-secondary">
                        Show
                    </label>
                </div>

                <div className="col-12">
                    <select
                        className="form-select shadow-sm"
                        id="inlineFormSelectShow"
                    >
                        <option defaultValue="10">Last 10 transactions</option>
                        <option value="20">Last 20 transactions</option>
                        <option value="30">Last 30 transactions</option>
                    </select>
                </div>

                <div className="col-auto">
                    <label className="col-form-label text-secondary">
                        Sort By
                    </label>
                </div>

                <div className="col-12">
                    <select
                        className="form-select shadow-sm"
                        id="inlineFormSelectSortBy"
                    >
                        <option defaultValue="date">Date</option>
                        <option value="type">Type</option>
                    </select>
                </div>

                <div className="col-12">
                    <label className="visually-hidden">Order</label>
                    <select
                        className="form-select shadow-sm"
                        id="inlineFormSelectOrder"
                    >
                        <option defaultValue="descending">Descending</option>
                        <option value="ascending">Ascending</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default TableFilter;
