import React, { useState } from 'react';


export function PokemonEditComponent() {
    const [formData, setFormData] = useState(
        {
            name: '',
            type: '',
            power: '',
            attacks: ''
        }
    );
    const changeHandler = (event: any) => {
        setFormData(
            Object.assign(formData, { [event.target.name]: event.target.value })
        )
    }

    const saveHandler = () => {
        window.alert(formData)
    }
    return (
        <div className='pokemon-edit-component-container'>
            <div className='pokemon-edit-all-fields-container'>
                <div className='pokemon-edit-field-container pokemon-row'>
                    <div className="pokemon-label block mb-2 text-sm font-medium text-gray-900 dark:text-white"><label>Name</label></div>
                    <div className='pokemon-content'><input name="name" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={changeHandler}></input></div>
                </div>
                <div className='pokemon-edit-field-container pokemon-row'>
                    <div className="pokemon-label  block mb-2 text-sm font-medium text-gray-900 dark:text-white"><label>Type</label></div>
                    <div className='pokemon-content'>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a type</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
                <div className='pokemon-edit-field-container pokemon-row'>
                    <div className="pokemon-label  block mb-2 text-sm font-medium text-gray-900 dark:text-white"><label>Power</label></div>
                    <div className='pokemon-content'><input name="power" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={changeHandler}></input></div>
                </div>
                <div className='pokemon-edit-field-container pokemon-row'>
                    <div className="pokemon-label  block mb-2 text-sm font-medium text-gray-900 dark:text-white"><label>Attacks</label></div>
                    <div className='pokemon-content'><input name="attacks" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={changeHandler}></input></div>
                </div>
                <div className='pokemon-edit-footer-container'>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={saveHandler}>Save</button>
                </div>
            </div>

        </div>

    )
}

export default PokemonEditComponent