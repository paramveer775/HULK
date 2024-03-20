import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const backgroundImageUrl =
    ''

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleLogin = async (e: any) => {
    console.log(JSON.stringify(formData))
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        console.log('Login successful')
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
  return (
<>

</>
    
 
  )
}
