export default function ErrorDetail() {
  return (
    <section className="bg-white dark:bg-neutral-800">
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
