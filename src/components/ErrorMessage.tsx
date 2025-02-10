
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
      <p className="text-destructive text-center">{message}</p>
    </div>
  );
};

export default ErrorMessage;
