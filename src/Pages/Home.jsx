import "../css/semua.css";
import Card from "../Components/Card";
import Profile from "../assets/Profile.jpg";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <div className="h-screen p">
        <Navbar></Navbar>
        <div
          id="home"
          className="landing w-full h-full flex items-center justify-center"
        >
          <div className="bagianKiri w-1/2">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 hover:scale-105 transition">
              Welcome To My{" "}
              <span className="text-slate-800 animate-[pulse_3s_ease-in-out_infinite]">
                Website
              </span>
            </h1>
            <h3 className="text-md lg:text-lg text-slate-100 font-light mt-3 hover:scale-105 transition">
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Cumque, est.
            </h3>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="about md:h-screen md:flex p-8 w-[100%] items-center justify-center bg-slate-50"
      >
        <div className="bagianKiri md:w-[40vw] flex justify-center">
          <img
            src={Profile}
            className="rounded-full w-72 lg:min-w-80"
            alt="foto"
          />
        </div>
        <div className="bagianKanan md:w-[50vw]">
          <div className="wrapper text-center md:text-left p-5">
            <h1 className="md:text-5xl text-4xl font-bold">About Me</h1>
            <h3 className="text-2xl font-semibold mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              ducimus rerum dicta ut nemo unde?
            </h3>
            <p className="text-sm font-light text-slate-700 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo blanditiis esse pariatur quibusdam nulla illum qui
              voluptate dolorem ullam optio. Amet fugiat nihil aspernatur
              recusandae. Quisquam, sapiente soluta! Et, fugiat asperiores iusto
              temporibus tempore dolore similique ex mollitia voluptates, quis
              ut, vitae quae doloribus minima consequuntur odio fuga veniam
              maiores!
            </p>
          </div>
        </div>
      </div>

      <div
        id="project"
        className="h-screen border-slate-600 bg-white p-10 flex items-center justify-center"
      >
        <div className="wrapper w-[90vw]">
          <h1 className="font-bold text-5xl text-center mb-6 lg:mb-6">
            Project Yang Sudah Dikerjakan
          </h1>
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

      <form
        action=""
        className="flex flex-col gap-4 justify-center items-center"
        id="contact"
      >
        <h1 className="font-bold text-3xl">Contact Me</h1>
        <div className="w-full flex flex-col items-center">
          <p className="text-black text-start">Test</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-success w-full max-w-lg"
          />
        </div>

        <button
          className="btn bg-blue-400 hover:bg-blue-600 max-w-sm w-20"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Home;
