import { useEffect } from "react"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import { useActivity } from "./types/hooks/useActivity"
function App() {

  const { state, dispatch } = useActivity()

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorías</h1>
          {state.activities.length !== 0 ?
            <button onClick={() => dispatch({ type: 'restart-app' })}
              className="bg-gray-800 hover:bg-gray-900 p-2 font-bold text-white text-sm uppercase rounded-md cursor-pointer">
              Reiniciar App
            </button> : ''
          }
        </div>
        <div className="w-full text-right p-0 h-auto">
          <span className="text-xs mr-10 text-blue-700 shadow-lg"><a href="https://github.com/leonar2zb/calorie-tracker" target="_blank">ver fuente en Github</a></span>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
      <section className="bg-gray-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList />
      </section>
    </>
  )
}

export default App
