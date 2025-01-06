import React from 'react'
import CardComponent from "./components/CardComponent";
import products from './utility/data';

const App = () => {
  return (
    <div className=" bg-slate-900 flex flex-wrap">
      <CardComponent contacts={products} />
    </div>
  )
}

export default App
