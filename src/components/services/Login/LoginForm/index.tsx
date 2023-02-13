import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@components/atoms/TextField';

interface HookFormTypes {
  email: string;
  password: string;
  gender: string;
  name: string;
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<HookFormTypes>({
    defaultValues: {
      email: '',
      password: '',
      gender: '',
      name: '',
    },
    // mode: 'onChange',
  });

  const onSubmit = (data: HookFormTypes) => {
    console.log('data', data);
  };

  // console.log(watch());

  return (
    <>
      <p>Login</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="이메일"
          control={control}
          name="email"
          rules={{
            validate: {
              noNada: (value) =>
                !value.includes('nada') || 'nada is not allowed',
            },
          }}
        />
        <TextField
          type="password"
          label="비밀번호"
          control={control}
          name="password"
          rules={{
            required: true,
            minLength: {
              value: 8,
              message: '8글자 이상',
            },
          }}
        />
        <TextField
          label="이름"
          control={control}
          name="name"
          width="50%"
          rules={{
            required: true,
            minLength: {
              value: 3,
              message: '3글자 이상',
            },
          }}
        />

        <label htmlFor="gender">gender</label>
        <select {...register('gender')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        <input type="submit" value="login" />
      </form>
    </>
  );
}

export default LoginForm;
