import React from "react";

function TableFilter() {
    return (
        <div className="Tablefilter container-fluid p-5">
            <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <label
                        class="visually-hidden"
                        for="inlineFormInputGroupSearch"
                    >
                        Username
                    </label>
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
                    <label
                        className="col-form-label text-secondary"
                        for="inlineFormSelectShow"
                    >
                        Show
                    </label>
                </div>

                <div className="col-12">
                    <select
                        className="form-select shadow-sm"
                        id="inlineFormSelectShow"
                    >
                        <option value="10" selected>
                            Last 10 transactions
                        </option>
                        <option value="20">Last 20 transactions</option>
                        <option value="30">Last 30 transactions</option>
                    </select>
                </div>

                <div className="col-auto">
                    <label
                        className="col-form-label text-secondary"
                        for="inlineFormSelectSortBy"
                    >
                        Sort By
                    </label>
                </div>

                <div className="col-12">
                    <select
                        className="form-select shadow-sm"
                        id="inlineFormSelectSortBy"
                    >
                        <option value="date" selected>
                            Date
                        </option>
                        <option value="type">Type</option>
                    </select>
                </div>

                <div className="col-12">
                    <label
                        className="visually-hidden"
                        for="inlineFormSelectOrder"
                    >
                        Order
                    </label>
                    <select
                        className="form-select shadow-sm"
                        id="inlineFormSelectOrder"
                    >
                        <option value="descending" selected>
                            Descending
                        </option>
                        <option value="ascending">Ascending</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default TableFilter;
