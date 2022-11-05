import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { Head } from '@/components/Head'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head title="Регистрация" />
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Корпоративная почта бесплатно
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Уже зарегистрированы?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Войдите
              </Link>{' '}
              в свой аккаунт
            </p>
          </div>
        </div>
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="Имя"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Фамилия"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Адресс почты"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Пароль"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Зарегистрироваться <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
