
import { Search } from "lucide-react";

const SearchHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12 space-y-4">
      <div className="flex items-center space-x-3">
        <Search className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">RepoSeek</h1>
      </div>
      <p className="text-lg text-muted-foreground">
        Search through GitHub repositories with AI-powered precision
      </p>
    </div>
  );
};

export default SearchHeader;
