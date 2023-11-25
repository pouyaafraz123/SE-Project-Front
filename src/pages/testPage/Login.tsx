import { useSearchParams, useNavigate } from 'react-router-dom'

import { useUserStore } from '@stores'

// export function Component() {
//   const login = useUserStore((state) => state.login)
//   const [params, _] = useSearchParams()
//   const navigate = useNavigate()

//   const from = params.get('from') || '/'

//   function loginAction() {
//     login()
//     navigate(from)
//   }
//   return (
//     <div>
//       <form noValidate>
//         <span>Login</span>

//         <input
//           type='text'
//           name='username'
//           placeholder='Enter username'
//           id='username'
//         />

//         <input type='password' name='password' placeholder='Enter password' />

//         <button type='submit'>Login</button>
//       </form>
//       <button onClick={loginAction}>Login</button>
//     </div>
//   )
// }

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

export function Component() {
  const login = useUserStore((state) => state.login)
  const [params, _] = useSearchParams()
  const navigate = useNavigate()

  const from = params.get('from') || '/'

  async function handleSubmit(values: {
    user_name: string
    password: string
    type: string
  }) {
    axios
      .post('https://dev-api.robov.ir/api/login', values)
      .then((response) => {
        login(response.data.data.token)
        navigate(from)
      })
      .catch((error) => {
        console.log(error)
        alert(error)
      })
  }

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ user_name: '', password: '', type: 'email' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <label>
                Email: <Field type='user_name' name='user_name' />
                <ErrorMessage name='user_name' component='div' />
              </label>
              <label>
                Password:
                <Field type='password' name='password' />
                <ErrorMessage name='password' component='div' />
              </label>
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
