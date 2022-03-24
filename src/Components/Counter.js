import { connect } from "react-redux";
import  {inc, dec, rnd} from '../actions';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return(
        <>
        <div className="counter">{counter}</div>
        <button onClick={() => dispatch(inc())} className="btn inc">+</button>
        <button onClick={() => dispatch(dec())} className="btn dec">-</button>
        <button onClick={() => dispatch(rnd())} 
        className="btn rnd">RND</button>
        </>

    )
}

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }


// export default connect(mapStateToProps,actions)(Counter);
export default Counter;