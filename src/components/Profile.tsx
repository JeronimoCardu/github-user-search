import { useEffect, useState } from "react";
import DataProfile from "./dataProfile";
import ErrorDetail from "./ErrorDetail";

type Props = {
  userSearched: string;
};

type DataUserProps = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string | null;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  company: string | null;
  twitter_username: string | null;
  blog: string;
};

export default function Profile({ userSearched }: Props) {
  const [userData, setUserData] = useState<DataUserProps>();
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    async function findUser() {
      try {
        const data = await fetch(
          `https://api.github.com/users/${userSearched}`
        );
        const dataJSON = await data.json();
        if (!data.ok) {
          setNotFound(true);
        } else {
          setNotFound(false);
          setUserData(dataJSON);
        }
      } catch (err) {
        console.log("Hubo un error al buscar al usuario", err);
      }
    }
    findUser();
  }, [userSearched]);

  return notFound ? (
    <ErrorDetail />
  ) : (
    <section className="bg-white dark:bg-neutral-800 relative shadow-[0_16px_30px_-10px_rgba(70,96,187,.19)] dark:shadow-none  rounded-[15px] mb-8 tablet:p-[3rem_2rem] p-[2rem_1.5rem] tablet:grid tablet:grid-cols-[20%_75%] tablet:gap-x-[2rem]">
      <img
        id="photo-profile"
        className="h-[70px] hidden tablet:full tablet:scale-200 tablet:flex tablet:justify-self-center tablet:self-center rounded-full w-[70px]"
        src={
          userSearched == "octakit"
            ? "src/assets/image.png"
            : userData?.avatar_url
        }
        alt=""
      />
      <div className="flex relative tablet:h-fit w-full gap-[20px]">
        <img
          id="photo-profile"
          className="h-[70px] tablet:hidden rounded-full w-[70px]"
          src={
          userSearched == "octakit"
            ? "src/assets/image.png"
            : userData?.avatar_url
        }
          alt=""
        />
        <div className="">
          <h1
            className="textPreset1 tablet:!text-[1.9375rem] dark:text-white text-neutral-700"
            id="name"
          >
            {userData?.name ?? "Octakit"}
          </h1>
          <p
            className="text-blue-500 dark:text-blue-300 textPreset4"
            id="username"
          >
            @{userData?.login ?? "octakit"}
          </p>
          <p
            className="tablet:absolute dark:text-white tablet:-top-8 tablet:right-0  text-neutral-500 textPreset6"
            id="date"
          >
            {userData?.created_at ?? "Not available"}
          </p>
          <p
            className="text-neutral-500 my-[1.5rem] dark:text-white hidden tablet:block  opacity-75 h-fit textPreset6"
            id="bio"
          >
            {userData?.bio ?? "This profile has no bio"}
          </p>
        </div>
      </div>
      <p
        className="text-neutral-500 my-6 tablet:hidden opacity-75 h-fit textPreset6"
        id="bio"
      >
        {userData?.bio ?? "---"}
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
              {userData?.public_repos ?? 0}
            </span>
          </p>
          <p
            className="text-neutral-500 dark:text-white  flex flex-col gap-[8px] textPreset7"
            id="followers"
          >
            Followers
            <br />
            <span className="text-neutral-700 dark:text-white  textPreset2">
              {userData?.followers ?? 0}
            </span>
          </p>
          <p
            className="text-neutral-500 dark:text-white  flex flex-col gap-[8px] textPreset7"
            id="following"
          >
            Following
            <br />
            <span className="text-neutral-700 dark:text-white  textPreset2">
              {userData?.following ?? 0}
            </span>
          </p>
        </div>
        <div className="flex textPreset6 text-neutral-500 dark:text-white flex-col gap-[1rem] tablet:gap-x-12 tablet:grid tablet:grid-cols-2 tablet:grid-rows-2">
          <DataProfile icon={"location"} data={userData?.location} />
          <DataProfile icon={"twitter"} data={userData?.twitter_username} />
          <div className="flex w-fit items-center focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-offset-neutral-800 focus-within:ring-offset-4 focus-within:rounded-xl gap-[1rem]">
            <img
              className="max-w-10 max-h-8"
              src="src/assets/icon-website.svg"
              alt="website"
            />
            <a
              target="_blank"
              className="hover:underline focus:outline-none"
              href={userData?.blog}
              id="website"
            >
              {userData?.blog ? userData.blog : "Not Available"}
            </a>
          </div>
          <DataProfile icon={"company"} data={userData?.company} />
        </div>
      </div>
    </section>
  );
}
