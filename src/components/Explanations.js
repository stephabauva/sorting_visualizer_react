import store from '../store'

export default function Explanations(props) {
    function maxSlowDown() {
        store.dispatch({
          type: 'SET_SORT_SPEED',
          payload: 1000
        });
      }
return(
    <div>
    <pre>1. Use the 1st slider on the far left to generate between 1 and 300 bars</pre>
    <pre>2. (Optional) Use the 2st slider to alter the sorting speed</pre>
    <pre>3. Choose a sorting algorithm and enjoy the ride!</pre>
    <pre>4. Repeat from step 1. and have fun 🙂</pre>
    <pre>Bonus: if you want it REALLY slow, click right here <button onClick={() => maxSlowDown()}>Max slow down (1s)</button></pre>
    
    </div>
)}