import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddData.css';

const AddData = () => {
    const { register, handleSubmit, reset, } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('https://secure-beach-40201.herokuapp.com/users', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Data Added Successfully to the table');

                }
            })
        reset();
    }
    return (
        <div >

            <div className="row">
                <div className="  col-md-12">
                    <div className=" d-flex justify-content-center align-items-center  ">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input {...register("image", { required: true })}
                                    placeholder="image url"
                                />
                                <br />
                                <input
                                    {...register("projectname")}

                                    placeholder="Project name"

                                />
                                <br />

                                <input
                                    {...register("clientname")}

                                    placeholder="Client name"

                                />
                                <br />

                                <input
                                    {...register("Panelname")}

                                    placeholder="Panel name"

                                />
                                <br />

                                <input
                                    {...register("Pagenumber")}

                                    placeholder="Page name"

                                />
                                <br />

                                <input
                                    {...register("Screenname")}

                                    placeholder="Screen name"

                                />
                                <br />

                                <input
                                    {...register("Eventsname")}

                                    placeholder="Events name"

                                />
                                <br />

                                <input type="submit" value="Add new" />
                            </form>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AddData;