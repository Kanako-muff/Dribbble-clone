"use client";

import { useRouter } from "next/navigation";

import Button from "./Button";

type Props = {
  startCursor: string;
  endCursor: string;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

const LoadMore = ({
  startCursor,
  endCursor,
  hasPreviousPage,
  hasNextPage,
}: Props) => {
  const router = useRouter();


  // const handleNavigation = (type: string) => {
  //   const currentParams = new URLSearchParams(window.location.search);

  //   if (type === "prev" && hasPreviousPage) {
  //     currentParams.delete("endcursor");
  //     currentParams.set("startcursor", startCursor);
  //   } else if (type === "next" && hasNextPage) {
  //     currentParams.delete("startcursor");
  //     currentParams.set("endcursor", endCursor);
  //   }
  const handleNavigation = (type: string) => {
    const currentParams = new URLSearchParams(window.location.search);

    if (type === "prev" && hasPreviousPage) {
      if (startCursor) {
        currentParams.set("startcursor", startCursor);
      } else {
        currentParams.delete("startcursor");
      }
      currentParams.delete("endcursor");
    } else if (type === "next" && hasNextPage) {
      if (endCursor) {
        currentParams.set("endcursor", endCursor);
      } else {
        currentParams.delete("endcursor");
      }
      currentParams.delete("startcursor");
    }

    const newSearchParams = currentParams.toString();
    const newPathname = `${window.location.pathname}?${newSearchParams}`;

    router.push(newPathname);
  };

  return (
    <div className="w-full flexCenter gap-5 mt-10">
      {hasPreviousPage && (
        <Button
          title="First Page"
          handleClick={() => handleNavigation("first")}
          bgColor="bg-[#53FFFD]"
          textColor="text-black"
        />
      )}
      {hasNextPage && (
        <Button
          title="Next Page"
          handleClick={() => handleNavigation("next")}
          bgColor="bg-[#53FFFD]"
          textColor="text-black"
        />
      )}
    </div>
  );
};

export default LoadMore;
