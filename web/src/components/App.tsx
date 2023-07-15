import './App.css';
import {debugData} from "../utils/debugData";
import { Laptop } from './Laptop';
//import {fetchNui} from "../utils/fetchNui";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

export const App = () => {

  return (
    <div className='nui-wrapper'>
      <Laptop />
    </div>
  );
}
