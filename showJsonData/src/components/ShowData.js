import React from 'react';
import { connect } from 'react-redux';

class ShowData extends React.Component{    
    renderList(){
        return this.props.datas.map((data,k) => {
            //console.log(data);
            return(                         
                <div key={k}> {Object.keys(data)} </div>
            );            
        });
    } 
    
    render(){ 
        //console.log(this.props);  
        //return <div> Show Data </div>;           
        return <div> { this.renderList() } </div>        
    }
};

const mapStateToProps = (state) => {
    //console.log(state);
    return {datas:state.datas};
    
}

export default connect(mapStateToProps)(ShowData);