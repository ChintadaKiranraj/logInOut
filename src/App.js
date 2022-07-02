import Welcome from './components/Welcome'
import ConditionalRender from './components/ConditionalRender'
import ElementVariables from './components/ElementVariables'
import TernaryOperaters from './components/TernaryOperaters'
import Raj from './components/Raj'

import './App.css'

const App = () => (
  <div className="container">
    <Welcome greeting="conditional rendering" name="User" />
    <ConditionalRender />

    <Welcome greeting="element variables rendering" name="User" />
    <ElementVariables />

    <Welcome greeting="ternary operation rendering" name="User" />
    <TernaryOperaters />

    <Raj />
  </div>
)

export default App
