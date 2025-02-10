
import CodeBlock from "./CodeBlock";

interface ResultsPanelProps {
  results: {
    content: string;
    filePath?: string;
    explanation?: string;
  }[];
}

const ResultsPanel = ({ results }: ResultsPanelProps) => {
  if (!results.length) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {results.map((result, index) => (
        <div key={index} className="space-y-4">
          {result.explanation && (
            <p className="text-muted-foreground">{result.explanation}</p>
          )}
          <CodeBlock
            code={result.content}
            fileName={result.filePath}
          />
        </div>
      ))}
    </div>
  );
};

export default ResultsPanel;
