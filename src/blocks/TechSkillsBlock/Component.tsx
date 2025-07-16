'use client'
import React, { useState } from 'react'

type Skill = {
  logo: { url: string; alt?: string }
  name: string
  details: string
}

type TechSkillsBlockProps = {
  heading: string
  description: string
  skills: Skill[]
}

export const TechSkillsBlock: React.FC<TechSkillsBlockProps> = ({
  heading,
  description,
  skills,
}) => {
  const [activeSkill, setActiveSkill] = useState(0)

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">{description}</p>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => setActiveSkill(index)}
            className={`cursor-pointer p-4 rounded-xl border ${
              index === activeSkill ? 'bg-blue-100 shadow-md' : 'hover:bg-gray-100'
            }`}
          >
            <img
              src={skill.logo.url}
              alt={skill.logo.alt || skill.name}
              className="h-12 w-12 mx-auto"
            />
          </div>
        ))}
      </div>

      {skills[activeSkill]?.details && (
        <div className="bg-blue-50 p-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">{skills[activeSkill].name}</h3>
          <p className="text-gray-700">{skills[activeSkill].details}</p>
        </div>
      )}
    </section>
  )
}
