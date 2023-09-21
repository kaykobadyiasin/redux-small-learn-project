import CounterView from "./features/counter/CounterView"
import PostView from "./features/posts/PostView"




function App() {
  return (
    <>
      <h1 className="text-5xl text-center font-semibold py-5 mb-10 bg-blue-500 text-white ">React Redux toolkit</h1>
      <CounterView />
      <PostView />
    </>
  )
}

export default App




// plan for redux fetch data with axios

// step 1: install packages (npm install redux react-redux axios redux-thunk)
// step 2: constants define 
// step 3: async action creator 
// step 4: reducer 
// step 5: create store 
// step 6: provide store 
// step 7: use store
// step 7: adding style css
