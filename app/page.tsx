import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  const { data: todos, error } = await supabase
    .from("todos")
    .select();

  return (
    <main>
      <h1>AI Learning Portal</h1>

      {error ? (
        <p>Supabase connection works, but the todos table is not set up yet.</p>
      ) : (
        <ul>
          {todos?.map((todo: { id: string | number; name: string }) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}