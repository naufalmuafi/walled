import React from "react";
import TableFilter from "./common/TableFilter";
import PageNavButton from "./common/PageNavButton";
import "../styles/Transactions.css";

function Transactions({ transactionsData, isLoading }) {
    console.log("transactionsData", transactionsData);
    console.log("isLoading", isLoading);

    const loading = <div class="spinner-border" role="status"></div>;

    return (
        <>
            <TableFilter />

            <div className="container-fluid px-5">
                <table className="table table-striped table-hover table-responsive table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Date & Time</th>
                            <th scope="col">Type</th>
                            <th scope="col">From / To</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <>
                                {loading}
                                <p className="lead justify-content-center mt-3">
                                    No transactions data.
                                </p>
                            </>
                        ) : (
                            transactionsData.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.type}</td>
                                    <td>
                                        {transaction.from} / {transaction.to}
                                    </td>
                                    <td>{transaction.description}</td>
                                    <td
                                        className={
                                            +transaction.amount > 0
                                                ? "positive"
                                                : "negative"
                                        }
                                    >
                                        {transaction.amount}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <PageNavButton />
        </>
    );
}

export default Transactions;
