import { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getColorFromName, getInitials } from "@/lib/helpers";
import { useProfileStore } from "@/stores/useProfileStore";

interface UserAvatarProps {
  name?: string;
  imageUrl?: string;
  className?: string;
  useProfileData?: boolean; // If true, will use profile data from store when props are not provided
}

function UserAvatar({
  name,
  imageUrl,
  className,
  useProfileData = false,
}: UserAvatarProps) {
  const { admin } = useProfileStore();

  // Use profile data from store if useProfileData is true and props are not provided
  const displayName = name || (useProfileData ? admin?.name : undefined);
  const displayImageUrl =
    imageUrl || (useProfileData ? admin?.profilePhoto : undefined);

  const initials = useMemo(
    () => getInitials(displayName || "User"),
    [displayName]
  );
  const bgColor = useMemo(
    () => getColorFromName(displayName || "User"),
    [displayName]
  );

  return (
    <Avatar className={className}>
      <AvatarImage src={displayImageUrl} alt={displayName || "User"} />
      <AvatarFallback
        className="text-white text-xs"
        style={{ backgroundColor: bgColor }}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
