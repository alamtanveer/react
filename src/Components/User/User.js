import React from 'react';
import { Table } from "react-bootstrap";

class User extends React.Component {
    constructor(props) {
        super(props)
    }
   
    edit(item){
        debugger;
        this.props.getIndex(item);
    }

    delete(position){
        debugger;
        this.props.deleteUser(position);
    }

    render() {
        const stl = {
            background: 'white',
            padding: '60px'
        };

        return (
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Designation</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.userInfo.map((item, index) =>{
                        return (
                         <tr key={index}>
                             <td>{item.Id}</td>
                             <td>{item.name}</td>
                             <td>{item.email}</td>
                             <td>{item.designation}</td>
                             <td onClick={()=>this.edit(item)}>Edit</td>
                             <td onClick={()=>this.delete(index)}>Delete</td>
                         </tr>
                        )
                    })}
                    </tbody>
                   
                </Table>
            </>
        )
    }
}

export default User;