import Image from "next/image";

interface I_ChatListProps {
  text: string;
  isOwner: boolean;
}

const ChatList = (props: I_ChatListProps) => {
  const chatPosition = props.isOwner && "justify-end flex-row-reverse";

  return (
    <li className={`w-ful flex items-center space-x-3 ${chatPosition} `}>
      <Image
        src="https://i.pravatar.cc/300"
        width={50}
        height={50}
        alt="profile"
        className="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
      />

      <p>{props.text}</p>
    </li>
  );
};

export { ChatList };
