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
    title: 'Data Analyst',
    duration: '03/2022 - 03/2023',
    details:
      'Researched and analyzed the Participants Federal Retirement Thrift Savings Plan using Salesforce to gather relevant data to inform the participants qualification status.Enforced equitable split from a grand total ranging from 10,000 to $2.1 million of the Savings Plan among entitled payees, promoting financial fairness and accuracy.'
  },
  {
    year: 2020,
    title: 'Program Manager',
    duration: '02/2020 - 06/2021',
    details:
      'Oversaw $1B Government Issued Material logistics, coordinating distribution to Afghan National Defense and Security Forces. Managed team of 18 Afghan Local National Employees by optimizing stock management, maintaining a secure environment, developing SOPs and enhancing efficiency across the team. Oversaw processing, compliance, and management of supplies, stock, materials, packages, and products'
  },
  {
    year: 2010,
    title: 'Automated Logistics Specialist',
    duration: '02/2010 - 02/2020',
    details:
      'Streamlined stock record and warehouse operations, maintaining accurate inventory records exceeding 1,000 lines quarterly.Directed and streamlined client operational support across multiple theaters of operation, including training initiatives for local national capacity development in SAP and other logistics support systems to improve Operational Readiness Postures.'
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
