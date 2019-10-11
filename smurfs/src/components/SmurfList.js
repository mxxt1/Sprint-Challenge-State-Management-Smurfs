import React from 'react';
import {connect} from 'react-redux';
import SmurfForm from './SmurfForm';
import SmurfCard from './SmurfCard';
import styled from 'styled-components';

const ListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items: center;

`;

const SmurfList = (props) => {
    // console.log(props);
    return (
        <ListContainer>
            <div><SmurfForm /></div>
            {props.smurfs.map((smurf, index) => {
               return <SmurfCard key={index} smurf={smurf}/>
            })}
        </ListContainer>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return{
        smurfs: state.main.smurfs
    };
};


export default connect(mapStateToProps)(SmurfList)
