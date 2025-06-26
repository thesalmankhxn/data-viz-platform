import { useProfile } from "@/hooks/use-profile";
import UserAvatar from "./user-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

/**
 * ProfileInfo component displays user profile information
 * Uses the profile store to show authenticated user details
 */
export function ProfileInfo() {
  const { profile, userName, userEmail, userPhoto, isAuthenticated } =
    useProfile();

  if (!isAuthenticated) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Please log in to view your profile.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <UserAvatar
            name={userName}
            imageUrl={userPhoto}
            className="h-16 w-16"
          />
          <div>
            <h3 className="text-lg font-semibold">{userName}</h3>
            <p className="text-sm text-muted-foreground">{userEmail}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">User ID:</span>
            <span className="text-sm text-muted-foreground">
              {profile?.uid}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Profile Photo:</span>
            <span className="text-sm text-muted-foreground">
              {userPhoto ? "Set" : "Not set"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Password Changed:</span>
            <span className="text-sm text-muted-foreground">
              {profile?.initialPasswordChangeAt ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
