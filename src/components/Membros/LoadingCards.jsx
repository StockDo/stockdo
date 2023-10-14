import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingCards() {
  return (
    <>
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div className="flex flex-col items-center gap-5" key={i}>
            <SkeletonTheme
              className="flex flex-col"
              baseColor="#efefef"
              highlightColor="#d1d1d1">
              <Skeleton circle width={150} height={150} />
            </SkeletonTheme>
            <SkeletonTheme
              className="flex flex-col"
              baseColor="#efefef"
              highlightColor="#d1d1d1">
              <Skeleton count={3} width={200} />
            </SkeletonTheme>
            <SkeletonTheme
              className="flex flex-col"
              baseColor="#efefef"
              highlightColor="#d1d1d1">
              <Skeleton height={40} width={150} />
            </SkeletonTheme>
          </div>
        ))}
    </>
  );
}
