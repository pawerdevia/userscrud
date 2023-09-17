import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [estilo, setEstilo] = useState('oculto')
  const [estilo2, setEstilo2] = useState('oculto2')
  const [nameDelete, setNameDelete] = useState('unknown')


  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users/')
  }, [])


  const handleModalForm = (e) => {
    e.preventDefault()
    setInfoUpdate()
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
        setEstilo={setEstilo}
      />
      <div className='container-users'>
        <div className={`${estilo2} modal-accept`}>
          <div className="accept__container">
            <h2 className='accept__tittle'>User delete</h2>
            <p className='accept__text'>User <span className='accept__name'>{nameDelete}</span>  has been delete </p>
            <button className='accept__btn' onClick={handleModalDelete}>Aceptar</button>
          </div>
        </div>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              estilo={estilo}
              setEstilo={setEstilo}
              setNameDelete={setNameDelete}
              handleModalDelete={handleModalDelete}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
