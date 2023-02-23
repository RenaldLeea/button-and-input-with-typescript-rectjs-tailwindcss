import React, {useState} from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  const [nama, setNama] = useState('');
  const [universitas, setUniversitas] = useState('');

  const handleNamaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNama(event.target.value);
  }

  const handleUniversitasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUniversitas(event.target.value);
  }

  const handleButtonClick = () => {
    alert(`Halo, ${nama} dari Universitas ${universitas}!`);
  }

  return (
    <div className="mx-auto max-w-sm py-6 px-4 bg-white rounded-lg shadow-xl">
      <label className="block text-gray-700 font-bold mb-2">Nama:</label>
      <input type="text" value={nama} onChange={handleNamaChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <label className="block text-gray-700 font-bold mb-2 mt-4">Universitas:</label>
      <input type="text" value={universitas} onChange={handleUniversitasChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Kirim</button>
    </div>
  );
}

export default App;
