import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [estilo, setEstilo] = useState('oculto')
  const [estilo2, setEstilo2] = useState('oculto2')
  const [nameDelete, setNameDelete] = useState('unknown')
  const { register, handleSubmit, reset } = useForm()


  const baseUrl = 'https://users-backend-dev-fsqs.3.us-1.fl0.io'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users/')
  }, [])


  const handleModalForm = () => {
    setInfoUpdate()
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    })
    if (estilo === 'mostrar') {
      setEstilo('oculto')
    } else {
      setEstilo('mostrar')
    }
  }

  const handleModalForm2 = () => {
    if (estilo === 'mostrar') {
      setEstilo('oculto')
    } else {
      setEstilo('mostrar')
    }
  }

  const handleModalDelete = () => {
    if (estilo2 === 'mostrar2') {
      setEstilo2('oculto2')
    } else {
      setEstilo2('mostrar2')
    }
  }

  return (
    <div className='principal'>
      <header className="header">
        <h1 className='header__title'>Users</h1>
        <button className='header__btn-create' onClick={handleModalForm}>
          <i className='bx bx-plus'></i>
          Create new user
        </button>
      </header>
      <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        estilo={estilo}
        handleModalForm2={handleModalForm2}
        handleModalForm={handleModalForm}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <div className='container-users'>
        <div className={`${estilo2} modal-accept`}>
          <div className="accept__container">
            <h2 className='accept__tittle'>User delete</h2>
            <p className='accept__text'>User <span className='accept__name'>{nameDelete}</span>  has been delete </p>
            <button className='accept__btn' onClick={handleModalDelete}>Confirm</button>
          </div>
        </div>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setNameDelete={setNameDelete}
              handleModalDelete={handleModalDelete}
              handleModalForm2={handleModalForm2}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
