import React, { useState } from 'react'
import "tailwindcss/tailwind.css"
import { Menu } from '@headlessui/react'

export const Calculadora = () => {
    const [numerosUno, setNumerosUno] = useState(" ")
    const [resultado, setResultado] = useState(" ")


    const handleClick = (e) => {
        
        setNumerosUno(numerosUno.concat(e.target.id))
    }

    const calculate = () => {



        try {

            setResultado(eval(numerosUno).toString())


        } catch (error) {

            setNumerosUno("Invalido")

        }

        setNumerosUno("")

    }
    return (
        <>
            <div className='w-screen h-screen flex justify-center items-center bg-white dark:bg-gray-800 '>
                {/* <h1 className=''>Calculadora</h1> */}
                {/* <div className='containerResutlados'> */}
                {/* <input type= "text" value={numerosUno} disabled/> */}
                {/* <h1>{numerosUno}</h1> */}
                {/* </div> */}
                {/* <div>
                    <button id='1' className='' onClick={handleClick}>1</button>
                    <button>1</button>
                    <button id='+' onClick={handleClick}>+</button>
                    <br/>
                    <button>1</button>
                    <button>1</button>
                    <button>1</button>
                    <br/>
                    <button>1</button>
                    <button>1</button>
                    <button id='=' onClick={calculate}>=</button>
                </div> */}

                <div className='w-1/4 h-3/4 max-[600px]:w-5/6 max-[600px]:h-5/6 bg-white rounded-3xl shadow-xl p-2 '>

                    <div className='w-full h-2/5 grid grid-rows-3   bg-white dark:bg-sky-900 rounded-3xl rounded-b-none'>

                        <div className='flex items-center w-full  row-span-2 bg-transparent p-4 rounded-3xl text-4xl text-white max-[600px]:text-2xl'>{numerosUno}</div>
                        <div className='  w-full bg-transparent p-4 rounded-3xl font-bold font-work text-6xl max-[600px]:text-4xl text-white text-end'> {resultado}</div>

                    </div>

                    <div className='w-full h-3/5 grid grid-cols-3'>

                        <div className='h-full grid grid-rows-4 col-span-2  items-center'>

                            <div className="max-w-sm  mx-auto w-full h-full grid grid-cols-3 row-span-1 gap-4  p-3  max-[600px]:p-0 ">
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='7' onClick={handleClick}>7</button>
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='8' onClick={handleClick}>8</button>
                                <button className=' block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='9' onClick={handleClick}>9</button>
                            </div>

                            <div className="max-w-sm  mx-auto w-full h-full grid grid-cols-3 row-span-1 gap-4  p-3 max-[600px]:p-0 ">
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='4' onClick={handleClick}>4</button>
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='5' onClick={handleClick}>5</button>
                                <button className=' block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='6' onClick={handleClick}>6</button>
                            </div>

                            <div className="max-w-sm  mx-auto w-full h-full grid grid-cols-3 row-span-1 gap-4  p-3 max-[600px]:p-0 ">
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='1' onClick={handleClick}>1</button>
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='2' onClick={handleClick}>2</button>
                                <button className=' block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='3' onClick={handleClick}>3</button>
                            </div>

                            <div className="max-w-sm  mx-auto w-full h-full grid row-span-1 gap-4  p-3 max-[600px]:p-0 ">
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-center text-3xl font-semibold text-black   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' onClick={calculate}>=</button>
                            </div>





                        </div>

                        <div className='h-full grid grid-rows-5'>

                            <div className="max-w-sm  mx-auto w-full h-full flex justify-center row-span-2 p-3 max-[600px]:p-0 ">
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5  text-3xl text-center  font-semibold    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-black transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='+' onClick={handleClick} >+</button>
                            </div>

                            <div className="max-w-sm  mx-auto w-full h-full flex justify-center p-3 max-[600px]:p-0 bg-white ">
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5  text-3xl text-center  font-semibold   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-black transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='-' onClick={handleClick}>-</button>
                            </div>

                            <div className="max-w-sm  mx-auto w-full h-full flex justify-center p-3 max-[600px]:p-0  bg-white ">
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-3xl text-center  font-semibold   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-black transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='*' onClick={handleClick}>*</button>
                            </div>

                            <div className="max-w-sm  mx-auto w-full h-full flex justify-center p-3 max-[600px]:p-0 bg-white ">
                                <button className='pr-4 block w-full rounded-md  px-3.5 py-2.5 text-3xl text-center  font-semibold  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-black transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-75' id='/' onClick={handleClick}>/</button>
                            </div>

                        </div>

                    </div>


                </div>




            </div>
        </>
    )
}
