type ErorrProps = {
  error: string;
};

export function Error({ error }: ErorrProps) {
  return (
    <div className="results">
      <p>{error}</p>
    </div>
  );
}
