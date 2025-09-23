type Props = {
  icon: string;
  data: string | null | undefined;
};
export default function DataProfile({ icon, data }: Props) {
  return (
    <div className="flex items-center gap-[1rem]">
      <img
        className="max-w-10 max-h-8"
        src={`src/assets/icon-${icon}.svg`}
        alt="company"
      />
      <p className="text-neutral-500 dark:text-neutral-100" id="company">
        {data ?? "Not Available"}
      </p>
    </div>
  );
}
