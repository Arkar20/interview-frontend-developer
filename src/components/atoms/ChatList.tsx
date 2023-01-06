import Image from "next/image";

interface I_ChatListProps {
  text: string;
}

const ChatList = (props: I_ChatListProps) => {
  return (
    <li className="flex items-center space-x-3">
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
