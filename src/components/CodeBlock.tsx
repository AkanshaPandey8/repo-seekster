
interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
}

const CodeBlock = ({ code, language = "typescript", fileName }: CodeBlockProps) => {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      {fileName && (
        <div className="px-4 py-2 bg-muted border-b border-border">
          <p className="text-sm text-muted-foreground font-mono">{fileName}</p>
        </div>
      )}
      <pre className="p-4 overflow-x-auto bg-muted/50">
        <code className="text-sm font-mono text-foreground">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
