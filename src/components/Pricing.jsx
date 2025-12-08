import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "599",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "1949",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "9999",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Our</span>{" "}
            <span className="text-blue-400">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg mt-3">
            Transparent & affordable for individuals and teams.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-10 bg-slate-900/40 border border-slate-800/70 backdrop-blur-md 
                hover:border-blue-500/50 transition-all duration-300 shadow-xl 
                ${plan.mostPopular ? "scale-[1.03] border-blue-500/40 shadow-blue-500/20" : ""}
              `}
            >

              {/* Badge */}
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 rounded-full text-xs font-semibold 
                    bg-blue-600 text-white shadow-lg flex items-center space-x-1"
                  >
                    <Star className="w-3 h-3 fill-white" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{plan.description}</p>

              {/* Price */}
              <div className="mt-6 mb-8 flex justify-center">
                <div className="rounded-full w-36 h-36 border border-blue-500/30 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-blue-400">
                    ₹{plan.price}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-10 w-full py-3 rounded-xl font-semibold text-sm transition 
                  ${plan.mostPopular
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-slate-800 text-gray-200 hover:bg-slate-700"} 
                `}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400">
            Need custom pricing?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Contact sales
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
