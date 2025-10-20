import tokens from "@/styles/design-tokens.json";

export default function TokensPage() {
  return (
    <pre className="mx-auto max-w-3xl px-6 py-8 text-xs">
      {JSON.stringify(tokens, null, 2)}
    </pre>
  );
}
