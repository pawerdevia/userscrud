import React from 'react'
import '../assets/styles/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setNameDelete, handleModalDelete, handleModalForm2 }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
        setNameDelete(`${user.first_name}  ${user.last_name}`)
        handleModalDelete()
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        handleModalForm2()
    }



    return (
        <article className='card-user'>
            <div className="container-tittle">
                <h3 className='card__title'> {`${user.first_name} ${user.last_name}`}</h3>
            </div>
            <div className="container-dates">
                <ul className='dates__list'>
                    <li className='dates__date'>
                        <span className='type-date'>EMAIL: </span>
                        <span>{user.email}</span>
                    </li>
                    <li className='dates__date'>
                        <span className='type-date'>BIRTHDAY: </span>
                        <span> <i className='bx bx-gift' ></i> {user.birthday}</span>
                    </li>
                </ul>
            </div>
            <div className="card__buttons">
                <button className='buttons buton-trash' onClick={handleDelete}><i className='bx bxs-trash'></i></button>
                <button className='buttons buton-edit' onClick={handleEdit}><i className='bx bx-pencil'></i></button>
            </div>
        </article>
    )
}

export default UserCard