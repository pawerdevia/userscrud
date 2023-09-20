import React, { useEffect, useState } from 'react'
import '../assets/styles/FormUser.css'

const FormUser = ({ createUser,infoUpdate,updateUser,setInfoUpdate,estilo,handleModalForm,handleModalForm2,register,handleSubmit,reset}) => {

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])


    const submit = data => {
        if (infoUpdate) {
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
            handleModalForm2()
        } else {
            createUser('/users', data)
            handleModalForm2()
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }




    return (
        <div className={`${estilo} container-form`} >
            <form onSubmit={handleSubmit(submit)} className='form'>
                <div className="form-header">
                    <h2 className='form__tittle'>{infoUpdate ? 'Edit user' : 'New user'}</h2>
                    <span className='btn-close' onClick={handleModalForm}>
                        <i className='bx bx-x'></i>
                    </span>
                </div>
                <div className='form__date'>
                    <label htmlFor="email">Email</label>
                    <input className='input-form' {...register('email')} type="email" id="email" />
                </div>
                <div className='form__date'>
                    <label htmlFor="password">Password</label>
                    <input className='input-form' {...register('password')} type="password" id="password" />
                </div>
                <div className='form__date'>
                    <label htmlFor="first_name">First name</label>
                    <input className='input-form' {...register('first_name')} type="text" id="first_name" />
                </div>
                <div className='form__date'>
                    <label htmlFor="last_name">Last name</label>
                    <input className='input-form' {...register('last_name')} type="text" id="last_name" />
                </div>
                <div className='form__date'>
                    <label htmlFor="birthday">Birthday</label>
                    <input className='input-form' {...register('birthday')} type="date" id="birthday" />
                </div>
                <button className='form__button'>{infoUpdate ? 'Guardar Cambios' : 'Agregar nuevo usuario'}</button>
            </form>
        </div>
    )
}

export default FormUser