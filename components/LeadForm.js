'use client'
import { useState } from 'react'

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '',
    interest: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily:'Manrope,sans-serif'}}>
          Request Received!
        </h3>
        <p className="text-gray-500 text-sm">
          Our team will reach out to you within 24 hours to schedule a demo.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-1" style={{fontFamily:'Manrope,sans-serif'}}>
        Talk to our Enterprise Team
      </h3>
      <p className="text-gray-500 text-sm mb-6">Get a personalized demo for your organization</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Work Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="john@company.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name *</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            placeholder="Your Company"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Team Size *</label>
            <select
              name="teamSize"
              value={form.teamSize}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="">Select</option>
              <option value="1-50">1–50</option>
              <option value="51-200">51–200</option>
              <option value="201-500">201–500</option>
              <option value="500+">500+</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Area of Interest *</label>
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="">Select a program</option>
            <option value="ai-ml">AI & Machine Learning</option>
            <option value="data-science">Data Science & Analytics</option>
            <option value="product">Product Management</option>
            <option value="leadership">Leadership Development</option>
            <option value="custom">Custom Program</option>
          </select>
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3 rounded-full text-sm transition-colors shadow-lg shadow-blue-500/20"
        >
          {status === 'loading' ? 'Submitting...' : 'Request a Free Demo →'}
        </button>

        <p className="text-center text-xs text-gray-400">
          No commitment required. Our team will reach out within 24 hours.
        </p>
      </form>
    </div>
  )
}
