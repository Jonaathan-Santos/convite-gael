import { useParams } from 'react-router-dom'
import Fundo from './components/Fundo'


interface CapaProps {
  onOpem: (arg: boolean) => void
}



function Capa({ onOpem }: CapaProps) {


  const names = useParams()

  return (
    <div className='w-full bg-azul h-screen p-4 text-zinc-800 flex flex-col items-center'>

      <Fundo/>

      <span
        className='text-2xl text-white mt-6 mb-6'
      >
        De:
      </span>
      <span
        className='text-8xl self-center text-zinc-300 font-strok mb-6'
      >
        GaeL
      </span>
      

      <span
      className='text-2xl text-white mb-4'
      >
        Para:</span>
        <span
        className='text-8xl self-center text-zinc-300 font-strok mb-6'
      >
        Você
      </span>

      <div
        onClick={() => onOpem(true)}
        className="rounded-full text-lavand200 w-[60px] h-[60px] bg-marinho flex justify-center items-center mt-3"
      >
        abrir
      </div>
    </div>
  )
}

export default Capa