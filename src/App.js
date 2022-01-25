import './App.css';

function App() {

  return (
    <>
    

      <div className={'border p-4 bg-gray-400'}>
        <h1 className={'text-center text-xl'}>QUESTION APP</h1>
      </div>

      <div className={'w-full flex'}>
          <div className={'w-1/4 border bg-gray-600'}>
              <ul>
                <li className={'p-4 border'}>
                  <h1 className={'text-xl uppercase tracking-widest'}>Category 1</h1>
                </li>
                <li className={'p-4 border'}>
                  <h1 className={'text-xl uppercase'}>Category 2</h1>
                </li>
                <li className={'p-4 border'}>
                  <h1 className={'text-xl uppercase'}>Category 3</h1>
                </li>
                <li className={'p-4 border'}>
                  <h1 className={'text-xl uppercase'}>Category 4</h1>
                </li>
                <li className={'p-4 border'}>
                  <h1 className={'text-xl uppercase'}>Category 5</h1>
                </li>
                
              </ul>
          </div>
          <div className={'w-3/4 border bg-gray-800'}>


          </div>
        </div>


      
    
    
    </>
    
  );
}

export default App;
