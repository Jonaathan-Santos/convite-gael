
function Fundo() {
  return (
    <div
      className="w-full h-screen absolute top-0 -z-0"
    >
      <img
        src="./bolosMarron.png"
        alt=""
        className="w-[25%] absolute right-2 top-4 animate-pulse-slow"
      />
      <img
        src="./bolosAzul.png"
        alt=""
        className="w-[25%] absolute top-[200px] animate-pulse-slow"

      />
      <img
        src="./bolosAmarelo.png"
        alt=""
        className="w-[30%] absolute right-2 top-[500px] animate-pulse-slow2"

      />
      <img
        src="./bolosLilas.png"
        alt=""
        className="w-[25%] absolute left-2 top-[550px] animate-pulse-slow2"

      />

      <div
        className="w-full h-[200px] absolute bottom-0 rounded-tr-lg"
      >
        <img
          src="./bolos.png"
          alt=""
          className="w-[80%] absolute"

        />

      </div>

    </div>

  )
}

export default Fundo