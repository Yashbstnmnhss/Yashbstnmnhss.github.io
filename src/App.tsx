import { createSignal } from 'solid-js'

function App() {
    const [count, setCount] = createSignal(0)

    return (
        <>
            <h1>BSTN 4</h1>
            <div class="card">
                <button onClick={() => setCount(count => count + 1)}>count is {count()}</button>
            </div>
        </>
    )
}

export default App
