import './Sibling.css'

const Sibling = (props) => {
  return (
    <div className="sibling-wrapper">My sibling is {props.sibling.firstname} {props.sibling.lastname}.</div>
  )
}

export default Sibling