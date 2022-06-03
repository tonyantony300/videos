import React from 'react';


class SearchBar extends React.Component{

    state={ term:''};

    onInputChange = event =>{

     this.setState({term: event.target.value})

    };

    onEnterSubmit=event=>{
      
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    };

render(){
    return (
     <div className='search-bar ui segment'> 
        <form onSubmit={this.onEnterSubmit} className='ui form'>
            <div className='field'>
                <label>
                    Video Search
                </label>
                <input
                 type='text' 
                 placeholder='type something!'
                 value={this.state.term}
                 onChange={this.onInputChange}
                 /> 
               
            </div>

            
        </form>

     </div> 
    );
}


}

export default SearchBar;