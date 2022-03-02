import React, { useEffect, useState } from 'react';

const TableData = () => {
    const [manageData, setManageData] = useState([])
    useEffect(() => {
        fetch('https://secure-beach-40201.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setManageData(data))
    }, [])
    return (
        <div>
            <div>
                <table className="table table-border  text-bold text-white"  >
                    <thead>
                        <tr>

                            <th scope="col">Page</th>
                            <th scope="col">Image</th>
                            <th scope="col">Project</th>
                            <th scope="col">Client </th>
                            <th scope="col">Panel </th>
                            <th scope="col">Screen</th>
                            <th scope="col">Events </th>

                        </tr>
                    </thead>


                    {
                        manageData?.map((pd) =>

                            <tbody key={pd._id}>
                                <tr>
                                    <td className='text-nowrap'>{pd?.Pagenumber}</td>
                                    <td><img width="50" height="50" className=" rounded-pill border-0" src={pd?.image} alt="" />  </td>
                                    <td className='text-nowrap'>{pd?.projectname}</td>
                                    <td className='text-nowrap'>{pd?.clientname}</td>
                                    <td className='text-nowrap'>{pd?.Panelname}</td>
                                    <td className='text-nowrap'>{pd?.Screenname}</td>
                                    <td className='text-nowrap'>{pd?.Eventsname}</td>
                                </tr>
                            </tbody>

                        )

                    }




                </table>

            </div>

        </div>
    );
};

export default TableData;