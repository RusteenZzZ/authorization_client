import React, { FC, useContext, useState } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const {store} = useContext(Context)

  return (
    <div>
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        type='text'
        placeholder='Type email...'
      />
      <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type='password'
        placeholder='Type password...'
      />
      <button onClick={async () => await store.login(email, password)}>Login</button>
      <button onClick={async () => await store.register(email, password)}>Register</button>
    </div>
  )
}

export default observer(LoginForm)