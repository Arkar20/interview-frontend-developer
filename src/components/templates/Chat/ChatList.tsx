import { SingleChat } from "src/components/atoms";
import { useAppSelector } from "hooks/redux";
import { selectChats } from "rstore/modules";

export function ChatList() {
  const chatsState = useAppSelector(selectChats);

  return (
    <ul className="m-3 min-h-screen space-y-3 ">
      {chatsState.chats &&
        chatsState.chats.map((message, index) => {
          return (
            <SingleChat
              key={index}
              text={message.text}
              isOwner={message.isOwner}
            />
          );
        })}
    </ul>
  );
}
