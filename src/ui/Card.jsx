export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}
