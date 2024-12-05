import { categories } from "../data/categories"
import React, { useState, ChangeEvent } from "react"

export default function Form() {
    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })
    }

    return (<form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="category">Categoría:</label>
            <select className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="category" value={activity.category} onChange={handleChange}>
                {categories.map(category => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="name">Actividad:</label>
            <input type="text" id="name" className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. Comida, Jugo de Naranja, Ejercicio, Correr"
                value={activity.name} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="calories">Calorias:</label>
            <input type="number" id="calories" className="border border-slate-300 p-2 rounded-lg"
                placeholder="ej 300 o 500" value={activity.calories} onChange={handleChange} />
        </div>

        <input type="submit"
            className="bg-gray-800 hover:bg-gray-900 cursor-pointer p-2 w-full font-bold uppercase text-white rounded-lg"
            value="Guardar ejercicio o comida"
        />

    </form>)
}