export default function ErrorDetail() {
  return (
    <section className="bg-white text-center p-[3rem] rounded-[1rem] space-y-[1rem] dark:bg-neutral-800 shadow-[0_16px_30px_-10px_rgba(70,96,187,.19)] ">
      <h1 className="textPreset2 text-neutral-700 dark:text-white">
        No results found!
      </h1>
      <p className="textPreset6 text-neutral-300 dark:text-neutral-200">
        We couldn’t find any GitHub users matching your search. Please
        double-check the username and try again.
      </p>
    </section>
  );
}
