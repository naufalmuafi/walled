import React from "react";
import TableFilter from "./common/TableFilter";
import PageNavButton from "./common/PageNavButton";
import "../styles/Transactions.css";

function Transactions() {
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
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Transfer</td>
                            <td>Sendy</td>
                            <td>Fore Coffee</td>
                            <td className="negative">- 75.000,00</td>
                        </tr>
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Topup</td>
                            <td></td>
                            <td>Topup from Bank Transfer</td>
                            <td className="positive">+ 1.000.000,00</td>
                        </tr>
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Transfer</td>
                            <td>Spongebob</td>
                            <td>Beli barang</td>
                            <td className="negative">- 75.000,00</td>
                        </tr>
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Transfer</td>
                            <td>Joko</td>
                            <td>Transfer</td>
                            <td className="positive">+ 1.000.000,00</td>
                        </tr>
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Transfer</td>
                            <td>Joko</td>
                            <td>Fore Coffee</td>
                            <td className="negative">- 75.000,00</td>
                        </tr>
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Transfer</td>
                            <td>Joko</td>
                            <td>Fore Coffee</td>
                            <td className="negative">- 75.000,00</td>
                        </tr>
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Topup</td>
                            <td></td>
                            <td>Topup from Bank Transfer</td>
                            <td className="positive">+ 1.000.000,00</td>
                        </tr>
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Transfer</td>
                            <td>Joko</td>
                            <td>Fore Coffee</td>
                            <td className="negative">- 75.000,00</td>
                        </tr>
                        <tr>
                            <td>20:10 - 30 June 2022</td>
                            <td>Topup</td>
                            <td></td>
                            <td>Topup from Bank Transfer</td>
                            <td className="positive">+ 1.000.000,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PageNavButton />
        </>
    );
}

export default Transactions;
