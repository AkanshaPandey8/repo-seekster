
import { useState } from "react";
import { Search } from "lucide-react";

interface SearchFormProps {
  onSearch: (repoUrl: string, query: string) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [repoUrl, setRepoUrl] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const validateGithubUrl = (url: string) => {
    const githubUrlPattern = /^https?:\/\/github\.com\/[\w-]+\/[\w-]+/;
    return githubUrlPattern.test(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateGithubUrl(repoUrl)) {
      setError("Please enter a valid GitHub repository URL");
      return;
    }

    if (!query.trim()) {
      setError("Please enter a search query");
      return;
    }

    onSearch(repoUrl, query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-4 p-6"
    >
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Enter GitHub repository URL"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
        />
      </div>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
        />
      </div>
      {error && (
        <p className="text-destructive text-sm mt-2">{error}</p>
      )}
      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        <Search className="w-5 h-5" />
        <span>Search Repository</span>
      </button>
    </form>
  );
};

export default SearchForm;
