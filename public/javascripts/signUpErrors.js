
window.addEventListener("load", (event)=>{

  const testBackendValidatorsBtn = document.querySelector('.test-backend-button')
  testBackendValidatorsBtn.addEventListener('click', () => {

    const signUpInput = document.querySelector('input[name="username"]')
    const emailInput = document.querySelector('input[name="email"]')
    const passwordInput = document.querySelector('input[name="password"]')
    const confirmedPasswordInput = document.querySelector('input[name="confirmedPassword"]')

    const inputArr = [signUpInput,emailInput,passwordInput,confirmedPasswordInput]
    inputArr.forEach(inputEle => {
      inputEle.removeAttribute('required')
    })

  })
})