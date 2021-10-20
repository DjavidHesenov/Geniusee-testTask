import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const isNotEmpty = value => value.trim() !== '' 
  const isEmail = value => value.includes('@')
  const isPasw = value => value.trim().length > 5

  const { value: firstNameValue, isValid: firstNameIsValid, valueChangeHandler: firstNameChangeHandler, inputBlurHandler: firstNameBlurHandler, reset: resetFirstName, hasError: firstNameHasError } = useInput(isNotEmpty)
  const { value: lastNameValue, isValid: lastNameIsValid, valueChangeHandler: lastNameChangeHandler, inputBlurHandler: lastNameBlurHandler, reset: resetLastName, hasError: lastNameHasError } = useInput(isNotEmpty)
  const { value: emailValue, isValid: emailIsValid, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler, reset: resetEmail, hasError: emailHasError } = useInput(isEmail)
  const { value: passwordValue, isValid: passwordIsValid, valueChangeHandler: passwordChangeHandler, inputBlurHandler: passwordBlurHandler, reset: resetPassword, hasError: passwordHasError } = useInput(isPasw)

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'
  const passwordClasses = passwordHasError ? 'form-control invalid' : 'form-control'

  let formIsValid = false

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!formIsValid) {
      return
    }

    console.log(firstNameValue, lastNameValue, emailValue, passwordValue)

    resetFirstName()
    resetLastName()
    resetEmail()
    resetPassword()
  }

  return (
    <form onSubmit={submitHandler} >
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameHasError && <p className="error-text" >Provide First name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className="error-text" >Provide Last name</p>}
        </div>
      </div>
      <div className='control-group'>

        <div className={emailClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
          {emailHasError && <p className="error-text" >Provide correct email</p>}
        </div>
        <div className={passwordClasses}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={passwordValue} onChange={passwordChangeHandler} onBlur={passwordBlurHandler} />
          {passwordHasError && <p className="error-text" >Provide correct password</p>}
        </div>
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
