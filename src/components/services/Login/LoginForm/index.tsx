import React from 'react';
import { useForm } from 'react-hook-form';

interface HookFormTypes {
  email: string;
  password: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<HookFormTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  console.log(watch());

  return (
    <>
      <p>Login</p>
      <form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
      >
        <label htmlFor="email">email</label>
        <input
          type="text"
          placeholder="email"
          {...register('email', {
            validate: {
              noNada: (value) =>
                !value.includes('nada') || 'nada is not allowed',
            },
          })}
          defaultValue="test"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          {...register('password', {
            required: true,
            minLength: {
              value: 8,
              message: '8글자 이상',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" value="login" />
      </form>
    </>
  );
}

export default LoginForm;
