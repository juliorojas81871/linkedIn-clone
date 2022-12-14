import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const HeaderLink = ({ Icon, text, avatar, feed, hidden, active }) => {
  const { data: session } = useSession();

  return (
    <div
      className={`${
        hidden && "hidden md:inline-flex"
      } whitespace-nowrap flex flex-col cursor-pointer justify-center items-center ${
        feed
          ? "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white lg:-mb-1.5 space-y-1"
          : "text-gray-500 hover:text-gray-700"
      }  ${active && "!text-black dark:!text-white"}`}
    >
      {avatar ? (
        <div>
          <ChevronDownIcon className="lg:hidden absolute bottom-0" />
          <Icon
            className="!h-7 !w-7 lg:!-mb-1"
            imgProps={{ referrerPolicy: "no-referrer" }}
            src={session?.user?.image}
            onClick={signOut}
          />
        </div>
      ) : (
        <Icon />
      )}
      <div className="hidden lg:flex ">
        <h4 className={`text-sm ${feed && "justify-center w-full mx-auto"}`}>
          {text}
        </h4>
        {avatar && <ChevronDownIcon />}
      </div>

      {active && (
        <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
      )}
    </div>
  );
};

export default HeaderLink;
