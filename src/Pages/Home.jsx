import "../css/semua.css"
import Card from "../Components/Card"
import Profile from "../assets/Profile.jpg"
function Home() {
  return (
    <>
    <div className="h-screen p">
        <div className="bg-slate-100 text-slate-800 px-6 py-4 flex justify-between items-center fixed w-full z-10">
            <h1 className="font-bold text-4xl">My Website</h1>
            <nav className="list-none flex gap-3">
                <li className="hover:bg-slate-800 px-2 py-1 rounded hover:text-slate-100 transition duration-300"><a href="#home">Home</a></li>
                <li className="hover:bg-slate-800 px-2 py-1 rounded hover:text-slate-100 transition duration-300"><a href="#about">About</a></li>
                <li className="hover:bg-slate-800 px-2 py-1 rounded hover:text-slate-100 transition duration-300"><a href="#project">Project</a></li>
                <li className="hover:bg-slate-800 px-2 py-1 rounded hover:text-slate-100 transition duration-300"><a href="#contact">Contact</a></li>
            </nav>
        </div>


        <div id="home" className="landing w-full h-full flex items-center justify-center">
            <div className="bagianKiri w-1/2">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 hover:scale-105 transition">Welcome To My <span className="text-slate-800 animate-[pulse_3s_ease-in-out_infinite]">Website</span></h1>
                <h3 className="text-md lg:text-lg text-slate-100 font-light mt-3 hover:scale-105 transition">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, est.</h3>
            </div>
        </div>
    </div>




    <div id="about" className="about md:h-screen md:flex p-8 w-[100%] items-center justify-center bg-slate-50">
        <div className="bagianKiri md:w-[40vw] flex justify-center">
            <img src={Profile} className="rounded-full w-72 lg:min-w-80" alt="foto"/>
        </div>
        <div className="bagianKanan md:w-[50vw]">
            <div className="wrapper text-center md:text-left p-5">
                <h1 className="md:text-5xl text-4xl font-bold">About Me</h1>
                <h3 className="text-2xl font-semibold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus rerum dicta ut nemo unde?</h3>
                <p className="text-sm font-light text-slate-700 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis esse pariatur quibusdam nulla illum qui voluptate dolorem ullam optio. Amet fugiat nihil aspernatur recusandae. Quisquam, sapiente soluta! Et, fugiat asperiores iusto temporibus tempore dolore similique ex mollitia voluptates, quis ut, vitae quae doloribus minima consequuntur odio fuga veniam maiores!</p>
            </div>
        </div>
    </div>

    <div id="project" className="h-screen border-slate-600 bg-white p-10 flex items-center justify-center">
        <div className="wrapper w-[90vw]">
            <h1 className="font-bold text-5xl text-center mb-6 lg:mb-6">Project Yang Sudah Dikerjakan</h1>
            <div className="wrapper flex justify-center">
                <div className="wrapper1 flex gap-6 overflow-x-auto w-full scroll-hide shadow-lg p-5">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    </div>

    <div id="contact" className="contact h-screen bg-slate-50 flex justify-center items-center">
        <div className="w-full max-w-md">
            <h1 className="hover:text-slate-950 hover:scale-110 transition duration-300 text-slate-800 font-bold text-6xl text-center bg-transparent">Contact</h1>
            <div className="input mb-5">
                <span className="font-semibold text-xl:">Nama</span>
                <input type="text" className="shadow-md mt-1 w-full rounded-md border-2 border-slate-800 px-3 py-1.5 hover:scale-x-105 focus:border-sky-500 focus:scale-x-105 transition duration-300"/>
            </div>
            <div className="input mb-5">
                <span className="font-semibold text-xl:">Email</span>
                <input type="text" className="shadow-md mt-1 w-full rounded-md border-2 border-slate-800 px-3 py-1.5 hover:scale-x-105 focus:border-sky-500 focus:scale-x-105 transition duration-300"/>
            </div>
            <div className="input mb-5">
                <span className="font-semibold text-xl:">Saran</span>
                <textarea type="text" className="shadow-md mt-1 h-40 w-full rounded-md border-2 border-slate-800 px-3 py-1.5 hover:scale-x-105 focus:border-sky-500 focus:scale-x-105 transition duration-300"/>
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded hover:scale-110 transition duration-300 w-2/5">Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home