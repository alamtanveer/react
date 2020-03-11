import React from 'react';
import './Solution.css';
import Insert from '../Insert/Insert';
import User from '../User/User';
class Solution extends React.Component {
    constructor(props){
        debugger;
        super(props);
        this.state = {
            item:[],
            selectedItem:{}
        }
        this.updateData = this.updateData.bind(this);
        this.getIndexPosition = this.getIndexPosition.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.superInsertElement = React.createRef();
    }

    updateData(datas, param){
        debugger;
        let getIndex = this.state.item.findIndex(res=>{
           return res.Id == datas.Id
        })
        if (param=='insert'){
            if(getIndex == -1){
                this.state.item.push({Id:datas.Id, name:datas.name, email:datas.email, designation:datas.designation});
                this.setState({item:this.state.item});
            }else{
                this.superInsertElement.current.resetForm(datas);
            }
        }
        else {
            this.state.item[getIndex].id = datas.Id;
            this.state.item[getIndex].name = datas.name;
            this.state.item[getIndex].email = datas.email;
            this.state.item[getIndex].designation = datas.designation;
            this.setState({item:this.state.item});
        }
    }

    getIndexPosition(data){
        debugger;
        this.state.selectedItem = data;
        this.setState({selectedItem:data});
        this.superInsertElement.current.changeName(data);
    }

    deleteItem(index){
        this.state.item.splice(index,1);
        this.setState({item:this.state.item});
    }

    render() {
        return (
            <>
                <div className="wrapperBackground">
                    <div className="container">
                        <div className="row">
                            <div className="article col-md-4">
                                <span style={{ marginTop: 50 + 'px', color: 'white' }}>Solution workers.</span>
                                <Insert ref={this.superInsertElement} editRecord={this.state.selectedItem} triggerParent={this.updateData} />
                            </div>
                            <div className="article col-md-4">
                                Get User Info
                                <User userInfo={this.state.item} getIndex={this.getIndexPosition} deleteUser={this.deleteItem}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Solution;
