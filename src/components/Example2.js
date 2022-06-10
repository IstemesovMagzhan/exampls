function Example2({act, state }) {
  return ( 
    <>
    <input type="text" onInput={act} value={state} />
    
    </>
   );
}

export default Example2;