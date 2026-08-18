"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={6}
    >
      <Box width="100%" maxW="420px">
        <Stack gap={6}>
          <Box textAlign="center">
            <Heading size="xl">Welcome back</Heading>
            <Text mt={2} color="fg.muted">
              Log in to your AI Learning Portal account.
            </Text>
          </Box>

          <Box
            borderWidth="1px"
            borderRadius="xl"
            p={8}
            shadow="sm"
          >
            <form onSubmit={handleLogin}>
              <Stack gap={5}>
                <Field.Root required>
                  <Field.Label>Email</Field.Label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Password</Field.Label>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Field.Root>

                {error && (
                  <Text color="red.500" fontSize="sm">
                    {error}
                  </Text>
                )}

                <Button
                  type="submit"
                  colorPalette="blue"
                  width="100%"
                  loading={loading}
                >
                  Log in
                </Button>
              </Stack>
            </form>
          </Box>

          <Text textAlign="center" fontSize="sm" color="fg.muted">
            Don't have an account? Sign up coming next.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}