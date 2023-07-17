import React from "react";
import bob from "../images/bob.jpg";
import awesome from "../images/awesome.jpg";
import castle from "../images/castle.jpg";
import solar from "../images/solar.jpg";
import prey from "../images/prey.jpg";
import orv from "../images/orv.jpg";
import Table from "../components/Table";
import Live from "./Live";
import About from "./About";

const Movies = () => {
  return (
    <section className="bg-black absolute min-w-full min-h-fit justify-evenly align-middle">
      <div className="object-center text-center min-w-full py-10">
        <h3 className="text-[#1ce783] text-sm pt-20 pb-3 ">
          INCLUDED IN ALL PLANS
        </h3>
        <h1 className="font-bold text-4xl pb-4">All The TV You Love</h1>
        <p>
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 min-w-max gap-6 justify-evenly  object-center p-10 pb-20 ">
        <img
          className="h-96 w-56 object-fill object-center scale-100 hover:scale-110 ease-in duration-300"
          src={prey}
        />
        <img
          className="h-96 w-56 object-fill object-center scale-100 hover:scale-110 ease-in duration-300"
          src={castle}
        />
        <img
          className="h-96 w-56 object-fill object-center scale-100 hover:scale-110 ease-in duration-300"
          src={bob}
        />
        <img
          className="h-96 w-56 object-fill object-center scale-100 hover:scale-110 ease-in duration-300"
          src={awesome}
        />
      </div>

      <div className="pt-10 object-center text-center w-full ">
        <h3 className="text-[#1ce783] text-sm pt-20 pb-6 font-bold">
          HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+
        </h3>
        <h1 className="text-white font-bold text-6xl pb-10">
          Live TV Makes It Better
        </h1>
        <p className="text-center text-lg font-medium">
          Make the switch from cable. Get 75+ top channels on Hulu + Live TV
          with your favorite
          <br /> live sports, news, and events - plus the entire Hulu streaming
          library. With Unlimited
          <br /> DVR, store Live TV recordings for up to nine months and
          fast-forward through your
          <br /> DVR content. Access endless entertainment with Disney+ and live
          sports with ESPN+.
        </p>
        <div className="p-6">
          <a className="text-white hover:text-white p-12 align-middle underline hover:cursor-pointer ">
            VIEW CHANNELS IN YOUR AREA →
          </a>
        </div>

        <div className="p-10 text-center w-full object-center flex justify-center">
          <svg
            className="relative pt-10 w-24 h-20 animate-ping"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <Live/>

        <br/>
        <br/>
        <h1 className=" font-serif text-3xl font-bold">SELECT PAYMENT PLAN</h1>
        <br />
        <p class="mb-3">
          No hidden fees, equipment rentals, or installation appointments.
          <span>Switch plans or cancel anytime.**</span>
        </p>

        <hr class="w-3/4 h-1 mx-auto p-5 m-5"></hr>

        
        <br/>
        <br/>
        <Table />
        <About/>
      </div>
    </section>
  );
};

export default Movies;
