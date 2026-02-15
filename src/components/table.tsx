export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full">{children}</table>
    </div>
  );
}

export function THead({ children }: { children: React.ReactNode }) {
  return <thead>{children}</thead>;
}

export function TBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TR({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}

export function TH({ children }: { children: React.ReactNode }) {
  return <th>{children}</th>;
}

export function TD({ children }: { children: React.ReactNode }) {
  return <td>{children}</td>;
}
