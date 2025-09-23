import "./App.css";
import DarkButton from "./components/DarkButton";

function App() {
  return (
    <>
      <main className="space-y-[2rem] desktop:w-[50%] w-[90%]">
        <section className="flex mt-8 justify-between">
          <h1 className="textPreset1 dark:text-white text-neutral-900">
            devfinder
          </h1>
          <DarkButton />
        </section>
        <section className="flex dark:bg-neutral-800 dark:text-white focus-within:ring-2 focus-within:ring-blue-500 dark:shadow-none shadow-[0_16px_30px_-10px_rgba(70,96,187,.19)] rounded-[1rem] w-full bg-white p-[8px_12px] ">
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
          <button className="cursor-pointer hover:bg-blue-300  text-white p-[8px_16px] rounded-[10px] bg-blue-500 dark:focus:ring-offset-neutral-900 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:outline-none textPreset5">
            Search
          </button>
        </section>
        <section className="bg-white dark:bg-neutral-800 relative shadow-[0_16px_30px_-10px_rgba(70,96,187,.19)] dark:shadow-none  rounded-[15px] mb-8 tablet:p-[3rem_2rem] p-[2rem_1.5rem] tablet:grid tablet:grid-cols-[20%_75%] tablet:gap-x-[2rem]">
          <img
            id="photo-profile"
            className="h-[70px] hidden tablet:full tablet:scale-200 tablet:flex tablet:justify-self-center tablet:self-center rounded-full w-[70px]"
            src="src/assets/image.png"
            alt=""
          />
          <div className="flex relative tablet:h-fit w-full gap-[20px]">
            <img
              id="photo-profile"
              className="h-[70px] tablet:hidden rounded-full w-[70px]"
              src="src/assets/image.png"
              alt=""
            />
            <div className="">
              <h1
                className="textPreset1 tablet:!text-[1.9375rem] dark:text-white text-neutral-700"
                id="name"
              >
                The asdjsid
              </h1>
              <p
                className="text-blue-500 dark:text-blue-300 textPreset4"
                id="username"
              >
                user
              </p>
              <p
                className="tablet:absolute dark:text-white tablet:top-0 tablet:right-0 text-neutral-500 textPreset6"
                id="date"
              >
                date
              </p>
              <p
                className="text-neutral-500 my-[1.5rem] dark:text-white hidden tablet:block  opacity-75 h-fit textPreset6"
                id="bio"
              >
                bio
              </p>
            </div>
          </div>
          <p
            className="text-neutral-500 my-6 tablet:hidden opacity-75 h-fit textPreset6"
            id="bio"
          >
            cccfdijosgjadpsfnpdsgsngpondsngp
          </p>
          <div className="flex  tablet:grid tablet:col-start-2 flex-col gap-[1.5rem]">
            <div className="flex flex-col dark:bg-neutral-900  tablet:flex-row rounded-[10px] bg-neutral-100 gap-[1rem] p-[1rem_20px] tablet:p-[1rem_2rem] justify-between">
              <p
                className="text-neutral-500 dark:text-white  flex flex-col gap-[8px] textPreset7"
                id="repos"
              >
                Repos
                <br />
                <span className="text-neutral-700 dark:text-white  textPreset2">
                  12
                </span>
              </p>
              <p
                className="text-neutral-500 dark:text-white  flex flex-col gap-[8px] textPreset7"
                id="followers"
              >
                Followers
                <br />
                <span className="text-neutral-700 dark:text-white  textPreset2">
                  12
                </span>
              </p>
              <p
                className="text-neutral-500 dark:text-white  flex flex-col gap-[8px] textPreset7"
                id="following"
              >
                Following
                <br />
                <span className="text-neutral-700 dark:text-white  textPreset2">
                  12
                </span>
              </p>
            </div>
            <div className="flex textPreset6 text-neutral-500 dark:text-white flex-col gap-[1rem] tablet:grid tablet:grid-cols-2 tablet:grid-rows-2">
              <div className="flex gap-[1rem]">
                <img src="src/assets/icon-location.svg" alt="location" />
                <p id="location">asdasdasd</p>
              </div>
              <div className="flex gap-[1rem]">
                <img src="src/assets/icon-twitter.svg" alt="twitter" />
                <p id="twitter">asdasdasd</p>
              </div>
              <div className="flex focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-offset-neutral-800 focus-within:ring-offset-4 focus-within:rounded-xl gap-[1rem]">
                <img src="src/assets/icon-website.svg" alt="website" />
                <a
                  className="hover:underline focus:outline-none"
                  href="#"
                  id="website"
                >
                  asdasdasd
                </a>
              </div>
              <div className="flex gap-[1rem]">
                <img src="src/assets/icon-company.svg" alt="company" />
                <p id="company">asdasdasd</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
