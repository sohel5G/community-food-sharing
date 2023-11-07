/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AllContext } from "../../provider/Authprovider";

import * as React from "react";
import { useTable } from "react-table";
import "./manageFoods.css"
import { Link } from "react-router-dom";
import swal from "sweetalert";

const ManageFoods = () => {
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);
    const { user } = useContext(AllContext);

    useEffect(() => {
        axiosSecure.get(`/get-donated-foods?userEmail=${user?.email}`)
            .then(res => {
                setFoods(res.data)
            })
    }, [axiosSecure, user?.email])


    const handleDelete = (foodId) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this food!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {

                axiosSecure.delete(`/user-donated-food-delete?donatedFoodId=${foodId}`)
                    .then(res => {

                        if (res.data.deletedCount > 0) {
                            axiosSecure.get(`/get-donated-foods?userEmail=${user?.email}`)
                                .then(res => {
                                    setFoods(res.data)
                                })

                            swal({
                                text: "Food Deleted Successfully",
                                icon: "success",
                                buttons: false,
                            })
                        }
                    })

                axiosSecure.delete(`/user-requested-food-delete?requestedFoodId=${foodId}`)
                    .then(res => {
                        res.data
                    })

            }
        });

    }



    const data = React.useMemo(() => foods, [foods]);
    const columns = React.useMemo(
        () => [
            {
                Header: "Food Name",
                accessor: (row) => (
                    <h1><Link to={`/available-food/${row._id}`}> {row.food_name} </Link></h1>
                ),
            },
            {
                Header: "Food Status",
                accessor: (row) => (
                    <p className = {row.food_status === "Available" ? "text-green-500" : "text-orange-500"
            }>{row.food_status}</p>
                ),
            },
            {
                Header: "Edit",
                accessor: (row) => (
                    <Link to={`/dashboard/food/edit/${row._id}`}>Edit</Link>
                ),
            },
            {
                Header: "Manage",
                accessor: (row) => (
                    <Link to={`/dashboard/foods/status/${row._id}`}>Manage</Link>
                ),
            },
            {
                Header: "Delete",
                accessor: (row) => (
                    <button className="text-[#FA2371]" onClick={() => handleDelete(row._id)}>Delete</button>
                ),
            }
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <>

            <div className="App">
                <div className="container">
                    <table className="" {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>

                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>

        </>
    );
};

export default ManageFoods;

