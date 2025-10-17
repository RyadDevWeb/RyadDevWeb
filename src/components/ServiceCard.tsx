
type Props = {
  title: string;
  description: string;
  features?: string[];
};

export function ServiceCard({ title, description, features }: Props) {
  return (
    <div className="rounded-2xl border p-6 shadow-soft hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      {features && (
        <ul className="mt-4 space-y-1 text-sm text-gray-600 list-disc ml-5">
          {features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      )}
    </div>
  );
}
