import Link from "next/link";
import Cta from "./components/Cta";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;

  return (
    <>
      <section className="section pb-10">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                className={`border rounded-lg p-6 h-full flex flex-col justify-between ${
                  plan.recommended ? "bg-primary" : "bg-white"
                }`}
                key={plan.title + index}
              >
                <div>
                  <h4 className={`text-center text-xl font-medium text-${
                    plan.recommended ? "white" : "gray-800"
                  }`}>{plan.title}</h4>
                 

                  <div className="mt-6 flex flex-col items-center">
                    <span className={`text-4xl font-bold text-${
                      plan.recommended ? "white" : "gray-800"
                    }`}>{plan.price}</span>
                     <p 
                  className={`mt-4 text-center text-${
                    plan.recommended ? "white" : "gray-800"
                  }`}
                   >
                   {
                    plan.notice
                   }

                  </p>
                    <span className={`text-xl text-${
                      plan.recommended ? "white" : "gray-800"
                    }`}>/ {plan.type}</span>
                  </div>
                  <h5 className={`mt-6 text-center font-normal text-${
                    plan.recommended ? "white" : "gray-800"
                  }`}>{plan.subtitle}</h5>
                  <ul className={`mt-8 text-${
                    plan.recommended ? "white" : "gray-800"
                  }`}>
                    {plan.features.map((feature, index) => (
                      <li
                        className="mb-3 leading-6 text-center"
                        key={index}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href={plan.button.link}
                    rel={plan.button.rel}
                    className={`btn mx-auto w-full text-center ${
                      plan.recommended
                        ? "btn-outline-white text-white"
                        : "btn-primary"
                    }`}
                  >
                    {plan.button.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
