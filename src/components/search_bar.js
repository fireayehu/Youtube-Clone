import React,{Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        };
        this.inputEventHandler=this.inputEventHandler.bind(this);
        this.onChangeInputHandler=this.onChangeInputHandler.bind(this);
    }
    render(){
        return(
            <div className="input-group w-50 mx-auto my-5">
                <input className="form-control" placeholder="search" value={this.state.value} onChange={this.onChangeInputHandler}/>
                <span className="input-group-btn"><button onClick={this.inputEventHandler} className="btn btn-secondary text-light px-4"><i className="fas fa-search"></i></button></span>
            </div>
        );
    }
    inputEventHandler(event){
        this.props.searchOnTerm(this.state.term);
    }
    onChangeInputHandler(event){
        this.setState({
            term:event.target.value
        });
    }
}

export default SearchBar;