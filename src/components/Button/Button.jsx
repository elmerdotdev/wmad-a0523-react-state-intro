import './Button.css'

const Button = (props) => {

  const updateNames = (firstname, lastname, age) => {
    props.updateFirstname(firstname)
    props.updateLastname(lastname)
    props.updateAge(age)
  }

  return (
    <div className="footer-btn">
      <button onClick={() => updateNames('John', 'Moe', 50)}>Change my details</button>
      <button onClick={() => props.updateHobbies(['Cliff Jumping', ...props.hobbies])}>Add Hobby</button>
      <button onClick={() => props.updateSibling({...props.sibling, firstname: 'Joanna'})}>Change sibling&apos;s firstname</button>
    </div>
  )
}

export default Button