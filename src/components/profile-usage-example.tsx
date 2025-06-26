import { useProfileStore } from "@/stores/useProfileStore";
import { useProfile } from "@/hooks/use-profile";

/**
 * Example component showing correct usage of useProfileStore
 */
export function ProfileUsageExample() {
  // Method 1: Direct store access
  const { admin } = useProfileStore();

  // Method 2: Using the custom hook (recommended)
  const { userName, userEmail, userPhoto, isAuthenticated, userId } =
    useProfile();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Profile Store Usage Examples</h2>

      {/* Method 1: Direct store access */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-2">Method 1: Direct Store Access</h3>
        <div className="text-sm space-y-1">
          <p>
            <strong>Name:</strong> {admin?.name || "Not set"}
          </p>
          <p>
            <strong>Email:</strong> {admin?.email || "Not set"}
          </p>
          <p>
            <strong>User ID:</strong> {admin?.uid || "Not set"}
          </p>
          <p>
            <strong>Photo:</strong> {admin?.profilePhoto ? "Set" : "Not set"}
          </p>
        </div>
      </div>

      {/* Method 2: Custom hook (recommended) */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-2">
          Method 2: Custom Hook (Recommended)
        </h3>
        <div className="text-sm space-y-1">
          <p>
            <strong>Name:</strong> {userName}
          </p>
          <p>
            <strong>Email:</strong> {userEmail}
          </p>
          <p>
            <strong>User ID:</strong> {userId || "Not set"}
          </p>
          <p>
            <strong>Photo:</strong> {userPhoto ? "Set" : "Not set"}
          </p>
          <p>
            <strong>Authenticated:</strong> {isAuthenticated ? "Yes" : "No"}
          </p>
        </div>
      </div>

      {/* Available actions */}
      <div className="p-4 border rounded-lg">
        <h3 className="font-medium mb-2">Available Actions</h3>
        <div className="text-sm space-y-1">
          <p>
            <code>setProfile(adminData)</code> - Set profile data manually
          </p>
          <p>
            <code>setProfileFromFirebaseUser(user)</code> - Set from Firebase
            user
          </p>
          <p>
            <code>clearProfile()</code> - Clear profile data
          </p>
        </div>
      </div>
    </div>
  );
}
