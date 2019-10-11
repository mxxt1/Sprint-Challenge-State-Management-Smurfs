import React from 'react';
import {connect} from 'react-redux';
import SmurfForm from './SmurfForm';
import SmurfCard from './SmurfCard';

const SmurfList = (props) => {
    // console.log(props);
    return (
        <div>
            <div><SmurfForm /></div>
            {props.smurfs.map((smurf, index) => {
               return <SmurfCard key={index} smurf={smurf}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return{
        smurfs: state.main.smurfs
    };
};


export default connect(mapStateToProps)(SmurfList)
