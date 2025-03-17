import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';

function Player({name , team , nationality, jerseyNumber , age, image }) {
    return (
        <Card className=" bg-secondary bg-opacity-75 text-white" style={{ width: "100%" }}>
            <Card.Body >
                <Card.Img src={image} alt={name} className="w-100 rounded" style={{  height: "400px",objectFit: "cover" }}/>
                <Card.Text>Name: {name}</Card.Text>
                <Card.Text>Nationality: {nationality}</Card.Text>
                <Card.Text>Team: {team}</Card.Text>
                <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
                <Card.Text>Age: {age} years old</Card.Text>
            </Card.Body>
        </Card>
        )
}

//using proptypes for typechecking
Player.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    nationality: PropTypes.string,
    jerseyNumber: PropTypes.number,
    age: PropTypes.number,
    image: PropTypes.string,
  };

//default props
Player.defaultProps = {
    name: "Unknown",
    team: "No Team",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 18,
    image: "https://via.placeholder.co/600x400"
}

export default Player