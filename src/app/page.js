import Home from './Components/Home/Home';
import Head from 'next/head';
import './utils/fontawesome';

export default function App() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/IMG_0562.jpg"/>
        <title>Max Mackie</title>
      </Head>
      <Home/>
    </div>
  )
}
