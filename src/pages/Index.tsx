
import { useState } from "react";
import SearchHeader from "@/components/SearchHeader";
import SearchForm from "@/components/SearchForm";
import ResultsPanel from "@/components/ResultsPanel";
import LoadingState from "@/components/LoadingState";
import ErrorMessage from "@/components/ErrorMessage";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (repoUrl: string, query: string) => {
    setIsLoading(true);
    setError("");
    
    try {
      // Placeholder for API call
      // This will be replaced with actual API integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setResults([
        {
          content: '// Example search result\nfunction searchRepository() {\n  // Implementation coming soon\n}',
          filePath: 'example/path/file.ts',
          explanation: 'This is a placeholder result. API integration coming soon.',
        },
      ]);
    } catch (err) {
      setError("An error occurred while searching the repository. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <SearchHeader />
        <SearchForm onSearch={handleSearch} />
        
        {isLoading && <LoadingState />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && <ResultsPanel results={results} />}
      </div>
    </div>
  );
}

export default Index;
