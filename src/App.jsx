import Header from "./components/Header/Header"
import Hobbies from "./components/Hobbies/Hobbies"
import Sibling from "./components/Sibling/Sibling"
import Footer from "./components/Footer/Footer"
import Button from "./components/Button/Button"
import { useState } from "react"

const App = () => {
  const [firstname, setFirstname] = useState('Elmer')
  const [lastname, setLastname] = useState('Balbin')
  const [age, setAge] = useState(40)
  const [hobbies, setHobbies] = useState(['Drawing', 'Painting', 'Skydiving'])
  const [sibling, setSibling] = useState({ firstname: 'Jane', lastname: 'Moe'})

  return (
    <div>
      <Header firstname={firstname} lastname={lastname} age={age} />
      <Hobbies hobbies={hobbies} />
      <Sibling sibling={sibling} />
      <Footer firstname={firstname} lastname={lastname} />
      <Button updateFirstname={setFirstname} updateLastname={setLastname} updateAge={setAge} hobbies={hobbies} updateHobbies={setHobbies} sibling={sibling} updateSibling={setSibling} />
    </div>
  )
}

export default App