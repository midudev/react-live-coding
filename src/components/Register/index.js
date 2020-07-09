import React, {useState} from "react";
import registerService from "services/register";
import { useForm, ErrorMessage } from 'react-hook-form'

export default function Register() {
  const {handleSubmit, register, errors} = useForm()

  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = values => {
    setIsSubmitting(true)
    registerService(values)
      .then(() => {
        setRegistered(true)
        setIsSubmitting(false)
      })
  }

  if (registered) {
    return <h4>
      Congratulations ✅! You've been successfully registered!
    </h4>
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors.username ? 'error' : ''}
          name="username"
          placeholder="Put here the username"
          ref={register({ required: 'This is required' })}
        />
        <ErrorMessage errors={errors} name='username' as="small"/>

        <input
          className={errors.password ? 'error' : ''}
          name="password"
          placeholder="Put here the password"
          ref={register({ required: 'This is required' })}
          type='password'
        />
        <ErrorMessage errors={errors} name='password' as="small" />

        <button className="btn" disabled={isSubmitting}>
          Registrarse
        </button>
      </form>
    </>
  );
}