import { Loading } from "@src/components/loading";

export function CodeDetailsSkeleton() {
  return (
    <div className="flex flex-1">
      <Loading className="m-auto size-24" />
    </div>
  );
}
