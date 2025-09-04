import { createFileRoute, Navigate } from '@tanstack/react-router'
import { useLocale } from 'react-intlayer'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { locale } = useLocale()
  return <Navigate replace to={locale} />
}
