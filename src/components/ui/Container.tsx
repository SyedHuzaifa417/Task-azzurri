// Reusable container component
export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container mx-auto px-4 max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
}