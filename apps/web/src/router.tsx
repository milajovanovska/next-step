import { createBrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PlaceholderPage from './pages/PlaceholderPage'
import NotFoundPage from './pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },

      {
        path: '/assessment/chat',
        element: (
          <PlaceholderPage
            title="Разговор со NEXTSTEP"
            description="Овде ќе стои разговорот со асистентот."
            phase="Фаза 4"
          />
        ),
      },
      {
        path: '/assessment/classic',
        element: (
          <PlaceholderPage
            title="Класичен прашалник"
            description="Овде ќе стои прашалникот со прашања и понудени одговори."
            phase="Фаза 3"
          />
        ),
      },
      {
        path: '/careers',
        element: (
          <PlaceholderPage
            title="Кариери"
            description="Истражувај кариери: што вклучуваат, кои вештини ти се потребни и што можеш да студираш."
            phase="Фаза 7"
          />
        ),
      },
      {
        path: '/study',
        element: (
          <PlaceholderPage
            title="Студирање"
            description="Универзитети и програми дома и во странство."
            phase="Фаза 8"
          />
        ),
      },
      {
        path: '/scholarships',
        element: (
          <PlaceholderPage
            title="Стипендии"
            description="Стипендии што можеби се релевантни за тебе, со линкови до официјални извори."
            phase="Фаза 9"
          />
        ),
      },
      {
        path: '/compare',
        element: (
          <PlaceholderPage
            title="Спореди"
            description="Спореди до три универзитети или програми според проверени податоци."
            phase="Фаза 8"
          />
        ),
      },
      {
        path: '/my-future',
        element: (
          <PlaceholderPage
            title="Мојата иднина"
            description="Твојот профил, зачуваните опции, рокови и напредок на апликацијата."
            phase="Фаза 13"
          />
        ),
      },

      // "Фаќа" сè друго што не е дефинирано погоре
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])