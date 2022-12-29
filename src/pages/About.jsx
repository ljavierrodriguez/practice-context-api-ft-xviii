import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../store/AppContext'
import { FaTrash } from 'react-icons/fa';

const About = () => {
    const { store, actions } = useContext(AppContext);
    //console.log(store);
    const [counter, setCounter] = useState(1);



    useEffect(() => {
        // componentDidMount

        console.log('Entrando a About');

        return () => {
            // componentWillUnmount
            console.log('Saliendo de About');
        }

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Listado de Usuarios</h1>
                    <ul className="list-group mb-3">
                        {
                            store?.users.length > 0 &&
                            store?.users.map((user) => {
                                return (
                                    <li key={user?.id} className="list-group-item list-group-item-action d-flex justify-content-between">
                                        <span>{user?.id}: {user?.name}</span>
                                        <span className='text-danger' onClick={() => actions?.deleteUser(user.id)}><FaTrash /></span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className='btn btn-warning btn-sm'>
                        Add User
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About