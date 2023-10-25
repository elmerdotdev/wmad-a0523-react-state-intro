import './Footer.css'

const Footer = (props) => {
  return (
    <>
      <div className="footer">Hello, I&apos;m {props.firstname} {props.lastname} from FOOTER!</div>
    </>
  )
}

export default Footer