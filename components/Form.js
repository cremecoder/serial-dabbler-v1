import { useForm } from "react-hook-form"
import axios from "axios"
import styled from "styled-components"
import { useTheme } from "styled-components"

import { DabbleButton } from "../styles/CallToAction.S/Buttons.styled"
import { StyledForm } from "../styles/Slide.S/SlideGrid.styled"

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`

const Error = styled.span`
  margin-top: 0.5em;
  color: white;
`

const Form = () => {
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmitForm = async values => {
    let config = {
      method: "post",
      url: "http://localhost:3000/api/contact",
      headers: {
        "Content-Type": "application/json"
      },
      data: values
    }

    try {
      const res = await axios(config)
      console.log(res)
      if (res.status === 200) {
        console.log("Success")
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmitForm)}
      clrPrimary={theme.colors.black}
      clrSecondary={theme.colors.white}
    >
      <StyledField>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name", {
            required: true,
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters long"
            },
            maxLength: {
              value: 30,
              message: "Name cannot exceed 30 characters"
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "No numbers or special characters"
            }
          })}
          autoComplete="off"
          id="formName"
        />
        {errors.name && <Error>{errors.name.message}</Error>}
      </StyledField>
      <StyledField>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            minLength: {
              value: 6,
              message: "Email address must be at least 6 characters long"
            },
            maxLength: {
              value: 60,
              message: "Email address must not exceed 60 characters"
            }
          })}
          autoComplete="off"
          id="formEmail"
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </StyledField>
      <StyledField>
        <label htmlFor="message">Message</label>
        <textarea
          {...register("message", {
            required: true,
            minLength: {
              value: 20,
              message: "Message must be at least 20 characters long"
            },
            maxLength: {
              value: 1000,
              message: "Message must not exceed 1000 characters"
            }
          })}
          autoComplete="off"
          id="formMessage"
          rows="5"
        ></textarea>
        {errors.message && <Error>{errors.message.message}</Error>}
      </StyledField>
      <StyledField>
        <DabbleButton
          clrPrimary={theme.colors.white}
          clrSecondary={theme.colors.black}
          width={"40%"}
        >
          SUBMIT
        </DabbleButton>
      </StyledField>
    </StyledForm>
  )
}

export default Form
