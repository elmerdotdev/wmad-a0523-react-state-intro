import './Header.css'

const Header = (props) => {
  return (
    <>
      <h2 className="greeting">Welcome {props.firstname} {props.lastname} age {props.age}!</h2>
    </>
  )
}

export default Header