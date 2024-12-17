function Card() {
  return (
    <div className="inline-block">        
    <div className="card shadow-md w-72 p-5 lg:w-96 bg-white border-slate-700 border-2 hover:bg-slate-800 hover:text-slate-100 hover:border-slate-100 hover:ring-2 hover:ring-slate-100 group rounded-md transition duration-300">
        <h1 className='font-bold text-2xl'>Ini judul Project</h1>
        <h3 className='font-semibold text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nobis.</h3>
        <p className='text-slate-700 font-light text-sm mt-2 group-hover:text-slate-100 duration-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum voluptatibus, illum nemo soluta optio rem corrupti. Omnis quasi fuga soluta corporis repellendus ipsa cumque neque inventore laboriosam id rem repellat, enim aliquid hic praesentium. Voluptate, doloremque nemo? Quasi, aspernatur!</p>
    </div>
    </div>
  )
}

export default Card