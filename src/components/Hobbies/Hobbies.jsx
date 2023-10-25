import './Hobbies.css'

const Hobbies = (props) => {

  return (
    <div className="hobbies">
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}

export default Hobbies