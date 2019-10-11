import React, {useState} from 'react'
import {connect} from 'react-redux';
import {postSmurfs} from '../actions';

const SmurfForm = (props) => {
    // console.log(props)
     const [newSmurf, setNewSmurf] = useState({name:'', age:'',height:''});
    //  const [name, setName] = useState('');
    //  const [age, setAge] = useState('');
    //  const [height, setHeight] = useState('');
    console.log(newSmurf);

    // const handleName = event => {
    //     setName(event.target.value)
    // }
    // const handleAge = event => {
    //     setAge(event.target.value)
    // }
    // const handleHeight = event => {
    //     setHeight(event.target.value)
    // }

    const handleChange = event => {
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
    }

    const submitHandler = event => {
        // event.preventDefault();
        // setNewSmurf({
        //     name: name,
        //     age: age,
        //     height: height,
        // })
        // props.postSmurfs(name,age,height);
        props.postSmurfs(newSmurf);
    }




    return (
        <div>
            <h1>Add a Smurf</h1>
            <form>
                <input type='text' placeholder='Smurf Name' name='name' onChange={handleChange} />
                <input type='text' placeholder='Smurf Age' name='age' onChange={handleChange} />
                <input type='text' placeholder='Smurf Height' name='height' onChange={handleChange} />
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    // console.log(state);
    return {
        state:state
    }

}

export default connect(mapStateToProps,{postSmurfs})(SmurfForm)


// <input type='text' placeholder='Smurf Name' name='name' value={name} onChange={handleName} />
// <input type='text' placeholder='Smurf Age' name='age' value={age} onChange={handleAge} />
// <input type='text' placeholder='Smurf Height' name='height' value={height} onChange={handleHeight} />
// <button onClick={submitHandler}>Submit</button>