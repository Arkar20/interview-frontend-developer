export interface I_chatSingle {
  text: string;
  isOwner: boolean;
  uid: string;
}

export interface I_chats {
  chats: I_chatSingle[];
  loading: boolean;
}
