'use client'

const plans = [
  {
    name: 'Starter',
    price: '$4.99',
    description: 'Perfect for hobbyists',
    features: [
      '30 generations/month',
      '5 styles',
      'Standard resolution',
      'Web access only',
    ],
  },
  {
    name: 'Pro',
    price: '$14.99',
    description: 'For indie developers',
    features: [
      '200 generations/month',
      '20 styles',
      'High resolution',
      'Commercial license',
      'Batch generation',
    ],
    highlighted: true,
  },
  {
    name: 'Studio',
    price: '$49.99',
    description: 'For small studios',
    features: [
      'Unlimited generations',
      'All styles',
      'Premium resolution',
      'API access',
      'Team collaboration',
      'Priority support',
    ],
  },
]

export default function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`p-8 rounded-lg border ${
            plan.highlighted
              ? 'border-blue-500 bg-blue-50 bg-opacity-5'
              : 'border-gray-700'
          }`}
        >
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-gray-400 mb-4">{plan.description}</p>
          <p className="text-4xl font-bold mb-6">{plan.price}</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-6">
            Get Started
          </button>
          <ul className="space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="text-gray-300 flex items-center">
                <span className="mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
