import React from 'react'
import Cards from '../components/Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-32 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>we are delighted to have you <span className='text-pink-500'>here!!!</span></h1>
        </div>
        <p className='mt-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, sequi nesciunt doloremque corporis beatae inventore, magnam dolor nam, est accusamus architecto error! Nemo dolore rerum repellat, deleniti accusamus quam perspiciatis. Nam suscipit eaque eum dolorum impedit blanditiis corporis veniam velit molestiae. Minus laborum, aliquid nisi nemo maxime sequi a sapiente excepturi molestias facilis nesciunt, iste necessitatibus! Velit ducimus repellat veniam vel. Voluptatem accusamus consequatur aut consectetur dicta, iusto iste impedit deserunt quia, obcaecati magnam repudiandae sapiente voluptatibus error expedita ad aspernatur? Debitis ratione dolore odio nesciunt amet cumque corrupti excepturi. In nesciunt aperiam deleniti nulla deserunt magnam, autem quis cumque!
        </p>

        <Link to='/'>

        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>Back</button>
        </Link>
      
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
    </div>
    </>
  )
}

export default Course
