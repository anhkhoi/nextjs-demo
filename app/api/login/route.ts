import z from 'zod';

const userCredential = {
  username: 'khoi',
  password: 'abcd',
};

const LoginFormSchema = z.object({
  username: z.string().min(3, 'Username is invalid.').trim(),
  password: z.string().min(3, 'Password is invalid.').trim(),
});

export const POST = async (request: Request) => {
  const data = { success: true };
  const requestData = await request.formData();
  const validated = LoginFormSchema.safeParse(requestData);
  if (validated.success) {
    return Response.json({
      success: false,
      message: 'Input parameters are invalid.',
    });
  }
  const username = requestData.get('username');
  const password = requestData.get('password');
  if (
    userCredential.username === username &&
    userCredential.password === password
  ) {
    return Response.json({ success: true, message: 'Logged in successfully.' });
  }
  return Response.json({
    success: false,
    message: 'Login credential is invalid.',
  });
};
