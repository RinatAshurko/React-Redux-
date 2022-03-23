import { connect } from "react-redux";
import * as actions from '../actions';

const Counter = ({rnd, dec, inc, counter}) => {
    return(
        <>
        <div className="counter">{counter}</div>
        <button onClick={inc} className="btn inc">+</button>
        <button onClick={dec} className="btn dec">-</button>
        <button onClick={rnd} 
        className="btn rnd">RND</button>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}


export default connect(mapStateToProps,actions)(Counter);