import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Head } from '@/components/Head'
import { Logo } from '@/components/Logo'

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Admin() {
  return (
    <>
      <Head title="Вход" />
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Войдите в свой аккаунт
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Еще нет аккаунта?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </div>
        <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
          <TextField
            label="Адресс почты"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Пароль"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
          <div>
            <Button
              href='/dashboard'
              type="button"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Войти <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
