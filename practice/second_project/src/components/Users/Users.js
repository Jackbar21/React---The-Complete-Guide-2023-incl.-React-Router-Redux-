import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import User from "./User";

const Users = (props) => {
  const f = ({ username, age }) => {
    return <ListGroup.Item>{`${username} (${age} years old)`}</ListGroup.Item>;
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "35px",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            {props.users.map(({ username, age }) => (
              <User
                key={`${username}${age}${Math.random().toString().slice(1)}`}
                username={username}
                age={age}
                deleteUserHandler={props.deleteUserHandler}
              />
            ))}
            {/* <User
              username="Todd"
              age={1}
              deleteUserHandler={props.deleteUserHandler}
            />
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Users;
