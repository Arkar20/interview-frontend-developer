import Image from "next/image";

interface I_ChatListProps {
  text: string;
  isOwner: boolean;
}

const ChatList = (props: I_ChatListProps) => {
  return (
    <li className={`w-full flex ${props.isOwner && "justify-end"} `}>
      <div
        className={`flex items-center space-x-3 ${
          props.isOwner && "flex-row-reverse space-x-reverse"
        }`}
      >
        <Image
          src="https://i.pravatar.cc/300"
          width={50}
          height={50}
          alt="profile"
          className="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        />
        <p>{props.text}</p>
      </div>
    </li>
  );
};

export { ChatList };
