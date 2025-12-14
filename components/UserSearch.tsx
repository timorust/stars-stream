"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { useUserSearch } from "@/hooks/useUserSearch";
import { useUser } from "@clerk/nextjs";

function UserSearch({
  onSelectUser,
  placeholder = "Search users by name or email...",
  className,
}: {
  onSelectUser: (user: Doc<"users">) => void;
  placeholder?: string;
  className?: string;
}) {
  const { searchTerm, setSearchTerm, searchResults, isLoading } =
    useUserSearch();

  const { user } = useUser();

  // Filter out the current logged-in user from search result
  const filteredResults = searchResults.filter(
    (searchUser) => searchUser.userId !== user?.id
  );

  return <div>UserSearch</div>;
}

export default UserSearch;
