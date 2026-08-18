import Link from "next/link";

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1>AI Learning Portal</h1>

      <p>
        An interactive AI learning portal for high school students.
      </p>

      <Link href="/login">
        <button
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Log in
        </button>
      </Link>
    </main>
  );
}