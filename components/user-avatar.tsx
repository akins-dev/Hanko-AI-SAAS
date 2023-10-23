"use client";

import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar";

const UserAvatar = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="user avatar" />
        <AvatarFallback>X</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default UserAvatar