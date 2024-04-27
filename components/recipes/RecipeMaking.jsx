import React from "react";

export default function RecipeMaking({ recipeSteps }) {
  return (
    <section>
      <div className="container py-12">
        <h3 className="font-semibold text-xl py-6">How to Make it</h3>
        <div>
          {recipeSteps?.map((step, i) => (
            <div className="step" key={i}>
              <h3>Step {i + 1}</h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
