import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '../components/atoms/Logo'
import Button from '../components/atoms/Button'
import NavbarLink from '../components/atoms/NavbarLink'
import NavbarMark from '../components/molecules/NarvbarMark'
import NavbarLinkList from '../components/molecules/NavbarLinkList'
import Navbar from '../components/organisms/Navbar'
import Box from '../components/molecules/Box'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <br/>
      <div className='grid grid-cols-2 gap-3'>
        <div className="rounded-3xl p-1 fondo-claro col-span-12 md:col-span-1 items-center h-auto">
              <Image width='600' height='600' src='img/solar-system-animation.svg' className='rounded-3xl m-auto h-full' 
              style={{width:'auto',minHeight:'20rem',maxHeight:'35rem', objectFit:'cover'}}
              alt='slorar system animation'/>
        </div>
        <div className="rounded-3xl p-1 border-white border-2 bg-dark col-span-12 md:col-span-1 flex items-center h-auto pt-8 pb-8">
            <div className='w-max m-auto'>
              <div className='w-3/4 m-auto'>
                <h3 className='text-2xl'> Descubre mas sobre los secretos del espacio</h3>
                <hr className='border-b-2 border-white rounded-lg mt-2 mb-2'/>
                <p className='mb-4'>
                  Registrate para acceder a un gran conetenido sobre el espacio en un simulador del cielo en 3D, un catalogo sobre material astronomico y mas
                </p>
                <button className="btn-29 rounded-xl"> 
                  <span className="text-container">
                    <span className="text">
                      REGISTRARSE 
                    </span>
                  </span>
                </button>
              </div>
            </div>
        </div>
      </div>

      <div className=' rounded-3xl mt-3 mb-3 text-slate-100 text-center pt-14 pb-14' 
      style={{backgroundImage:'url(img/background-image.svg)'}}>
        <div className='items-center w-fit m-auto text-center'>
          <p className='text-5xl font-bold'>STELLARIUM </p>
          <hr className='w-4/5 border-b-2 rounded-lg m-auto mt-3 mb-4'/>
          <p className='text-xl'>Es un planetario de código abierto para su ordenador. <br/>
            Muestra un cielo auténtico en 3D, tal como lo que ve a simple vista, con binoculares o un telescopio.</p>
        </div>
      </div>
      
      <div className='text-center text-gray-50' >
        <div className=' bg-gray-800 p-4 pb-1 rounded-t-xl shadow-xl mt-4 z-10'>
          <section className='mb-4' >
            <h4 className='text-2xl'>José Rodríguez Cáceres</h4>
            <hr className='w-1/3 border-b-2 rounded-lg m-auto mt-3 mb-4'/>
            <p >Pagina de proyecto de fin de grado</p>
          </section>
        </div>
        <div className='text-center p-3 rounded-b-xl bg-gray-600 z-0'>
          <p>
            This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation,
            either version 3 of the License, or (at your option) any later version.
          </p>
          <br/>
          <p>
            This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
            without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
            See the GNU General Public License for more details.
          </p>
          <br/>
          <p>
            You should have received a copy of the GNU General Public License along with this program. 
            If not, see <a href='https://www.gnu.org/licenses'>https://www.gnu.org/licenses</a>.
          </p>
        </div>
      </div>
  
    </>
  )
}
