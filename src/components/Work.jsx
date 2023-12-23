import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2023,
    title: 'Software Engineer Fellowship',
    duration: '04/2023 - 08/2023',
    details:
      'Successfully completed full-stack software engineering immersive in an intensive, thirteen-weeks, 500+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, problem solving skills, and team collaboration strategies. Developed a portfolio of individual and group projects. Worked closely with experienced software engineers to gain hands-on experience with the latest development tools and technologies.'
  },
  {
    year: 2022,
    title: 'Data Processing Specialist',
    duration: '03/2022 - 03/2023',
    details:
      'Manually inputted participant data from the Federal Retirement Thrift Savings Plan into Salesforce, ensuring accuracy and completeness. Analyzed participant data to determine eligibility for retirement plan distributions. Enforced equitable splits of retirement plan assets up to $2.1 million, processing and validating financial data to promote financial fairness and accuracy.'
  },
  {
    year: 2020,
    title: 'Project Manager',
    duration: '02/2020 - 06/2021',
    details:
      'Spearheaded the logistics of a $1 billion government-issued material distribution project, ensuring timely and accurate delivery to the Afghan National Defense and Security Forces, exceeding expectations by 15%. Led a team of 18 Afghan Local National Employees, implementing stock management optimization strategies and developing SOPs, resulting in a 20% increase in efficiency.'
  },
  {
    year: 2010,
    title: 'Enterprise Resource Planning Specialist',
    duration: '02/2010 - 02/2020',
    details:
      'Leveraged automation tools and data analysis techniques to optimize inventory management, consistently exceeding quarterly accuracy targets for 1,000+ lines. Utilized data driven insights to streamline client operational support and improve supply chain efficiency, contributing to cost reductions and performance improvements.'
  }
]
const Work = () => {
  return (
    <div id="work" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text=4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}
export default Work

