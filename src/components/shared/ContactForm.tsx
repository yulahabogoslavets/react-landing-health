import { useState } from 'react'
import { Button } from '../shared/Button'

export const ContactForm = () => {
	const [values, setValues] = useState({ name: '', email: '', message: '' })
	const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
	const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({})

	const validate = () => {
		const newErrors: typeof errors = {}
		if (!values.name.trim()) newErrors.name = 'Name is required'
		if (!values.email.trim()) newErrors.email = 'Email is required'
		else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) newErrors.email = 'Invalid email address'
		if (!values.message.trim()) newErrors.message = 'Message is required'
		return newErrors
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setTouched({ ...touched, [e.target.name]: true })
		setErrors(validate())
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const validationErrors = validate()
		setErrors(validationErrors)
		setTouched({ name: true, email: true, message: true })
		if (Object.keys(validationErrors).length === 0) {
			alert('Message sent!')
			setValues({ name: '', email: '', message: '' })
			setTouched({})
			setErrors({})
		}
	}

	return (
		<form
			className="flex flex-col gap-6 justify-between bg-orange-100 p-8 rounded-3xl shadow-lg w-full flex-1"
			aria-label="Contact form"
			onSubmit={handleSubmit}
			noValidate
		>
			<div className="flex flex-col gap-6">
				<div className="relative z-0">
					<input
						type="text"
						id="name"
						name="name"
						autoComplete="name"
						placeholder=" "
						className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 focus:border-blue-600 border-gray-300 ${
							errors.name && touched.name ? 'border-red-500 focus:border-red-500' : ''
						}`}
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						required
						aria-invalid={!!errors.name}
						aria-describedby="name-error"
					/>
					<label
						htmlFor="name"
						className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Name
					</label>
					{errors.name && touched.name && (
						<span id="name-error" className="text-xs text-red-600 absolute left-0 -bottom-5">
							{errors.name}
						</span>
					)}
				</div>

				<div className="relative z-0">
					<input
						id="email"
						type="email"
						name="email"
						autoComplete="email"
						placeholder=" "
						className={`block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 focus:border-blue-600 border-gray-300 ${
							errors.email && touched.email ? 'border-red-500 focus:border-red-500' : ''
						}`}
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						required
						aria-invalid={!!errors.email}
						aria-describedby="email-error"
					/>
					<label
						htmlFor="email"
						className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email
					</label>
					{errors.email && touched.email && (
						<span id="email-error" className="text-xs text-red-600 absolute left-0 -bottom-5">
							{errors.email}
						</span>
					)}
				</div>

				<div className="relative z-0">
					<textarea
						id="message"
						name="message"
						placeholder=" "
						className={`block py-2.5 px-0 w-full text-sm text-black resize-none bg-transparent border-0 border-b-2 appearance-none peer focus:outline-none focus:ring-0 focus:border-blue-600 border-gray-300 ${
							errors.message && touched.message ? 'border-red-500 focus:border-red-500' : ''
						}`}
						value={values.message}
						onChange={handleChange}
						onBlur={handleBlur}
						required
						rows={4}
						aria-invalid={!!errors.message}
						aria-describedby="message-error"
					/>
					<label
						htmlFor="message"
						className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Message
					</label>
					{errors.message && touched.message && (
						<span id="message-error" className="text-xs text-red-600 absolute left-0 -bottom-5">
							{errors.message}
						</span>
					)}
				</div>
			</div>

			<Button type="submit" text="Send Message" className="mt-4" />
		</form>
	)
}
