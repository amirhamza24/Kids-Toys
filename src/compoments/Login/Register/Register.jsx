// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Register.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import Swal from "sweetalert2";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);

        setError('');
        if(password.length < 6) {
            setError('Password must be 6 characters Long')
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(from, { replace: true });
            form.reset();
            Swal.fire(
                "Success!",
                "Registration Successful!",
                "success"
              );
        })
        .catch(error => {
            console.log(error); 
        })
        
    }

    return (
        <div>
            <div className='w-10/12 mx-auto mt-10'>
                <div>
                    <div className='flex items-center justify-center'>
                        <h2 className='font-style text-4xl mb-4 font-semibold capitalize'>Create an account...</h2>
                    </div>


                    <div className='border py-10 w-7/12 mx-auto mt-8'>
                        <form onSubmit={handleLogin}>
                            <div className="w-11/12 md:w-9/12 mx-auto space-y-4">

                                <div className="form-control space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">
                                            Enter Name
                                        </p>
                                    </label>

                                    <input type="text" name="name" placeholder="Enter Your Name" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                                </div>


                                <div className="form-control space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">
                                            Enter Email
                                        </p>
                                    </label>

                                    <input type="email" name="email" placeholder="example@gmail.com" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                                </div>

                                <div className="form-control space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">
                                            Photo URL
                                        </p>
                                    </label>

                                    <input type="text" name="photo" placeholder="Photo URL" className="w-full px-4 py-2 focus:outline-none border rounded" required/>
                                </div>

                                <div className="form-control space-y-2">
                                    <label htmlFor="label">
                                        <p className="text-left font-semibold">
                                            Enter password:
                                        </p>
                                    </label>

                                    <input type="password" name="password" placeholder="Enter Password" className="w-full px-4 py-2 focus:outline-none border rounded" required />
                                </div>
            
                                <div>
                                <p className="text-red-500 text-left">{}</p>
                            </div>

                            <div>
                                <p className="text-red-500 text-left">{error}</p>
                            </div>

                            <div className="form-control">
                                    <input type="submit" value="Register" className='h-10 bg-black text-white hover:bg-green-600 text-xl font-semibold cursor-pointer w-4/12 mx-auto'/>
                                </div>

                            <div>
                                <p className="">
                                    Already Have an Account? <Link className="text-blue-600 hover:underline" to="/login">Please Login.</Link>
                                </p>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;