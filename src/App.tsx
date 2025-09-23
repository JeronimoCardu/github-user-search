import { useState } from "react";
import "./App.css";
import DarkButton from "./components/DarkButton";
import Profile from "./components/Profile";

function App() {
  const [userInput, setUserInput] = useState("octakit");
  return (
    <>
      <main className="space-y-[2rem] desktop:w-[50%] w-[90%]">
        <section className="flex mt-8 justify-between">
          <h1 className="textPreset1 dark:text-white text-neutral-900">
            devfinder
          </h1>
          <DarkButton />
        </section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const userSearched = (
              e.currentTarget.elements[0] as HTMLInputElement
            ).value;
            setUserInput(userSearched);
          }}
          className="flex dark:bg-neutral-800 dark:text-white focus-within:ring-2 focus-within:ring-blue-500 dark:shadow-none shadow-[0_16px_30px_-10px_rgba(70,96,187,.19)] rounded-[1rem] w-full bg-white p-[8px_12px] "
        >
          <div className="flex w-full tablet:gap-4  ">
            <img
              className="h-6 w-6 self-center justify-self-center"
              src="src/assets/icon-search.svg"
              alt="search"
            />
            <input
              className="textPreset3MOBILE dark:text-white tablet:!text-[1.125rem] outline-0 text-neutral-500 w-full "
              type="text"
              placeholder="Search GitHub username..."
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer hover:bg-blue-300  text-white p-[8px_16px] rounded-[10px] bg-blue-500 dark:focus:ring-offset-neutral-900 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:outline-none textPreset5"
          >
            Search
          </button>
        </form>
        <Profile userSearched={userInput} />
      </main>
    </>
  );
}

export default App;
