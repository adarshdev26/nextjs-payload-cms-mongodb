'use client'

import React, { useEffect, useState } from 'react'

const QuoteModal = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState<any>(null)
  const [values, setValues] = useState<any>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    fetch('/api/forms/6874eb65c928de672e5e764c?depth=2&draft=false&locale=undefined') // Your form slug
      .then((res) => res.json())
      .then((data) => {
        setForm(data)
        const initialValues: any = {}
        data.fields.forEach((field: any) => {
          initialValues[field.name] = ''
        })
        setValues(initialValues)
      })
  }, [])

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetch('/api/form-submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form: form.id, submissionData: values }),
    })
    setSubmitted(true)
  }

  if (!form) return <div>Loading...</div>

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Get a Quote</h2>
          <button onClick={onClose} className="text-gray-600">
            ×
          </button>
        </div>

        {submitted ? (
          <p className="text-green-600">Thank you Well get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {form.fields.map((field: any) => (
              <div key={field.name}>
                <label className="block mb-1">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    required={field.required}
                    className="w-full border px-3 py-2 rounded"
                    value={values[field.name]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    type={field.type === 'email' ? 'email' : 'text'}
                    name={field.name}
                    required={field.required}
                    className="w-full border px-3 py-2 rounded"
                    value={values[field.name]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default QuoteModal
